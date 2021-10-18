import { StackActions } from '@react-navigation/routers';
import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListScreen from './Lists';
//import { useState } from 'react/cjs/react.development';


class Login extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            opt: ''


        }

    }

    // const [otp, setOtp] = useState(' ');
    // const storeValues = () =>{
    //     if (state){
    //         setState();
    //         alert('Successful')
    //     }
    //     else {
    //         alert('Enter Otp')
    //     }
    // }

    

    render() {
        return (

            <KeyboardAwareScrollView style={{backgroundColor:'white'}}>

                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 , backgroundColor:'white'}}>
                      
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('..//assets/logo_s.jpg')} />
                            <Text style={{ fontSize: 24, marginTop: '5%', color: '#7C35D4', fontWeight: 'bold' }}>DXC Technology</Text>
                        </View>

                        <View style={{ margin: '20%', justifyContent: 'center', alignItems: 'center', fontSize: 100 }}>
                            <TextInput style={{ borderBottomWidth: 1, width: '100%', borderColor: 'grey', margin: '5%' }} placeholder={'Enter OTP'}
                                onChangeText={(text) => { this.setState({ opt: text }) }}
                            />



                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#353FD4', borderRadius: 40 }} onPress={() =>
                                    this.props.navigation.navigate('Icons')
                                }>
                                    <Text style={styles.button}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            {/* <View  style={{width:'100%'}} >

                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center',backgroundColor:'#353FD4',borderRadius:40, marginTop:'10%'}} onPress={this.props.navigation.dispatch(StackActions.replace('Home'))}>
                    <Text style={styles.button}>
                        Login
                    </Text>
                    </TouchableOpacity> 
                     
                    </View> */}

                            

                        </View>

                       

                        
                    </View>
                </SafeAreaView>

            </KeyboardAwareScrollView>
        )
    }
}
export default Login

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        color: 'white'
    }


})