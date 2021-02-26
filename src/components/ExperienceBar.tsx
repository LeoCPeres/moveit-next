import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel, level, activeChallenge } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;




    return (
        <header className={styles.experienceBar}>

            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`, transitionDuration: '0.5s' }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`, transitionDuration: '0.3s' }}>{currentExperience} xp</span>

            </div>
            <span>{experienceToNextLevel} xp</span>

        </header>
    );
}