import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import {Navbar} from "../../Components/Ui/Navbar";
import {MarvelScreen} from "../../Components/Marvel/MarvelScreen";
import {DcScreen} from "../../Components/Dc/DcScreen";
import {HeroScreen} from "../../Components/Heros/HeroScreen";

export const DashboardRouter = () => {
    return <Router>
        <>
            <Navbar/>

            <Switch>
                <Route exact path="/marvel" component={MarvelScreen}/>
                <Route exact path="/hero/:id" component={HeroScreen}/>
                <Route exact path="/dc" component={DcScreen}/>
                <Redirect to="/marvel"/>
            </Switch>
        </>
    </Router>
}