import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  Text,
  Container,
  Card,
  Content,
  Header,
  Body,
  H1,
  H3,
  Button,
} from 'native-base';

import Icons from './components/Icons';
//import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty');

const App = () => {
  return (
    <>
      <Text>HELLOOOKOKO</Text>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },

  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    backgroundColor: '#4652B3',
    paddingVertical: 10,
  },
});
