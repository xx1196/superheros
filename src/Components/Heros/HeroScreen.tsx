import {useParams} from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import {HeroScreenParams} from "../../Interfaces/ParamsInterfaces";

export const HeroScreen = () => {
    const {id} = useParams<HeroScreenParams>();

    return <Typography variant="h1" component="h2">
        Hero´s # {id}
    </Typography>
}