import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import Link from "next/link";
import { inputs } from "@/data/data";
import Form from "@/components/Form/Form";
import ProjectPar from "@/components/Project/Project";

// export async function sendForm() {
//     await mainApi.sendForm();
// }

export default async function Project({ params }) {

    const project = await mainApi.getProject(params.projectSlug);
    console.log(project.project);

    return (
        <>
            <ProjectPar project={project.project} />
            <div className="contacts contacts_project">
                <div className="contacts__wrapper">
                <h2>
                    Хотите также? Мы вам перезвоним!
                </h2>
                    <Form inputs={inputs} buttonText={'Отправить'} />
                </div>
            </div>
            <h3 className="project__recommend-title">Посмотрите еще:</h3>
            <ProjectList projects={project.recProjects} />
        </>

    )
}