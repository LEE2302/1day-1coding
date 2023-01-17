class Car { 
constructor (brand, name, color) {
  //변수를 할당해야 한다.
  //문자열로 할당을 했더니 안 된 이유이다.
  // 안된 코드
  // this.brand = 'brand';
  // this.name = 'name';
  // this.color = 'color';
 
  this.brand = brand;
  this.name = name;
  this.color = color;
};
drive () {
  console.log(this.name + '가 운전을 시작합니다.');
};
};


let avante = new Car('hyundai', 'avante', 'black');
console.log(avante.color);
console.log(avante.drive());



// class Counter {
//   constructor () {
//     this.value = 0;
//   };
//   increase (){
//     this.value++
//   };
//   decrease(){
//     this.value--
//   };
//   getValue(){
//     return this.value
//   };
// }

// let counter1 = new Counter()
// console.log(counter1.increase())
// console.log(counter1.getValue())