import { Container } from "./Container";
import { Proyect } from "./Proyect";
import styles from '../styles/skillsSetStyles.module.css';
import reactLogo from '../assets/react.webp';
import javascriptLogo from '../assets/icons8-javascript.webp';
import css3Logo from '../assets/css-3.webp';
import githubLogo from '../assets/icons8-github-60.webp';
import htmlLogo from '../assets/html-5.webp';
import firebaseLogo from '../assets/firebaseLogo.webp';
import nodejsLogo from '../assets/icons8-node-js-96.webp';
import mysqlLogo from '../assets/MySQL-logo.webp';
import typescriptLogo from '../assets/icons8-typescript-48.webp';

export const SkillSet = () => {
    return (
        <Container className={styles.customContainerStyles}>

            <Proyect
                srcImage={htmlLogo}
                imageAlt="hmtl-logo"
                name="Html"
            />
            <Proyect
                srcImage={css3Logo}
                imageAlt="css3-logo"
                name="Css3"
            />
            <Proyect
                srcImage={javascriptLogo}
                imageAlt="javascript-logo"
                name="Javascript"
            />
            <Proyect
                srcImage={typescriptLogo}
                imageAlt="typescript-logo"
                name="Typescript"
            />
            <Proyect
                srcImage={reactLogo}
                imageAlt="react-logo"
                name="React"
            />
            <Proyect
                srcImage={githubLogo}
                imageAlt="github-logo"
                name="Github"
            />
            <Proyect
                srcImage={firebaseLogo}
                imageAlt="firebase-logo"
                name="Firebase"
            />
            <Proyect
                srcImage={nodejsLogo}
                imageAlt="nodejs-logo"
                name="Node Js"
            />
            <Proyect
                srcImage={mysqlLogo}
                imageAlt="mysql-logo"
                name="Mysql"
            />
        </Container>
    );
}