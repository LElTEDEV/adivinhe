import { Header } from "./components/Header"

import styles from './app.module.css'

export function App() {

  function handleRestartGame() {
    alert('Reiniciar o jogo.')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={8} max={10} onRestart={handleRestartGame}/>
      </main>
    </div>
  )
}

