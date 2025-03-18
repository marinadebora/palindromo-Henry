let data = document.getElementById('text-input');
let btn = document.getElementById('check-btn')
let result = document.getElementById('result');

const leer = ()=>{
if(data.value){
result.innerHTML = palindromo(data.value)
}else{
  alert("Please input a value")
}
data.value = '';
}

const enter = (e)=>{
e.key ==="Enter" && leer()
}
btn.addEventListener('click',leer)
data.addEventListener('keydown',enter)

const palindromo = (str)=>{
const lowerStr = str.toLowerCase();
const str_Arr = lowerStr.split("")
const result = str_Arr.filter(e=>(e>="a"&&e<="z")|| (e>="0"&&e<="9"))
let isPalindrome = [...result].reverse().join("") === result.join("")?`${str} is a palindrome.`:`${str} is not a palindrome.`
return isPalindrome
}
