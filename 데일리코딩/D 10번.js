//문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 숫자들을 순회하면서 result에 담는데
  // result에 담긴 값들이 짝수면 그대로 패스
  // 홀수면 그다음 값과 비교후 -추가
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result += result + "-";
    }
    result += str[i];
  }
  return result;
}

// //레퍼런스코드
// function insertDash(str) {
//   let result = str[0];
//   for (let i = 1; i < str.length; i++) {
//     if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
//       result = result + '-';
//     }
//     result = result + str[i];
//   }

//   return result;
// }
