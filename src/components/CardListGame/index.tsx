import { CardListGameContainer, GameContent } from "./styles";
import Game from "../../assets/game.png"

export function CardListGame() {
  return (

    <CardListGameContainer>
      <img src={Game} alt="Imagem do Game"/>
      <GameContent>
        <a href="#">Mass Effect Trilogy</a>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </strong>
        <p>2012</p>
      </GameContent>
    </CardListGameContainer>
  )
}