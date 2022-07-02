import style from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
  return(
      <div className={style.skillsBlock}>
          <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <h2 className={style.title}>Skills</h2>
              <div className={style.skills}>
                  <Skill icon={"picture"} title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
                  <Skill icon={"picture"} title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
                  <Skill icon={"picture"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
                  <Skill icon={"picture"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
                  <Skill icon={"picture"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
                  <Skill icon={"picture"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eveniet!"}/>
              </div>
          </div>
      </div>
  )
}