import { styled } from "styled-components"
import { Link, useParams } from "react-router-dom";


export default function OrderPage() {

  const { username }  = useParams()

  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
F
  .container {
    background: red;
    height: 95vh;
    width: 1400px;
  }
`;
