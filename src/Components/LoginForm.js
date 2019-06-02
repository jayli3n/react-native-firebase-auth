import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './Common';


class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	render() {
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
					<Button text='Log In' />
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
