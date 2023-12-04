import styled from 'styled-components';
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...otherProps}) {
  return (
    <InputStyled >
      <div className="icon">{Icon && Icon}</div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...otherProps}
      />
    </InputStyled>
  )
}

const InputStyled  = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    border-radius: ${theme.borderRadius.round};

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size : ${theme.fonts.P1};
      margin-right: 5px;
      color: ${theme.colors.greyDark};
    }

    input {
      font-size : ${theme.fonts.P2};
      border: none;
      color: ${theme.colors.dark};
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
`