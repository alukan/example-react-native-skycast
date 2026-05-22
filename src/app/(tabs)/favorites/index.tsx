import { Link, Stack } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

const App: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Favorites" }} />

      <View style={styles.container}>
        <Text>Favorites</Text>

        <Link href="/favorites/one">One</Link>
        <Link href="/favorites/two">Two</Link>
        <Link href="/favorites/three">Three</Link>
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
