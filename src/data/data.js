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
    id: "client",
    name: "client",
    type: "text",
    placeholder: 'Имя',
    required: true,
    minLength: 2,
    pattern: "^([а-яА-Яa-zA-Z]|s)*$",
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    placeholder: "+7 (912) 345-67-89",
    mask: "+{7} (000) 000-00-00",
    minLength: 18,
    required: true,
  }
];

