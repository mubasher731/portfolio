/**
 * Small scrolling helpers used by the navbar, hero and footer.
 */

/** Smoothly scrolls to a section id (without the leading "#"). */
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/** Smoothly scrolls back to the very top of the page. */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
