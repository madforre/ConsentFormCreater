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
    }
  },
  created() {
      this.template["호우"] = 2;
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

</style>

