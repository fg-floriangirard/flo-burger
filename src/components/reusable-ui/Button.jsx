import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, className, version = "normal" }) {
  return (
    <ButtonStyled className={className} version={version}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  ${(props) => props.version === "normal" && extraStylePrimary};
  ${(props) => props.version === "success" && extraStyleSuccess};

  ${({ version }) => extraStyle[version]};
`
const extraStylePrimary = css`
  width: 100%;
  border: 1px solid ${theme.colors.red};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  white-space: nowrap; 
  text-decoration: none; 
  line-height: 1;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.heavy};

  :hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.white};

    :hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    }

    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }
`

const extraStyleSuccess = css`
  background: ${theme.colors.success};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.weights.semiBold};
  cursor: pointer;
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    background: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
`
const extraStyle = {
  primary: extraStylePrimary,
  sucess: extraStyleSuccess,
}