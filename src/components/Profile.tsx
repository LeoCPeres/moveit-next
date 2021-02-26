import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const nextLevel = level + 1;

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/69376610?s=400&u=8415ef8ffde51bd8223a72d1c00bf8c4a866e56b&v=4" alt="Leonardo Peres" />
            <div>
                <strong>Leonardo Peres</strong>

                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level} | Próximo level: {nextLevel}
                </p>
            </div>
        </div>
    );
}