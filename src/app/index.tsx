import { Link, Stack } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

import CurrentWeather from "../CurrentWeather"
import Forecast from "../Forecast"

const location = { name: "Barcelona", latitude: 41.385063, longitude: 2.173404 }

const App: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      <View style={styles.container}>
        <Text>Weather App</Text>

        <CurrentWeather location={location} />
        <Forecast location={location} />

        <Link href="/temp">Go to Temporary</Link>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
})
