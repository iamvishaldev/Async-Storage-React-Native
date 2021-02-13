import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,Platform, Image,Alert, ScrollView} from 'react-native';


class App extends React.Component{

  

}

export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    paddingTop: Platform.OS === "android" ? 30 : 0,
    justifyContent:"center",
    alignItems:"center"
  },

});
