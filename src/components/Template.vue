<template>
  <div class="middle">
    <div class="left">
      <router-view name="tools" draggable="false"></router-view>
    </div>
    <div class="right">
      <ul class="section one">
        <li><router-link to="/template/loader">불러오기</router-link></li>
        <li><router-link to="/template/creater">제작하기</router-link></li>
        <li><router-link to="/template/save">저장하기</router-link></li>
        {{template}}
        {{select}}
      </ul>
      <div class="section two">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {
      template: { "구성":"html" },
      select: [ "바나나", "사과" ],
    }
  },
created() {
  this.template["호우"] = 2;
},
mounted() {
  
    /* HTML5 Drag & Drop API 사용 */
    
    let dragged;
    let draggedParentClass;
    let inDocument;
    
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
          dragged.firstChild.style.height = "100%";
          break;
        }
    }
  }
}
</script>

<style>

/* Wrap section */

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
  min-width : 240px;
}

.middle .left {
  box-sizing : border-box;
  padding : 0.5rem;
}
.middle .right {
  width : 93%;
}

.middle .right .one {
  box-sizing : border-box;
  border : 3px solid rgb(80, 150, 255);
  display : flex;
  height : 3rem;
  justify-content: space-around;
  align-items: center;
  margin-bottom : 1rem;
}

.middle .right .two {
  border : 2px solid rgb(111, 135, 241);
  height : 48rem;
  overflow: auto;
  box-sizing: border-box;
}

.tools .drag {
  cursor : all-scroll;
}

</style>