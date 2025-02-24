﻿const data = [
    // Фильмы
    {
        ruTitle: "Побег из Шоушенка",
        enTitle: "The Shawshank Redemption",
        country: "США",
        year: 1994,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/",
        rating: 9.3,
        duration: "2 ч 22 мин",
        genre: "Драма",
        director: "Фрэнк Дарабонт",
        starring: ["Тим Роббинс", "Морган Фриман"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Крестный отец",
        enTitle: "The Godfather",
        country: "США",
        year: 1972,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/",
        rating: 9.2,
        duration: "2 ч 45 мин",
        genre: "Криминал, Драма",
        director: "Фрэнсис Форд Коппола",
        starring: ["Марлон Брандо", "Аль Пачино"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Список Шиндлера",
        enTitle: "Schindler's List",
        country: "США",
        year: 1993,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/",
        rating: 9.0,
        duration: "3 ч 15 мин",
        genre: "Драма, Биография",
        director: "Стивен Спилберг",
        starring: ["Лиам Нисон", "Рэйф Файнс"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Темный рыцарь",
        enTitle: "The Dark Knight",
        country: "США",
        year: 2008,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/",
        rating: 9.0,
        duration: "2 ч 32 мин",
        genre: "Боевик, Криминал, Драма",
        director: "Кристофер Нолан",
        starring: ["Кристиан Бейл", "Хит Леджер"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Форрест Гамп",
        enTitle: "Forrest Gump",
        country: "США",
        year: 1994,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/",
        rating: 8.8,
        duration: "2 ч 22 мин",
        genre: "Драма, Комедия, Романтика",
        director: "Роберт Земекис",
        starring: ["Том Хэнкс", "Робин Райт"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Интерстеллар",
        enTitle: "Interstellar",
        country: "США",
        year: 2014,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/",
        rating: 8.6,
        duration: "2 ч 49 мин",
        genre: "Фантастика, Драма",
        director: "Кристофер Нолан",
        starring: ["Мэттью Макконахи", "Энн Хэтэуэй"],
        subType: "Фильмы",
    },
    {
        ruTitle: "Зеленая миля",
        enTitle: "The Green Mile",
        country: "США",
        year: 1999,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/",
        rating: 8.6,
        duration: "3 ч 9 мин",
        genre: "Драма, Фэнтези",
        director: "Фрэнк Дарабонт",
        starring: ["Том Хэнкс", "Дэвид Морс"],
        subType: "Фильмы"
    },
    {
        ruTitle: "Начало",
        enTitle: "Inception",
        country: "США",
        year: 2010,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/",
        rating: 8.8,
        duration: "2 ч 28 мин",
        genre: "Фантастика, Триллер",
        director: "Кристофер Нолан",
        starring: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт"],
        subType: "Фильмы"
    },
    {
        ruTitle: "Брат",
        enTitle: "Brother",
        country: "Россия",
        year: 1997,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/",
        rating: 8.3,
        duration: "1 ч 40 мин",
        genre: "Драма, Криминал",
        director: "Алексей Балабанов",
        starring: ["Сергей Бодров мл.", "Виктор Сухоруков"],
        subType: "Фильмы"
    },
    {
        ruTitle: "Брат 2",
        enTitle: "Brother 2",
        country: "Россия",
        year: 2000,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/",
        rating: 8.0,
        duration: "2 ч",
        genre: "Драма, Криминал",
        director: "Алексей Балабанов",
        starring: ["Сергей Бодров мл.", "Виктор Сухоруков"],
        subType: "Фильмы"
    },

    // Сериалы
    {
        ruTitle: "Игра престолов",
        enTitle: "Game of Thrones",
        year: 2011,
        country: "США",
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/",
        rating: 9.0,
        duration: "60 мин на эпизод",
        genre: "Фэнтези, Драма",
        director: "Дэвид Бениофф, Д. Б. Уайсс",
        starring: ["Эмилия Кларк", "Кит Харингтон"],
        subType: "Сериалы",
    },
    {
        ruTitle: "Во все тяжкие",
        enTitle: "Breaking Bad",
        country: "США",
        year: 2008,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/",
        rating: 9.5,
        duration: "49 мин на эпизод",
        genre: "Криминал, Драма",
        director: "Винс Гиллиган",
        starring: ["Брайан Крэнстон", "Аарон Пол"],
        subType: "Сериалы",
    },
    {
        ruTitle: "Сопрано",
        enTitle: "The Sopranos",
        country: "США",
        year: 1999,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2f9b1a4f-1a1e-4b8e-8b1e-0b5e1e1e1e1e/600x900",
        rating: 9.2,
        duration: "55 мин на эпизод",
        genre: "Драма, Криминал",
        director: "Дэвид Чейз",
        starring: ["Джеймс Гандольфини", "Лоррейн Бракко"],
        subType: "Сериалы"
    },
    {
        ruTitle: "Шерлок",
        enTitle: "Sherlock",
        country: "Великобритания",
        year: 2010,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2f9b1a4f-1a1e-4b8e-8b1e-0b5e1e1e1e1e/600x900",
        rating: 9.1,
        duration: "90 мин на эпизод",
        genre: "Детектив, Драма",
        director: "Марк Гэтисс, Стивен Моффат",
        starring: ["Бенедикт Камбербэтч", "Мартин Фриман"],
        subType: "Сериалы"
    },
    {
        ruTitle: "Друзья",
        enTitle: "Friends",
        country: "США",
        year: 1994,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2f9b1a4f-1a1e-4b8e-8b1e-0b5e1e1e1e1e/600x900",
        rating: 9.0,
        duration: "22 мин на эпизод",
        genre: "Комедия, Мелодрама",
        director: "Дэвид Крейн, Марта Кауффман",
        starring: ["Дженнифер Энистон", "Кортни Кокс"],
        subType: "Сериалы"
    },
    {
        ruTitle: "Карточный домик",
        enTitle: "House of Cards",
        country: "США",
        year: 2013,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/ffded06b-e0b8-400f-8915-b61fd1c11ee3/600x900",
        rating: 9.0,
        duration: "50 мин на эпизод",
        genre: "Драма, Триллер",
        director: "Дэвид Финчер",
        starring: ["Кевин Спейси", "Робин Райт"],
        subType: "Сериалы"
    },
    {
        ruTitle: "Остаться в живых",
        enTitle: "Lost",
        country: "США",
        year: 2004,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/aaa28b9a-b3a9-4c97-9ac9-d490dd91f53c/600x900",
        rating: 8.3,
        duration: "42 мин на эпизод",
        genre: "Драма, Мистика, Приключения",
        director: "Дж.J. Абрамс",
        starring: ["Мэттью Фокс", "Эванджелин Лилли", "Тери О'Куинн"],
        subType: "Сериалы"
    },
    {
        ruTitle: "Декстер",
        enTitle: "Dexter",
        country: "США",
        year: 2006,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/ffded06b-e0b8-400f-8915-b61fd1c11ee3/600x900",
        rating: 8.7,
        duration: "53 мин на эпизод",
        genre: "Криминал, Драма, Триллер",
        director: "Майкл Кэртиц",
        starring: ["Майкл С. Холл", "Дженифер Карпентер"],
        subType: "Сериалы"
    },

    // Аниме
    {
        ruTitle: "Наруто",
        enTitle: "Naruto",
        country: "Япония",
        year: 2002,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e63beb56-0433-4bbf-ae70-5d85a5ed8945/",
        rating: 8.7,
        duration: "25 мин на эпизод",
        genre: "Приключения, Боевик",
        director: "Хаято Дате",
        starring: ["Дзюнко Такэути", "Тэцуя Какихара"],
        subType: "Аниме",
    },
    {
        ruTitle: "Евангелион",
        enTitle: "Neon Genesis Evangelion",
        country: "Япония",
        year: 1995,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/4a0827fc-b53b-4615-8aae-736eeb014c8b/",
        rating: 8.8,
        duration: "24 мин на эпизод",
        genre: "Фантастика, Психология",
        director: "Хидэаки Анно",
        starring: ["Мэгуми Огата", "Котоно Мицуиси"],
        subType: "Аниме",
    },

    // Мультфильмы
    {
        ruTitle: "Король Лев",
        enTitle: "The Lion King",
        country: "США",
        year: 1994,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/",
        rating: 8.8,
        duration: "1ч 28 мин",
        genre: "Мюзикл, Драма",
        director: "Роджер Аллерс, Роб Минкофф",
        starring: ["Мэттью Бродерик", "Джереми Айронс"],
        subType: "Мультфильмы",
    },
    {
        ruTitle: "Холодное сердце",
        enTitle: "Frozen",
        country: "США",
        year: 2013,
        coverUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/efa923ca-2007-4a79-b759-377fc1a5664f/",
        rating: 7.7,
        duration: "1ч 42 мин",
        genre: "Фэнтези, Мюзикл",
        director: "Крис Бак, Дженнифер Ли",
        starring: ["Кристен Белл", "Идина Мензел"],
        subType: "Мультфильмы",
    },
];
