import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 69420,
        annualInvestment: 420,
        expectedReturn: 8,
        duration: 10
    })

    const inputIsValid = userInput.duration > 0

    function handleInput(inputIdentifier, newValue){
        setUserInput(prev=> {
            return{
                ...prev,
                [inputIdentifier]: +newValue // this + forces the value to be converted to a number
            }
        })
    }

  return (
      <>
      <Header />
      <UserInput onChange={handleInput} userInput={userInput}/>
      {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
      </>
  )
}

export default App
