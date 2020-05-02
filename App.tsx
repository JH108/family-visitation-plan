import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'react-native-elements';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';

import store from './src/redux-modules/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<PaperProvider>
			<ThemeProvider>
				<SafeAreaProvider>
					<Provider store={store}>
						<NavigationContainer>
							<Navigator />
						</NavigationContainer>
					</Provider>
				</SafeAreaProvider>
			</ThemeProvider>
		</PaperProvider>
	);
}
