<template>
  <div class="bg">
    <div class="a4">
        <div class="document">
          {{table.count}}
          {{select.count}}
          <br>
        </div>
        <div class="bin">
            <h1><font-awesome-icon icon="trash-alt"/></h1>
        </div>
    </div>
  </div>
</template>

<script scoped>
import { eventBus } from '../main.js'
import resizeTableMixin from '../mixins/mixin.js';

export default {
  mixins:[resizeTableMixin],
  data () {
    return {

    }
  },
  props: ["option", "table", "select"],
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
    height : auto;
    display : block;
}

.bg .a4 .document .dropped ul {
    position : relative;
    display : flex;
    width : 100%;
    height : auto;
    flex-flow : row wrap;
    box-sizing: border-box;
    border-left : 1px solid #000;
    border-top : 1px solid #000;
    text-align: center;
    top : 0px;
    left : 0px;
} 

.bg .a4 .document .dropped ul > li {
    position : relative;
    width : 100%;
    word-break : break-word;
    border-bottom : 1px solid rgb(0, 0, 0);
    border-right : 1px solid rgb(0, 0, 0);
    box-sizing : border-box;
    flex : 1 1 auto;
}

.bg .a4 .document .dropped ul li .resizer.column {
    position : absolute;
    right :-17px;
    top : 5%;
    width : 32px;
    height : 90%;
    /* background: #222; */
    cursor : w-resize;
    z-index : 99;
}

.bg .a4 .document .dropped ul li .resizer.row {
    position : absolute;
    bottom : -16px;
    width : 100%;
    cursor : s-resize;
    height : 32px;
    /* background: #555; */
    z-index: 99;
}

</style>