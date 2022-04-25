import format from "date-fns/format"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import formatDistanceStrict from "date-fns/formatDistanceStrict"

export const formatSafe = (
  input: any,
  formatString = "P",
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: number
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
  }
) => {
  let date

  if (input instanceof Date) date = input
  else date = new Date(input)

  if (!date) return "Invalid Date"

  if (!isNaN(date.getTime())) return format(date, formatString, options)

  return "Invalid Date"
}

export const formatDistanceToNowSafe = (
  input: any,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  }
) => {
  let date

  if (input instanceof Date) date = input
  else date = new Date(input)

  if (!date) return "Invalid Date"

  if (!isNaN(date.getTime())) return formatDistanceToNow(date, options)

  return "Invalid Date"
}

export const formatDistanceStrictSafe = (
  input: Date | number,
  input2: Date | number,
  options?: {
    addSuffix?: boolean
    unit?: "second" | "minute" | "hour" | "day" | "month" | "year"
    roundingMethod?: "floor" | "ceil" | "round"
    locale?: Locale
  }
) => {
  let date, baseDate

  if (input instanceof Date) date = input
  else date = new Date(input)

  if (input2 instanceof Date) baseDate = input2
  else baseDate = new Date(input2)

  if (!date || !baseDate) return "Invalid Date"

  if (!isNaN(date.getTime()) || !isNaN(baseDate.getTime()))
    return formatDistanceStrict(date, baseDate, options)

  return "Invalid Date"
}
