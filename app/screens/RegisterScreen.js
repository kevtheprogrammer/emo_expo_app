import React, { useState } from "react";
import * as Yup from "yup";
import {
	View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet
} from 'react-native';
import Screen from "../components/Screen";
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import routes from "../navigation/routes";

// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";
// import useApi from "../hooks/useApi";
// import usersApi from "../api/users";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
	// const registerApi = useApi(usersApi.register);
	// const loginApi = useApi(authApi.login);
	// const auth = useAuth();
	const [error, setError] = useState();

	// const handleSubmit = async (userInfo) => {
	// 	// const result = await registerApi.request(userInfo);

	// 	if (!result.ok) {
	// 		if (result.data) setError(result.data.error);
	// 		else {
	// 			setError("An unexpected error occurred.");
	// 			console.log(result);
	// 		}
	// 		return;
	// 	}

	// 	const { data: authToken } = await loginApi.request(
	// 		userInfo.email,
	// 		userInfo.password
	// 	);
	// 	auth.logIn(authToken);
	// };

	return (
		<>
			{/* <ActivityIndicator
				visible={registerApi.loading || loginApi.loading}
			/> */}
			<ImageBackground source={require("../assets/bg.jpg")}
				style={{
					flex: 1,

				}}>
				<View style={{
					flexDirection: 'row', flex: 0.5,
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
					padding: 20, flex: 3
				}}>
					<View style={[styles.title, { alignItems: 'center' }]}>
						<Text style={{ fontSize: 26, fontWeight: '600' }}>Register</Text>
						<Text >welcome to emo, create an account with us!</Text>
					</View>

					<Form
						initialValues={{ name: "", email: "", password: "" }}
						// onSubmit={handleSubmit}
						validationSchema={validationSchema}
					>
						<ErrorMessage error={error} visible={error} />
						<FormField
							autoCorrect={false}
							icon="account"
							name="name"
							placeholder="Name"
						/>
						<FormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							name="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<FormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<SubmitButton color="black" title="Register" />
					</Form>
					<View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 20 }}>
						<Text >I already have an account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
							<Text style={{ marginStart: 10, color: 'dodgerblue' }}>login</Text>
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

			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
