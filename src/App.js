import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import { Header, CardSection, Button, Spinner } from './Components/Common';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: null
		};
	}

	componentWillMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyDrxVWflbyGP13HtgFgxXL-S02YI2EQTRs',
			authDomain: 'react-native-firebase-au-bdbd7.firebaseapp.com',
			databaseURL: 'https://react-native-firebase-au-bdbd7.firebaseio.com',
			projectId: 'react-native-firebase-au-bdbd7',
			storageBucket: 'react-native-firebase-au-bdbd7.appspot.com',
			messagingSenderId: '958514253714',
			appId: '1:958514253714:web:00d706c43945dac9'
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					loggedIn: true
				});
			} else {
				this.setState({
					loggedIn: false
				});
			}
		});
	}

	onLogoutButtonPress() {
		firebase.auth().signOut();
	}

	renderContent() {
		console.log(this.state.loggedIn);
		if (this.state.loggedIn === true) {
			return (
				<View>
					<Header headerText='Account' />
					<CardSection>
						<Button 
							text='Log Out'
							onPress={() => this.onLogoutButtonPress()}
						/>
					</CardSection>
				</View>
			);
		} else if (this.state.loggedIn === false) {
			return (
				<View>
					<Header headerText='Log In' />
					<LoginForm />
				</View>
			);
		} else {
			return (
				<Spinner size='large' />
			);
		}
	}

	render() {
		return (
			<View style={{
						position: 'absolute',
						top: 0,
						left: 0, 
						right: 0,
						bottom: 0,
					}}>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
