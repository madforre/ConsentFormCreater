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
  </div>
</template>

<script scoped>
import { eventBus } from '../main.js';
// import axios from 'axios';

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

      // console.log(picked.getAttribute('value'));
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