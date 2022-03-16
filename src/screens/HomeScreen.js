import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.homeTitle}>Pick a category</Text>
    </View>

      );
};

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: 30,
    color: 'white',
    marginTop:40,
    fontWeight: '100'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C70E4F',
  }
});

export default HomeScreen;
