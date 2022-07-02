import style from "./Footer.module.css"
import styleContainer from "./../../common/styles/Container.module.css"

export const Footer = () => {
  return(
      <div className={style.footer}>
          <div className={`${styleContainer.container} ${style.containerFooter}`}>
              <h3 className={style.title}>Olkovich Karina</h3>
              <div>
                  <a href={"icon"} className={style.socialIcon}>icon</a>
                  <a href={"icon"} className={style.socialIcon}>icon</a>
                  <a href={"icon"} className={style.socialIcon}>icon</a>
                  <a href={"icon"} className={style.socialIcon}>icon</a>
              </div>
              <span>2022 All rights reserved</span>
          </div>
      </div>
  )
}