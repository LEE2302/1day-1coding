// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// 'hello'를 secret 3으로 암호화한 경우: 'khoor'
// 'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'

function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let abc = "abcdefghijklnmopqrsduvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " ";
    } else {
      let idx = abc.indexOf(str[i]);
      let caesar = (idx - secret + abc.length) % abc.length;
      result += abc[caesar];
    }
  }
  return result;
}

// //레퍼런스
// function decryptCaesarCipher(str, secret) {
//     // 알파벳
//     let alpha = 'abcdefghijklmnopqrstuvwxyz';

//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === ' ') {
//         // 공백은 그대로 둔다.
//         result = result + ' ';
//       } else {
//         // 현재 문자의 알파벳 순서를 구한다.
//         let asis = alpha.indexOf(str[i]);
//         // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
//         let tobe = (asis - secret + alpha.length) % alpha.length;
//         result = result + alpha[tobe];
//       }
//     }

//     return result;
//   }
