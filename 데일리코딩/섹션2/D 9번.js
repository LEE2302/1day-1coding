// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

// 1. 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 2. 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

function ABCheck(str) {
  // code goes here
  let arr = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (
      (arr[i] === "A" && arr[i + 4] === "B") ||
      (arr[i] === "B" && arr[i + 4] === "A")
    ) {
      return true;
    }
  }
  return false;
}
