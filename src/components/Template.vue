<template>
  <div class="middle">
    <div class="left">
      <router-view name="tools"></router-view>
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
  mounted() {

    /* HTML5 Drag & Drop API 사용 */

    // * 드래그 앤 드롭이 끝난 요소는 다시 
    // 드래그 시작했던 자리에 붙어야 한다.

    // 드래그 할 때의 요소를 저장해 두었다가 전달한다.

    let dragged;
    let draggedParentClass;

    /* events fired on the draggable target */

    /* 필수 코드 */
    document.addEventListener("dragover", (event) => {
      // 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다.
      // prevent default to allow drop
      event.preventDefault();
  
    }, false);
  
    document.addEventListener("dragstart", (event) => {

      /* 크로스 브라우징용 코드 (edge, firefox) */
      event.dataTransfer.setData('text', 'anything');
    
      // 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다.
      // store a ref. on the dragged elem
      dragged = event.target;
      draggedParentClass = event.target.parentNode.className;

      // make it half transparent
      event.target.style.opacity = .5;
    
    }, false);
  
    document.addEventListener("dragend", (event) => {

      // 이벤트 타겟의 부모 노드가 document이면 document에 맞게 사이즈 조절
      // 부모 노드가 document가 아니면 정해진 대로 가공

      event.target.style.border = "";

      // reset the transparency
      event.target.style.opacity = "";

      console.log(draggedParentClass)
  
    }, false);
  
    /* events fired on the drop targets */
    document.addEventListener("drop", (event) => {

      event.preventDefault();

      // move dragged elem to the selected drop target
      if ( event.target.className == "document" ) {

        event.target.style.border = "";
        dragged.style.width ="30rem";
        dragged.style.height ="30rem";
        dragged.setAttribute("draggable", "false");
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

        // 객체를 참조하는 상태에서 객체에 변화를 주었기 때문에
        // 문제가 발생한 것이 아닐까?

        // 객체를 clone하는 개념으로 접근해 보자.

      }

      after();

    }, false);

    function after() {

      let restore = document.getElementsByClassName(draggedParentClass);

        console.log(restore);
        // let div = document.createElement("div");
        console.log(event.target);
        restore.appendChild(dragged.firstChild);

        // let restore = document.getElementsByClassName("dropzone2");
        // let div = document.createElement('div');
        // restore.appendChild(div);
        // restore.lastChild.innerHTML="<h1>호우</h1>";

    }
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