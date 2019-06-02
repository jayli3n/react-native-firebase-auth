import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './Common';
import firebase from 'firebase';


class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: ''
		};
	}

	onButtonPress() {
		const { email, password } = this.state;
		this.setState({
			error: ''
		});
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.catch(({ message }) => {
					this.setState({
						error: message
					});
				});
			});
	}

	render() {
		const { errorTextStyle } = styles;

		return (
			<Card>
				<CardSection>
					<Input 
						label='Email: '
						value={this.state.email} 
						placeholder='user@gmail.com'
						onChangeText={email => this.setState({ email })} 
					/>
				</CardSection>

				<CardSection>
					<Input 
						label='Password: '
						value={this.state.password} 
						placeholder='password'
						secureTextEntry
						onChangeText={password => this.setState({ password })} 
					/>
				</CardSection>

				<CardSection>
					<Button 
						text='Log In'
						onPress={this.onButtonPress.bind(this)}
					/>
				</CardSection>

				<Text style={errorTextStyle}>
					{this.state.error}
				</Text>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		alignSelf: 'center',
		color: 'red',
	}
};

export default LoginForm;
