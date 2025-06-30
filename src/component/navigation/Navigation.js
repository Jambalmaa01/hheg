import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import FileTable from '../table/file/FIleTable'
import UserTable from '../table/userTable/UserTable'

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="FileTable" component={FileTable} />
          <Stack.Screen name="UserTable" component={UserTable} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}