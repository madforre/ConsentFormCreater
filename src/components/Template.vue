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

<script>

    /* HTML5 Drag & Drop API 사용 */

    // 드래그 앤 드롭이 끝난 요소는 다시 
    // 드래그 시작했던 자리에 붙어야 한다.

    // 드래그 할 때의 요소를 저장해 두었다가 전달한다.
    
    let dragged;
    let draggedParentClass;

    /* events fired on the draggable target */

    /* dragover - 필수 코드*/
    document.addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
  
    }, false);
  
    document.addEventListener("dragstart", (event) => {

      /* 초기화 */
      dragged = null;
      draggedParentClass = null;

      /* 크로스 브라우징용 코드 (edge, firefox) */
      event.dataTransfer.setData('text', 'anything');
    
      // 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다.
      // store a ref. on the dragged elem

      if ( event.target.className == "drag" ) {
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
  
    /* events fired on the drop targets */
    document.addEventListener("drop", (event) => {

      event.preventDefault();

      /* move dragged elem to the selected drop target */
      if ( event.target.className == "document" ) {

        dragged.style.width ="20%";
        dragged.style.height ="10%";
        dragged.setAttribute("draggable", "false");
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

        /* 각각의 Tools 디테일한 설정 */
        switch (draggedParentClass) {
          case "sign":
        }

        dropAfter();

      }

    }, false);

    function dropAfter() {

      /* 전자서명일 경우 한번만 실행 */

      if ( draggedParentClass != "sign") {

      /* 드래그했던 Elements 복구시키기 */
      let restoreMe = document.querySelector("."+draggedParentClass);
      let dupElement = dragged.cloneNode(true);
      
      dupElement.style.width = "100%";
      dupElement.style.height = "100%";
      dupElement.style.opacity = "";
      dupElement.setAttribute("draggable", "true");
      restoreMe.appendChild(dupElement);

      }

    }

export default {
  data () {
    return {
      template: {"구성":"html"},
      select: [ "바나나", "사과" ],
    }
  },
  created() {
    this.template["호우"] = 2;
  },
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
  border : 1px solid rgb(7, 0, 100);
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
  border : 2px solid rgb(7, 0, 100);  
  display : flex;
  height : 3rem;
  justify-content: space-around;
  align-items: center;
  margin-bottom : 1rem;
}

.middle .right .two {
  border : 2px solid rgb(131, 131, 187);
  height : 47rem;
  overflow: auto;
  box-sizing: border-box;
}

.tools .drag {
  cursor : all-scroll;
}

</style>