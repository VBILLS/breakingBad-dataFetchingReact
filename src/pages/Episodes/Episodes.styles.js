import styled from 'styled-components';

export const EpisodesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EpisodesMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  grid-auto-flow: row;
`;

export const CharacterCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: auto;
`;
