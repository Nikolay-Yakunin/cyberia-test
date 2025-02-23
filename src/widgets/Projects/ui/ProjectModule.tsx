import React, { useState } from "react";
import styles from "./ProjectModule.module.css";
import { Title, Button, Card } from "@/shared/ui";
import { useGetCategoriesQuery, useGetProjectsQuery } from "@/entities/Project";

const ProjectModule = () => {
  const {
    data: projects,
    error: projectsError,
    isLoading: projectsLoading,
  } = useGetProjectsQuery();
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetCategoriesQuery();

  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (projectsLoading || categoriesLoading) {
    return <div>Загрузка...</div>;
  }

  if (projectsError || categoriesError) {
    return <div>Произошла ошибка при загрузке данных.</div>;
  }

  const handleButtonClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <section className={styles.section}>
      <Title>Кейсы</Title>
      <div className={styles.buttons}>
        {categories?.map(({ id, name }) => (
          <Button
            key={id}
            onClick={() => handleButtonClick(id)}
            variant={selectedId === id ? "primary" : "secondary"}
          >
            {name}
          </Button>
        ))}
      </div>
      <div className={styles.list}>
        {projects
          .filter((project) =>
            selectedId
              ? project.categories.some(
                  (category) => category.id === selectedId,
                )
              : true,
          )
          .map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
      </div>
    </section>
  );
};

export default ProjectModule;
