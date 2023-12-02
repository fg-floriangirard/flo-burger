import { styled } from "styled-components"
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../../reusable-ui/Logo"
import { theme } from "../../../../theme";
import { pageRefresh } from "../../../../utils/window";

export default function Navbar() {

  return (
    <NavbarStyled>
      <Logo className="order-page-logo" onClick={() => pageRefresh()}/>
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .order-page-logo {
    cursor: pointer;
  }
`