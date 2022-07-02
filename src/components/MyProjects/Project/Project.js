import s from "./Project.module.css"

export const Project = (props) => {
    return(
        <div className={s.project}>
            <div className={s.iconsContainer}>
                <a href={"click"}>watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
              {props.description}
          </span>
        </div>
    )
}