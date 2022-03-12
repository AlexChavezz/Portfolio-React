import { Container } from "./Container";
import styles from '../styles/bannerStyles.module.css';
import codeImage from '../assets/code.webp';

export const Banner = () => {
    return (
        <Container className={styles.bannerContainer}>
            <img src={codeImage} alt="code-image" />
            <article>
                <h2>ABOUT ME</h2>
                <p>Hi, I'm alexis a front-end developer. I am Currently studying university and i love the development world. </p>
                <button className={ styles.resumeButtonDownload }>
                    Resume ( CV ) <br   />
                    Download
                </button>
            </article>
        </Container>
    );
}