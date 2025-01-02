import { Letter } from '../Letter'
import styles from './styles.module.css'

export function LetterUsed() {
    return <div className={styles.letterUsed}>
        <h5>Letras utilizadas</h5>

        <div>
            <Letter value='V' size='small' color='wrong'/>
            <Letter value='R' size='small' color='correct'/>
        </div>
    </div>
}