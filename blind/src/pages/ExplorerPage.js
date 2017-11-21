import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrentLocation from '../components/CurrentLocation';
import { Actions } from 'react-native-router-flux';
//Página de exploración

class ExplorerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaces: [],
      error: null
    };
  }
  //Al montar el componente obtiene el lugar de donde se encuentra el usuario
  //Lo envia como prop a CurrentLocation
  componentDidMount() {
    RNGooglePlaces.getCurrentPlace()
    .then(response => this.setState({ currentPlaces: response }))
    .catch((error) => this.setState({ error: error.messsage }));
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.currentPlaces.slice(0, 1).map(place =>
          <CurrentLocation currentPlace={place.address} /> 
          )}
        <View style={styles.buttonContainer}>
        
                <Icon.Button 
                  name="bus" 
                  backgroundColor="#3b5998"
                  onPress={() => Actions.selectionExplorer()}
                >
                  Transporte
                </Icon.Button>
            
                <Icon.Button 
                  name="bank" 
                  backgroundColor="#3b5998"
                  onPress={() => Actions.selectionDefault()}
                >
                  Bancos
                </Icon.Button>
            
                <Icon.Button name="hospital-o" backgroundColor="#3b5998">
                  Hospitales
                </Icon.Button>
           
                <Icon.Button name="credit-card" backgroundColor="#3b5998">
                  Puntos Bip!
                </Icon.Button>
         </View>
      </View>
    );
  }

}
export default ExplorerPage;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
