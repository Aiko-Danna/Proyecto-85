import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export default class PostScreen extends Component{
    render() {
        if(!this.props.route.params){
            this.props.navigation.navigate("Home");
        }else{
            return(
                <View style={styles.container} >
                    <SafeAreaView style={styles.droidSafeArea} />

                    <View style={styles.appTitle} >
                        <View style={styles.appIcon} >
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}> Espectagrama </Text>
                        </View>
                    </View>

                    <View style={styles.postContainer}>
                        <ScrollView style={styles.postCard}>

                            <View style={styles.dataContainer}>
                                <View style={styles.authorImageContainer}>
                                    <Image
                                        source={require('../assets/profile_img.png')}
                                        style={styles.profileImage}
                                    ></Image>
                                </View>
                                <View style={styles.titleTextContainer}>
                                    <Text style={styles.postAuthorText}>
                                        {this.props.route.params.post.author}
                                    </Text>
                                </View>
                            </View>

                            <Image
                                source={require("../assets/image_1.jpg")}
                                style={styles.image}
                            ></Image>

                            <View style={styles.postTextContainer}>
                                <Text style={styles.postCaptionText}>
                                    {this.props.route.params.post.caption}
                                </Text>
                            </View>

                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                    <Text style={styles.likeText}>12m</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row",
        marginBottom: RFValue(5)
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center",
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    postContainer: {
        flex: 1
    },
    postCard: {
        margin:RFValue(13),
        backgroundColor:'#3d3d3d',
        borderRadius:RFValue(20),
    },
    dataContainer: {
        flex: 0.07,
        flexDirection: "row",
        marginTop:20,
        marginBottom:20
    },
    authorImageContainer:{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage:{
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
        resizeMode: 'contain',
    },
    titleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    postAuthorText: {
        fontSize:RFValue(20),
        color:'white'
    },
    image: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "stretch"
    },
    postTextContainer: {
        marginLeft: RFValue(10),
        marginTop: RFValue(20),
    },
    postCaptionText:{
        fontSize:RFValue(15),
        color:'white'
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(20)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
  });
  