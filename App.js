import React from 'react';
import {
  Text,
} from 'react-native';

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// bring in all screans
import Home from './Screens/Home'
import Add from './Screens/Add'
import Edit from './Screens/Edit'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      {/* Home screen */}
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'LCO netflix App',
          headerTitleStyle:{
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>

      {/* Add screen */}
        <Stack.Screen 
        name="Add"
        component={Add}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'LCO netflix App',
          headerTitleStyle:{
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>

      {/* Edit screen */}
        <Stack.Screen 
        name="Edit"
        component={Edit}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'LCO netflix App',
          headerTitleStyle:{
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
