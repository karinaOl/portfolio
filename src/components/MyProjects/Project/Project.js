import style from "./Project.module.scss"

export const Project = (props) => {
    const thumbImageStyle = {
        backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20210912/pngtree-wish-list-hand-account-todolist-image_865671.jpg")`,
    };

    return (
        <div className={style.project}>
            <div className={style.thumb}>
                <div className={style.iconsContainer} style={thumbImageStyle}>
                    <a href={"click"} className={style.showMore}>watch</a>
                </div>
            </div>
            <div className={style.description}>
                <h3 className={style.title}>{props.title}</h3>
            </div>
        </div>
    )
}
