import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const RandomJokeScreen = () => {
  return (
    <View style={styles.container}>
     <View style={styles.jokesWindow}>
     <Text style={styles.jokeSetupTitle}>Setup:</Text>

        <Text style={styles.jokeTitle}>What do dermatologists and the KKK have in common?</Text>
     </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C70E4F',
  },
  jokeDeliveryTitle:{

  },
  jokeSetupTitle: {
    fontSize: 25,
    color: 'black',
    marginTop:10,
    marginBottom:0,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  jokeTitle: {
    fontSize: 25,
    color: 'black',
    marginTop:10,
    marginBottom:20,
    fontWeight: '100',
    fontFamily: 'Roboto',
    textAlign: 'center'
},
  jokesWindow: {
    backgroundColor: 'white',
    width: 300,
    height: 450,
    borderRadius: 10,
    marginTop: 30,
    //align in the center of the screen
    alignSelf: 'center',
    //border color
    borderColor: 'black',
    //border width
    borderWidth: 2,
    },
buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
    },
buttonText:{
        color: 'white',
        fontSize: 34,
        backgroundColor: 'black',
        width: 80,
        height: 70,
        borderRadius:25,
        overflow: 'hidden',
        textAlign: 'center',
        paddingTop: 15,


    }

});

export default RandomJokeScreen;
