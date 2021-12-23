import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

// Screens
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App Screen</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        doloremque veritatis sint praesentium totam. Facilis, quas excepturi
        eveniet optio necessitatibus facere earum nisi dolor praesentium
        explicabo! Repellat numquam, illum ipsum quasi qui, suscipit deleniti
        excepturi optio asperiores debitis eaque ipsa vel porro sunt molestiae
        dicta quibusdam dolorem eius. Consequatur nulla expedita necessitatibus
        voluptatem rem animi porro voluptatum iusto dignissimos, temporibus
        ducimus blanditiis voluptates. Ducimus accusamus recusandae, fugit
        consequuntur, cupiditate eveniet officiis fuga iure vitae quia aut
        nesciunt dolorem atque itaque repudiandae? Atque rem officiis similique
        non cupiditate eaque repudiandae, omnis, sed veniam ea saepe minima iure
        fugiat aperiam maiores reiciendis!
      </Text>
    </View>
*/
