import { CardListGame } from "./components/CardListGame";
import { CardListType } from "./components/CardListType";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <CardListType />
      <CardListGame />
      <GlobalStyle />
    </>
  )
}

