<template>
    <div class="creater">
        <div class="absolute">
            <div class="relative"></div>
        </div>
        <div class="document">
            <!-- <ul class="table">
                <li>1asdfasdfsdfsf<br>fda</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
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
        
    },
    methods: {
        catchElement() {

        },
        resizeElement() {

        },
        deleteElement() {

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
    height : 220px;
    box-sizing: border-box;
    margin-left : 2px;
    margin-top : 1px;
    margin-bottom : 1px;
    text-align: center;
}

.creater .document ul>li {
    width : 20%;
    height : auto;
    border : 1px solid gray;
    box-sizing : border-box;
    margin-top : -1px;
    margin-right :-1px;
    
}

</style>
