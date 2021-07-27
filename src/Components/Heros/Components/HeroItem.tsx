import {FC} from "react";
import {HeroItemProps} from "../../../Interfaces/PropsInterfaces";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Hero} from "../../../Interfaces/ModelsInterfaces";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const HeroItem: FC<HeroItemProps> = ({hero, showMore=true}) => {
    const classes = useStyles();

    const history = useHistory();

    const goToHero = (hero: Hero) => {
        history.push(`/hero/${hero.id}`);
    }

    return <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={hero.superhero}
                height="140"
                image={`/assets/heroes/${hero.id}.jpg`}
                title={hero.superhero}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {hero.superhero}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
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
        </CardActionArea>
        {
            showMore && <CardActions>
                <Button onClick={() => goToHero(hero)} size="small" color="primary">
                    Ver mas...
                </Button>
            </CardActions>
        }

    </Card>
}