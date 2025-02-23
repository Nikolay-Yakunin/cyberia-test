import { useMemo } from "react";
import { useLocation } from "react-router";

export type LinkType = { label: string; href: string };

export const useNavigation = () => {
  const location = useLocation();

  const links = useMemo(
    () => [
      { label: "Агентство", href: "/agency" },
      { label: "Услуги", href: "/services" },
      { label: "Кейсы", href: "/projects" },
      { label: "Блог", href: "/blog" },
      { label: "Контакты", href: "/contacts" },
    ],
    [] as LinkType[],
  );

  const contactLinks = useMemo(
    () => [
      { label: "+7 999 123 45 67", href: "tel:+79991234567" },
      { label: "hello@cyberia.studio", href: "mailto:hello@cyberia.studio" },
      {
        label: "ул.Ярных, д.35, оф.10",
        href: "https://yandex.ru/maps/197/barnaul/house/ulitsa_yarnykh_35/bEoYcQJoSkQCQFtpfX93eHxmYQ==/?ll=83.758315%2C53.369055&z=17",
      },
    ],
    [] as LinkType[],
  );

  return { location, links, contactLinks };
};
