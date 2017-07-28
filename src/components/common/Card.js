import React from 'react';
import { View, Dimensions } from 'react-native';

const Card = (props) => {
return (

    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles = {
    containerStyle: {
        width: Dimensions.get('screen').width,
        borderWidth: 1,
        backgroundColor: 20,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset: { width:0,height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 25,
        padding: 5
    }

}

export {Card};
