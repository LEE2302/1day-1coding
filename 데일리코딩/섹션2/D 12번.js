// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "B") {
        // result.push(i,j)
        return [i, j];
      }
    }
  }
  // return result;
}

//레퍼런스 코드
// function findBugInApples(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       if (arr[i][j] === 'B') {
//         return [i, j];
//       }
//     }
//   }
// }
