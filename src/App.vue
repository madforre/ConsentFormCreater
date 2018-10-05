<template>
  <div id="wrap">
    <div class="header">
      <ul class="gnb">
        <li><router-link to="/"><h1>Form CMS</h1></router-link></li>
        <li><router-link to="/template"><h3>템플릿 만들기</h3></router-link></li>
        <li><p> {{msg}} </p></li>
      </ul>
    </div>
    <div class="hi">
      <h1>Hello world!</h1>
      <resize-observer @notify="handleResize" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

/* 데이터를 표현하거나 데이터 조작에 대해 요청하는 루트 컴포넌트 */

export default {
  data () {
    return {
      msg: '원하는 재료를 선택 / 동의서를 구성',
    }
  },
  methods: {
    handleResize () {
      console.log('resized')
    }
  }
  
}

</script>

<style>

/* reset init */

@charset "utf-8";


/* resize test */

.hi {
    border : 5px solid black;
    width : 150px;
    height : 50px;
    position : relative;
}


/* ---------- */

*{
    margin: 0;
    padding: 0;
}
html,body{
    width:100%;
    height:100%;
}
a{
    text-decoration: none;
    color:#333;
}
ul,ol,li{
    list-style: none;
}
img{
    border:0px;
}

/* Wrap */

html {
  min-width : 900px;
}

#wrap {
  height : auto;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  padding : 0.5rem;
}

/* Wrap header */

#wrap .header {
  display : flex;
  flex-direction: row;
  box-sizing: border-box;
  border-bottom : 2px solid rgb(111, 135, 241);
  padding : 0.5rem;
  margin-bottom : 1rem;
}

#wrap .header .gnb {
  display : flex;
  flex-direction: row;
  align-items: center;
  margin : 0 auto;
}

#wrap .header .gnb li {
  margin : 0 0.5rem;
}

#wrap .header h1, h3 {
  font-weight: normal;
}

#wrap .header h1 {
  color : rgb(41, 68, 219);
}

#wrap .header h3 {
  color : rgb(12, 88, 44);
}

#wrap .header h1:hover{
  color : rgb(116, 139, 240);
}

#wrap .header h3:hover{
  color : rgb(32, 184, 95);
}

</style>
