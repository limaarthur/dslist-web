import styled from "styled-components";

export const CardGameTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2.5rem 0 0 0;
  background: var(--color-gray-medium);
`;

export const CardGameTypeList = styled.div`
  width: 100%;
  max-width: 1120px;
  border-radius: 0.4rem;
  background: var(--color-white);
  padding: 0.8rem 0 0.8rem 1.5rem;

  h1 {
    font-size: 32px;
    padding: 0.4rem 0 0.4rem 0;
  }

  ul {
    margin: 0.8rem 0 0.8rem 0;
  }

  li {
    font-weight: bold;
    margin-top: 0.4rem;

    a {
      text-decoration: none;
      color: var(--color-blue-medium);
    }
  }
`;