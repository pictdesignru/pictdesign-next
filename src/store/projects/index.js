import StoreModule from "../module";
import { mainApi } from "../../Utils/api";

class ProjectsState extends StoreModule {
  
  initState() {
    return {
      projects: [],
      sliderProjects: [],
      waiting: true,
      page: 1,
    }
  }

  async getProjects() {
    this.setState({
      ...this.getState(),
      waiting: true,
    });
    const response = await mainApi.getContent(this.getState().page);
    const data = response.data;
    this.setState({
      ...this.getState(),
      projects: data,
      waiting: false
    }, 'Загружены проекты')
  }



  async getSliderProjects() {
    const response = await mainApi.getSliderPosts();
    const data = response.data;
    this.setState({
      ...this.getState(),
      sliderProjects: data,
      waiting: false
    }, 'Загружены проекты слайдера')
  }
}

export default ProjectsState;