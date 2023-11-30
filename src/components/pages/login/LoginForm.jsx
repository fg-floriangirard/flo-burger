import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginForm() {

  const [inputValue, setInputValue] = useState("Flo")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
  }

  const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input 
        value={inputValue} 
        onChange={handleChange}
        type="text" 
        placeholder="Entrez votre prénom..." 
        required />
      <button>Accédez à votre espace</button>
      <Link to="/order">Vers OrderPage</Link>
    </form>
  )
}
