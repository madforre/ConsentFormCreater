<template>
  <div class="bg">
    <div class="bar">
    </div>
    <div class="a4">
        <div class="document" style="margin : 2.3%; box-sizing: border-box; height : 1684px; text-align: left; overflow : hidden;">
          <!-- 문서 내용이 들어갑니다. -->
        </div>
      <div class="sendBtn" v-on:click="sendData">
        <h1><font-awesome-icon icon="paper-plane"/></h1>
        <p>완료</p>
        <form id="send" method="post" action="./endpoint.php">
          <input name="document" class="pickme" type="hidden">
        </form>
      </div>
    </div>
    <a href=""></a>
  </div>
</template>

<script scoped>
import { eventBus } from '../main.js';

/* axios 사용하려다 말았음
 * import axios from 'axios';
 */

export default {
  data () {
    return {
    }
  },
  props: ["option", "select"],
  methods : {
    sendData() {
      let stringfyDoc = document.querySelector(".document").outerHTML;
      let picked = document.querySelector(".pickme")
      picked.setAttribute('value', stringfyDoc);

      /* 크롬에서 Cross Site Scripting (XSS) 에 대한 테스트를 하면 ERR_BLOCKED_BY_XSS_AUDITOR라는 에러 메시지를 보게된다.
      * XSS Auditor는 크롬과 사파리에 탑재되어 있고, 기본 동작하도록 설정되어 있다. 
      * XSS Auditor의 동작은 X-XSS-Protection이라는 HTTP Response 헤더에 의해 결정된다.
      * 파이어 폭스에서 실행하면 스크립트를 넣은 HTML(폼 전달)은 정상적으로 작동하는 것을 확인할 수 있다.
      * 
      * 요약하면 에디터에서 다음 페이지로 포스트 값 넘길 때 파폭 되고 크롬, 사파리 안됨!
      */
      document.getElementById("send").submit();
      
    },
    // 이벤트 버스로 수신받을 전자서명 관련 메소드
    clear(){
    },
    undo(){
    }
  },
  created() {
    this.$nextTick(function() {
      // contents는 php파일에서 post 값으로 받은 전역변수이다.
      const putDoc = document.querySelector(".a4 .document");
      putDoc.innerHTML = contents;
    })

    eventBus.$on("clear", method => {
      this.clear = method;
    }),
    eventBus.$on("undo", method => {
      this.undo = method;
    })
  },
}
</script>

<style>

/* 
 * A4 용지 기준
 * width : 1190px;
 * height : 1684px;
 */

/* 전송 */

.sendBtn {
    position : fixed;
    right : 4.5%;
    bottom : 7%;
    background : rgb(255, 255, 255);
    padding : 0.5rem;
    font-weight: 600;
    color : rgba(71, 88, 235, 0.822);
    cursor : pointer;
    width : 50px;
}

.sendBtn:hover{
  box-shadow: 4px 4px 4px #103ba08a;
  border : 1px solid rgb(92, 145, 245);
}

.bg {
    position : relative;
    overflow: auto;
    height : 52rem;
    background: #ccc;
}

.bg .a4 {
    border : 1px solid gray;
    margin : 0 auto;
    margin-top : 2rem;
    margin-bottom : 2rem;
    width : 1190px;
    height : 1684px;
    background : #fff;
}

/* Drop된 요소의 Resize를 위한 css 설정 */

.bg .a4 .document .dropped {
    text-align: left;
    /* 자동 늘림 방지 */
    align-self : flex-start;
    height : auto;
    display : block;
    z-index: 99;
}

</style>