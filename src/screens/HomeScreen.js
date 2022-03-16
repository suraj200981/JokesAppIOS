import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Linking } from 'react-native';


const HomeScreen = (props) => {

  return (
    <View style={styles.container}>
        <Text style={styles.homeTitle}>Pick a category</Text>
        <View style={styles.containerForCats1}>
        <TouchableOpacity style={styles.categoryCard} onPress={() => {
          console.log('Going to component screen');
          props.navigation.navigate('Random');
        }}>
        <Text style={styles.catTitles}>Random Joke</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
        <Text style={styles.catTitles}>Programming Jokes</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerForCats2}>
        <TouchableOpacity style={styles.categoryCard}>
        <Text style={styles.catTitles}>Scary Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
        <Text style={styles.catTitles}>Christmas Jokes</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.creatorInfo}>An app by <Text style={{color: '#ff8f8f', textDecorationLine: 'underline'}}
      onPress={() => Linking.openURL('https://github.com/suraj200981/JokesAppIOS')}>
  Suraj Sharma
</Text></Text>
    </View>

  );
};

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: 30,
    color: 'white',
    marginTop:40,
    fontWeight: '100',
    textAlign: 'center'
  },
  catTitles: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    marginTop:90,
    fontWeight: '300'
  },
  container: {
    flex: 1,
    backgroundColor: '#C70E4F',
  },
  categoryCard:{
    width:150,
    height:200,
    backgroundColor:'rgba(76, 5, 30, 0.72)',
    borderRadius:10,
    marginTop:20,
    marginBottom:5,
    marginLeft:44,
  },
  containerForCats1:{
    flexDirection:'row',
  },
  containerForCats2:{
    flexDirection:'row',
  },
  creatorInfo:{
    fontSize:15,
    color:'white',
    marginTop:265,
    marginRight:20,
    fontWeight:'900',
    textAlign:'right',
    fontFamily:'Chalkduster'
  }
});

export default HomeScreen;
