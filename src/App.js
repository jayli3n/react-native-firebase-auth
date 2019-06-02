import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, CardSection, Button } from './Components/Common';


class App extends Component {
	render() {
		return (
			<View>
				<Header headerText='Hi' />
				<Text>An App</Text>
			</View>
		);
	}
}

export default App;
