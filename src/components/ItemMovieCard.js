import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
class ItemMovieCard extends Component {
  render() {
    const {title, itemImage, dateRelease} = this.props;
    return (
      <View
        style={{
          marginVertical: 12,
        }}>
        <View style={styles.baseItem}>
          <Text style={{color: 'white', marginStart: 84}}>{title}</Text>
          <View
            style={{
              position: 'absolute',
              end: 0,
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Icons name={'calendar-outline'} size={24} color={'white'} />
            <Text style={{color: 'white', marginEnd: 16, marginStart: 12}}>
              {dateRelease}
            </Text>
          </View>
        </View>
        <Image style={styles.poster} source={{uri: itemImage}} />
      </View>
    );
  }
}

export default ItemMovieCard;

const styles = StyleSheet.create({
  poster: {
    height: 125,
    width: 80,
    borderRadius: 10,
    position: 'absolute',
    marginStart: 12,
  },
  baseItem: {
    backgroundColor: '#041D2F',
    height: 100,
    borderRadius: 10,
    padding: 16,
    marginTop: 36,
  },
});
