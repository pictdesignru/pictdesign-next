import Link from "next/link";

export default function ProjectPar(project) {

    return (
        <>
            <section className="project">
                <h1 className="project__title">
                    {project.project.title.rendered}
                </h1>
                <div
                    className="project__excerpt"
                    dangerouslySetInnerHTML={{
                        __html: project.project.excerpt.rendered,
                    }}
                />
                <ul className="project__tags">
                    <li className="project__tag">#</li>
                    {project.project._embedded["wp:term"]["0"].map((tag, i) => {
                        return (
                            <li className="project__tag" key={i}>
                                <Link href={`/${tag.slug}`}>
                                    {tag.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section
                className="project__content"
                dangerouslySetInnerHTML={{
                    __html: project.project.content.rendered,
                }}
            />
        </>
    )
}