import React from "react";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import {searchStyles} from "./searchStyles";
import TextField from "@material-ui/core/TextField";
import {BeerCard} from "./BeerCard";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const SearchButton = props => {
  const classes = searchStyles();
  return (
      <Button variant="contained"
              color="secondary"
              className={classes.button}
              onClick={props.onSearch}
      >
        Search Beers!
      </Button>
  )
};

const BeerList = props => {
  const items = props.items;
  return (
      <List>
        {items && props.items.map((item) => {
          return <Container key={item.id}>
            <BeerCard beer={item}/>
            <Divider variant="inset" component="li"/>
          </Container>
        })}
      </List>
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
        <Box ml="2rem" display="flex" flexDirection="column">
          <Box m="2rem" display="flex" alignSelf=""
               justifyContent="flex-start">
            <TextField
                id="standard-name"
                label="Introduce your meal"
                className={searchStyles.textField}
                value={this.state.mealName}
                onChange={this.onChangeText}
                margin="normal"
            />
            <SearchButton onSearch={() =>
                this.props.searchBeers(this.state.mealName)}/>
          </Box>
          {this.props.errorMessage ?
              <Typography component="div" color="error">
                <Box m="2rem" display="flex" alignSelf="center">
                  {this.props.errorMessage}
                </Box>
              </Typography>
              :
              <Box display="flex" justifyContent="flex-start">
                <BeerList items={this.props.beerList}/>
              </Box>
          }
        </Box>
    )
  }
}
