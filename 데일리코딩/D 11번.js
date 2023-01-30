// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 가장 긴 문자열과 가장 짧은 문자열 구하기
  // 길이를 구하고 비교를 해야하는데...
  // 배열 요소들을 하나하나 인덱스 -1 로 이전거랑 비교해서 길이가 짧으면

  let short = 20;
  let shortIdx = 0;
  let long = 0;
  let longIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    //길이가 long보다 크거나 같다면 long에할당
    if (arr[i].length >= long) {
      long = arr[i].length;
      longIdx = i;
    }

    //길이가 short보다 짧고 같다면 short할당
    if (arr[i].length <= short) {
      short = arr[i].length;
      shortIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== longIdx && i !== shortIdx) {
      result.push(arr[i]);
    }
  }
  return result;
}
