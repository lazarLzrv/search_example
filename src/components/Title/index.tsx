import styles from "./styles.module.scss";

type TitleProps = { text: string };

const Title = ({ text }: TitleProps) => {
    return (
        <>
            <h3 className={styles.title}>{text}</h3>
            <p className={styles.hint}>
                Hint:{" "}
                <i>
                    type 'react', 'redux', or 'npm'! <br />
                    You can also use the arrows once its open.
                </i>
            </p>
        </>
    );
};

export default Title;
