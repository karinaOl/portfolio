import style from "./Skill.module.scss"

export const Skill = (props) => {

    const iconStyle = `${style.icon} ${style[props.icon]}`

  return(
      <div className={style.skill}>
          <div className={iconStyle}/>
          <h3>{props.title}</h3>
      </div>
  )
}