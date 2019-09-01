import {connect} from 'react-redux';
import Search from "./Search";
import {searchBeers} from "../redux/AppState";

export default connect(
    state => ({
      beerList: state.appState.beerList,
      loading: state.appState.loading,
      errorMessage: state.appState.errorMessage,
    }),
    {
      searchBeers,
    },
)(Search);
