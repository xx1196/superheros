import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginScreen} from "../Components/Login/LoginScreen";
import {DashboardRouter} from "./Childs/DashboardRouter";

export const AppRouter = () => {
    return <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={LoginScreen}/>
                <Route path="/" component={DashboardRouter}/>
            </Switch>
        </div>
    </Router>
}