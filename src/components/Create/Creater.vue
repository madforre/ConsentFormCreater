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

.creater .document {
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
    resize: both;
    overflow: auto;
    border : 1px solid black;
    margin : 0.5%;
    width : 100%;
}

.creater .document .droped select {
    width : 100%;
    display : block;
    text-align : center;
}


.creater .document .droped ul {
    display : flex;
    width : 100%;
    flex-flow : row wrap;
    height : 10rem;
    box-sizing: border-box;
    /* margin-left : 2px;
    margin-top : 1px;
    margin-bottom : 1px; */
    text-align: center;
} 


.creater .document ul>li {
    word-break:break-word;
    overflow: hidden;
    border : 1px solid gray;
    box-sizing : border-box;
    /* margin-top : -1px;
    margin-right :-1px; */
}

</style>
