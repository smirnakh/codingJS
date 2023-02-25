function sleepIn(weekday, vacation) {
  if (weekday && vacation) return true;
  if (weekday && !vacation) return false;
  if (!weekday && vacation) return true;
  if (!weekday && !vacation) return true;
}
