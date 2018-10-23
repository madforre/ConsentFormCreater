<template>
  <div id="app">
    <div class="header">
      <ul class="gnb">
        <li><h1>Form CMS</h1></li>
        <li><p>{{msg}}　<font-awesome-icon icon="marker"/> </p></li>
      </ul>
    </div>
    <div class="middle">
      <div class="left">
        <Tools v-bind:option="option" :tableCount="tableCount" :selectCount="selectCount" :row="row" :column="column" v-bind:propsBools="tableDropBools" :selectDropBools="selectDropBools" :selectInputs="selectInputs" v-on:cutInput="cut" draggable="false"></Tools>
      </div>
      <div class="right">
        <div class="section one">
          <Document v-bind:option="option" :tableCount="tableCount" :selectCount="selectCount" :row="row" :column="column" v-bind:propsBools="tableDropBools" :selectDropBools="selectDropBools" :selectInputs="selectInputs"></Document>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Document from './components/Document.vue'
import Tools from './components/Tools.vue'

/* 데이터를 표현하거나 데이터 조작에 대해 요청하는 루트 컴포넌트 */

export default {
    data : function () {
        return {
            table : {
                
            },
            row : [1],
            column : [1],
            tableCount : 1,
            tableDropBools : [true],
            selectCount : 1,
            selectDropBools : [true],
            selectInputs : [""],
            selectOutputs : [],
            msg: '원하는 재료를 선택 / 동의서를 구성',
            option: {
                penColor:"rgb(0, 0, 0)",
                backgroundColor:"rgb(233, 233, 233)",
            },
        }
    },
    components: {
        'Tools' : Tools,
        'Document' : Document,
    },
    methods : {
        cut : function(toolsRow, toolsCol) {
            this.row[this.tableCount-1] = toolsRow;
            this.column[this.tableCount-1] = toolsCol;
            console.log("cut");
        }
    },
    mounted() {
  
        /* HTML5 Drag & Drop API 사용 */
        
        let dragged;
        let draggedParentClass;
        
        // events fired on the draggable target (필수 코드 : dragover)
        document.addEventListener("dragover", (event) => {

            // prevent default to allow drop
            event.preventDefault();

        }, false);
    
        // store a ref. on the dragged elem - 사용자가 요소나 텍스트 블록을 드래그시 발생
        document.addEventListener("dragstart", (event) => {

            // 초기화
            dragged = null;
            draggedParentClass = null;

            // 크로스 브라우징용 코드 (edge, firefox)
            event.dataTransfer.setData('text', 'anything');

            console.log(event.target.className);

            // 클래스 이름이 drag 인 것만 drop 되게끔 설정
            if ( event.target.className == "drag "+ (this.tableCount-1) || event.target.className == "dropped" || event.target.className == "drag" ) {
                dragged = event.target;
                draggedParentClass = event.target.parentNode.className;
            }  else {

                alert("드래그 할 수 없는 요소입니다.")
                return;

            }

            // make it half transparent
            event.target.style.opacity = .5;
        
        }, false);
    
        document.addEventListener("dragend", (event) => {

            // 이벤트 타겟의 부모 노드가 document이면 document에 맞게 사이즈 조절
            // 부모 노드가 document가 아니면 정해진 대로 가공

            event.target.style.border = "";

            // reset the transparency
            event.target.style.opacity = "";
    
        }, false);
    
        // events fired on the drop targets
        document.addEventListener("drop", (event) => {

            event.preventDefault();

            // move dragged elem to the selected drop target

            if ( dragged.className == "dropped" ) {

                    // 삭제 로직

                    alert("이미 드롭된 요소는 삭제만 가능합니다.");

                    return;
            }

            if ( event.target.className == "document" ) {

                // 드롭 후 복구를 위해 자식 노드를 포함하여 미리 복사
                let dupElement = dragged.cloneNode(true);
                let tableCount = this.tableCount;

                event.target.appendChild( dragged );

                dropAfter(dupElement, tableCount);

                if (draggedParentClass == "table") {

                    // 카운트 추가
                    this.tableCount = this.tableCount + 1

                    // 카운트가 추가 되기전의 bool을 false로 하여 tools에서 안보이게 처리한다.
                    this.tableDropBools[this.tableCount-2] = false;

                    // 다음에 드래그 앤 드랍할 표를 준비시킨다. 
                    this.tableDropBools.push(true);

                    this.row.push(1)
                    this.column.push(1)

                    console.log(this.tableDropBools);

                }
                if (draggedParentClass == "select") { 
                    this.selectCount = this.selectCount + 1

                    this.selectDropBools[this.selectCount-2] = false;

                    this.selectDropBools.push(true);

                    this.row.push("")
                    this.column.push("")

                    console.log(this.selectDropBools);
                }

            }

            if ( event.target.className == "bin") {
                console.log("delete");
            }

        }, false);
        
        function dropAfter(dupElement, tableCount) {

            // 전자서명일 경우 한번만 실행

            // 드래그했던 Elements 의 부모 위치 변수로 저장

            if ( draggedParentClass != "sign" || draggedParentClass != "table" || draggedParentClass != "select" || dragged.className == "dropped") {

                let restoreMe = document.querySelector("." + draggedParentClass);
                
                dupElement.style.opacity = "";
                restoreMe.appendChild(dupElement);

            }

            dragged.setAttribute("class", "dropped "+(tableCount-1));

            // document의 높이에 dragged의 높이가 auto로 적용이 안되므로 잠깐 풀어줘야 한다.

            dragged.parentNode.height = "auto";

            // 각각의 Tools에 대한 디테일한 설정
            switch (draggedParentClass) {

                case "sign":
                dragged.style.width = "100%";
                dragged.style.height = "15%";
                dragged.style.resize = "none";
                dragged.style.border = "";
                dragged.setAttribute("draggable", "false");
                break;

                case "select":
                dragged.style.width = "auto";
                dragged.style.height = "1.3%";
                break;

                case "check":
                dragged.style.width ="3.9%";
                dragged.style.height ="3%";
                break;

                case "words":
                dragged.style.fontSize = "2rem";
                dragged.style.width = "auto";
                dragged.style.height = "3%";
                break;

                case "input":
                // dragged.style.display = "flex";
                dragged.style.width ="auto";
                dragged.firstChild.style.width ="90%";
                dragged.firstChild.style.height ="90%";
                // dragged.firstChild.style.margin ="0 auto 0 0";
                dragged.firstChild.style.justifyContent = "center";
                break;

                case "table":

                // 이벤트 버스를 통해 tools의 table을 가지고 온다.
                dragged.style.height = "auto";
                dragged.style.width = "100%";
                let lis = dragged.querySelectorAll("ul > li");
                for(let i=0; i<lis.length; i++) {
                    lis[i].style.height = "50px";
                    lis[i].setAttribute("class", i+1);
                }
                break;
            }
            
            let hideThis = document.getElementsByClassName(tableCount-1)[0]
            hideThis.style.display="none";
        }
    },
    beforeUpdate() {

        // 행, 열 input 실시간 감시
            
        if (this.row[this.tableCount-1].length > 2 || this.row[this.tableCount-1] > 20) {
            let cut = String(this.row[this.tableCount-1]);
            cut = cut.slice(0,-1);
            cut = cut.slice(0, 2);
            this.row[this.tableCount-1] = parseInt(cut);
        }

        if (this.column[this.tableCount-1].length > 2 || this.column[this.tableCount-1] > 20) {
            let cut = String(this.column[this.tableCount-1]);
            cut = cut.slice(0,-1);
            cut = cut.slice(0, 2);
            this.column[this.tableCount-1] = parseInt(cut);
        }
    },
}
</script>

