import style from "./Contacts.module.css"
import styleContainer from "./../../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.containerStyle}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.formContainer}>
                    <input placeholder={"Enter Your name"}/>
                    <input placeholder={"Enter Your phone"}/>
                    <textarea placeholder={"Enter Your message"}/>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}