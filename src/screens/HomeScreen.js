import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.homeTitle}>Pick a category</Text>
        <View style={styles.containerForCats1}>
        <TouchableOpacity style={styles.categoryCard}>
        <Text>Ionicons Icons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
        <Text>Ionicons Iconsdss</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerForCats2}>
        <TouchableOpacity style={styles.categoryCard}>
        <Text>Ionicons Icons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
        <Text>Ionicons Iconsdss</Text>
        </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#C70E4F',
  },
  categoryCard:{
    width:150,
    height:300,
    backgroundColor:'rgba(76, 5, 30, 0.72)',
    borderRadius:10,
    marginTop:20,
    marginBottom:20,
    marginLeft:31,
  },
  containerForCats1:{
    flexDirection:'row',
  },
  containerForCats2:{
    flexDirection:'row',
  }
});

export default HomeScreen;
