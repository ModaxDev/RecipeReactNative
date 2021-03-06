import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppButtonEmpty from "../components/AppButtonEmpty";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import routes from "../navigation/routes";
import appTheme from "../constants/theme";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={0}
        style={styles.backgroud}
        source={require("../assets/background.jpg")}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,1)", colors.black]}
          style={styles.linearGradient}
        >
          <View style={{ paddingLeft: 25, paddingBottom: 25 }}>
            <Text style={styles.title}>Cooking a</Text>
            <Text style={styles.title}>Delicious Food </Text>
            <Text style={styles.title}>Easily</Text>
          </View>
          <View style={{ paddingLeft: 25, paddingBottom: 25 }}>
            <Text style={styles.subtitle}>Discover more than 1200 food</Text>
            <Text style={styles.subtitle}>
              recipes in you hands and cooking
            </Text>
            <Text style={styles.subtitle}>it easily</Text>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title="Login"
              buttonContainerStyle={{
                paddingVertical: 18,
                borderRadius: appTheme.SIZES.radius,
              }}
              color={[appTheme.COLORS.darkGreen, appTheme.COLORS.lime]}
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
            <AppButton
              title="Sign Up"
              buttonContainerStyle={{
                paddingVertical: 18,
                marginTop: 18,
                borderRadius: appTheme.SIZES.radius,
                borderColor: appTheme.COLORS.darkLime,
                borderWidth: 1,
              }}
              color={[]}
              onPress={() => navigation.navigate(routes.REGISTER)}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroud: {
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "flex-end",
  },
  logoContainer: {
    top: 90,
    position: "absolute",
  },
  buttonContainer: {
    padding: 25,
    width: "100%",
  },
  text: {
    fontWeight: "600",
    fontSize: 25,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: 38,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.grey,
    fontSize: 14,
  },
});

export default WelcomeScreen;
