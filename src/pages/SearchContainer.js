import {compose, lifecycle, withState} from 'recompose';
import {connect} from 'react-redux';
import Search from "./Search";
import {searchBeers} from "../redux/AppState";

export default compose(
    connect(
        state => ({
          beerList: state.appState.beerList,
        }),
        {
          searchBeers,
        },
    ),
    // lifecycle({
    //   componentDidMount() {
    //     this.props.searchBeers();
    //   },
    // })
)(Search);
