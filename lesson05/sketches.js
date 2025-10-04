//ex1 "Hello World" теĸст хэвлэдэг фунĸц
function greet(){
  console.log("Hello world");
}
greet();


//ex2 Тооны ĸвадрат зэргийг буцаадаг 
function sq(num){
  return num*num;
}
console.log(sq(2));


//ex3 Цельсийн хэмийг Фаренгейт

function celsiusToFahrenheit(celsius){
  let fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}
console.log(celsiusToFahrenheit(20));


//ex4 тэгш өнцөгтийн талбайг олох
function area(a,b){
  return a*b;
}
console.log(area(10,3));

//ex5 Өгөгдсөн 3 оронтой тоог урвуу болгох 
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(123));


//ex6  string нь палиндром мөн эсэхийг шалгах 
function checkPalindrome(word){
  let n = word.length-1,result = "";
  while (n >= 0) {
    result += word[n]
    n--;
  }

  return word === result;
}
console.log(checkPalindrome("huurhun"));


//ex7 handgalamjiin huu tootsoh
function interestCalculate(balance,interest,period){
  // interest by year
  return balance*interest/100*period
}

console.log(interestCalculate(1000000,10,1))


//ex8 Hoyr toonii hoorondoh sanamsargui too

function randNum(a,b){
  //in this case b is greater than a
  let result = Math.floor(Math.random() * (b-a+1) +a);
  return result;
}
console.log(randNum(10,50));


//ex9 Тооны фаĸториал
function factorial(num){
  let result = 1
  while(num > 0){
    result = result * num
    num--;
  }
  return result;
}
console.log(factorial(4));


//ex10 String дэх эгшиг үсгийн тоог олох 
function findVowel(word){
  let count = 0
  for(let i = 0; i < word.length; i++){
    switch(word[i]){
      case "a": count++ ;  break;
      case "i": count++ ;  break;
      case "e": count++ ;  break;
      case "o": count++ ;  break;
      case "u": count++ ;  break;
      default: break;
    }
  }
  return count;
}

console.log(findVowel("huuoaresiuorhun"));


//ex10 chatgpt version
function findVowel1(word) {
  // Match all vowels (case-insensitive) using regex
  const vowels = word.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log(findVowel1("huuoaresiuorhun"));

//ex11 Prime number check
function isPrime(num){
  if (num == 1 || (num % 2 == 0 && num !=2 )) 
      return false;
  else {
    for(let n = 3; n < num; n+=2){
        if (num % n == 0 || num == 0){
          return false;
        }
    }
  }
  return true;
}
console.log(isPrime(1));   


