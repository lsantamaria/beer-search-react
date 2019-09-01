import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
    }),
);

export const BeerCard = (props) => {
  const classes = useStyles();
  const beer = props.beer;
    return (
          <ListItem key={beer.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={beer.image_url} />
            </ListItemAvatar>
            <ListItemText
                primary={beer.name}
                secondary={
                  <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                      {beer.first_brewed}
                    </Typography>
                    {" - " + beer.description}
                  </React.Fragment>
                }
            />
          </ListItem>
   )
};
