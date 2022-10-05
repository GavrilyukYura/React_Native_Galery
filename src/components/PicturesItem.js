import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const PicturesItem = ({ picture }) => {
  return (
    <View style={style.card} >
      <View style={style.item}>
        <Image source={{
          width: 100,
          height: 100,
          uri: picture.urls.small
        }} />
      </View>
      <Text>{picture.user.name}</Text>
    </View>
    
  );
};

export default PicturesItem;

const style = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 100,
  }
});