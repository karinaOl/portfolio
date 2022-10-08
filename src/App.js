import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {MyProjects} from "./components/MyProjects/MyProjects";
import {Contacts} from "./components/Contasts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <AboutMe/>
                <MyProjects/>
                <Contacts/>
                <Footer/>
            </main>
        </div>
    );
}

export default App;
