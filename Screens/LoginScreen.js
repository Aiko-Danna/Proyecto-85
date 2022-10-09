import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component{

  isUserEqual = (googleUser, firebaseUser) =>{
    if(firebaseUser){
      var providerData = firebaseUser.providerData;

      for(var i = 0; i < providerData.lenght; i++){
        if(
          providerData[i].providerId ===
          firebaseUser.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ){
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser =>{
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser=>{
      unsubscribe();
      if(!this.isUserEqual(googleUser, firebaseUser)){
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        firebase
        .auth()
        .signInWithCredential(credential)
        .then(function(result){
          if(result.additionalUserInfo.isNewUser){
            firebase
            .database()
            .ref('/users/' + result.user.uid)
            .set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              current_theme: 'dark'
            })
            .then(function(snapshot){})
          }
        })
        .catch(error =>{
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      }else{
        console.log('Usuario ya registrado')
      }
    })
  }

  signInWithGoogleAsync = async() => {
    try{
      const result = await this.signInWithGoogleAsync.logInAsync({
        behaviour: "web",
        androidClientId: "21855518063-dpfmb711m2gehgc0pj6n2n8i17d9od0l.apps.googleusercontent.com",
        iosClientId: "121855518063-sfl0d2vamq1em3j6gi8lcmhnmjd0a77o.apps.googleusercontent.com",
        scopes: ['profile', 'email']
      });
      if(result.type === "success"){
        this.onSignIn(result);
        return result.accessToken;
      }
      else{
        return {cancelled: true};
      }
    }catch(e){
      console.log(e.message);
      return {error: true};
    }
  };

  render() {
    return(
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button} 
            onPress={()=>this.signInWithGoogleAsync()}
            >
            <Text style={styles.googleText}>Iniciar sesión con Google</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  googleText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#1E98F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical:'160%'
  }
})