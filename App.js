/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopHeadlines from './src/views/TopHeadlines';
import HeadlineDetail from './src/views/HeadlineDetail';
import AppContext from './src/appContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const contextState = {
    selectedArticle,
    setSelectedArticle,
  };

  return (
    <SafeAreaProvider>
      <AppContext.Provider value={contextState}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Top Headlines" component={TopHeadlines} />
            <Stack.Screen name="Headline Detail" component={HeadlineDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
