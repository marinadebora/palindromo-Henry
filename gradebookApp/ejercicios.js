/* 
Step 1
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores. */

function getAverage(scores)
{
  let totalAlumnos = scores.length
  return scores.reduce((e, i) => e + i) / totalAlumnos
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/* 
Step 2
Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score. */

function getGrade(score)
{
  return score === 100 ? "A++" :
   score < 100 && score >= 90 ? "A" :
   score < 90 && score >= 80 ? "B" : 
   score < 80 && score >= 70 ? "C" : 
   score < 70 && score >= 60 ? "D" : "F"
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/* 
Step 3
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not. */

function hasPassingGrade(score) {
  return getGrade(score) != "F"
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

/* 
Step 4
Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student. */

function studentMsg(totalScores, studentScore) {
  let promedio = getAverage(totalScores);
  let calificacion = getGrade(studentScore)
  let aprovado = calificacion != "F"? "You passed the course.":"You failed the course."
  return `Class average: ${promedio}. Your grade: ${calificacion}. ${aprovado}`
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); 

  

/* A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.  */
  const palindromo = (str)=>{
    const lowerStr = str.toLowerCase();
    const str_Arr = lowerStr.split("")
    const result = str_Arr.filter(e=>(e>="a"&&e<="z")|| (e>="0"&&e<="9"))
    let isPalindrome = [...result].reverse().join("") === result.join("")?`${str} is a palindrome.`:`${str} is not a palindrome.`
    return isPalindrome
    }
  console.log(palindromo("eye"))
  console.log(palindromo("_eye"))
  console.log(palindromo("race"))
  console.log(palindromo("not a palindrome"))
  console.log(palindromo("A man, a plan, a canal. Panama"))
  console.log(palindromo("never odd or even"))
  console.log(palindromo("nope"))
  console.log(palindromo("almostomla"))