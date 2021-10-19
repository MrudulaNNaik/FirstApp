import * as React from 'react';
import { View, Text , Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import GetNews from './components/GetNews';
import WebViewComponent from './components/WebView';
import LoginScreen from './components/LoginScreen';
import ListScreen from './components/Lists';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DescNews from './components/DescNews';
import Scanner from './components/QRCode';
import Weather from './components/WeatherScreen';
import Splashscreen from './components/SplashScreen';
import Login from './components/OtpLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetOtp from './components/GetOtp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const tabOptions = {
//   showLabel: false,
//   style:{
//       position: 'absolute',
//       bottom: 25,
//       left: 20,
//       right: 20,
//       eleva
//   }
  
// };

// const CameraButton = () => {
//   return (
//       <View
//           style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: 50,
//               height: 50,
//               borderRadius: 25,
//               backgroundColor: 'white',
//           }}
//       >
//           <Image
//               source={require('./assets/news1.png')}
//               resizeMode="contain"
//               style={{
//                   width: 23,
//                   height: 23
//               }}
//           />
//       </View>
//   );
// };


const Tabs = () => {

  return (
      
      <Tab.Navigator 
      
          tabBarOptions={{ showLabel: false,
        style: {
            position:'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation:0,
            backgroundColor:'blue',
            borderRadius:15,
            height:90
        }}}
          screenOptions={  (  {  route }) => ({ 
              tabBarIcon: ({ focused }) => {
                  const tintColor = focused ? '#2B326E' : '#7CA2BB';

                  switch (route.name) {
                      case "Dashboard":
                          return (
                              <Image
                                  source={require('./assets/home.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: 50,
                                      height: 50
                                  }}
                              />
                          );
                          
                      case "News":
                          return (
                              <Image
                                  source={require('./assets/newsTab.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: 45,
                                      height: 45
                                  }}
                              />
                          );

                          case "QR":
                          return (
                              <Image
                                  source={require('./assets/qr.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: 45,
                                      height: 45
                                  }}

                              />
                          );
                          
                          case "Weather":
                            return (
                                <Image
                                    source={require('./assets/weather.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 45,
                                        height: 45,
                                        
                                        
                                    }}
                                    
  
                                />
                            );

                      
                  }
              }
          })}

          
      >
        <Tab.Screen
              name="Dashboard"
              component={ListScreen}
              options={{headerShown:false}}
          />
          <Tab.Screen
              name="News"
              component={HomeScreen}
              
          />
          
          
          
          <Tab.Screen
              name="QR"
              component={Scanner}
              options={{headerShown:false}}
          />
          <Tab.Screen
              name="Weather"
              component={Weather}
              options={{headerShown:false}}
          />
      </Tab.Navigator>
  );
};


// function MyTabs() {
//   return (
    
//     <Tab.Navigator screenOptions={{headerShown: true}}>
      
//       <Tab.Screen name="Dashboard" component={ListScreen} />
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name='Login' component={LoginScreen} /> 
//       {/* <Tab.Screen name='QR' component={Scanner} />  */}
      
//     </Tab.Navigator>
    
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetOtp' screenOptions={{headerShown: false }}>
         <Stack.Screen name='OtpLogin' component={Login} /> 
        <Stack.Screen name='GetOtp' component={GetOtp}   /> 
        <Stack.Screen name="Icons" component={Tabs} />
        <Stack.Screen name="News" component={HomeScreen} />
        <Stack.Screen name='QR' component={Scanner} /> 
        <Stack.Screen name='Weather' component={Weather} /> 
        <Stack.Screen name='GetNews' component={GetNews}></Stack.Screen>
        <Stack.Screen name='DescNews' component={DescNews}></Stack.Screen>
        <Stack.Screen name='WebView' component={WebViewComponent} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;