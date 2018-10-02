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
      template: {"구성":"html",},
      select: [ "바나나", "사과" ],
      option: {
				penColor:"rgb(0, 0, 0)",
				backgroundColor:"rgb(212, 212, 212)",
      },
    }
  },
  created() {
    this.template["호우"] = 2;
  },
  mounted() {
    var dragged;

    /* events fired on the draggable target */
    document.addEventListener("drag", (event) => {
        // 요소나 텍스트 블록을 드래그 할 때 발생한다.
    }, false);
  
    document.addEventListener("dragstart", (event) => {

        // 파이어폭스 크로스 웹브라우징 호환용 코드 ?
        event.dataTransfer.setData('text/plain', 'anything');
        event.dataTransfer.setData('text/html', 'anything');
        event.dataTransfer.setData('text/uri-list');
    
        // 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다.
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
    
    }, false);
  
    document.addEventListener("dragend", (event) => {
        // 드래그를 끝냈을 때 발생한다.
        // reset the transparency
        event.target.style.opacity = "";
  
    }, false);
  
    /* events fired on the drop targets */
    document.addEventListener("dragover", (event) => {
        // 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다.
        if ( event.target.className == "document" ) {
            event.target.style.background = "#eee";
        }

        event.preventDefault();
  
    }, false);
  
    document.addEventListener("dragenter", (event) => {
        // 드래그한 요소나 텍스트 블록이 적합한 드롭 대상위에 올라갔을 때 발생한다.
        // highlight potential drop target when the draggable element enters it
        if ( event.target.className == "document" ) {
            // event.target.style.background = "gray";
        }
  
    }, false);
  
    document.addEventListener("dragleave", (event) => {
        // 드래그를 끝냈을 때 발생한다. (마우스 버튼을 떼거나 ESC 키를 누를 때)
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.className == "drag" ) {
                // 드래그한 엘리멘트가 떠날 때 그 자리에 똑같은 엘리먼트를 
                // 생성하는 로직을 추가할 것
            event.target.style.background = "white";
        }
  
    }, false);
  
    document.addEventListener("drop", (event) => {
        // 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생한다.
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ( event.target.className == "document" ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }

    }, false);
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

/* sign 추가 */

.tools ul .sign {
    flex-direction: column;
}

.tools ul .sign .drag {
    border : 1rem solid rgb(143, 143, 143);
    box-sizing : border-box;
}

.tools .drag {
  cursor : all-scroll;
}

</style>

