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
            <div class="drag" draggable="true">글자</div>
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
            <input type="text" v-model="selectInputs" placeholder="ex) 딸기,바나나,키위">
            <p>추가할 요소들은<br>
            쉼표로 구분합니다.</p>
            <div class="drag" draggable="true">
                <select>
                    <option>선택해주세요.</option>
                    <option v-for="select in selects" :key="select">{{select}}</option>
                </select>
            </div>
        </li>
        <li class="check"> 
            <h4>체크 박스 추가</h4>
            <div class="drag" draggable="true">
                <input class="checkbox" type="checkbox" checked>
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
        <li>휴지통</li>
      </ul>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            selectInputs:"",
            option: {
				penColor:"rgb(0, 0, 0)",
                backgroundColor:"rgb(233, 233, 233)",
            },
        }
    },
    computed: {
        selects: function () {
            return this.selectInputs.split(",")
        }
    },
    methods: {
        /* 확대, 축소 */
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
        /* 전자서명 */
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
    border-right : 0px;
    position : relative;
    justify-content: center;
    align-items: center;
}

.tools ul .check:after {
    content : "";
    width : 40px;
    height : 40px;
}

.tools ul .check .drag {
    border : 8px solid rgb(131, 131, 131);
    position : absolute;
    right : 0;
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

/* 셀렉트 박스 */

.tools ul .select {
    flex-direction: column;
    border : 1px solid #555;
    padding : 0.5rem;
    box-sizing: border-box;
}

.tools ul .select .drag {
    box-sizing : border-box;
    border : 10px solid rgb(131, 131, 131);
}

.tools ul .select .drag select {
    margin : 5%;
    width : auto;
    max-width : 90%;
    border : 2px solid #555;
}

.tools ul .select input {
    display : block;
    width : auto;
    margin: 3% 0;
    height : 1.5rem;
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
    border : 1rem solid rgb(143, 143, 143);
    box-sizing : border-box;
}

.tools ul .sign .drag .board {
    cursor : pointer;
}

</style>