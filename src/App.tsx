import { useState } from 'react';
import { toast } from 'react-toastify';
import { Header } from './components/Header'
import styles from './styles/global.module.scss'

export const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);


    const handleCalculateIMC = () => {
        if (heightField && weightField) {

        } else {
            toast.warning("Digite todos os campos.")
        }

    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.containerMain}>
                <section className={styles.containerLeft}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

                    <input
                        placeholder='Digite a sua altura. EX: 1.5  (em metrôs)'
                        type="number"
                        value={heightField > 0 ? heightField : ''}
                        onChange={(e) => setHeightField(parseFloat(e.target.value))}
                    />
                    <input
                        placeholder='Digite o seu peso. EX: 76.3  (em kg)'
                        type="number"
                        value={weightField > 0 ? weightField : ''}
                        onChange={(e) => setWeightField(parseFloat(e.target.value))}
                    />

                    <button onClick={handleCalculateIMC}>Calcular</button>
                </section>
                <section className={styles.containerRight}>
                    ...
                </section>
            </main>
        </div>
    );
}