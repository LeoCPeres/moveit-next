import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';


export function CountDown() {

    const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountDownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>


            </div>

            <div>
                {hasFinished ? (
                    <button disabled className={styles.CountDownButton} >
                        Ciclo encerrado <img src="/icons/checked.svg" alt="" />

                    </button>
                ) : (
                        <>
                            {isActive ? (

                                <button type="button" className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`} onClick={resetCountDown}>
                                    Abandonar ciclo <p><img src="icons/close.svg" alt="" /></p>

                                </button>
                            ) : (
                                    <button type="button" className={styles.CountDownButton} onClick={startCountDown}>
                                        Iniciar um ciclo

                                    </button>
                                )}
                        </>
                    )}


            </div>
        </div>


    );
}