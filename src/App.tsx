import { Header } from './components/Header'
import styles from './styles/global.module.scss'

export const App = () => {

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <Header />
            </div>
            <h1>Hello world</h1>
        </div>
    );
}