import { useEffect, useState } from "react"

import {
  fetchCurrentWeather,
  fetchForecast,
  type CurrentWeatherData,
  type ForecastDay,
  type Location,
} from "./api"

export function useCurrentWeather(location: Location) {
  const [data, setData] = useState<CurrentWeatherData>()

  useEffect(() => {
    void fetchCurrentWeather(location).then(setData)
  }, [location])

  return data
}

export function useForecast(location: Location) {
  const [data, setData] = useState<ForecastDay[]>()

  useEffect(() => {
    void fetchForecast(location).then(setData)
  }, [location])

  return data
}
