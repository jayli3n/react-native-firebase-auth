import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
	const { textInputStyle } = styles;
	const { label, value, onChangeText } = props;

	return (
		<View>
			<Text>{label}</Text>
			<TextInput 
				style={textInputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	textInputStyle: {
		flex: 1,
		height: 20,
		width: null,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	}
};

export { Input };
