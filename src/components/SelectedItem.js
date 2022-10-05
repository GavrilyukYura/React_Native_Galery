import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";


const SelectedItem = ({ route }) => {
  return (
    <View>
      <Image source={{
          width: '100%',
          height: '50vh',
          uri: route.params.urls.regular
        }} />
        <Text style={style.name}>{route.params.user.name}</Text>
        <Text style={style.description}>{route.params.description}</Text>
    </View>
  );
};

export default SelectedItem;

const style = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 20,
  }
});