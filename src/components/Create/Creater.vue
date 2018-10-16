<template>
    <div class="creater">
        <div class="document">
        </div>
        <div class="bin">
            <h1><font-awesome-icon icon="trash-alt"/></h1>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            tableCount : 0,
            selectCount : 0,
        }
    },
    methods: {
        // 전자서명
        clear(){
            var _this = this;
            _this.$refs.signature.clear();
        },
        undo(){
            var _this = this;
            _this.$refs.signature.undo();
        },
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

        // 클래스 이름이 drag 인 것만 drop 되게끔 설정
        if ( event.target.className == "drag" || event.target.className == "droped" ) {
            dragged = event.target;
            draggedParentClass = event.target.parentNode.className;
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

        if ( event.target.className == "document") {

            // 드롭 후 복구를 위해 자식 노드를 포함하여 미리 복사
            let dupElement = dragged.cloneNode(true);

            event.target.appendChild( dragged );

            dropAfter(dupElement);

        }

        if ( event.target.className == "bin") {
            console.log("delete");

        }

        }, false);
        
        function dropAfter(dupElement) {

        // 전자서명일 경우 한번만 실행

        // 드래그했던 Elements 의 부모 위치 변수로 저장

        if ( draggedParentClass != "sign" || dragged.className == "droped") {

            let restoreMe = document.querySelector("." + draggedParentClass);
        
            // dupElement.style.width = "100%";
            // dupElement.style.height = "100%";
            dupElement.style.opacity = "";
            restoreMe.appendChild(dupElement);
            dragged.setAttribute("class", "droped");

        }

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
            dragged.style.width ="7%";
            dragged.firstChild.style.width ="90%";
            dragged.firstChild.style.height ="90%";
            dragged.firstChild.style.margin ="0 auto 0 0";
            dragged.style.height ="3%";
            break;
            case "table":
            // 이벤트 버스를 통해 tools의 table을 가지고 온다.
            dragged.style.height = "40%";
            dragged.firstChild.style.height = "auto";
            let lis = dragged.querySelectorAll("ul > li");
            for(let i=0; i<lis.length; i++) {
                lis[i].style.height = "50px";
                lis[i].setAttribute("class", i+1);
            }
            break;
            }
        }
    },
}
</script>

<style>

.creater {
    background: #ccc;
    width : auto;
}

.bin {
    position : absolute;
    right : 3%;
    bottom : 7%;
    background : rgb(255, 255, 255);
    padding : 0.5rem;
    color : rgba(158, 38, 38, 0.445);
    cursor : pointer;
}

.bin:hover {
    color : rgba(255, 31, 31, 0.822);
}

.creater> .document {
    display : flex;
    background : #fff;
    width : 1190px;
    height : 1684px;
    margin : 0 auto;
    box-sizing: border-box;
    padding : 2.3%;
    border : 1px solid black;
    flex-flow : row wrap;
    align-content: flex-start;
}

/* Drop된 요소의 Resize를 위한 css 설정 */

.creater .document .droped {
    width : 100%;
    text-align: left;
    resize :vertical;
    overflow: auto;
    margin-bottom : 1px;
    margin-top : 1px;
}

.creater .document .droped ul {
    display : flex;
    height : auto;
    width : 100%;
    flex-flow : row wrap;
    box-sizing: border-box;
    border-left : 1px solid #000;
    border-top : 1px solid #000;
    text-align: center;
} 

.creater .document .droped ul > li {
    width : 100%;
    word-break:break-word;
    border-bottom : 1px solid rgb(0, 0, 0);
    border-right : 1px solid rgb(0, 0, 0);
    box-sizing : border-box;
}

.creater .document .droped ul >li:last-child {
    resize : none;
    overflow: none;
}

</style>
