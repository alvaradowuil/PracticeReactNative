import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons} onPress={() =>
        navigation.navigate('Tasks')
      }>
        <Text style={styles.textButton}>Tasks</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() =>
        navigation.navigate('List')}>
        <Text style={styles.textButton}>List</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttons: {
    backgroundColor: "#00aaff",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  textButton: {
    color: "#000",
    fontSize: 20
  },
})

export default HomeScreen;
