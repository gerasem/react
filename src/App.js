import 'nes.css/css/nes.min.css';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <section className="columns">
                    <Nav state={props.state.sidebar}/>
                    <div className="column-main">
                        {/*<Route exact path="/dialogs" component={Dialogs}/>*/}
                        {/*<Route path="/profile" component={Profile}/>*/}

                        <Route exact
                               path="/dialogs"
                               render={ () => <Dialogs
                                   state={props.state.dialogsPage}/> }/>
                        <Route path="/profile"
                               render={ () => <Profile
                                   state={props.state.profilePage}
                                   addPost={props.addPost}
                               /> }/>
                    </div>
                </section>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;