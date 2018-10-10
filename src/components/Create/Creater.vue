<template>
    <div class="creater">
        <div class="document">
        </div>
        <div class="bin">
            <h1><font-awesome-icon icon="trash-alt"/></h1>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    },
    methods: {
        catchElement() {

        },
        resizeElement() {

        },
        deleteElement() {

        },

        // 전자서명
        clear(){
			var _this = this;
			_this.$refs.signature.clear();
		},
		undo(){
			var _this = this;
			_this.$refs.signature.undo();
		},
    }
};
</script>

<style>

.creater {
    background: #ccc;
    width : auto;
}

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

.creater> .document {
    display : flex;
    background : #fff;
    width : 1190px;
    height : 1684px;
    margin : 0 auto;
    padding : 1rem;
    border : 1px solid black;
    flex-flow : row wrap;
    align-content: flex-start;
}

/* Drop된 요소의 Resize를 위한 css 설정 */

.creater .document .droped {
    resize : both;
    overflow: auto;
    width : 100%;
    text-align: left;
}

.creater .document .droped ul {
    display : flex;
    height : auto;
    width : 100%;
    flex-flow : row wrap;
    box-sizing: border-box;
    border-left : 1px solid #000;
    border-top : 1px solid #000;
    text-align: center;
} 

.creater .document .droped ul > li {
    width : 100%;
    word-break:break-word;
    border-bottom : 1px solid rgb(0, 0, 0);
    border-right : 1px solid rgb(0, 0, 0);
    box-sizing : border-box;
}

</style>
