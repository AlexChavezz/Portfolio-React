import { Container } from './Container';
import styles from '../styles/headerStyles.module.css';
import Logo from '../assets/logo.png';

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Container className={ styles.customContainerStyles } >
                <article className={ styles.headerTitleContainer }>
                    <img src={ Logo } alt="logo" />
                    <h1 className={styles.headerTitle}>ALEXIS´S PORTFOLIO</h1>
                </article>
                <article className={ styles.navegationContainer }>
                    <nav className={ styles.navegation }>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Example</a>
                    </nav>
                </article>
            </Container>
        </header>
    );
}
