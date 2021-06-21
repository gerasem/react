import 'nes.css/css/nes.min.css';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <section className="columns">
                    <Nav/>
                    <div className="column-main">
                        {/*<Route exact path="/dialogs" component={Dialogs}/>*/}
                        {/*<Route path="/profile" component={Profile}/>*/}

                        <Route exact path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                        <Route path="/profile" render={ () => <Profile posts={props.posts}/> }/>
                    </div>
                </section>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;