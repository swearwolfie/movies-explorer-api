const created = 201;
const success = 200;

const required = {
  email: 'Поле "email" является обязательным',
  password: 'Поле "пароль" является обязательным',
  name: 'Поле "имя" является обязательным',
  country: 'Поле "страна" является обязательным',
  director: 'Поле "режиссер" является обязательным',
  duration: 'Поле "хронометраж" является обязательным',
  year: 'Поле "год" является обязательным',
  description: 'Поле "описание" является обязательным',
  name_ru: 'Поле "название фильма на русском языке" является обязательным',
  name_en: 'Поле "название фильма на английском языке" является обязательным',
  image: 'Поле "постер фильма" является обязательным',
  trailer: 'Поле "ссылка на трейлер" является обязательным',
  thumbnail: 'Поле "ссылка на миниатюру постера" является обязательным',
  owner: 'Поле "айди пользователя" является обязательным',
  movie_id: 'Поле "айди фильма" является обязательным',
};

const valid = {
  email: 'Что-то пошло не так в поле "email"',
  name: 'Поле "имя" должно быть от 2 до 30 символов',
  image: 'Что-то пошло не так в поле "страна"',
  trailer: 'Что-то пошло не так в поле "трейлер"',
  thumbnail: 'Что-то пошло не так в поле "ссылка на миниатюру постера"',
};

module.exports = {
  created,
  success,
  required,
  valid,
};
