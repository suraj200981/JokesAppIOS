import React, {useState}from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';


const RandomJokeScreen = () => {
   

    //state variable for setup
    const [setupStatevar, setSetupState] = useState("What do you call a developer who doesn't comment code?");
    //state variable for punchline
    const [punchlineStatevar, setPunchlineState] = useState("A developer.");

    //state variable for array to store all the setups
    const [setupArray, setSetupArray] = useState([]);

    //state variable for array to store all the punchlines
    const [punchlineArray, setPunchlineArray] = useState([]);

    var count = 0;
     function nextJoke() {
        count = count + 1;
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=twopart&idRange=1-319', {
          headers: {
            Accept: 'application/json'
          }
        }).then(response => {
          setSetupState(response.data.setup);
          setSetupArray([...setupArray, setupStatevar]);

          setPunchlineState(response.data.delivery);
          setPunchlineArray([...punchlineArray, punchlineStatevar]);

          console.log(setupArray);
        }).catch(error => {
          console.log(error);
        });
      };

      function previousJoke() {
          count = count - 1;
          if (setupArray.length >0) {
            setupArray.pop();
            setSetupState(setupArray[setupArray.length - 1]);
            punchlineArray.pop();
            setPunchlineState(punchlineArray[punchlineArray.length - 1]);

          }else{
            setSetupState("What do you call a developer who doesn't comment code?");
            setPunchlineState("A developer.")
            alert("There is no previous joke!");
          }

      }
    
  return (
    <View style={styles.container}>
     <View style={styles.jokesWindow}>
     <Text style={styles.jokeSetupTitle}>Setup:</Text>

        <Text style={styles.jokeTitle}>{setupStatevar}</Text>
        <Text style={styles.jokeSetupTitle}>Delivery:</Text>
        <Text style={styles.jokeTitle}>{punchlineStatevar}</Text>
     </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => {
                    previousJoke();
                }}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={()=>{
                    console.log("Next button pressed");
                    nextJoke();
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
