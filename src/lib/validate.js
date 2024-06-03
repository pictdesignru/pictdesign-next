export default function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Введите вашу почту';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Адрес электронной почты недействителен';
    }

    if (!values.phone) {
        errors.phone = 'Введите ваш номер телефона';
    }
    else if (!/\+7|8[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/.test(values.phone)) {
        errors.phone = 'Введите телефон в формате +79123456789';
    }

    if (!values.name) {
        errors.name = 'Введите пожалуйста имя';
    } else if (values.name.length < 2) {
        errors.name = 'Введите пожалуйста имя';
    }

    return errors;
}