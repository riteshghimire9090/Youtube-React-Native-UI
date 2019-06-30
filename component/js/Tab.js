//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Tab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'green',
    },
});

//make this component available to the app
export default Tab;
