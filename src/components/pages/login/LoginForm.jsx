import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { IoChevronForwardCircle } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme"


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
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput 
          value={inputValue} 
          onChange={handleChange} 
          placeholder={"Entrez votre prénom"} 
          required
          Icon={<BsPersonCircle className="icon" />}
        />    
        <PrimaryButton 
          label={"Accéder à mon espace"} 
          Icon={<IoChevronForwardCircle className="icon"/>} 
        />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine}
    margin-bottom: ${theme.gridUnit *5}px;
  }

  h1 {
    color: white;
    font-size: ${theme.fonts.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.P0};
      margin-left: 10px;
    }
`