import axios from "axios";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async getMeta() {
    return axios.get(`${this.baseUrl}`);
  }

  async getContent() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100`);
      const sliderPosts = response.data.filter(el => el.tags.find(i => i==='8'));
      console.log(sliderPosts);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategories() {
    try {
      const categories = await axios.get(`${this.baseUrl}/categories`);
      return categories.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategoryInfo(slug) {
    try {
      const category = await axios.get(`${this.baseUrl}/categories?slug=${slug}`);
      const categoryData = category.data[0];
      const posts = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${categoryData.id}`);
      const postsData = posts.data;
      return {
        category: categoryData,
        projects: postsData
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getSliderPosts() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&tags=8&per_page=100`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getContentFromCategory(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getProject(slug) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?slug=${slug}&_embed`);
      const data = response.data[0];
      const rec = await mainApi.getRecommendProjects(data.categories, data.id);
      const recData = rec;
      return {
        project: data,
        recProjects: recData,
        waiting: false
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getRecommendProjects(catId, id) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${catId.join(',')}&exclude=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }``
  }

  // async sendForm(body) {
  //   const formData = await body.formData();
  //   const name = formData.get('client-name');
  //   const email = formData.get('client-email');
  //   const phone = formData.get('client-phone');
  // } 


    // formData.append('client-name', body.name);
    // formData.append('client-email', body.email);
    // formData.append('client-tel', body.phone);
    // formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag' + body.phone + body.name)


  //   return fetch("http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.status === 'validation_failed') {
  //         alert('Error');
  //         return
  //       }
  //       alert ('Спасибо, мы свяжемся с вами в ближайшее время')
  //     })
  //     .catch((err) => console.error(err));
  // }
}

export const mainApi = new Api({
  baseUrl: "http://api.pictdesign.ru/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
