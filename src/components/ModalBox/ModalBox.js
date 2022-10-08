import style from "./ModalBox.module.scss"

export const ModalBox = ({children}) => {
    return (
        <>
            <div/>
            <div className={style.wrap}>
                <div className={style.container}>
                    <div className={style.box}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}