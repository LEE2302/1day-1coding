//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  //문자열 str입력 => 단어들은 공백으로 구분해서
  //첫 문자를 대문자로 => uppercase로 대문자로 바꾸기
  let arr = str.split(" ");
  let arr1 = "";
  for (let el of arr) {
    if (el.length > 0) {
      arr1 += el[0].toUpperCase() + el.substr(1);
    }
    arr1 += " ";
  }
  return arr1.trimEnd();
}

// //레퍼런스
// function letterCapitalize(str) {
//   let words = str.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 0) {
//       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//   }

//   str = words.join(' ');
//   return str;
// }
