import style from "./Nav.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Nav = () => {
  return(
      <div className={style.nav}>
          <div className={style.navIcon}>
              <a href="#home"><FontAwesomeIcon icon={faHouse}/></a>
          </div>
          <div  className={style.navIcon}>
              <a href="#about"><FontAwesomeIcon icon={faUser}/></a>
          </div>
          <div  className={style.navIcon}>
              <a href="#projects"><FontAwesomeIcon icon={faBriefcase}/></a>
          </div>
          <div  className={style.navIcon}>
              <a href="#contacts"><FontAwesomeIcon icon={faEnvelope}/></a>
          </div>
      </div>
  )
}