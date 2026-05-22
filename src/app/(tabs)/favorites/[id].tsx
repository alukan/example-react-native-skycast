import { Stack, useLocalSearchParams } from "expo-router"
import { StyleSheet, View } from "react-native"

import CurrentWeather from "../../../CurrentWeather"
import Forecast from "../../../Forecast"

const location = { name: "Reno", latitude: 39.5299, longitude: 119.8143 }

const App: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <>
      <Stack.Screen options={{ title: `Favorite ${id}` }} />

      <View style={styles.container}>
        <CurrentWeather location={location} />
        <Forecast location={location} />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
