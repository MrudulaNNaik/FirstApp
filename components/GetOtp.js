import { StackActions } from '@react-navigation/routers'
import React, {Component} from 'react'
import { SafeAreaView, Text, View, Image, Button, TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage'
class GetOtp extends  React.Component{
    constructor(props){
        super(props)

        this.state={
            mobileNo:'',
            txnID:''
        }
    }


    getOTP=()=>{
        console.log("\n\ngetOTP function called")
                
            fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mobile: this.state.mobileNo
                })
            })

            .then(async (response) => {

                const data = await response.json()

                this.setState({ txnID: data.txnId })

                console.log("\n\nData from response :" + this.state.txnID)

               
            })

            .catch(error => console.log("Error from fetch : " + error))
            this.props.navigation.navigate('OtpLogin')
             //this.props.navigation.navigate('Login') 
            // this.props.navigation.navigate('HomeStack',{screen:'Home'}) 
   
    }
    render(){
        return(

            <KeyboardAwareScrollView>

            <SafeAreaView style={{flex:1}}>
           <View style={{flex:1}}>
               <View>
               <TouchableOpacity>
            <Text style={{margin:'5%',color:'#3671D4',textAlign:'right'}}>
               SignUp
            </Text>
         </TouchableOpacity>
                </View>
                <View  style={{justifyContent:'center', alignItems:'center',marginTop:'20%'}}> 
                <Image style={{height:100 , width:100}} source={require('..//assets/logo_s.jpg')} />
                <Text style={{ fontSize:24, marginTop:'5%',color:'#7C35D4', fontWeight:'bold'}}>DXC Technology</Text>
                </View>

                <View style={{margin:'20%',justifyContent:'center',alignItems:'center',fontSize:100}}>
                <TextInput style={{borderBottomWidth:1,width:'100%',borderColor:'grey',margin:'5%'}}  placeholder={'Enter your Mobile Number'}
                onChangeText={(text)=>{this.setState({mobileNo: text})}}
                
                /> 
                <View style={{width:'100%'}}>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center',backgroundColor:'#353FD4',borderRadius:40}} onPress={()=>{this.getOTP()}}>
                    <Text style={styles.button}>
                        Get OTP
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

                <TouchableOpacity >
            <Text style={{margin:'5%',color:'#3671D4',textAlign:'center'}}>
              Forget Password?
            </Text>
         </TouchableOpacity>

                </View>
               
                <View>
               <TouchableOpacity onPress={()=>{this.props.navigation.dispatch(StackActions.replace('LoginTouch'))}}>
            <Text style={{color:'#3671D4',textAlign:'center'}}>
              Login with Touch ID
            </Text>
         </TouchableOpacity>
                </View>

            <View>

                </View>
           </View>
           </SafeAreaView>

           </KeyboardAwareScrollView>
        )
    }
}
export default GetOtp

const styles = StyleSheet.create({
   button:{
    padding: 10,
    borderRadius: 10,
    fontSize:20,
    color:'white'
    }


})