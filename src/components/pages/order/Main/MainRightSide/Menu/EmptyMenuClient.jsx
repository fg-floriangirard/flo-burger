import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuStyled>
      <span className="title">Alerte succès !</span>
      <span className="description">Nos étagères se sentent un peu vides, mais pas de panique...</span>
      <span className="description">On remet le turbo en cuisine 🚀</span>
      <span className="description">Gardez l’œil ouvert, de nouvelles surprises arrivent ! 😉</span>
      
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // permet de diminuer la largeur du bouton resetMenu

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.P4};
    margin-top: 20px;
  }
`
