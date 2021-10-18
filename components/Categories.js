import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const categories = ['Entertainment'];
const business = ['Business'];
const politics = ['Politics'];
const health = ['Health'];
const tech = ['Technology'];
const sport = ['Sports'];

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Categories extends Component {
  state = {};
  render() {
    return (
      
      <View style={{  flexDirection: 'column',  elevation:2, backgroundColor:'white' }}>
<View>
        <LinearGradient colors={['#ff99cc', '#ffff99']} style={styles2.linearGradient}/>
      </View>
        
          {categories.map((category, index) => (
            <TouchableOpacity style={{ margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
             bottom:680,left:40, borderRadius:20}}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View >
                <Image
                  style={{height:68,width:70,top:5, left:4}} resizeMode='contain' source={require('../assets/entertainment1.png')}>
                </Image>
                <Text
                  style={{
                    top:8,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#000080'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {business.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:780, left:150, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
                <Image
                  style={{height:70,width:70,top:5, left:4}} resizeMode='contain' source={require('../assets/b1.png')}>
                </Image>
                <Text
                  style={{
                    fontWeight:'bold',
                    top:8,
                    left:18,
                    fontSize: 12,
                    color:'#000080'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {health.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:880, left:260, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
                <Image
                  style={{height:65,width:69, top:5, left:4}}  source={require('../assets/doc.png')}>
                </Image>
                <Text
                  style={{
                    fontWeight:'bold',
                    top:13,
                    left:20,
                    fontSize: 12,
                    color:'#000080'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
 
       
          {tech.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:870, left:40, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
                <Image
                  style={{height:75,width:74,bottom:1, left:2}} resizeMode='contain' source={require('../assets/tech.png')}>
                </Image>
                <Text
                  style={{
                    fontWeight:'bold',
                    top:8,
                    fontSize: 12,
                    color:'#000080'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {sport.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:970, left:150, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
                <Image
                  style={{height:80,width:73,bottom:1, left:2  }} resizeMode='contain' source={require('../assets/sports.png')}>
                </Image>
                <Text
                  style={{
                    fontWeight:'bold',
                    top:5,
                    left:13,
                    fontSize: 12,
                    color:'#000080'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          

        </View>
      
    );
  }
}
const styles2 = StyleSheet.create({
  linearGradient: {height: deviceHeight,width: 411,}
  
});
export default Categories;