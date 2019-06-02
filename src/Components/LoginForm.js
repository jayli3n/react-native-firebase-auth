import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './Common';


class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	enteredText = (text) => {
		this.setState({
			text
		});
		console.log(this.state.text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label='Email: '
						value={this.state.text} 
						onChangeText={text => this.enteredText(text)} 
					/>
				</CardSection>

				<CardSection></CardSection>

				<CardSection>
					<Button text='Log In' />
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
