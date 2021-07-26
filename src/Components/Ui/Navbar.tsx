import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const Navbar = () => {
    const history = useHistory();

    const goMarvel = () => {
        history.push('/')
    }
    const goDc = () => {
        history.push('/dc')
    }
    const goLogin = () => {
        history.push('/login')
    }

    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Heros App
                </Typography>
                <Button onClick={goMarvel} color="inherit">Marvel</Button>
                <Button onClick={goDc} color="inherit">DC</Button>
                <Button onClick={goLogin} color="inherit">LogOut</Button>
            </Toolbar>
        </AppBar>
    </div>
}