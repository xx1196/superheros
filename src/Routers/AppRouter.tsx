import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Navbar} from "../Components/Ui/Navbar";
import {MarvelScreen} from "../Components/Marvel/MarvelScreen";
import {DcScreen} from "../Components/Dc/DcScreen";
import {LoginScreen} from "../Components/Login/LoginScreen";

export const AppRouter = () => {
    return <Router>
        <Navbar/>

        <Switch>
            <Route exact path="/" component={MarvelScreen}/>
            <Route exact path="/dc" component={DcScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
        </Switch>
    </Router>
}