import { getUrlParam } from "./urlParams.js";

const highlightAlternative = () => {
  const highlight = getUrlParam("highlight");
  if (highlight) {
    const target = document.querySelector(
      `[data-alternatives*="${highlight.toLowerCase()}"]`,
    );
    if (target) {
      target.classList.add("highlighted");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};

export default highlightAlternative;
