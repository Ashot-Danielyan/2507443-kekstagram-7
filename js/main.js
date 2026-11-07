// Возвращает случайное целое число
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

//Авторы комнентариев
const NAMES = [
  'Артём',
  'Мария',
  'Максим',
  'София',
  'Даниил',
  'Анастасия',
  'Кирилл',
  'Елена',
  'Александр',
  'Ольга',
];

//Отзывы комнентариев
const DESCRIPTIONS = [
  'Красивый закат после насыщенного дня.',
  'Небольшое путешествие и новые впечатления.',
  'Утро, которое хочется запомнить.',
  'Любимый момент этого дня.',
  'Красота в простых деталях.',
  'Немного света и хорошего настроения.',
  'Прогулка по любимым местам.',
  'Иногда лучшие моменты случаются случайно.',
];

//Коментарии к фотографиям
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Сохраняем использованные ID
const usedCommentIds = new Set();

//Создаём уникальные ID для коментариев
const getUniqueCommentId = () => {
  let id = getRandomInteger(1, 1000000);

  while (usedCommentIds.has(id)) {
    id = getRandomInteger(1, 1000000);
  }

  usedCommentIds.add(id);

  return id;
};

//Создаём текст коментария
const createMessage = () => {
  const firstMessage = getRandomArrayElement(COMMENT_MESSAGES);

  if (getRandomInteger(1, 2) === 1) {
    return firstMessage;
  }

  const otherMessages = COMMENT_MESSAGES.filter(
    (message) => message !== firstMessage
  );

  return `${firstMessage} ${getRandomArrayElement(otherMessages)}`;
};

//Создаём объект коментария
const createComment = () => ({
  id: getUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

//Создаём объект фотографий
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    () => createComment()
  ),
});

//Создаём массив из фотографий
const photos = [];

for (let id = 1; id <= 25; id += 1) {
  photos.push(createPhoto(id));
}

// Делаем массив доступным в браузере.
window.photos = photos;
