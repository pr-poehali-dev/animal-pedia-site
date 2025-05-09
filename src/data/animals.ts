
export interface Animal {
  id: string;
  name: string;
  latinName: string;
  category: string;
  image: string;
  description: string;
  facts: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'mammals',
    name: 'Млекопитающие',
    icon: '🦁',
    description: 'Теплокровные животные, вскармливающие детёнышей молоком'
  },
  {
    id: 'birds',
    name: 'Птицы',
    icon: '🦜',
    description: 'Теплокровные яйцекладущие животные с крыльями и клювом'
  },
  {
    id: 'reptiles',
    name: 'Рептилии',
    icon: '🐊',
    description: 'Холоднокровные позвоночные животные с чешуйчатой кожей'
  },
  {
    id: 'amphibians',
    name: 'Амфибии',
    icon: '🐸',
    description: 'Позвоночные животные, способные жить как в воде, так и на суше'
  },
  {
    id: 'fish',
    name: 'Рыбы',
    icon: '🐠',
    description: 'Водные позвоночные животные с жабрами и плавниками'
  },
  {
    id: 'insects',
    name: 'Насекомые',
    icon: '🦋',
    description: 'Класс беспозвоночных животных типа членистоногих'
  }
];

export const animals: Animal[] = [
  {
    id: 'tiger',
    name: 'Тигр',
    latinName: 'Panthera tigris',
    category: 'mammals',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000',
    description: 'Самая крупная и грозная из больших кошек, тигр является одним из самых узнаваемых и популярных животных в мире. Тигр является территориальным и обычно ведет одиночный образ жизни.',
    facts: [
      'Тигры - самые крупные представители семейства кошачьих',
      'Полосы тигра уникальны как отпечатки пальцев у человека',
      'Тигры отлично плавают и любят воду',
      'Рев тигра слышен на расстоянии до 3 км'
    ]
  },
  {
    id: 'elephant',
    name: 'Слон',
    latinName: 'Loxodonta africana',
    category: 'mammals',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000',
    description: 'Самое крупное наземное млекопитающее, слон выделяется своим хоботом, бивнями и большими ушами. Слоны - социальные животные с высоким интеллектом и сложной социальной структурой.',
    facts: [
      'Слоны спят всего 2-3 часа в сутки',
      'Беременность слонихи длится 22 месяца',
      'Хобот слона содержит около 40 000 мышц',
      'Слоны могут общаться на расстоянии до 10 км с помощью инфразвука'
    ]
  },
  {
    id: 'peacock',
    name: 'Павлин',
    latinName: 'Pavo cristatus',
    category: 'birds',
    image: 'https://images.unsplash.com/photo-1495781856580-b3c9ae5f8b58?q=80&w=1000',
    description: 'Павлин известен своим ярким оперением и эффектным хвостом, который самцы распускают во время ухаживания. Эти птицы являются символом красоты и гордости во многих культурах.',
    facts: [
      'Только самцы павлина имеют яркий хвост',
      'Павлин может жить до 20 лет',
      'Хвост павлина может достигать 1,5 метров в длину',
      'Павлины всеядны и едят насекомых, растения и мелких животных'
    ]
  },
  {
    id: 'chameleon',
    name: 'Хамелеон',
    latinName: 'Chamaeleonidae',
    category: 'reptiles',
    image: 'https://images.unsplash.com/photo-1548439739-0c3fbe5f8afb?q=80&w=1000',
    description: 'Хамелеоны известны своей способностью менять цвет кожи и своими уникальными глазами, которые могут двигаться независимо друг от друга. Они обитают в теплых регионах от Африки до Азии.',
    facts: [
      'Хамелеоны меняют цвет не для маскировки, а для выражения настроения и регуляции температуры',
      'Язык хамелеона может быть длиннее его тела',
      'Глаза хамелеона могут вращаться на 360 градусов',
      'Многие виды хамелеонов находятся под угрозой исчезновения'
    ]
  },
  {
    id: 'blue-whale',
    name: 'Синий кит',
    latinName: 'Balaenoptera musculus',
    category: 'mammals',
    image: 'https://images.unsplash.com/photo-1566249767573-0a389f6b92ac?q=80&w=1000',
    description: 'Синий кит - самое большое животное, когда-либо существовавшее на Земле. Несмотря на свой огромный размер, эти киты питаются крошечным планктоном, фильтруя его через китовый ус.',
    facts: [
      'Вес синего кита может достигать 200 тонн',
      'Сердце синего кита размером с автомобиль',
      'Детеныш синего кита прибавляет до 90 кг в день',
      'Синие киты могут общаться на расстоянии до 800 км'
    ]
  },
  {
    id: 'golden-frog',
    name: 'Золотая лягушка',
    latinName: 'Phyllobates terribilis',
    category: 'amphibians',
    image: 'https://images.unsplash.com/photo-1520886580284-8b911f3c3200?q=80&w=1000',
    description: 'Золотая лягушка - одно из самых ядовитых животных в мире. Эти яркие амфибии обитают в тропических лесах Колумбии и используют свой яркий цвет, чтобы предупредить хищников о своей ядовитости.',
    facts: [
      'Яда одной лягушки достаточно, чтобы убить 10 взрослых людей',
      'Коренные народы использовали их яд для охоты',
      'В неволе эти лягушки теряют ядовитость',
      'Ярко-желтый цвет служит предупреждением для хищников'
    ]
  }
];

// Функция для получения случайного животного дня
export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

// Функция для поиска животных
export const searchAnimals = (query: string): Animal[] => {
  const lowercaseQuery = query.toLowerCase();
  return animals.filter(animal => 
    animal.name.toLowerCase().includes(lowercaseQuery) || 
    animal.latinName.toLowerCase().includes(lowercaseQuery) ||
    animal.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Функция для получения животных по категории
export const getAnimalsByCategory = (categoryId: string): Animal[] => {
  return animals.filter(animal => animal.category === categoryId);
};

// Функция для получения животного по ID
export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};
