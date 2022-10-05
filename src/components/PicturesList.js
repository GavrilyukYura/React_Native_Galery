import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as picturesAction from '../redux/picturesSlice';
import PicturesItem from "./PicturesItem";

const PicturesList = ( { navigation } ) => {
  const pictures = useSelector(state => state.pictures.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(picturesAction.init())
  }, []);



  return (
    <View style={style.list}>
      <View style={style.content}>
        {pictures.map(picture => (
          <TouchableOpacity key={picture.id} onPress={() => {
            navigation.navigate("SelectedItem", picture);
          }}>
              <PicturesItem picture={picture} navigation={navigation} />  
           </TouchableOpacity>
        ))}
      </View> 
    </View>
  );
};

export default PicturesList;

const style = StyleSheet.create({
  list: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
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