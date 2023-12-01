import { styled } from "styled-components"
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <Profile/>
      {/* <div className="admin-button">Admin Button</div> */}
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    /* .admin-button {
      background: yellow;
      align-items: center;
    } */

    .user-profile {
      background: lightblue;
    }
`
