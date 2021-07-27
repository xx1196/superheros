import Typography from '@material-ui/core/Typography';
import {HeroList} from "../Heros/Components/HeroList";
export const DcScreen = () => {
    return <>
        <Typography variant="h1" component="h2">
            Dc´s
        </Typography>
        <hr/>
        <HeroList publisher='DC Comics'/>
    </>
}