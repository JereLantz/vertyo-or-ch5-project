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

    function handleInput(inputIdentifier, newValue){
        setUserInput(prev=> {
            return{
                ...prev,
                [inputIdentifier]: newValue
            }
        })
    }

  return (
      <>
      <Header />
      <UserInput onChange={handleInput} userInput={userInput}/>
      <Results input={userInput}/>
      </>
  )
}

export default App
