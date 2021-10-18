import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import Carousel from 'react-native-snap-carousel';
import configre from '../config/configre';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class GetNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${configre.API_KEY}`,
      
    )
      .then(res => res.json())
      .then(response => {
        this.setState({

          news: response.articles,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ alignItems: 'center',}}>
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={{

              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            color="black"
          />
        ) : (
          <ScrollView
            style={{
              display: 'flex',
            }}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (


                <View
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
backgroundColor:'#e6e6fa',
                    borderRadius: 20,
                    shadowColor:'#191970',
                    elevation:3,
                    width: 400,
                    borderWidth: 2,
                    borderColor: '#b0c4de',
                    height: deviceHeight / 2.4,
                    marginVertical: 7,
                    

                  }}>
                  <Image
                    source={{ uri: `${news.urlToImage}` }}
                    style={{ height: deviceHeight / 5, width: 395, borderRadius: 20 }}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      height: 65,
                      width: 395,
                      height: 50,
                      borderWidth: 0,
                      borderColor: 'black',
                      paddingLeft: 10,
                      paddingTop: 5,
                      fontWeight: 'bold',
                      color: '#000080'

                    }}>
                    {news.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      width: 395,
                      borderWidth: 0,
                      borderColor: 'black',
                      height: deviceHeight / 8,
                      paddingLeft: 10,

                    }}>
                    {news.description}
                    <TouchableOpacity 
                      key={index}
                      onPress={() =>
                        this.props.navigation.navigate('WebView', {
                          url: news.url,
                        })
                      }>
                      <Text style={{
                        fontSize: 16,
                        top: 4,
                        fontWeight: 'bold',
                        paddingLeft: 5,
                        color: 'red',
                      }} >Read More ... </Text>
                    </TouchableOpacity>
                  </Text>

                </View>

              ) : null,
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default GetNews;