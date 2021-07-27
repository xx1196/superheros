import {GetHeroesByPublisher} from "../../../Selectors/getHeroesByPublisher";
import {FC} from "react";
import {HeroListProps} from "../../../Interfaces/PropsInterfaces";
import {Hero} from "../../../Interfaces/ModelsInterfaces";
import * as PropTypes from 'prop-types'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {HeroItem} from "./HeroItem";

export const HeroList: FC<HeroListProps> = ({publisher}) => {

    const heroes: Hero[] = GetHeroesByPublisher(publisher);

    return <>
        <div>
            <Container>
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h2"
                    align="center"
                >
                    React Material UI Example{" "}
                </Typography>
                <Grid container spacing={3}>
                    {
                        heroes.map((hero) => (
                            <HeroItem key={hero.id} hero={hero}/>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    </>
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};