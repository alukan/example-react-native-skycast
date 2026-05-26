import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

import { type WeatherLocation } from "./types"

const STORAGE_KEY = "current-location"

export function useLocation(): WeatherLocation | undefined {
  const [location, setLocation] = useState<WeatherLocation>()

  useEffect(() => {
    void (async () => {
      // const currentLocation = await getDeviceLocation()
      // if (currentLocation) {
      //   const location = {...}
      //   setLocation(location)
      //   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(location))
      //   return
      // }

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
