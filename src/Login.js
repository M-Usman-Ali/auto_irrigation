import React, {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 410}}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Welcome
        </Text>
        <View
          style={{
            //backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: darkGreen, fontWeight: 'bold', marginBottom: 130}}>
            For The Betterment Of Hummanity
          </Text>
          
          <Field
            placeholder="Phone Number"
            keyboardType={'number'}
          />
          <Field placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
          
          <Field placeholder="Language" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 50}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")}/>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold", color: "white"}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
