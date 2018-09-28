<template>
    <div class="creater">
        <div class="absolute">
            <div class="relative"></div>
        </div>
        <div class="document">
            <ul class="table">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.creater {
    background: #ccc;
    padding: 1.5rem 0;
}

.creater .absolute {
    position : absolute;
    width : 19%;
    height : 100%;
    box-sizing : border-box;
    border : 3px solid black;
    left : 0;
    top : 0;
}

.creater .relative {
    position : relative;
    margin : auto;
    width : 50%;
    height : 50%;
    border : 5px solid black;
}

.creater .document {
    background : #fff;
    /* width : 595px;
    height : 842px; */
    width : 1190px;
    height : 1684px;
    margin : 0 auto;
    padding : 1rem;
    border : 1px solid black;
}

.creater .document ul {
    display : flex;
    width : 100%;
    flex-flow : row wrap;
    height : auto;
    box-sizing: border-box;
    margin-left : 2px;
    margin-top : 1px;
}
.creater .document ul>li {
    width : 20%;
    height : 50px;
    border : 1px solid gray;
    box-sizing : border-box;
    margin-top : -1px;
    margin-right :-1px;
}

</style>
