import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import Header from './component/js/Header';
import Tab from './component/js/Tab';
import Body from './component/js/Body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.Header} />
        <Body style={styles.Body} />
        <Tab style={styles.Tab} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  Header:{
    flex:1,
    backgroundColor:'green',
    marginTop: 50,
    

  },
  Body:{
    flex:5,
    backgroundColor:'red',

  },
  Tab:{
    flex:1,
    backgroundColor:'green',
    marginBottom: 100,
    

  }
});
