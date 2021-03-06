import React from 'react';
import { View, TouchableOpacity, Text, Image, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './LoginScreen';
import * as Animatable from "react-native-animatable";
import Trials from './Trial';
import { Neomorph, NeomorphBlur, Shadow } from 'react-native-neomorph-shadows';

var currentDate = moment().format("DD/MM/YYYY");

var currentTime = moment().format('LTS');



const ListScreen = (props) => {

  return (

    <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'black' }}>


<Text style={{borderWidth:5, borderColor:'black', height:50, width:60}} > Hello</Text>

      <View style={{ flex: 1.8, shadowColor: 'blue', borderWidth: 1, borderColor: 'black' }}>
        {/* <Image style={{ height: 260, width: 420, }} source={require('../assets/view.png')}>

        </Image> */}
        <LinearGradient start={{ x: -0.5, y: 0.5 }} end={{ x: 1, y: 0 }} colors={['#6600ff', '#ccccff','#99ccff']} style={styles1.linearGradient} />

        
      </View>

      <View style={{ flex: 4, borderRadius: 30, }}>



        <View style={{ left: 47, bottom: 50, borderRadius: 25 }}>



          <Animatable.View animation="slideInUp" iterationCount={1} direction="alternate" style={{ elevation: 10, justifyContent: 'center', alignItems: 'center', marginTop: '5%', backgroundColor: '#e0ffff', height: '48%', width: '60%', margin: 40, borderRadius: 20, borderColor: '#dda0dd', borderWidth: 0 }}>




            <Animatable.Text animation="slideInLeft" iterationCount={1} direction="alternate" style={{ fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: '5%', color: '#4E7919', bottom: 10 }}>  {currentDate}   </Animatable.Text>



            <Animatable.Text animation="slideInLeft" iterationCount={1} direction="alternate" style={{ fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: '5%', color: '#4E7919', bottom: 5 }}>  {currentTime}   </Animatable.Text>





          </Animatable.View>

        </View>
        <View style={{ flex: 10, flexDirection: 'row', borderWidth: 0, borderColor: 'red', borderRadius: 25, bottom: 100 }} >
          <LinearGradient start={{ x: 0, y: 0.60 }} end={{ x: 1, y: 0.25 }} colors={['white', '#ccffff']} style={styles1.linearGradient} />

        </View>

        <TouchableOpacity style={{
          bottom: 130, left: 55, width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue',
          borderRadius: 20
        }}
          onPress={() =>
            props.navigation.navigate('News')
          } >
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height: 50, width: 50, bottom: 65, left: 15, borderRadius: 20 }} source={require('../assets/newsTab.png')}></Image>
          <Text style={{ left: 15, fontWeight: 'bold', color: '#000080', bottom: 48, borderWidth: 0, borderColor: 'lightblue' }}>News</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate('QR')}
          style={{
            bottom: 210, left: 172, width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue',
            borderRadius: 20
          }}>
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height: 70, width: 70, borderRadius: 20, bottom: 75, left: 4 }} source={require('../assets/qr.png')}></Image>
          <Text style={{ bottom:68, left: 14, fontWeight: 'bold', color: '#000080' }}>Scanner</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Weather')}
          style={{ width: 80, height: 80, shadowColor: 'white', elevation: 10, borderWidth: 0, borderColor: 'white', bottom: 290, left: 290, borderRadius: 20, }}>
          <NeomorphBlur
            darkShadowColor="#003300"
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ bottom: 75, left: 4,height: 79, width: 76, borderRadius: 20 }} source={require('../assets/weatherTab.png')}></Image>
          <Text style={{ bottom:76, left: 15, fontWeight: 'bold', color: '#000080' }}>Weather</Text>
        </TouchableOpacity>







        {/* <View style={{ fexDirection:'row', borderWidth:1, borderColor:'black', top:50, }}> */}
        <TouchableOpacity
          style={{ width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue', bottom: 240, left: 55, borderRadius: 20 }}>
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height: 70, width: 70, backgroundColor: '#7b68ee', borderRadius: 20, bottom:75, left:6  }} source={require('../assets/compass1.png')}></Image>
          <Text style={{ bottom:68, left: 11, fontWeight: 'bold', color: '#000080' }}>Compass</Text>
        </TouchableOpacity>



      </View>

    </View>


  );

}

const styles1 = StyleSheet.create({
  linearGradient: { borderRadius: 30, height: 495, width: 412, bottom: 170, },


  Image_Background_Style: {
    height: "90%",
    width: "50%",
    top: 40,
    left: 80,
    borderRadius: 20,
  },

  Icon_Style: {

    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 80,
    height: 80,

  }


});
export default ListScreen;