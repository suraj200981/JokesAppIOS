import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const RandomJokeScreen = () => {
  return (
    <View style={styles.container}>
     <View style={styles.jokesWindow}>

     </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
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

});

export default RandomJokeScreen;
