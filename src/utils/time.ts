import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const utcNow = (formatType = 0) => {
  const now = new Date()
  const timeZone = 'UTC'
  const nowUtc = utcToZonedTime(now, timeZone)
  const formatOptions = [
    'yyyy-MM-dd-HH:mm:ss',
    'yyyy-MM-dd',
    'yyyy-MM-dd-HH-mm-ss',
    'yyyy-MM-dd-HH:00',
  ]
  const formattedDate = format(nowUtc, formatOptions[formatType])
  return formattedDate
}

export const formatTime = (ms: number): string => {
  let seconds: number | string
  let hours: number | string
  let minutes: number | string
  seconds = Math.floor(ms / 1000)
  hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60

  // パディングを追加して二桁に整形する
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return `${hours}:${minutes}:${seconds}`
}

export const getTimestamp = () => {
  const now = new Date()
  const timeZone = 'UTC'
  const nowUtc = utcToZonedTime(now, timeZone)
  const timestamp = format(nowUtc, 'yyyy-MM-dd:HH:mm:ss:SSS')
  return timestamp
}
