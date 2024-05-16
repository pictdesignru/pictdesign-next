import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import MainSwiper from "@/components/MainSwiper/MainSwiper";
import Form from "@/components/Form/Form";
import { inputs } from "@/data/data";

// export async function sendForm() {
//   await mainApi.sendForm();
// }

export default async function Page() {

  const posts = await mainApi.getContent();
  const sliderPosts = await mainApi.getSliderPosts();

  return (
    <>
      <MainSwiper projects={sliderPosts} />
      <ProjectList projects={posts} />
      <div className="contacts contacts_project">
        <div className="contacts__wrapper">
          <h2>
            Хотите также? Давайте обсудим!
          </h2>
          <Form inputs={inputs} buttonText={'Отправить'}/>
        </div>
      </div>
    </>
  );
}
