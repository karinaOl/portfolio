import style from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skills}>
            <Skill icon={"js"} title={"JS"}/>
            <Skill icon={"css3"} title={"CSS"}/>
            <Skill icon={"react"} title={"REACT"}/>
            <Skill icon={"html5"} title={"HTML"}/>
        </div>
    )
}