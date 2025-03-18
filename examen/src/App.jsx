import { useState } from 'react'
import palindromo from './Function/palindromo';

function App()
{
  const [state, setState] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (event) =>{
    event.preventDefault();
    setState(event.target.value)
  }

  const handlekey = (event) =>{
    event.keyCode === 13 && handleClick()
  }

  const handleClick = () =>{
    if (state === "") return alert("Please input a value")
    const result = palindromo(state)
    setState("")
    setResponse(result)
  }

  return (
    <main className="w-full min-h-screen relative flex flex-col items-center justify-center gap-5 ">
      <img className="h-[2.1rem] mb-2" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freeCodeCamp Logo" />
      <h1 className="text-center pt-0 text-[2.8rem] mb-[1.5rem] font-bold">Is it a Palindrome?</h1>
      
      <div className="w-[31rem] min-h-[8.2rem] flex flex-wrap items-center justify-center p-[2rem] mx-[0.8rem] bg-white shadow-lg shadow-[#002ead] rounded-[1.2rem]">
        <label className='text-[#0a0a23] mb-[2rem]' htmlFor="text-input">Enter in text to check for a palindrome:
        </label>
        <input onKeyDown={handlekey} className="w-[15.6rem] min-h-[1.8rem] text-[#0a0a23] mx-2 text-lg text-center border-b-4 border-[#5a01a7]" id="text-input" value={state} type="text" onChange={handleChange} />
        <button onClick={handleClick} className="w-[5.6rem] p-2 bg-[#5a01a7] cursor-pointer rounded-[1rem]" id="check-btn">Check</button>
        <div className="text-[#0a0a23] text-2xl" id="result">{response && response}</div>
      </div>

      <div className="flex items-center justify-center w-[31rem] min-h-[6.7rem] bg-[#00471b] mt-4 p-6 rounded-[1.2rem] ">
        <p className="text-center text-[1.3rem]">
          <span role="img" aria-label="light-bulb">💡</span>
          A <dfn>palindrome</dfn> is a word or sentence that's spelled the same
          way both forward and backward, ignoring punctuation, case, and
          spacing.
        </p>
      </div>
    </main>
  )
}

export default App