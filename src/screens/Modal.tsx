import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Title, IconButton } from 'react-native-paper';
import { WIDTH } from '../globals';
import Form from '../components/Form';

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingLeft: 15,
	},
});

const ModalScreen = ({ navigation, route }) => {
	const onDismiss = () => navigation.goBack();
	const theme = useTheme();;
	const params = route.params;

	return (
		<SafeAreaView
			style={{
				...styles.container,
				backgroundColor: theme.colors.backdrop,
				width: WIDTH,
			}}
		>
			<View style={styles.header}>
				<Title>{params.title}</Title>
				<IconButton icon="close" onPress={onDismiss} />
			</View>
			<Form
				onDismiss={onDismiss}
				{...{
					formName: params.formName,
					onSubmit: params.onSubmit,
					fields: params.fields,
				}}
			/>
		</SafeAreaView>
	);
};

export default ModalScreen;
