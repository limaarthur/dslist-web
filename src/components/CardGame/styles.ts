import styled from "styled-components";

export const CardGameContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 1.5rem auto 1.5rem;
  background: white;
  border-radius: 0.6rem;

  div.game-image {
    padding: 1rem;
  }

  div.game-content {
    display: flex;
  }

  div.game-details {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1rem 0;

    p {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-blue-medium);
    }

    h1 {
      font-size: 32px;
      margin: 0 0 1rem;
    }

    strong {
      color: var(--color-blue-medium);
    }

    b {
      color: black;
    }
  }

  div.game-description {
    padding: 0 1rem;

    p {
      font-size: 18px;
      font-weight: 400;
      color: var(--color-gray-dark);
    }
  }
`;

