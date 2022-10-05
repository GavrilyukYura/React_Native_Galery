import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainStack from './navigate';



export default function App() {


  const RootApp = () => {
    return (
      <MainStack /> 
    )
  }
  
  
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}


