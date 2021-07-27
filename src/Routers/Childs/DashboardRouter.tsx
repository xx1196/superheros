import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import {Navbar} from "../../Components/Ui/Navbar";
import {MarvelScreen} from "../../Components/Marvel/MarvelScreen";
import {DcScreen} from "../../Components/Dc/DcScreen";
import {HeroScreen} from "../../Components/Heros/HeroScreen";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);
export const DashboardRouter = () => {
    const classes = useStyles();

    return <Router>
        <>
            <Navbar/>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={classes.paper}>
                            <Switch>
                                <Route exact path="/marvel" component={MarvelScreen}/>
                                <Route exact path="/hero/:id" component={HeroScreen}/>
                                <Route exact path="/dc" component={DcScreen}/>
                                <Redirect to="/marvel"/>
                            </Switch>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </>
    </Router>
}