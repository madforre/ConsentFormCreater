<template>
    <div class="tools">
      <ul>
        <li>
            <h2>Tools</h2>
        </li>
        <hr>
        <li>
            <p>원하는 문서의 위치에 HTML 　요소를 Drag & Drop 합니다.<br>
            전자 서명을 제외한 모든 요소는 표 안에 삽입 합니다.
            </p>
        </li>
        <hr>
        <li class="check">
            <h4>체크 박스 추가</h4>
            <div class="drag" draggable="true">
                <input class="checkbox" type="checkbox" checked>
            </div>
        </li>
        <li class="input">
            <p>인풋 박스 생성</p>
            <div class="drag" draggable="true">
                <input type="text">
            </div>
        </li>
        <li class="select">
            <p>
                셀렉트 박스 생성
            </p>
            <input v-for="n in select.count" :key="n" class="selectValue" type="text" @keyup="setSelects" v-show="select.shows[n-1]" v-model="select.inputs[n-1]" placeholder="ex) 딸기,바나나,키위">
            <p>추가할 요소들은<br>
            쉼표로 구분합니다.</p>
            <div :class=" 'drag select '+(n-1)" draggable="true" v-for="n in select.count" :key="`D-${n}`">
                <select>
                    <option>선택해주세요.</option>
                    <option v-for="index in select.outputs[n-1]" :key="index">{{index}}</option>
                </select>
            </div>
        </li>
        <li class="sign">
            <p>전자서명란 (1회)</p>
            <div class="drag" draggable="true">
                <vueSignature class="board" ref="signature" :sigOption="option" :w="'100%'" :h="'100%'"></vueSignature>
            </div>
        </li>
        <button @click="clear">Clear</button>
		<button @click="undo">Undo</button>
      </ul>
    </div>
</template>
<script>

import { eventBus } from '../main.js'

export default {
    data: function() {
        return {
        }
    },
    props: ["option", "select"],
    methods: {
        /* 전자서명 관련 메소드 */
        clear() {
			var _this = this;
			_this.$refs.signature.clear();
		},
		undo() {
			var _this = this;
			_this.$refs.signature.undo();
        },
        setSelects : function (event) {

            let eventArr = event.target.value.split(",");

            // console.log(eventArr);
            
            this.$emit('setSelects', eventArr)

        },
    },
    created() {        
    this.$nextTick(function() {
      const signInit = document.querySelector(".tools .sign .board");
      signInit.style.height = "143px";
    })

    // 이벤트 버스를 이용한 이벤트 발행
    eventBus.$emit('clear', this.clear);
    eventBus.$emit('undo', this.undo);
    },
}
</script>
<style>

.tools {
    min-width : 250px;
    overflow : auto;
    height : 50rem;
    padding : 1rem;
    /* background: rgba(7, 102, 255, 0.294); */
    /* border : 1px solid rgb(80, 112, 255); */
}

.tools>ul {
    min-width : 250px;
}

.tools>ul>li {
    margin : 1rem;
    display : flex;
}

/* 체크 박스 */

.tools ul .check {
    border-right : 0px;
    position : relative;
    justify-content: center;
    align-items: center;
    padding : 0.5rem;
    border : 2px solid rgb(80, 150, 255);
    color : rgb(80, 150, 255);
}

.tools ul .check:after {
    content : "";
    width : 40px;
    height : 40px;
}

.tools ul .check .drag {
    background: #fff;
    border : 5px solid rgb(80, 150, 255);
    position : absolute;
    right : 4px;
}

.tools ul .check .drag input[type="checkbox"] {
    display : block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    border : 1px solid black;
    position : relative;
    cursor: pointer;
}

.tools ul .check .drag input[type="checkbox"] {
    width : 40px;
    height : 40px;
}

.tools ul .check .drag input[type="checkbox"]:checked:after {
    border : 0px;
    position : relative;
    font-size : 2em;
    font-weight: bold;
    top: 0%;
    left : 20%;
    content: '✔';
}

/* 인풋 박스 */

.tools ul .input {
    flex-direction: column;
    border : 2px solid rgb(80, 150, 255);
    padding : 5%;
    color : rgb(80, 150, 255);
}

.tools ul .input .drag {
    margin-top : 6%;
    padding : 4%;
    
}

.tools ul .input .drag input {
    box-sizing: border-box;
    width : 100%;
}


/* 셀렉트 박스 */

.tools ul .select {
    flex-direction: column;
    color : rgb(80, 150, 255);
    border : 3px solid rgb(80, 150, 255);
    padding : 0.5rem;
    box-sizing: border-box;
}

.tools ul .select .drag {
    margin : 0.5rem;
    padding : 0.7rem;
    box-sizing : border-box;
    border : 3px solid rgb(80, 150, 255);
}

.tools ul .select .drag select {
    width : auto;
    max-width : 90%;
}

.tools ul .select input {
    display : block;
    width : auto;
    margin: 3% 0;
    height : 1.5rem;
    text-indent: 0.5rem;
    border : 1px dotted;
}

.tools ul .select p:nth-child(4) {
    font-size : 13px;
}

/* 전자 서명 */

.tools ul .sign {
    position : relative;
    flex-direction: column;
}

.tools ul .sign .drag {
    border : 5px solid rgb(124, 124, 124);
    box-sizing : border-box;
}

.tools ul .sign .drag .board {
    cursor : pointer;
}

</style>