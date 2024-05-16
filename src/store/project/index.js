import StoreModule from "../module";
import { mainApi } from "../../Utils/api";

class ProjectState extends StoreModule {

  initState() {
    return {
      project: {},
      recProjects: [],
      waiting: true 
    }
  }

  async getProject(slug) {
    this.initState();
    const response = await mainApi.getProject(slug);
    const data = response.data;
    const rec = await mainApi.getRecommendProjects(data[0].categories, data[0].id);
    const recData = rec.data;
    this.setState({
      ...this.getState(),
      project: data[0],
      recProjects: recData,
      waiting: false
    }, 'Загружен проект');
  }
}

export default ProjectState;
