//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let obj = {};
  if (arr.length === 0) return obj;

  for (let a in arr) {
    if (arr[a].length !== 0 && !(arr[a][0] in obj)) {
      obj[arr[a][0]] = arr[a][1];
    }
  }

  return obj;
}

//레퍼런스 코드
// function convertListToObject(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
//       result[arr[i][0]] = arr[i][1];
//     }
//   }

//   return result;
// }
