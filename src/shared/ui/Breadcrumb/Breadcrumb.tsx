import React, { Fragment } from "react";
import styles from "./Breadcrumb.module.css";
import { useNavigation } from "@/shared/hooks/UseNavigation";
import { Link } from "react-router";

export const Breadcrumb: React.FC = () => {
  const { links, location } = useNavigation();

  const homeCrumb = { label: "Главная", href: "/" };

  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  const breadcrumbs = [homeCrumb];
  let cumulativePath = "";
  pathSegments.forEach((segment) => {
    cumulativePath += `/${segment}`;
    const found = links.find((link) => link.href === cumulativePath);
    breadcrumbs.push({
      label: found ? found.label : segment.charAt(0).toUpperCase() + segment.slice(1),
      href: cumulativePath,
    });
  });

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <Fragment key={crumb.href}>
            {isLast ? (
              <span className={styles.active}>{crumb.label}</span>
            ) : (
              <Link to={crumb.href} className={styles.link}>
                {crumb.label}
              </Link>
            )}
            {!isLast && <span className={styles.separator}>/</span>}
          </Fragment>
        );
      })}
    </nav>
  );
};
