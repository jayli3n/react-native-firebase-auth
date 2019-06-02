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

		shadowOffset: { width: 0, height: 2 },
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 2,

		elevation: 5,
		margin:10,
	}
};

export { Card };
