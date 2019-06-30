//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';

// create a component
class Body extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.onechannel}>
                <View>
                    <Image
                    style={styles.Image}
                        source={require('../img/4.jpg')}
                    />

                    <View style={styles.onechannelBar} >
                    <Image
                    style={styles.Imagelogo}
                    source={require('../img/4.jpg')}  
                    />
                    <View style={styles.Imagelogodetail}>
                        <Text style={styles.channelTittle}>Laptop made by Ritesh Ghimire</Text>
                        <Text style={styles.channelviews} >Ritesh Ghimire . 19999 M views . 1 second ago </Text>
                    </View>

                    </View>

                </View>

                </View>
                <View style={styles.onechannel}>
                <View>
                    <Image
                    style={styles.Image}
                        source={require('../img/4.jpg')}
                    />

                    <View style={styles.onechannelBar} >
                    <Image
                    style={styles.Imagelogo}
                    source={require('../img/4.jpg')}  
                    />
                    <View style={styles.Imagelogodetail}>
                        <Text style={styles.channelTittle}>Laptop made by Ritesh Ghimire</Text>
                        <Text style={styles.channelviews} >Ritesh Ghimire . 1000M views . 14 hours age</Text>
                    </View>

                    </View>

                </View>

                </View>
                <View style={styles.onechannel}>
                <View>
                    <Image
                    style={styles.Image}
                        source={require('../img/4.jpg')}
                    />

                    <View style={styles.onechannelBar} >
                    <Image
                    style={styles.Imagelogo}
                    source={require('../img/4.jpg')}  
                    />
                    <View style={styles.Imagelogodetail}>
                        <Text style={styles.channelTittle}>Laptop made by Ritesh Ghimire</Text>
                        <Text style={styles.channelviews} >Ritesh Ghimire . 1000M views . 14 hours age</Text>
                    </View>

                    </View>

                </View>

                </View>
                <View style={styles.onechannel}>
                <View>
                    <Image
                    style={styles.Image}
                        source={require('../img/4.jpg')}
                    />

                    <View style={styles.onechannelBar} >
                    <Image
                    style={styles.Imagelogo}
                    source={require('../img/4.jpg')}  
                    />
                    <View style={styles.Imagelogodetail}>
                        <Text style={styles.channelTittle}>Laptop made by Ritesh Ghimire</Text>
                        <Text style={styles.channelviews} >Ritesh Ghimire . 1000M views . 14 hours age</Text>
                    </View>

                    </View>

                </View>

                </View>
                <View style={styles.onechannel}>
                <View>
                    <Image
                    style={styles.Image}
                        source={require('../img/4.jpg')}
                    />

                    <View style={styles.onechannelBar} >
                    <Image
                    style={styles.Imagelogo}
                    source={require('../img/4.jpg')}  
                    />
                    <View style={styles.Imagelogodetail}>
                        <Text style={styles.channelTittle}>Laptop made by Ritesh Ghimire</Text>
                        <Text style={styles.channelviews} >Ritesh Ghimire . 1000M views . 14 hours age</Text>
                    </View>

                    </View>

                </View>

                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'red',
    },
    onechannel:{

    },


    Image:{
width:Dimensions.get('window').width,
height: 250
    },
    Imagelogo:{
        width:50,
        height:50,
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 5,
        flex:1
    },
    onechannelBar:{
        borderBottomWidth:2,
        borderColor:'black',
        flexDirection: 'row',
    },
    Imagelogodetail:{
        flex:5,
        marginLeft: 10,
        marginTop:5
    },
    channelTittle:{
        fontWeight:'bold'
    },
    channelviews:{
        color:'#99AAAB'
    }

});

//make this component available to the app
export default Body;
