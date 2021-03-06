import { useLinkProps } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Spacer from './Spacer';

const AuthForm = ({buttonText,onPress,errMessage,clearErrMsg}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
      </Spacer>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <Input
        label="אימייל"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="סיסמא"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errMessage?  <Text style={style.errMessage}>{errMessage}</Text>:null }
      <Spacer>
        <Button
          title={buttonText}
          onPress={()=>onPress({email,password})}
        />
      </Spacer>
    </>
  );
};

const style = StyleSheet.create({
  headerText:{
    justifyContent:'flex-start',
    alignSelf:'center',
    fontWeight:'bold'
             },
    errMessage:{
      fontSize:16,
      color:'red',
      marginRight:15,
      fontWeight:"bold"
    }
});

export default AuthForm;
