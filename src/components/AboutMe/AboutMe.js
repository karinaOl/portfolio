import styles from "./AboutMe.module.scss";
import {Title} from "../Title/Title";
import {Skills} from "./Skills/Skills";

export const AboutMe = () => {
    return (
        <section>
            <div className={styles.container}>
                <Title title={"ABOUT ME"} title_bg={"RESUME"}/>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Personal info</h3>
                        <p className={styles.text}>I'm a front-end developer with experience in
                            creating SPA, using React/Redux/TypeScript.
                        </p>
                        <p className={styles.text}>
                            Now I am improving my skills in this direction
                            and expanding them with new technologies. In
                            my free time I improve my English.
                            Open to your suggestions!
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Skills</h3>
                        <Skills/>
                    </div>
                </div>
            </div>
        </section>
    );
};