<style>

/* reset init */

@charset "utf-8";

*{
    margin: 0;
    padding: 0;
}
html,body{
    width:100%;
    height:100%;
}
a{
    text-decoration: none;
    color:#333;
}
ul,ol,li{
    list-style: none;
}
img{
    border:0px;
}

/* app */

html {
    min-width : 900px;
    overflow: hidden;
}

#app {
    height : auto;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-sizing: border-box;
    padding : 0.5rem;
}

/* app header */

#app .header {
    display : flex;
    flex-direction: row;
    box-sizing: border-box;
    background : rgb(80, 150, 255);
    color : white;
    border-bottom : 2px solid rgb(85, 144, 233);
    padding : 0.5rem;
    margin-bottom : 8px;
}

#app .header .gnb {
    display : flex;
    flex-direction: row;
    align-items: center;
    margin : 0 auto;
}

#app .header .gnb li {
    margin : 0 0.5rem;
}

#app .header h1, h3 {
    font-weight: normal;
}

#app .header h1 {
    color : rgb(255, 255, 255);
}

#app .header h3 {
    color : rgb(12, 88, 44);
}

.middle {
    height : auto;
    width : 100%;
    display : flex;
    flex-direction: row;
}

.middle .left {
    border : 3px solid rgb(80, 150, 255);
    width : 16%;
    margin-right : 0.5%;
    min-width : 300px;
}

.middle .left {
    box-sizing : border-box;
    padding : 0.5rem;
}
.middle .right {
    width : 83%;
}

.middle .right .one {
    box-sizing : border-box;
    border : 2px solid rgb(80, 150, 255);
    overflow: auto;
    align-items: center;
    box-sizing: border-box;
    margin-bottom : 1rem;
}

ul li .resizer.column {
    position : absolute;
    right :-17px;
    top : 5%;
    width : 32px;
    height : 90%;
    cursor : w-resize;
    z-index : 99;
}

ul li .resizer.row {
    position : absolute;
    bottom : -16px;
    width : 100%;
    cursor : s-resize;
    height : 32px;
    z-index: 99;
}

.tools .drag {
    cursor : all-scroll;
}

</style>
