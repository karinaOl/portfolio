import style from "./Title.module.scss"


export const Title = (props) => {
    return (
        <div className={style.titleSection}>
            <h2 className={style.title}>{props.title}</h2>
        </div>
    )
}