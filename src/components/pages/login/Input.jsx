import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Input({ value, onChange, Icon, ...otherProps}) {
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
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    border-radius: 5px;

    .icon {
      font-size : 20px;
      margin-right: 8px;
      color: #353738;
    }

    input {
      font-size : 16px;
      border: none;
      color: #17161a;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
`;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.element,
  otherProps: PropTypes.object,
};
