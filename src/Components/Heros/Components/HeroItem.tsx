import {FC} from "react";
import {HeroItemProps} from "../../../Interfaces/PropsInterfaces";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inline: {
            display: 'inline',
        },
    }),
);

export const HeroItem: FC<HeroItemProps> = ({hero}) => {
    const classes = useStyles();

    return <ListItem key={hero.id} alignItems="flex-start">
        <ListItemAvatar>
            <Avatar/>
        </ListItemAvatar>
        <ListItemText
            primary={hero.superhero}
            secondary={
                <>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {hero.alter_ego}
                    </Typography>
                    {" " + hero.first_appearance}
                </>
            }
        />
    </ListItem>
}