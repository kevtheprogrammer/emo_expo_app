import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={6}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../../assets/adaptive-icon.png")}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<Text style={styles.tagline}>Welcome to E-Market Organizer</Text>

				<Button
					title="Login"
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<Button
					title="Register"
					color="black"
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsContainer: {
		width: "100%",
		padding: 20,
		alignItems: "center",

	},
	logo: {
		width: 250,
		height: 250,
	},
	logoContainer: {
		position: "absolute",
		top: 90,
		alignItems: "center",
	},
	tagline: {
		fontSize: 18,
		// fontWeight: "600",
		paddingVertical: 20,
	},
});

export default WelcomeScreen;
