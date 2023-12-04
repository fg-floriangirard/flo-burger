import styled from 'styled-components';
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid ${theme.colors.red};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  white-space: nowrap; 
  text-decoration: none; 
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
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
    border: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
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
