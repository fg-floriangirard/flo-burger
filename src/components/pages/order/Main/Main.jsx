import { styled } from "styled-components"
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
  <MainStyled className="main">
    {/* <div className="basket">Panier</div> */}
    <Menu />
  </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;

  display: grid;
  // To use for basket
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  /* .basket {
    background: #d69dd6;
  } */
`;
