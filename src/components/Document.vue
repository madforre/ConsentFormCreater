<template>
  <div class="bg">
    <div class="a4">
        <div class="document">
        </div>
        <div class="bin">
            <h1><font-awesome-icon icon="trash-alt"/></h1>
        </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {
    }
  },
  props: ["option"],
  created() {
    eventBus.$on("clear", method => {
      this.clear = method;
    }),
    eventBus.$on("undo", method => {
      this.undo = method;
    })
  },
  methods : {
    clear(){
    },
    undo(){
    },
  },
}
</script>

<style>

/* 휴지통 */

/* width : 1190px;
    height : 1684px; */

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
    display : flex;
    box-sizing: border-box;
    /* border : 1px dotted black; */
    flex-flow : row wrap;
    align-content: flex-start;
    height : 1684px;
}

/* Drop된 요소의 Resize를 위한 css 설정 */

.bg .a4 .document .dropped {
    text-align: left;
    margin-bottom : 1px;
    margin-top : 1px;
    /* 자동 늘림 방지 */
    align-self : flex-start;
}

.bg .a4 .document .dropped ul {
    display : flex;
    width : 100%;
    flex-flow : row wrap;
    box-sizing: border-box;
    border-left : 1px solid #000;
    border-top : 1px solid #000;
    text-align: center;
} 

.bg .a4 .document .dropped ul > li {
    width : 100%;
    word-break : break-word;
    border-bottom : 1px solid rgb(0, 0, 0);
    border-right : 1px solid rgb(0, 0, 0);
    box-sizing : border-box;
}

.bg .a4 .document .dropped ul >li:last-child {
    overflow: auto;
}

</style>