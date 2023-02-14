//문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 문자열을 요소로 갖는 배열 arr 문자열은 여러개일수 있다.

  //하나하나 값을 넣어둘 배열을 선언
  let elArr = [];
  //반복문을 통하여 문자열 순회
  for (let i = 0; i < arr.length; i++) {
    //변수 str을 선언하여 arr배열 인덱스에 문자열을 할당
    let str = arr[i];
    //이중 반복문을 통하여 str 문자열을 한번더 순회
    for (let j = 0; j < str.length; j++) {
      //조건문을 이용하여 문자하나하나를 선언한 빈배열에 푸쉬(추가)
      //조건문 변수 elArr에 길이가 j 인덱스 숫자와 같다면 추가(같지않다면 다 추가했거나 없다는 뜻)
      if (elArr.length === j) {
        elArr.push(str[j]);
      } else {
        //처음 반복문이 지나면 위에 조건문은 무조건 거짓이 되기 때문에
        //elArr배열에 elArr+str문자를 추가
        elArr[j] = elArr[j] + str[j];
      }
    }
  }
  //배열에 다 추가가 되어있으면
  let result = "";
  //다시 반복문을 통하여 elArr 세로로 읽었을때의 문자열이 담긴 배열을
  //순회하여 순차적으로 result변수에 할당하여 리턴
  for (let i = 0; i < elArr.length; i++) {
    result += elArr[i];
  }
  return result;
}

// //레퍼런스
// function readVertically(arr) {
//   let temp = [];//hw
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i]; //wolrd
//     for (let j = 0; j < str.length; j++) {
//       if (temp.length === j) {
//         temp.push(str[j]);//w
//       } else {
//         temp[j] = temp[j] + str[j];
//       }
//     }
//   }

//   let result = '';
//   for (let i = 0; i < temp.length; i++) {
//     result = result + temp[i];
//   }

//   return result;
// }
