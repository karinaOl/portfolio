import styles from "./MyProjects.module.scss";
import {Project} from "./Project/Project";
import {Title} from "../Title/Title";

export const MyProjects = () => {
    return (
        <section>
            <div className={styles.container}>
                <Title title={"MY PROJECTS"} title_bg={"WORKS"}/>
                <div className={styles.projects}>
                    <Project title={"social_net"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio."}/>
                    <Project title={"counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                </div>
            </div>
        </section>
    )
}