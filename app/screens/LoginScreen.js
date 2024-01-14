import React, { useState } from "react";
import * as Yup from "yup";
import { BlurView } from 'expo-blur';
import Screen from "../components/Screen";
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton,
} from "../components/forms";

import {
	View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import * as Animatable from 'react-native-animatable';
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ props, navigation }) {
	const auth = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		auth.logIn(result.data.access);
		console.warn('RESULTS-------------', result,)
	};

	return (

		< ImageBackground
			source={require("../assets/bg.jpg")}
			style={{ flex: 1 }}
		>
			<View style={{
				flexDirection: 'row',
				marginVertical: 55, marginHorizontal: 20, justifyContent: 'space-between'
			}}>
				<TouchableOpacity onPress={() => navigation.goBack()} style={{
					padding: 10, width: 60, height: 60, justifyContent: 'center', alignItems: 'center',
					backgroundColor: 'white',
					borderRadius: '50%',
				}}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</TouchableOpacity>
				<Image style={{ width: 80, height: 80 }} source={require("../../assets/adaptive-icon.png")} />
			</View>



			<Animatable.View animation="slideInUp" duration={1500} style={{
				padding: 20
			}}>
				<View style={[styles.title, { alignItems: 'center' }]}>
					<Text style={{ fontSize: 24, fontWeight: '600' }}>Login</Text>
					<Text >Hello again! welcome back</Text>

				</View>

				<Form
					initialValues={{ email: "admin@gmail.com", password: "admin" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage
						error="Invalid email and/or password."
						visible={loginFailed}
					/>

					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						name="email"
						placeholder="Email"
						textContentType="emailAddress"
						keyboardType="email-address"
					/>

					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Password"
						textContentType="password"
						secureTextEntry={true}
					/>
					<SubmitButton color="black" title="Login" />
				</Form>
				<View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 20 }}>
					<Text >I don't have an account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)}>
						<Text style={{ marginStart: 10, color: 'dodgerblue' }}>register</Text>
					</TouchableOpacity>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text >MORE OPTIONS</Text>
					<View style={{ flexDirection: 'row', marginVertical: 20 }}>
						<TouchableOpacity style={{
							backgroundColor: 'white', borderRadius: '50%',
							width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
						}}>
							<Image style={{ width: 70, height: 70 }} source={require("../assets/brand/google.png")} />
						</TouchableOpacity>
						<TouchableOpacity style={{
							backgroundColor: 'white', borderRadius: '50%', marginHorizontal: 30,
							width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
						}}>
							<Image style={{ width: 45, height: 45 }} source={require("../assets/brand/facebook.png")} />
						</TouchableOpacity>
						<TouchableOpacity style={{
							backgroundColor: 'white', borderRadius: '50%', padding: 17,
							width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
						}}>
							<Image style={{ width: 45, height: 45 }} source={require("../assets/brand/linkedin.png")} />
						</TouchableOpacity>

					</View>
				</View>

			</Animatable.View>


		</ImageBackground >
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	title: {

		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
