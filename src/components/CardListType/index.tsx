import { CardGameTypeContainer, CardGameTypeList } from "./styles";

export function CardListType() {
  return (
    <CardGameTypeContainer>
      <CardGameTypeList>
        <h1>Minhas coleções</h1>
        <ul>
          <li><a href="#">Aventura e RPG</a></li>
          <li><a href="#">Jogos de plataforma</a></li>
        </ul>
      </CardGameTypeList>
    </CardGameTypeContainer>
  )
}