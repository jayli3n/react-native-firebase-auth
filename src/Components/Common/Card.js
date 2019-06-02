import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	const { containerStyle } = styles;

	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#ddd',
		borderBottomWidth: 0,

		elevation: 5,
		margin:10,
		padding: 10,
	}
};

export { Card };
