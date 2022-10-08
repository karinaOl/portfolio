import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
    return(
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.formControl}>
                    <input className={styles.formField} placeholder={"YOUR NAME"}/>
                </div>
                <div className={styles.formControl}>
                    <input className={styles.formField} placeholder={"YOUR EMAIL"}/>
                </div>
                <div className={styles.formControl}>
                    <input className={styles.formField} placeholder={"YOUR SUBJECT"}/>
                </div>
                <div className={styles.formControl}>
                    <textarea className={styles.formField} placeholder={"YOUR MESSAGE"} rows={5}/>
                </div>
                <div className={styles.footerBottom}>
                    <button>SEND</button>
                </div>
            </form>
        </div>
    )
}