import whatsapp from '/public/whatsapp.svg';
import telegram from '/public/telegram.svg';
import email from '/public/email.svg'


export const contacts = [
  {
    title: "Telegram",
    icon: telegram,
    link: "https://t.me/pictdesignru",
  },
  {
    title: "WhatsApp",
    icon: whatsapp,

    link: "https://wa.me/79302244143",
  },
  {
    title: "E-mail",
    icon: email,
    link: "mailto:ask@pictdesign.ru",
  },
];

export const inputs = [
  {
    id: "client-name",
    name: "client-name",
    type: "text",
    placeholder: {
      ru: "Ваше имя",
      en: "Your name",
    },
    required: true,
    minLength: 2,
    pattern: "^([а-яА-Яa-zA-Z]|s)*$",
  },
  {
    id: "client-tel",
    name: "client-tel",
    type: "mobile",
    placeholder: { ru: "7 912 345 67 89", en: "Your phone number" },
    pattern: "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$",
    required: true,
  },
  {
    id: "client-email",
    name: "client-email",
    type: "email",
    placeholder: {ru: "Почта", en: "E-mail" },
    required: false,
    minLength: 6,
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
  },
];

