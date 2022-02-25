import styles from './styles.module.scss'
import { } from 'react-icons'

interface IImcProps {
    data: {
        title: string;
        color: string;
        icon: 'down' | 'up'
        imc: number[];
        yourImc?: number;
    }
}

export const Imc = ({ data }: IImcProps) => {

    return (
        <div className={styles.containerImcLeves}>
            <h1>{data.title}</h1>
        </div>
    );
}