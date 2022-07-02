import style from "./MyProjects.module.css"
import styleContainer from "./../../common/styles/Container.module.css"
import {Project} from "./Project/Project";

export const MyProjects = () => {
    return(
        <div className={style.myProjectsBlock}>
            <div className={`${style.myProjectsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"social_net"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio."}/>
                    <Project title={"counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                    <Project title={"counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus?"}/>
                </div>
            </div>
        </div>
    )
}