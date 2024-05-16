import StoreModule from "../module";
import { mainApi } from "../../Utils/api";

class CategoryState extends StoreModule {
  initState() {
    return {
      category: {},
      projects: [],
      waiting: true,
    };
  }

  async getCategory(slug) {
    this.initState();
    const response = await mainApi.getCategoryInfo(slug);
    const data = await response.data[0];
    const projects = await mainApi.getContentFromCategory(data.id);
    const projectsData = await projects.data;
    this.setState(
      {
        category: data,
        projects: projectsData,
        waiting: false,
      },
      "Загружена категория"
    );
  }

}

export default CategoryState;
