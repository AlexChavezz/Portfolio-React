import styles from '../styles/footerStyles.module.css';
import { Container } from './Container';
import linkedinLogo from '../assets/icons8-linkedin-48.webp';
import githubLogo from '../assets/icons8-github-60.webp';


export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <Container className={styles.customContainerStyles}>
                <article className={styles.socialContainer}>
                    <div>
                        <a href="https://www.linkedin.com/in/alexis-contreras-chavez-840810200/" target="__black">
                            <img src={linkedinLogo} alt="linkedin" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AlexChavezz" target="__blank">
                            <img src={githubLogo} alt="github" />
                        </a>
                    </div>
                </article>
                <article>
                    <p className={styles.footerText}> Developed and designed by Alexis Chávez.<br />
                        &copy; 2022 All rights reserved.</p>
                </article>
            </Container>
        </footer>
    );
}