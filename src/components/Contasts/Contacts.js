import styles from "./Contacts.module.scss"
import {Title} from "../Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {ContactForm} from "./ContactForm/ContactForm";


export const Contacts = () => {
    return (
        <section>
            <div className={styles.container}>
                <Title title={"GET IN TOUCH"} title_bg={"CONTACT"}/>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h4>CONTACTS</h4>
                        <div className={styles.contactsList}>
                            <div className={styles.contact}>
                                <FontAwesomeIcon icon={faPhone}/>
                                <span>+375 29 899-64-18</span>
                            </div>
                            <div className={styles.contact}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <a href={"e-mail"}>karina.olkok@yandex.ru</a>
                            </div>
                        </div>
                        <h4>FOLLOW ME</h4>
                        <div className={styles.containerIcons}>
                            <div className={styles.icon}>
                                <a href={"icon"}><FontAwesomeIcon icon={faTelegram}/></a>
                            </div>
                            <div className={styles.icon}>
                                <a href={"icon"}><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                            <div className={styles.icon}>
                                <a href={"icon"}><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4>SEND ME A NOTE</h4>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}