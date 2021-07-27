import Typography from '@material-ui/core/Typography';
import {HeroList} from "../Heros/Components/HeroList";

export const MarvelScreen = () => {
    return <>
        <Typography variant="h1" component="h2">
            Marvel´s
        </Typography>
        <hr/>
        <HeroList publisher='Marvel Comics'/>
    </>
}