import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider, useTheme } from 'react-native-paper';
import { Provider as PaperProvider, Portal, DefaultTheme } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/Navigator';

import { store, persistor } from './src/redux-modules/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomTheme from './src/typescript/CustomTheme';

export const useCustomTheme = () => {
	const theme = useTheme();

	return theme as CustomTheme;
};

const theme: CustomTheme = {
	...DefaultTheme,
	fontSizes: {
		small: 16,
		medium: 24,
		large: 32
	},
	iconSizes: {
		small: 21,
		medium: 29,
		large: 37,
	},
};

export default function App() {
	return (
		<PaperProvider>
			<ThemeProvider theme={theme}>
				<SafeAreaProvider>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<NavigationContainer>
								<Portal.Host>
									<Navigator />
								</Portal.Host>
							</NavigationContainer>
						</PersistGate>
					</Provider>
				</SafeAreaProvider>
			</ThemeProvider>
		</PaperProvider>
	);
}
