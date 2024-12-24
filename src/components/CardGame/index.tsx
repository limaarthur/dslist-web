import { CardGameContainer } from "./styles";
import Game from "../../assets/game.png"

export function CardGame() {
  return (
    <CardGameContainer>
      <div className="game-content">
        <div className="game-image">
          <img src={Game} alt="Imagem do Game"/>
        </div>
        <div className="game-details">
          <p>2012</p>
          <h1>Mass Effect Trillogy</h1>
          <strong>Genre: <b>Role-playing (RPG), Adventure</b></strong>
          <strong>Platforms: <b>XBox, Playstation, PC</b></strong>
        </div>
      </div>
      <div className="game-description">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </CardGameContainer>
  )
}