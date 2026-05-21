import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import Card from "./Card"
import toWeather, { type Weather } from "./toWeather"

const CurrentWeather: React.FC<{
  location: {
    name: string
    latitude: number
    longitude: number
  }
}> = ({ location }) => {
  const [data, setData] = useState<{
    condition: Weather
    temperature: number
    wind: number
    humidity: number
    uv: number
  }>()

  useEffect(() => {
    void (async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,is_day,weather_code,wind_speed_10m,relative_humidity_2m,uv_index`,
      )
      const data = (await response.json()) as {
        current: {
          weather_code: number
          temperature_2m: number
          wind_speed_10m: number
          relative_humidity_2m: number
          uv_index: number
        }
      }

      setData({
        condition: toWeather(data.current.weather_code),
        temperature: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
        humidity: data.current.relative_humidity_2m,
        uv: data.current.uv_index,
      })
    })()
  }, [location])

  return (
    <Card>
      <View style={styles.current}>
        <Text style={styles.temperature}>{data?.temperature ?? "--"} C</Text>
        <Text style={styles.location}>{location.name}</Text>
        <Text style={styles.condition}>{data?.condition ?? "--"}</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>
            {data?.wind.toFixed(0) ?? "--"} km/h
          </Text>
          <Text style={styles.statLabel}>Wind</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>
            {data?.humidity.toFixed(0) ?? "--"}%
          </Text>
          <Text style={styles.statLabel}>Humidity</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{data?.uv.toFixed(0) ?? "--"}</Text>
          <Text style={styles.statLabel}>UV</Text>
        </View>
      </View>
    </Card>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  current: { alignItems: "center", marginBottom: 24 },
  temperature: { fontSize: 28 },
  location: { fontSize: 12, color: "#888" },
  condition: { fontWeight: "bold" },
  stats: { flexDirection: "row" },
  stat: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 20, fontWeight: "500" },
  statLabel: { fontSize: 12, color: "#888", marginTop: 2 },
})
