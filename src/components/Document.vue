<template>
  <div class="bg">
    <div class="bar">
    </div>
    <div class="a4">
        <div class="document">
        </div>
        <div class="bin" v-on:click="getData">
            <h1><font-awesome-icon icon="trash-alt"/></h1>
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
  methods : {
    getData() {
      console.log(contents);
    },
    // 이벤트 버스로 수신받을 전자서명 관련 메소드
    clear(){
    },
    undo(){
    }
  },
}
</script>

<style>

/* 
 * A4 용지 기준
 * width : 1190px;
 * height : 1684px;
 */

/* 휴지통 */

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

.bg {
    position : relative;
    overflow: auto;
    height : 52rem;
    background: #ccc;
}

.bg .a4 {
    border : 1px solid gray;
    padding : 2.3%;
    margin : 0 auto;
    margin-top : 2rem;
    margin-bottom : 2rem;
    width : 1190px;
    height : 1684px;
    background : #fff;
}

.bg .a4> .document {
    /* display : flex; */
    box-sizing: border-box;
    /* flex-flow : row wrap; */
    /* align-content: flex-start; */
    height : 1684px;
    text-align: left;
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