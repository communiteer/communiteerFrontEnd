import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle , viewStyle} = styles;

    return (
    <View style={viewStyle} >
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#2E6171',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        paddingBottom: 15,
        height:60,
        shadowColor:'black',
        shadowOffset:{ width:0,height: 2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
        marginTop: 25
    },
    textStyle: {
        color: '#6DC0D5',
        fontSize: 20
    }
}
export  {Header};
