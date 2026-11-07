//Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

//Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normaLizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normaLizedString.split('').reverse().join('');
  return normaLizedString === reversedString;
}

//Функция извлечения чисел из строки
function extractDigits(value){
  const digits = String(value).replace(/\D/g, '');

  if (digits === '') {
    return NaN;
  }

  return Number(digits);
}
