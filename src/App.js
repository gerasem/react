import 'nes.css/css/nes.min.css';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <section className="columns">
                    {/*<Nav/>*/}
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