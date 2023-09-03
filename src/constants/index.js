import {
  tesla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Обо мне",
  },
  {
    id: "services",
    title: "Виды услуг",
  },
  {
    id: "works",
    title: "Мои работы",
  },
];

const services = [
  {
    title: "Комплексный уход",
    company_name: "цена от 1300 рублей",
    icon: tesla,
    iconBg: "#ffdbe0",
    time: "около 2 часов",
    points: [
      "купание питомца (купание, после которого питомец выглядит и чувствует себя свежим и чистым)",
      "стрижка и укладка шерсти (стрижка и укладка шерсти, чтобы питомец выглядела аккуратно и стильно)",
      "уход за когтями и лапами (стрижка когтей и бритье подушечек лап от ненужной шерсти)",
    ],
  },
  {
    title: "Гигиенические процедуры",
    company_name: "цена от 1000 рублей",
    icon: tesla,
    iconBg: "#ffdbe0",
    time: "около 1 часа",
    points: [
      "вычесывание лишней шерсти (удаление ненужной шерсти через вычесывание пупсика)",
      "купание питомца (купание, после которого питомец выглядит и чувствует себя свежим и чистым)",
      "уход за когтями и лапами (стрижка когтей и бритье подушечек лап от ненужной шерсти)",

    ],
  },
  {
    title: "Уход за когтями",
    company_name: "цена от 500 рублей",
    icon: tesla,
    iconBg: "#ffdbe0",
    time: "около 30 минут",
    points: [
      "уход за когтями и лапами (стрижка когтей и бритье подушечек лап от ненужной шерсти)",
    ],
  },
];


export {services};