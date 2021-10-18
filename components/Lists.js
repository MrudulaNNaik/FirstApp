import React from 'react';
import { View, TouchableOpacity, Text, Image, StatusBar, StyleSheet , ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './LoginScreen';



var currentDate = moment().format("DD/MM/YYYY");

var currentTime = moment().format('LTS');



const ListScreen = (props) => {

  return (

    <View style={{ flex: 10, flexDirection: 'column', backgroundColor:'black'  }}>
      
      

      <View style={{ flex: 1.8, shadowColor: 'blue', borderWidth: 1, borderColor: 'black' }}>
        <Image style={{ height: 260, width: 420, }} source={require('../assets/view.png')}>

        </Image>

        
      </View>

      <View style={{ flex: 4, borderRadius: 30, }}>
      
        
     
<View style={{left:47, bottom:50, borderRadius:25}}>



<View style={{elevation:10, justifyContent: 'center', alignItems: 'center',marginTop:'5%' ,backgroundColor:'#e0ffff',height:'48%',width:'60%',margin:40, borderRadius:20, borderColor:'#dda0dd', borderWidth:0}}>
<Image source={require('..//assets/clock.png')} 
      style={styles1.Image_Background_Style}/>
 


   <Text style={{fontWeight:'bold',fontSize:20,justifyContent: 'center', alignItems: 'center',marginTop:'5%',color:'#4E7919', bottom:55 }}>  {currentDate}   </Text>



   <Text style={{fontWeight:'bold',fontSize:20,justifyContent: 'center', alignItems: 'center',marginTop:'5%',color:'#4E7919',  bottom:50 }}>  {currentTime}   </Text>



    

    </View>
    
    </View>
        <View style={{ flex:10, flexDirection: 'row', borderWidth: 0, borderColor: 'red', borderRadius: 25, bottom: 100 }} >
        <LinearGradient colors={['#50884A','#F7EDED']} style={styles1.linearGradient}/>

        </View>

          <TouchableOpacity style={{
            bottom:130, left:55, width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue',
            borderRadius: 20
          }}
            onPress={() =>
              props.navigation.navigate('News')
            } >
            <Image style={{ height: 83, width: 85, bottom:4 ,right:3,borderRadius: 20 }} source={require('../assets/news4.png')}></Image>
            <Text style={{ left: 15, fontWeight: 'bold', color: '#000080' }}>News</Text>
            

          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('QR')}
            style={{  bottom:210, left:172, width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue',
            borderRadius: 20 }}>
            <Image style={{ height: 78, width: 78,  borderRadius: 20, }} source={require('../assets/qr3.png')}></Image>
            <Text style={{top: 4, left: 14, fontWeight: 'bold', color: '#000080' }}>Scanner</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Weather')}
            style={{ width: 80, height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue', bottom:290, left: 290, borderRadius: 20, }}>
            <Image style={{ height: 79, width: 76, backgroundColor: '#7b68ee', borderRadius: 20 }} source={require('../assets/weather2.png')}></Image>
            <Text style={{ top: 4, left: 15, fontWeight: 'bold', color: '#000080' }}>Weather</Text>
          </TouchableOpacity>
          






        {/* <View style={{ fexDirection:'row', borderWidth:1, borderColor:'black', top:50, }}> */}
        <TouchableOpacity
          style={{ width: 80, flexDirection: 'column', height: 80, shadowColor: 'blue', elevation: 10, borderWidth: 0, borderColor: 'lightblue', bottom: 240, left: 55, borderRadius: 20 }}>
          <Image style={{ height: 80, width: 78, backgroundColor: '#7b68ee', borderRadius: 20, }} source={require('../assets/compass1.png')}></Image>
          <Text style={{top:5, left: 11, fontWeight: 'bold', color: '#000080' }}>Compass</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:80, borderRadius:20,}}>
      <Image style={{height:90,width:90,bottom:7,right:7}} source={require('../assets/shuttle.png')}></Image> 
      <Text style={{bottom:9, left:15,fontWeight:'bold',color:'blue'}}>Graphs</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:120, borderRadius:20,}}>
      <Image style={{height:70,width:70,left:3,top:3}} source={require('../assets/weather.png')}></Image>   
      <Text style={{top:12, left:15,fontWeight:'bold',color:'blue'}}>Stocks</Text>
      </TouchableOpacity>    */}
        {/* </View> */}



      </View>

    </View>

  );

}

const styles1 = StyleSheet.create({
  linearGradient: {borderRadius:30,height: 495,width: 412, bottom:170,},
 
    
    Image_Background_Style:{
      height:"90%",
      width:"50%",
      top:40,
      left:80,
      borderRadius:20,

    }
  
});
export default ListScreen;