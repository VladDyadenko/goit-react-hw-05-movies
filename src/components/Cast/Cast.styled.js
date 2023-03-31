import styled from '@emotion/styled';

export const Box = styled.ul`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-column-gap: 50px;
  row-gap: 10px;
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
  list-style: none;
  font-size: 20px;
`;
export const CastFoto = styled.img`
  display: block;
  width: 250px;
  border-radius: 10px;
`;
export const CastName = styled.p`
  margin: 5px 0;
  font-size: 25px;
  font-weight: 500;
`;
export const CastInfo = styled.p`
  margin: 5px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
`;
