import React, {useState}from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';


const RandomJokeScreen = () => {
   

    //state variable for setup
    const [setupState, setSetupState] = useState("What do you call a developer who doesn't comment code?");
    //state variable for punchline
    const [punchlineState, setPunchlineState] = useState("A developer.");
     function getJoke() {

      
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=twopart&idRange=1-319', {
          headers: {
            Accept: 'application/json'
          }
        }).then(response => {
          console.log(response.data.setup);
          setSetupState(response.data.setup);
          console.log(response.data.delivery);
          setPunchlineState(response.data.delivery);
        });
      };
    
  return (
    <View style={styles.container}>
     <View style={styles.jokesWindow}>
     <Text style={styles.jokeSetupTitle}>Setup:</Text>

        <Text style={styles.jokeTitle}>{setupState}</Text>
        <Text style={styles.jokeSetupTitle}>Delivery:</Text>
        <Text style={styles.jokeTitle}>{punchlineState}</Text>
     </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={()=>{
                    console.log("button pressed");
                    getJoke();
                }}>→</Text>
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
  jokeAnswer:{
    fontSize: 20,
    color: 'green',

  },
  jokeSetupTitle: {
    fontSize: 25,
    color: 'black',
    marginTop:10,
    marginBottom:0,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  jokeTitle: {
    fontSize: 20,
    color: 'black',
    marginTop:10,
    marginBottom:20,
    fontWeight: '100',
    textAlign: 'center'
},
  jokesWindow: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
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
