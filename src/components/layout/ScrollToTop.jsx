import { ArrowUp } from "lucide-react";
import useScrollProgress from "../../hooks/useScrollProgress";
import { scrollToTop } from "../../utils/scroll";

/** Floating "back to top" button that appears once the page is scrolled. */
const ScrollToTop = () => {
  const { scrolled } = useScrollProgress(600);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-primary to-primary-light text-ink-950 shadow-lg shadow-primary/30 transition-opacity duration-300 hover:shadow-xl hover:shadow-primary/50 sm:bottom-8 sm:right-8 ${
        scrolled ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={19} />
    </button>
  );
};

export default ScrollToTop;
