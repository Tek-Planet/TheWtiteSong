import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SocialButton from '../../components/SocialButton';

export function SignInScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#4B4A4A'}}>
      <ScrollView>
        <ImageBackground
          style={{width: '100%', height: 200}}
          source={require('../../assets/imgs/login.png')}
        />
        <Text
          style={{
            margin: 10,
            color: '#FFF',
            textAlign: 'center',
            fontSize: 20,
          }}>
          Your next Song will be your best song!
        </Text>
        <Text style={{color: '#E1F408', textAlign: 'center', fontSize: 18}}>
          --A Music Creation Tool For Songeriters--
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 20,
          }}>
          <View style={styles.row}>
            <Ionicons
              onPress={() => alert('Add')}
              name="lock-closed"
              size={20}
              color={'#fff'}
              style={{padding: 5}}
            />
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.row}>
            <Ionicons
              onPress={() => alert('Add')}
              name="lock-closed"
              size={20}
              color={'#fff'}
              style={{padding: 5}}
            />
            <Text style={styles.login}>Subscribe</Text>
          </View>
        </View>
        {/* login details  */}
        <View>
          <View style={styles.column}>
            <Text style={[styles.login, {marginStart: 10}]}>Username</Text>
            <View style={styles.textInput}>
              <TextInput
                // onChangeText={val => textInputChange(val)}
                placeholder="John Doe"
                placeholderTextColor="#000"
                color="#000"
                autoCapitalize="none"
                fontSize={15}
                fontWeight="normal"
                style={{padding: 1}}
              />
            </View>
          </View>

          {/* password box */}

          <View style={styles.column}>
            <Text style={[styles.login, {marginStart: 10, marginTop: -10}]}>
              Password
            </Text>
            <View style={styles.textInput}>
              <TextInput
                // onChangeText={val => textInputChange(val)}
                placeholder="secret"
                placeholderTextColor="#000"
                secureTextEntry={true}
                color="#000"
                autoCapitalize="none"
                fontSize={15}
                fontWeight="normal"
                style={{padding: 1}}
              />
            </View>
          </View>
          {/* forgot password section */}
          <View style={[styles.row, {justifyContent: 'center'}]}>
            <Text style={[styles.login]}>Forgot Password </Text>
            <Text style={[styles.login, {fontWeight: 'bold'}]}> | </Text>
            <Text style={[styles.login]}> Reset Password</Text>
          </View>

          {/* socal buttn */}
          <View
            style={{
              paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              iconBg="#04316F"
              backgroundColor="#031C40"
              onPress={() => fbLogin(navigation)}
            />
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              iconBg="#AA210F"
              backgroundColor="#AC2615"
              onPress={() => navigation.navigate('Drawer')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {flexDirection: 'row', alignItems: 'center'},

  column: {margin: 10},

  login: {color: '#fff', fontSize: 18},

  textInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
});
