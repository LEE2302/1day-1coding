
// 문제
// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.

// let output = getIndex([5, 4, 1, 3], 2);
// console.log(output); // --> 1
// 
// output = getIndex([10, 5, 1, 3], 13);
// console.log(output); // --> 4


//레퍼런스를 보고 줄인 함수
//정렬해서 원하는 값을 구하기 위해선 원하는 값과 모든 값들을 비교해서 원하는 값이
//더 크게되면 그 앞에 값의 길이를 구하면 인덱스 값을 구할 수 있음
//이유 인덱스는 0부터 시작하기 때문에.
function getIndex(arr, num) {
    return arr.filter(el => el < num).length;
  }
  // 레퍼런스
  // function getIndex(arr, num) {
  //   return arr.filter(function (el) {
  //     return el < num;
  //   }).length;
  // }