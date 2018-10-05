<template>
    <div class="creater">
        <div class="absolute">
            <div class="relative"></div>
        </div>
        <div class="document">
            <!-- <ul class="table">
                <li>테스트 단어테스트 다sdasdasd언 테스트 단어<br>fda</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
            </ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul> -->
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
    padding: 1.5rem 0;
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

.creater .document ul {
    display : flex;
    width : 100%;
    flex-flow : row wrap;
    height : auto;
    box-sizing: border-box;
    margin-left : 2px;
    margin-top : 1px;
    margin-bottom : 1px;
    text-align: center;
}

.creater .document ul>li {
    word-break:break-word;
    overflow: hidden;
    width : 20%;
    height : auto;
    border : 1px solid gray;
    box-sizing : border-box;
    margin-top : -1px;
    margin-right :-1px;
}

</style>
