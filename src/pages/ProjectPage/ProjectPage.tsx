import React from "react";
import { Breadcrumb } from "@/shared/ui/Breadcrumb/Breadcrumb";
import { ProjectModule } from "@/widgets/Projects/ui";
import ContactModule from "@/widgets/Contact/ui";

const ProjectPage = () => {
  return (
    <section>
      <Breadcrumb/>
      <ProjectModule />
      <ContactModule />
    </section>
  );
};

export default ProjectPage;
