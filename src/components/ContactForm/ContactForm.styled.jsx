import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  gap: 10px;
  background-color: #c7dfb832;
  border: none;
  border: 3px solid #1c6ea4;
  border-radius: 19px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  text-align: center;
  color: #d9d9d9;
  background: transparent;
  text-shadow: -1px -1px 1px rgba(29, 83, 128, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 5px -3px 0px rgba(206, 89, 55, 0);
  color: #332b0f;
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 15px;

  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;

  :hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }
  :active {
    position: relative;
    top: 1px;
  }
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

  ::placeholder {
    color: #020d1467;
  }
  :hover,
  :focus {
    box-shadow: 0px 0px 5px rgba(75, 180, 241, 0.75);
    outline: none;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
`;
