import React, { FunctionComponent } from 'react';
import { Card, IconButton, Avatar, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { WIDTH } from '../../globals';

export interface BasicCardProps {
	title: string;
	subtitle?: string;
	families: Array<string>;
	phoneNumber: string;
}

const styles = StyleSheet.create({
	card: {
		width: WIDTH * 0.95,
		marginBottom: 15,
	},
});

const BasicCard: FunctionComponent<BasicCardProps> = ({
	title,
	subtitle,
	families,
	phoneNumber,
}) => {
	return (
		<Card style={styles.card}>
			<Card.Title
				title={title}
				subtitle={subtitle}
				left={(props) => <Avatar.Icon {...props} icon="folder" />}
				right={(props) => (
					<IconButton
						{...props}
						icon="more"
						onPress={() => {
							console.log(title, subtitle, families, phoneNumber);
						}}
					/>
				)}
			/>
			<Card.Content>
				<Paragraph>{phoneNumber}</Paragraph>
			</Card.Content>
		</Card>
	);
};

export default BasicCard;
