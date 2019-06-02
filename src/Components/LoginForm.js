import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './Common';


class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false
		};
	}

	onButtonPress() {
		const { email, password } = this.state;
		this.setState({
			error: '',
			loading: true
		});
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => this.onLoginSuccess())
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(() => this.onLoginSuccess())
				.catch(({ message }) => this.onLoginFail(message));
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	onLoginFail(message) {
		this.setState({
			error: message,
			loading: false
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
					{this.state.loading ? 
						<Spinner size='small' /> :
						<Button 
							text='Log In'
							onPress={() => this.onButtonPress()}
						/>
					}
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
