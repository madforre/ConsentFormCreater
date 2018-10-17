const resizeTableMixin = {
    methods:{
        rowResize : function (event) {
            event.preventDefault();
            document.addEventListener("mousemove", this.rowMouseMoveHandler);
        },
        colResize : function (event) {
            event.preventDefault();
            document.addEventListener("mousemove", this.colMouseMoveHandler);
        },
        rowMouseMoveHandler : function (event) {
            event.preventDefault();
            let theClass = event.target.parentNode.getAttribute("class");
            let lis = document.querySelectorAll("ul > li");

            /* rowResize시 현재 row의 위치 대략 구하기 */
            let checkRow = theClass / this.row;

            // checkRow의 소수점을 제거한 rowIndex
            let rowIndex;
            for (let n = 0; n < this.column; n++) {
                if (checkRow > n && checkRow <= n+1) {
                    rowIndex = n+1;
                }
            }

            // start
            let rowStart = lis[this.row * (rowIndex - 1)].getAttribute("class") - 1;

            // end
            let rowEnd = lis[this.row * rowIndex - 1].getAttribute("class") - 1;

            // height 에서 숫자만 걸러내고 숫자만 바꾼뒤 단위 붙여주어야 한다.
            const re = /[0-9]*/i

            // height
            let defaultHeight = parseInt(lis[rowStart].style.height.match(re)[0]);

            // while문에 쓰일 currentCell
            let currentCell = rowStart;

            while(true) {
                if (event.offsetY > 14) {
                    lis[currentCell].style.height = (defaultHeight + 5) + "px";
                } else {
                    lis[currentCell].style.height = (defaultHeight - 5) + "px";
                }
                if (currentCell == rowEnd) { 
                    break;
                }
                currentCell = currentCell + 1;
            }
        },
        colMouseMoveHandler : function (event) {
            event.preventDefault();
            const theClass = event.target.parentNode.getAttribute("class");
            const lis = document.querySelectorAll("ul > li");

            /* colResize시 현재 col 위치 구하기 */
            const checkColumn = theClass % this.row;
            const columnIndex = checkColumn - 1;

            /* 정규표현식 사용시 소수점까지 구하도록 설정 */
            const re = /[0-9\.]*/i

            let beforeWidthFloat;
            let afterWidthFloat;

            if (event.offsetX > 15) {

                // offsetX 가 15보다 크면 checkCol의 왼쪽을 전부 선택한 후
                // 크기를 키운 다음 오른쪽을 전부 선택한 후 크기를 줄인다.

                for(let n=0; n < this.column; n++) {

                    beforeWidthFloat = parseFloat(lis[columnIndex+this.row*n].style.width.match(re)[0]);
                    afterWidthFloat = parseFloat(lis[columnIndex+this.row*n+1].style.width.match(re)[0]);

                    // width가 1퍼센트 이상일때만 실행하고 미만이라면 
                    // 오른쪽으로 더이상 줄지 않도록 만들어야 한다.

                    if (afterWidthFloat >= 1) {
                        lis[columnIndex+this.row*n].style.width = (beforeWidthFloat + 0.5) + "%";
                        lis[columnIndex+this.row*n + 1].style.width = (afterWidthFloat - 0.5) + "%";
                    }

                }

            } else {

                // offsetX 가 15보다 작으면 checkCol의 오른쪽을 전부 선택한 후,
                // 크기를 키운 다음 왼쪽을 전부 선택한 후 크기를 줄인다.

                // 오른쪽이 커지는중이다. 왼쪽으로 더이상 줄지 않도록 해야 한다.
                // 왼쪽으로 리사이징시에는 버그 발생 하는 중이다.

                for(let n=0; n < this.column; n++) {

                    beforeWidthFloat = parseFloat(lis[columnIndex+this.row*n].style.width.match(re)[0]);
                    afterWidthFloat = parseFloat(lis[columnIndex+this.row*n+1].style.width.match(re)[0]);

                    // width가 1퍼센트 이상일때만 실행하고 미만이라면 
                    // 왼쪽으로 더이상 줄지 않도록 만들어야 한다.

                    if (beforeWidthFloat >= 1) {
                        lis[columnIndex+this.row*n].style.width = (beforeWidthFloat - 0.5) + "%";
                        lis[columnIndex+this.row*n + 1].style.width = (afterWidthFloat + 0.5) + "%";
                    }
                }
            }
        },
        stop() {
            console.log("마우스 업");
            document.removeEventListener("mousemove",this.rowMouseMoveHandler);
            document.removeEventListener("mousemove",this.colMouseMoveHandler);
        }
    },
}

export default resizeTableMixin;