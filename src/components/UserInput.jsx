import { useState } from "react"

export default function UserInput(){
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

    return(
        <section id="user-input">

        <div className="input-group">
        <p>
        <label>Initial Investment</label>
        <input 
        onChange={(event)=>handleInput("initialInvestment", event.target.value)}
        type="number" required
        value={userInput.initialInvestment}
        />
        </p>

        <p>
        <label>Annual Investment</label>
        <input 
        onChange={(event)=>handleInput("annualInvestment", event.target.value)}
        type="number" required
        value={userInput.annualInvestment}
        />
        </p>

        </div>

        <div className="input-group">
        <p>
        <label>Expected Return</label>
        <input 
        onChange={(event)=>handleInput("expectedReturn", event.target.value)}
        type="number" required
        value={userInput.expectedReturn}
        />
        </p>

        <p>
        <label>Duration</label>
        <input 
        onChange={(event)=>handleInput("duration", event.target.value)}
        type="number" required
        value={userInput.duration}
        />
        </p>

        </div>
        </section>
    )
}
