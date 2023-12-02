import { styled } from "styled-components"
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

export default function Main() {
  const {isAdminMode, setIsAdminMode} = useContext(OrderContext)

  return (
  <MainStyled className="main">
    {/* <div className="basket">Panier</div> */}
    <div className="menu-and-admin">
      <Menu />
      {isAdminMode && <Admin />}
    </div>
  </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  overflow-y: scroll;

  /* .basket {
    background: #d69dd6;
  } */
  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`