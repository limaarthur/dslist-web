import styled from "styled-components";

export const CardListGameContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 1.5rem auto 1.5rem;
  background: white;
  border-radius: 0.6rem;

    img {
      max-width: 8rem;
      max-height: 10rem;
      object-fit: fill;
      border-radius: 0.6rem 0 0 0.6rem;
    }
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 1rem 1.2rem 1rem;

  a {
    color: black;
    font-weight: bold;
    font-size: 1.6rem;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
    color: var(--color-gray-dark);
  }

  p {
    font-weight: bold;
    font-size: 1rem;
    color: var(--color-blue-medium);
  }
`;