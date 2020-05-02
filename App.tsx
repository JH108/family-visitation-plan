import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'react-native-elements';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/Navigator';

import { store, persistor } from './src/redux-modules/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<PaperProvider>
			<ThemeProvider>
				<SafeAreaProvider>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<NavigationContainer>
								<Navigator />
							</NavigationContainer>
						</PersistGate>
					</Provider>
				</SafeAreaProvider>
			</ThemeProvider>
		</PaperProvider>
	);
}
