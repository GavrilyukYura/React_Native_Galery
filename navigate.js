import React from "react";
import PicturesList from "./src/components/PicturesList";
import SelectedItem from "./src/components/SelectedItem";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Galery"
          component={PicturesList}
          options={{title: 'Galery'}}
        />
         <Stack.Screen 
          name="SelectedItem"
          component={SelectedItem}
          options={{title: 'Picture'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};