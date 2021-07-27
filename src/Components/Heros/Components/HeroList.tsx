import {GetHeroesByPublisher} from "../../../Selectors/getHeroesByPublisher";
import {FC} from "react";
import {HeroListProps} from "../../../Interfaces/PropsInterfaces";
import {Hero} from "../../../Interfaces/ModelsInterfaces";
import * as PropTypes from 'prop-types'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {HeroItem} from "./HeroItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);


export const HeroList: FC<HeroListProps> = ({publisher}) => {
    const classes = useStyles();

    const heroes: Hero[] = GetHeroesByPublisher(publisher);

    return <List className={classes.root}>
        {
            heroes.map((hero: Hero) => (
                <HeroItem hero={hero}/>
            ))
        }
    </List>
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};