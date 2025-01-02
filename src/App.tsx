import { Header } from "./components/Header"

import styles from './app.module.css'
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Button } from "./components/Button"
import { LetterUsed } from "./components/LettersUsed"

export function App() {

  function handleRestartGame() {
    alert('Reiniciar o jogo.')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={8} max={10} onRestart={handleRestartGame}/>
        
        <Tip tip="Uma das linguagens de programação dinâmica mais utilizada"/>

        <div className={styles.word}>
          <Letter value="R"/>
          <Letter value="E"/>
          <Letter value="A"/>
          <Letter value="C"/>
          <Letter value="T"/>
        </div>

        <h4>Palpite</h4>

        <div className={styles.input}>
          <input type="text" autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar"/>
        </div>

        <LetterUsed />
      </main>
    </div>
  )
}

