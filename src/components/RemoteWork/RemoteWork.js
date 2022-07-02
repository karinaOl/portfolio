import style from "./RemoteWork.module.css"
import styleContainer from "./../../common/styles/Container.module.css"

export const RemoteWork = () => {
    return(
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.containerRemoteWork}`}>
                <h3>I am opened for remote work proposals</h3>
                <button>Hire me</button>
            </div>
        </div>
    )
}