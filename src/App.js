import 'nes.css/css/nes.min.css';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <section className="columns">
                    <Nav state={props.state.sidebar}/>
                    <div className="column-main">
                        {/*<Route exact path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>*/}
                        <Route exact
                               path="/dialogs"
                               render={() => <DialogsContainer store={props.store}/>}
                        />
                        <Route path="/profile"
                               render={() => <Profile store={props.store}/>}
                        />
                    </div>
                </section>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;