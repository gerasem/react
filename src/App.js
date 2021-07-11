import 'nes.css/css/nes.min.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <section className="columns">
                    <NavContainer/>
                    <div className="column-main">
                        <Route exact
                               path="/dialogs"
                               render={() => <DialogsContainer/>} />
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>} />
                        <Route path="/users"
                               render={() => <UsersContainer />} />
                    </div>
                </section>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;