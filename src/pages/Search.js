import React from "react";
import Button from "@material-ui/core/Button";
import {Container, makeStyles} from "@material-ui/core";
import {searchStyles} from "./searchStyles";
import TextField from "@material-ui/core/TextField";
import {BeerCard} from "./BeerCard";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";

const fakeItems = [
  {
    "id": 192,
    "name": "Punk IPA 2007 - 2010",
    "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
    "first_brewed": "04/2007",
    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    "image_url": "https://images.punkapi.com/v2/192.png",
  },
  {
    "id": 192,
    "name": "Punk IPA 2007 - 2010",
    "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
    "first_brewed": "04/2007",
    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    "image_url": "https://images.punkapi.com/v2/192.png",
  },
];

const StyledButton = props => {
  const classes = searchStyles();
  return (
      <Button variant="contained"
              color="secondary"
              className={classes.button}
              href={""}
              onClick={props.onSearch}
      >
        Search!
      </Button>
  )
};

const BeerList = props => {
  return (
      <Box>
        <List>
          {props.items.map((item) => {
            return <Container>
              <BeerCard beer={item}/>
              <Divider variant="inset" component="li"/>
            </Container>
          })}
        </List>
      </Box>
  );
};

export default class Search extends React.Component {

  state = {
    mealName: ""
  };

  onChangeText = (event) => {
    this.setState({mealName: event.target.value});
  };

  render() {
    return (
        <Box display="flex" flexDirection="column">
          <Box m="2rem" display="flex" alignSelf="center" justifyContent="flex-start">
            <TextField
                id="standard-name"
                label="Introduce your meal"
                className={searchStyles.textField}
                value={this.state.mealName}
                onChange={this.onChangeText}
                margin="normal"
            />
            <StyledButton onSearch={this.props.onSearch}/>
          </Box>
          <Box display="flex" justifyContent="flex-start">
            <BeerList items={fakeItems}/>
          </Box>
        </Box>
    )
  }
}
