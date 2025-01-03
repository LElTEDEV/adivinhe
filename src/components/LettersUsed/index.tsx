import { Letter } from '../Letter'
import styles from './styles.module.css'

export type LetterUsedProps = {
    value: string
    correct: boolean
}

type Props = {
    data: LetterUsedProps[]
}

export function LetterUsed({data}: Props) {
    return <div className={styles.letterUsed}>
        <h5>Letras utilizadas</h5>

        <div>
            {data.map(({value, correct}) => <Letter value={value} color={correct ? 'correct' : 'wrong'} key={value}/>)}
        </div>
    </div>
}