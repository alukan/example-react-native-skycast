import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Location from "expo-location"
import { useEffect, useState } from "react"

import { type WeatherLocation } from "./types"

const STORAGE_KEY = "current-location"

export function useLocation(): WeatherLocation | undefined {
  const [location, setLocation] = useState<WeatherLocation>()

  useEffect(() => {
    async function getDeviceLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== Location.PermissionStatus.GRANTED) {
        console.log("Permission to access location was denied")
        return undefined
      }

      try {
        const location = await Location.getCurrentPositionAsync()

        return {
          name: "Here",
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
      } catch (error) {
        console.error(error)
        return undefined
      }
    }

    void (async () => {
      const currentLocation = await getDeviceLocation()
      if (currentLocation) {
        setLocation(currentLocation)
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(currentLocation))
        return
      }

      const cachedLocation = await AsyncStorage.getItem(STORAGE_KEY)
      if (cachedLocation) {
        const location = JSON.parse(cachedLocation) as WeatherLocation
        setLocation(location)
        return
      }

      setLocation({
        name: "Barcelona",
        latitude: 41.385063,
        longitude: 2.173404,
      })
    })()
  }, [])

  return location
}
