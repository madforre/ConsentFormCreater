<template>
    <div class="tools">
      <ul>
        <li><h1>Tools</h1></li>
        <li>
            <button v-on:click="zoomIn">　+　</button>
            <button v-on:click="zoomOut">　-　</button>
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
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </li>
        <li class="select">
            <p>
                셀렉트 박스 (쉼표로 구분)
                인풋 박스 양방향 바인딩 후 delimiter , 로 나누어서 배열로 변환
            </p>
            <div class="drag">
                <select name="" id="">
                    <option value="바나나">바나나</option>
                    <option value="사과">사과</option>
                    <option value="파인애플">파인애플</option>
                </select>
            </div>
            <input type="text">
        </li>
        {{select}}
        <li class="check"> 
            <h4>체크 박스 추가</h4>
            <input class="check" type="checkbox" name="vehicle" value="Car" checked>
        </li>
        <li>전자서명 추가</li>
        <li>휴지통</li>
      </ul>
    </div>
</template>
<script>
export default {
    // props: ['select'],
    methods: {
        zoomIn: function (e) {
            let zoom = document.querySelector(".creater .document");
            zoom.style.width = "1190px";
            zoom.style.height = "1684px";
        },
        zoomOut: function (e) {
            let zoom = document.querySelector(".creater .document");
            zoom.style.width = "595px";
            zoom.style.height = "842px";
        }
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
    padding : 0.5rem;
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

/* 선택 박스 */

.tools .select {
    flex-direction: column;
    border : 1px solid #555;
    padding : 0.5rem;
}

.tools .select .drag select {
    width : auto;
}

.tools .select .drag input {
    width : auto;
}

</style>