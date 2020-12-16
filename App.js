import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemMovieCard from './src/components/ItemMovieCard';
import Axios from 'axios';

class App extends Component {
  state = {
    responseMovie: {},
    listMovie: [],
  };

  componentDidMount() {
    const apiMovie = 'http://www.omdbapi.com/?s=avenger&apikey=997061b4&';
    Axios.get(apiMovie).then((res) => {
      const responseMovie = res.data;
      this.setState({
        responseMovie,
        listMovie: responseMovie.Search,
      });
    });
  }

  render() {
    console.log('data', this.state.listMovie);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Daftar Film</Text>
        <ScrollView>
          {this.state.listMovie.map((items, index) => {
            return (
              <View key={index}>
                <ItemMovieCard
                  dateRelease={items.Year}
                  title={items.Title}
                  itemImage={items.Poster}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#07304C',
    paddingTop: 24,
  },
  title: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 24,
  },
});
