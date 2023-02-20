// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 레퍼런스
// const largestProductOfThree = function (arr) {
//   //정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

//   //slice로 복사를 하고 sort로 정렬 a,b => a- b(오름차순정렬 법)
//   const sorted = arr.slice().sort((a, b) => a - b);
//   //배열에 길이 값
//   const len = arr.length;
//   //길이 -1는 맨 마지막 값 / 길이 -2는 맨 마지막 앞에 값/ 길이 -3은 맨 마지막 앞앞 값(가장큰 3개 곱한 값)
//   const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
//   //이건 왜 있는지 모르겠넴...
//   const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
//   //두개 값중 최댓값 Math.max()최대값 구하는 메소드
//   return Math.max(candi1, candi2);
// };

//레퍼런스 보고 친 코드
const largestProductOfThree = function (arr) {
  //정렬
  let sorted = arr.slice().sort((a, b) => a - b);
  //길이 구하기
  let len = arr.length;
  //길이를 이용해 큰값 구하기
  let result1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  //음수를 생각해서 음수 가장큰값 앞에 2개도 곱해준다
  let result2 = sorted[0] * sorted[1] * sorted[len - 1];

  //최대값 구하는 메소드Math.max를 이용해 큰값을 가정한 두개를 비교
  return Math.max(result1, result2);
};
