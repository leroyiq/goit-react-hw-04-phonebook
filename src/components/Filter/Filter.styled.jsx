import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;
  /* letter-spacing: 1px;
  word-spacing: 1px; */
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  text-align: center;
  color: #d9d9d9;
  background: transparent;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 5px -3px 0px rgba(206, 89, 55, 0);
  color: #332b0f;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 5px;
  font-family: Verdana, Geneva, sans-serif;
  margin-left: 20px;

  ::placeholder {
    color: #020d1467;
  }
  :hover,
  :focus {
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
    outline: none;
  }
`;
