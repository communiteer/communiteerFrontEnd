import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, {height: props.height}]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle : {
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#DDFFF7',
        justifyContent: 'flex-start',
        flexDirection:'row',
        borderColor: '#DDFFF7',
        position: 'relative'
    }
}
export {CardSection};

