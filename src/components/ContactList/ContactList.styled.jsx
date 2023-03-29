import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  fill: #1b528a;
  /* padding: 3px 4px; */
  /* text-decoration: none;
  text-shadow: 0px 1px 0px #143c64; */

  :hover {
    scale: 1.2;
    fill: #8a311b;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const PhoneItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
  padding: 10px 0;
`;

export const NamePhone = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 20px;
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
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 5px -3px 0px rgba(206, 89, 55, 0);
  color: #332b0f;
`;
