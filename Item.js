import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class Item extends React.Component {
  render() {
    const { imageName, name, price, orderItem, id } = this.props;
    let image;
    switch(imageName){
        case 'pear_ade': image = require('./src/pear_ade.jpg'); break;
        case 'soda_ade': image = require('./src/soda_ade.jpg'); break;
        case 'grapefruit_ade': image = require('./src/grapefruit_ade.jpg'); break;
        case 'tteok_bokki': image = require('./src/tteok_bokki.jpg'); break;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>orderItem(id)}>
            <View style={styles.column}>
                <Image style={styles.img} source={image} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}원</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width/2
  },
  column: {
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200
  },
  name: {

  },
  price: {

  }
});
