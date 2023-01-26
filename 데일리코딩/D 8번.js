// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 반복문을 통해 문자열 순회
  // 빈문자열을 입력받은경우 빈문자열 리턴
  // 한개 혹은 두개의 공백이 있을경우 ' '공백 한칸만 할당
  // 나머지 문자는 그대로 할당
  let result = "";
  let before = "";

  for (let i = 0; i < str.length; i++) {
    if (str.length === 0) {
      return result;
    } else if (before !== " " || str[i] !== " ") {
      result += str[i];
    }
    before = str[i];
  }
  return result;
}

//레퍼런스코드
// function convertDoubleSpaceToSingle(str) {
//   let result = '';
//   let before = '';
//   for (let i = 0; i < str.length; i++) {
//     // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
//     // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
//     if (before !== ' ' || str[i] !== ' ') {
//       result = result + str[i];
//     }
//     before = str[i];
//   }
//   return result;
// }
