import StoreModule from "../module";

class LocaleState extends StoreModule {

  initState() {
    let language = window.navigator.language;
    let languageFistTwo = language.substr(0,2);
    return {
      lang: languageFistTwo === 'ru'? 'ru' : 'en'
    };
  }

  setLang(lang) {
    this.setState({lang}, 'Установлена локаль');
  }
}

export default LocaleState;
