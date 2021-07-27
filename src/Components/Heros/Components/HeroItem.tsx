import {FC} from "react";
import {HeroItemProps} from "../../../Interfaces/PropsInterfaces";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Hero} from "../../../Interfaces/ModelsInterfaces";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    button: {
        margin: 'auto'
    }
});

export const HeroItem: FC<HeroItemProps> = ({hero, showMore = true}) => {
    const classes = useStyles();

    const history = useHistory();

    const goToHero = (hero: Hero) => {
        history.push(`/hero/${hero.id}`);
    }

    return <Grid item xs={12} sm={4} key={hero.id}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={`/assets/heroes/${hero.id}.jpg`}
            />
            <CardContent>
                <Typography color="primary" variant="h5">
                    {hero.superhero}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                    Aparece por primera vez en <Typography color="primary"
                                                           component="p">{hero.first_appearance}</Typography> bajo el
                    alter ego
                    de <Typography color="primary" component="p">{hero.alter_ego}</Typography>
                </Typography>

                {
                    (hero.alter_ego !== hero.characters) &&
                    <>
                        <Typography component="h2">
                            Otras apariciones como:
                        </Typography>

                        <Typography variant="body2" color="secondary" component="p">
                            {hero.characters}
                        </Typography>
                    </>
                }
            </CardContent>
            {
                showMore && <CardActions>
                    <Button className={classes.button} onClick={() => goToHero(hero)} size="small" color="primary">
                        Ver mas...
                    </Button>
                </CardActions>
            }
        </Card>
    </Grid>
}