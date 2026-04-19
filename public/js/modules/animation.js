const logos = document.getElementsByClassName("logo");

const drawConnections = (container, nodePositions) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.cssText = `
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: visible;
    opacity: 0;
  `;

  const style = getComputedStyle(document.documentElement);
  const color = style.getPropertyValue("--color-highlight").trim() || "#623cd3";

  for (let i = 0; i < nodePositions.length; i++) {
    for (let j = i + 1; j < nodePositions.length; j++) {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", nodePositions[i].x);
      line.setAttribute("y1", nodePositions[i].y);
      line.setAttribute("x2", nodePositions[j].x);
      line.setAttribute("y2", nodePositions[j].y);
      line.setAttribute("stroke", color);
      line.setAttribute("stroke-width", "2");
      line.setAttribute("stroke-dasharray", "4 4");
      svg.appendChild(line);
    }
  }

  container.appendChild(svg);
};

let resizeHandler = null;

const initEnvelopes = () => {
  const container = document.querySelector(".network-animation");
  if (!container || !window.gsap) return;

  const circles = Array.from(container.querySelectorAll(".item > .circle"));

  const setup = () => {
    container.querySelectorAll(".envelope, svg").forEach((el) => el.remove());
    gsap.killTweensOf(".envelope");

    const containerRect = container.getBoundingClientRect();
    const nodePositions = circles.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - containerRect.left + r.width / 2,
        y: r.top - containerRect.top + r.height / 2,
      };
    });

    drawConnections(container, nodePositions);

    const envelopes = nodePositions.map((pos) => {
      const el = document.createElement("div");
      el.classList.add("envelope");
      el.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        font-size: 1.2rem;
        pointer-events: none;
        z-index: 50;
        transform: translate(-50%, -50%);
        opacity: 0;
      `;
      el.textContent = "✉️";
      container.appendChild(el);
      gsap.set(el, { x: pos.x, y: pos.y });
      return el;
    });

    envelopes.forEach((el, i) => {
      let currentIndex = i % nodePositions.length;

      const move = () => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * nodePositions.length);
        } while (nextIndex === currentIndex);

        gsap.to(el, {
          x: nodePositions[nextIndex].x,
          y: nodePositions[nextIndex].y,
          duration: 1.5 + Math.random() * 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            currentIndex = nextIndex;
            move();
          },
        });
      };

      gsap.delayedCall(i * 0.4, move);
    });
  };

  setup();
  container.querySelectorAll(".envelope, svg").forEach((el) => {
    el.classList.add("fade-in");
    el.classList.remove("fade-out");
  });

  if (resizeHandler) window.removeEventListener("resize", resizeHandler);
  resizeHandler = setup;
  window.addEventListener("resize", resizeHandler);
};

const steps = {
  1: { logoType: "email", fade: "in" },
  2: { logoType: "social", fade: "out" },
  3: { logoType: "fediverse", fade: "in" },
  4: { logoType: "fediverse", fade: "in" },
};

const animate = (step) => {
  const config = steps[step];
  if (!config) return;

  [...logos].forEach((logo) => {
    logo.src = `images/logos/${config.logoType}/${logo.dataset[config.logoType]}.svg`;
  });

  document
    .querySelectorAll(".envelope, .network-animation svg")
    .forEach((el) => {
      el.classList.toggle("fade-in", config.fade === "in");
      el.classList.toggle("fade-out", config.fade === "out");
    });

  if (step === 1) initEnvelopes();
};

export default animate;
