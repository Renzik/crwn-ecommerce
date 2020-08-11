import styled, { css } from 'styled-components';

export const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const invertedStyles = css`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  return props.inverted ? invertedStyles : buttonStyles;
};

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  outline: none;
  ${getButtonStyles}
`;
