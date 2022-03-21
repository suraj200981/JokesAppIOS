import React, {useState}from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Vibration} from 'react-native';
import axios from 'axios';


const RandomJokeScreen = () => {
   
    //state variable for joke type
    var [jokeType, setJokeType] = useState(true);

    //state variable for setup
    var [setupStatevar, setSetupState] = useState("What do you call a developer who doesn't comment code?");
    //state variable for punchline
    var [punchlineStatevar, setPunchlineState] = useState("A developer.");

    //state variable for array to store all the setups
    var [setupArray, setSetupArray] = useState(["What do you call a developer who doesn't comment code?"]);

    //state variable for array to store all the punchlines
    var [punchlineArray, setPunchlineArray] = useState(["A developer."]);

    //state variable for count
    var [count, setCount] = useState(0);

     function nextJoke() {

      if(setupArray.length-1 != count){
        setSetupState(setupArray[count+1]);
        setPunchlineState(punchlineArray[count+1]);
        setCount(count+1);
      }else{
        if(jokeType===true){
      console.log("Element at index 0: "+setupArray[0])
        setCount(count + 1);
        console.log(count);
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
      }
        //single joke
        else if(jokeType===false){
          console.log("Element at index 0: "+setupArray[0])
        setCount(count + 1);
        console.log(count);
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single', {
          headers: {
            Accept: 'application/json'
          }
        }).then(response => {
          setSetupState(response.data.setup);
          setSetupArray([...setupArray, setupStatevar]);

          console.log(setupArray);
        }).catch(error => {
          console.log(error);
        });
        }
      }
      };

      function singleJoke(){
        //set joke type to true
        setJokeType(jokeType = false);
        console.log("Joke type: "+ jokeType);
        //set setup state to setup
        setSetupState(setupStatevar = "Never date a baker. They're too kneady.");
      
      }

      function twoPartJoke(){
        setJokeType(jokeType = true);
        console.log("Joke type: "+ jokeType);
        setSetupState(setupStatevar = "What do you call a developer who doesn't comment code?");

      }

      function previousJoke() {
          if (setupArray.length >1) {
            setCount(count - 1);
            console.log(count);

            if(count<1){
              setCount(1);
              alert("There is no previous joke!");
              //vibrate for 400ms
            Vibration.vibrate(400);
          }else{
            count--;
            console.log(setupArray[count]);
            setSetupState(setupArray[count]);
            setPunchlineState(punchlineArray[count]);
          }

          }else{
            setSetupState("What do you call a developer who doesn't comment code?");
            setPunchlineState("A developer.")
            alert("There is no previous joke!");
            //vibrate for 400ms
            Vibration.vibrate(10000);
          }

      }
    
  return (
    <View style={styles.container}>
     <View style={styles.jokesWindow}>
       {jokeType ? (
     <Text style={styles.jokeSetupTitle}>Setup:</Text>
       ) : null}

      {jokeType ==false ? (
      <Text style={styles.jokeSetupTitle}>Joke:</Text>
      ) : null}

        <Text style={styles.jokeTitle}>{setupStatevar}</Text>
        {jokeType ? (
        <Text style={styles.jokeSetupTitle}>Delivery:</Text>
        ) : null}
                {jokeType ? (
        <Text style={styles.jokeTitle}>{punchlineStatevar}</Text>
        ) : null}
        
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

        <View>
        <Text style={{fontSize:30, textAlign: 'center', fontWeight: 'bold'}}>Select joke type:</Text>
        <TouchableOpacity onPress={()=>{
                     Vibration.vibrate(100);
                     singleJoke();

        }}><View style={styles.jokeTypeButton}>
        <Text style={{color:'white', textAlign:'center', paddingTop:11, fontSize:15}}>Single joke</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
                    Vibration.vibrate(100);
                    twoPartJoke();

        }}><View style={styles.jokeTypeButton}>
        <Text style={{color:'white', textAlign:'center', paddingTop:11, fontSize:15}}>Two part joke</Text>
      </View>
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
    fontWeight: '300',
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
    },
    jokeTypeButton: {
      color: 'white',
      alignSelf: 'center',
        fontSize: 34,
        backgroundColor: '#070503',
        width: 300,
        height: 70,
        borderRadius:10,
        overflow: 'hidden',
        textAlign: 'center',
        paddingTop: 15,
        marginTop: 20,
    }

});

export default RandomJokeScreen;
