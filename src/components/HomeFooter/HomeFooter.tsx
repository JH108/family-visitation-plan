import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
	bottom: {
		justifyContent: 'space-evenly',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});

const getIcon = (route) => {
	switch (route) {
		case 'Visitation List':
			return 'chart-timeline';
		case 'Deacons List':
			return 'account-details';
		case 'Families List':
			return 'account-group';
		default:
			return '';
	}
};

const HomeFooter = ({ navigation, state, descriptors }) => {
	const theme = useTheme();

	return (
		<Appbar style={styles.bottom}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				const icon = getIcon(route.name);
				const color = isFocused
					? theme.colors.accent
					: theme.colors.onBackground;

				return (
					<Appbar.Action
						icon={icon}
						color={color}
						onPress={onPress}
						onLongPress={onLongPress}
						accessibilityRole="button"
						accessibilityStates={isFocused ? ['selected'] : []}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						key={options.tabBarTestID}
						size={36}
					/>
				);
			})}
		</Appbar>
	);
};

export default HomeFooter;
