import StoreModule from "../module";
import { mainApi } from "../../Utils/api";

class CategoriesState extends StoreModule {
  initState() {
    return {
      categories: [],
      waiting: true,
    };
  }

  async getCategories() {
    this.initState();
    const response = await mainApi.getCategories();
    const data = await response.data;
    this.setState(
      {
        ...this.getState(),
        categories: data,
        waiting: false,
      },
      "Загружены категории"
    );
  }
}

export default CategoriesState;
