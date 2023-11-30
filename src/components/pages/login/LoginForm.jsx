import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

export default function LoginForm() {

  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }

  const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
      </div>
      <input 
        value={inputValue} 
        onChange={handleChange}
        type="text" 
        placeholder="Entrez votre prénom" 
        required />
      <button>Accédez à mon espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
`;
