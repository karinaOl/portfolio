import style from "./Home.module.scss"
import myPhoto from "../../assets/image/my_photo.jpg"


export const Home = () => {
    return (
        <section className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.photo}>
                    <img src={myPhoto} alt={"Karina Olkovich"}/>
                </div>
                <div className={style.textContainer}>
                    <h1 className={style.title}>I'm Karina Olkovich</h1>
                    <p className={style.text}>Frontend developer</p>
                </div>
            </div>
        </section>
    )
}