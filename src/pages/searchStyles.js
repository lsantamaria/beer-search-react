import { makeStyles } from '@material-ui/styles';

export const searchStyles = makeStyles(theme => ({
  label: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 45,
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container:{
    paddingHorizontal: 215,
    marginTop: 65,
    backgroundColor: 'black',
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  textField: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  button:{
    backgroundColor:'blue',
    margin:20
  }
}));
