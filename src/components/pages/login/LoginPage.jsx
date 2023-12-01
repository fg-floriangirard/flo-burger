import { styled } from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
        <Logo className={"login-page-logo"} />
        <LoginForm />   
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url("/images/burger-and-fries-background.jpg") center/cover;

  .login-page-logo {
    transform: scale(2.5);
  }
`