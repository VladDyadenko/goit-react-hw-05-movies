import styled from '@emotion/styled';

export const BoxMovie = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: 20px;
  form {
    display: flex;
  }

  input {
    width: 400px;
    height: 20px;
    border: solid 1px #081c4b;
    padding: 5px;
    font-size: 16px;
  }
`;
export const BtnForm = styled.button`
  border: none;
  width: 140px;
  height: 32px;
  padding: 0 5px;
  cursor: pointer;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #ffffff;
  background-color: #081c4b;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #044813;
  }
`;
