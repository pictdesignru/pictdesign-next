import Card from "../Card/Card";

function ProjectList({ projects = [], paddingTop }) {

  return (
    <ul className="project-list">
      {projects.map((project, i) => {
        return <Card card={project} key={i} />;
      })}
    </ul>
  );
}

export default ProjectList;
