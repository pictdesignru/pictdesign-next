import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import { inputs } from "@/data/data";
import Form from "@/components/Form/Form";
import ProjectPar from "@/components/Project/Project";
import { notFound } from "next/navigation";

export default async function Project({ params }) {

    const project = await mainApi.getProject(params.projectSlug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <ProjectPar project={project.project} />
            <div className="contacts contacts_project">
                <div className="contacts__wrapper">
                    <Form title={"Хотите также? Мы вам перезвоним!"} inputs={inputs} buttonText={'Отправить'} />
                </div>
            </div>
            <h3 className="project__recommend-title">Посмотрите еще:</h3>
            <ProjectList projects={project.recProjects} />
        </>

    )
}