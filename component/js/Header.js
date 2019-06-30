//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,Dimensions} from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.Header}>
                <View style={styles.Youtubelogo} >
                    <Image
                    style={styles.Image} 
                        source={
                            require('../img/logo.png')
                        }
                    />
                    <Image
                    style={{height:20,width:20,marginLeft:140,marginTop:20}} 
                        source={
                            require('../img/video.png')
                        }
                    />
                    <Image
                    style={{height:20,width:20,marginLeft:15,marginTop:20}} 
                        source={
                            require('../img/search.png')
                        }
                    />

<Image
                    style={{height:36,width:36,marginLeft:15,marginTop:10,borderRadius: 25,}} 
                        source={
                            require('../img/4.jpg')
                        }
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        
    },
    Image: {
      height:50,
      width:100,
    },

      Youtubelogo: {
        height:50,
        width:100,
        width: Dimensions.get('window').width ,
        marginTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        flexDirection:'row'
    
    },
  }



);

//make this component available to the app
export default Header;
