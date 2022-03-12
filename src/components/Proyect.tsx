import styles from '../styles/skillsSetStyles.module.css';

interface ProyectProps {
    srcImage: string, 
    imageAlt: string,
    name: string,
}

export const Proyect = ({ srcImage, imageAlt, name}:ProyectProps) => {
    return (
        <article className={styles.tecnology}>
            <img src={srcImage} alt={imageAlt} />
            <span>{ name }</span>
        </article>
    );
}