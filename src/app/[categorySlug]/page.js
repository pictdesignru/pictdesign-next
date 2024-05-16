import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";

export default async function Category({ params }) {

    const category = await mainApi.getCategoryInfo(params.categorySlug);

    return (
        <>
            <div className="filtered-projects">
                <div className="filtered-projects__title-wrapper">
                    <h2>{category.category.name}</h2>
                </div>
            </div>
            <ProjectList projects={category.projects} />
        </>
    )
}