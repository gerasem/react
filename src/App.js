import 'nes.css/css/nes.min.css';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <section className="columns">
                    <NavContainer/>
                    <div className="column-main">
                        <Route exact
                               path="/dialogs"
                               render={() => <DialogsContainer/>}
                        />
                        <Route path="/profile"
                               render={() => <Profile/>}
                        />
                    </div>
                </section>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;