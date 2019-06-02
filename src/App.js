import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import { Header } from './Components/Common';

class App extends Component {
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
	}

	render() {
		return (
			<View>
				<Header headerText='Log In' />
				<LoginForm />
			</View>
		);
	}
}

export default App;
