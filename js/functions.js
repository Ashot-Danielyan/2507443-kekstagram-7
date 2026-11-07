//Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

window.checkStringLength = checkStringLength;

//Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normaLizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normaLizedString.split('').reverse().join('');
  return normaLizedString === reversedString;
}

window.isPalindrome = isPalindrome;

//Функция извлечения чисел из строки
function extractDigits(value){
  const digits = String(value).replace(/\D/g, '');

  if (digits === '') {
    return NaN;
  }

  return Number(digits);
}

window.extractDigits = extractDigits;

// Переводим время в минуты.
const convertTimeToMinutes = (time) => {
  const timeParts = time.split(':');

  const hours = Number(timeParts[0]);
  const minutes = Number(timeParts[1]);

  return hours * 60 + minutes;
};

// Проверяем, помещается ли встреча в рабочий день.
const isMeetingWithinWorkingDay = (
  workingDayStart,
  workingDayEnd,
  meetingStart,
  meetingDuration
) => {
  const workingDayStartMinutes = convertTimeToMinutes(workingDayStart);
  const workingDayEndMinutes = convertTimeToMinutes(workingDayEnd);
  const meetingStartMinutes = convertTimeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workingDayStartMinutes &&
    meetingEndMinutes <= workingDayEndMinutes;
};

window.isMeetingWithinWorkingDay = isMeetingWithinWorkingDay;
