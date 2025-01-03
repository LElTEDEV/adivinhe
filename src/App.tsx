import { useEffect, useState } from "react"

import styles from './app.module.css'

import { WORDS, Challenger } from "./utils/words"

import { Tip } from "./components/Tip"
import { Header } from "./components/Header"
import { Letter } from "./components/Letter"
import { Button } from "./components/Button"
import { LetterUsed, LetterUsedProps } from "./components/LettersUsed"

export function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState('')
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenger | null>(null)

  function handleRestartGame() {
    startGame()
  }

  function startGame () {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setScore(0)
    setLetter('')
    setLetterUsed([])
  }

  function handleConfirm() {
    if(!challenge) {
      return
    }

    if(!letter.trim()) {
      return alert('Digite uma letra.')
    }

    const value = letter.toUpperCase()
    const exists = letterUsed.find(used => used.value.toUpperCase() === value)

    if (exists) {
      setLetter('')
      return alert('Você já utilizou a letra ' + value)
    }

    const hits = challenge.word.toUpperCase().split('').filter(char => char === value).length
    
    const correct = hits > 0
    const currentScore = score + hits

    setLetterUsed((prevState) => [...prevState, {value: value, correct: correct}])
    setScore(currentScore)
    setLetter('')
  }

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if (!challenge) {
      return
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame('Parabéns, você descobriu a palavra!')
      }

      if (letterUsed.length === challenge.word.length + 5) {
        return endGame('Você perdeu! :(')
      }
    }, 200)
  }, [score, letterUsed.length])


  if(!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={letterUsed.length} max={challenge.word.length + 5} onRestart={handleRestartGame}/>
        
        <Tip tip={challenge.tip}/>

        <div className={styles.word}>
          {
            challenge.word.split('').map((letter, index) => {
              const letraUsada = letterUsed.find(used => used.value.toUpperCase() === letter.toUpperCase())
              return <Letter key={index} value={letraUsada?.value} color={letraUsada?.correct ? 'correct' : 'default'}/>
            })
          }
        </div>

        <h4>Palpite</h4>

        <div className={styles.input}>
          <input type="text" autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)}/>
          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>

        <LetterUsed data={letterUsed}/>
      </main>
    </div>
  )
}

