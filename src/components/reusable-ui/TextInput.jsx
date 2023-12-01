import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, ...otherProps}) {
  return (
    <InputStyled >
      {Icon && Icon}
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
      font-size : ${theme.fonts.P1};
      margin-right: 8px;
      color: ${theme.colors.greyDark};
    }

    input {
      font-size : ${theme.fonts.P0};
      border: none;
      color: ${theme.colors.dark};
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
`;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.element,
  otherProps: PropTypes.object,
};
