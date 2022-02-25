import { useState } from 'react';
import { toast } from 'react-toastify';
import { Header } from './components/Header'
import { Imc } from './components/Imc';
import { calculateImc, ILevels, levels } from './helpers/imc';
import styles from './styles/global.module.scss'

export const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [showLevel, setShowLevel] = useState<ILevels | null>(null);




    const handleCalculateIMC = () => {
        if (heightField && weightField) {
            setShowLevel(calculateImc(heightField, weightField));

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
                    {!showLevel &&
                        <div className={styles.containerGrid}>
                            {levels.map((imc, index) => (
                                <Imc key={index} data={imc} />
                            ))}
                        </div>
                    }
                    {showLevel &&
                        <div className={styles.containerRight_Big}>
                            <div className={styles.containerRight_Big_Arrow}>

                            </div>
                            <Imc data={showLevel} />
                        </div>
                    }
                </section>
            </main>
        </div>
    );
}