import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import { notFound } from "next/navigation";
import Form from "@/components/Form/Form";
import { inputs } from "@/data/data";

export default async function Category({ params }) {

    const category = await mainApi.getCategoryInfo(params.categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <>
            <div className="filtered-projects">
                <div className="filtered-projects__title-wrapper">
                    <h2>{category.category.name}</h2>
                </div>
            </div>
            <ProjectList projects={category.projects} />
            <Form
                title={"Есть идея? Мы реализуем!"}
                inputs={inputs}
                buttonText={'Отправить'}
            />
        </>
    )
}
