import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCardScreen extends Component{
    render(){
        return(
          <TouchableOpacity
            style={styles.containerButton}
            onPress={()=>
              this.props.navigation.navigate("PostScreen", {
                post: this.props.post
              })
            }
          >
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                  
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>

                    <Image source={require('../assets/post.jpeg')} style={styles.postImage}></Image>
                    <View style={styles.postContainer}>
                        <Text style={styles.postText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeText}> 12k </Text>
                        </View>
                    </View>
                </View>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      cardContainer:{
        margin:RFValue(13),
        backgroundColor:'#3d3d3d',
        borderRadius:RFValue(20),
      },
      authorContainer:{
        paddingLeft:RFValue(20),
        flex: 0.07,
        flexDirection: "row",
        marginTop:30,
        marginBottom:30
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
      authorNameContainer:{
        flex: 0.8,
        justifyContent: "center"
      },
      authorNameText:{
        fontSize:RFValue(20),
        color:'white'
      },
      postImage:{
        resizeMode:'contain',
        width:'95%',
        alignSelf:'center',
        height:RFValue(250),
      },
      postContainer:{
        marginLeft: RFValue(25),
        marginTop: RFValue(10),
      },
      postText:{
        fontSize:RFValue(18),
        color:'white'
      },
      actionContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:RFValue(10)
      },
      likeButton:{
        width:RFValue(160),
        height:RFValue(40),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#eb3948',
        borderRadius:RFValue(30)
      },
      likeText:{
        color:'white',
        fontSize:RFValue(25),
        marginLeft:RFValue(5)
      }
});