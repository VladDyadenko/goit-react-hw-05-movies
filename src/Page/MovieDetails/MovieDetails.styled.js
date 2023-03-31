import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
`;
export const Box = styled.div`
  display: flex;
  padding: 10px 0;
`;
export const Btn = styled.button`
  border: none;
  width: 300px;
  padding: 0 5px;
  cursor: pointer;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-radius: 4px;
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
export const CardFilm = styled.img`
  display: block;
  margin-right: 10px;
  width: 300px;
`;
export const TitleMovie = styled.h1`
  margin: 0;
  font-size: 30px;
  color: #081c4b;
`;

export const BoxBtn = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 25px;
  display: flex;
  align-items: center;
  li {
    margin-right: 10px;
  }
`;

export const BtnInfo = styled.button`
  border: none;
  width: 140px;
  height: 40px;
  padding: 0 5px;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-radius: 4px;
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
export const MovieDescr = styled.h2`
  font-size: 22px;
  margin: 50px 0 10px 0;
`;
export const MovieInfo = styled.h2`
  width: 400px;
  font-size: 15px;
`;
