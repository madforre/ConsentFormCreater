<template>
    <div class="tools">
      <ul>
        <li><h1>Tools</h1></li>
        <li>
            <button v-on:click="zoomIn">　+　.</button>
            <button v-on:click="zoomOut">　-　.</button>
        </li>
        <li class="words">
            <p>글자 넣기</p>
            <div class="size"></div>
            <div class="weight"></div>
            <div class="drag"></div>
        </li>
        <li class="table_set">
            <p>표</p>
            <div class="value">
              행　<input maxlength="1" type="text">
              열　<input maxlength="1" type="text">
            </div>
            <div class="drag_table">
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
        </li>
        <li class="select">
            <p>
                셀렉트 박스 생성
            </p>
            <div class="drag">
                <select>
                    <option>선택해주세요.</option>
                    <option value="선택해주세요." v-for="select in selects" :key="select">{{select}}</option>
                </select>
            </div>
            <input type="text" v-model="selectInputs" placeholder="ex) 딸기,바나나,키위">
            추가할 요소들은<br>
            쉼표로 구분합니다.
        </li>
        <li class="check"> 
            <h4>체크 박스 추가</h4>
            <div class="drag">
                <input class="check" type="checkbox" checked>
            </div>
        </li>
        <li class="sign">전자서명란 추가
            <div class="drag">
                <vueSignature ref="signature" :sigOption="option" :w="'100%'" :h="'100%'"></vueSignature>
		        <button @click="clear">Clear</button>
		        <button @click="undo">Undo</button>
            </div>
        </li>
        <li>휴지통</li>
      </ul>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            selectInputs:"",
            option:{
				penColor:"rgb(0, 0, 0)",
				backgroundColor:"rgb(212, 212, 212)"
            }
        }
    },
    computed: {
        selects: function () {
            return this.selectInputs.split(",")
        }
    },
    methods: {
        throwElement() {
            let draggable = document.querySelectorAll('.drag')
        },
        // 확대, 축소
        zoomIn: function (e) {
            let zoom = document.querySelector(".creater .document");
            zoom.style.width = "1190px";
            zoom.style.height = "1684px";
        },
        zoomOut: function (e) {
            let zoom = document.querySelector(".creater .document");
            zoom.style.width = "595px";
            zoom.style.height = "842px";
        },
        // 전자서명
        clear(){
			var _this = this;
			_this.$refs.signature.clear();
		},
		undo(){
			var _this = this;
			_this.$refs.signature.undo();
		},
    }
}
</script>
<style>

.tools {
    min-width : 200px;
}

.tools ul {
    min-width : 153px;
}

.tools ul li {
    margin : 1rem;
    display : flex;
}

/* 글자 */

.tools ul .words {
    border : 1px solid #555;
}

/* 표 */

.tools ul .set input {
    display : block;
    width : 20px;
}

.tools ul .table_set{
    flex-direction: column;
    border : 1px solid #555;
    padding : 0.2rem;
    box-sizing: border-box;
}

.tools ul .table_set input{
    width : 18px;
    text-align: center;
}

/* 체크 박스 */

.tools ul .check {
    border : 1px solid #555;
    position : relative;
    justify-content: center;
    align-items: center;
    right:0;
    top:0;
}

.tools ul .check:after {
    content :"";
    width : 40px;
    height : 40px;
}

.tools ul .check input[type="checkbox"] {
    display : block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width : 40px;
    height : 40px;
    box-sizing: border-box;
    border : 1px solid black;
    position : absolute;
    cursor: pointer;
    right : 0;
}

.tools ul .check input[type="checkbox"] {
    width : 40px;
    height : 40px;
}

.tools ul .check input[type="checkbox"]:checked:after {
    border : 0px;
    position : relative;
    font-size : 2em;
    font-weight: bold;
    top: 0%;
    left : 20%;
    content: '✔';
}

/* 셀렉트 박스 */

.tools ul .select {
    flex-direction: column;
    border : 1px solid #555;
    padding : 0.5rem;
    box-sizing: border-box;
}

.tools ul .select .drag select {
    margin : 5%;
    width : auto;
    max-width : 90%;
    border : 2px solid #555;
}

.tools ul .select .drag input {
    display : block;
    width : auto;
}

/* sign 추가 */

.tools ul .sign {
    flex-direction: column;
}

.tools ul .sign .drag {
    border : 1rem solid rgb(143, 143, 143);
    box-sizing : border-box;
}

</style>