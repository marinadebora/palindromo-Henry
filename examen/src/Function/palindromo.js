const palindromo = (str)=>{
  const lowerStr = str.toLowerCase();
  const str_Arr = lowerStr.split("")
  const result = str_Arr.filter(e=>(e>="a"&&e<="z")|| (e>="0"&&e<="9"))
  let isPalindrome = [...result].reverse().join("") === result.join("")?`${str} is a palindrome.`:`${str} is not a palindrome.`
  return isPalindrome
  }
  export default palindromo