import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "services", "portfolio", "pricing", "contact"];

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [navStrict, setNavStrict] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavStrict(window.scrollY >= 50);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeSection, navStrict };
};

export const scrollToSection = (hash) => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};
