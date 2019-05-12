import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native';

import Item from './Item.js';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    loaded: false,
    sales: 0,
    items: [{
      id: 1,
      imageName: 'pear_ade',
      name: '배 에이드',
      price: 2000
    },{
      id: 2,
      imageName: 'soda_ade',
      name: '소다 에이드',
      price: 2000
    },{
      id: 3,
      imageName: 'grapefruit_ade',
      name: '자몽 에이드',
      price: 2000
    },{
      id: 4,
      imageName: 'tteok_bokki',
      name: '떡볶이',
      price: 2000
    }]
  }
  render() {
    const { loaded, sales, items } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.title}>봄이 떡볶이&에이드</Text>
        <ScrollView contentContainerStyle={styles.itemList}>
          {items.map(item => 
            <Item key={item.id}
              id={item.id}
              imageName={item.imageName}
              name={item.name}
              price={item.price}
              orderItem={this._orderItem}
            />)}
        </ScrollView>
        <Text style={styles.footer}>총 매출액 : {sales}원</Text>
      </View>
    );
  }
  _orderItem = id => {
    const { sales } = this.state;
    const price = this.state.items[id-1].price;
    this.setState({
      sales: sales+price
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 22
  },
  itemList: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    alignItems: 'flex-start'
  },
  footer: {
    fontSize: 20
  }
});
