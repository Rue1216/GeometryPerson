let score = 0;

let opening = () => {
  let tl = gsap
    .timeline({
      onComplete: function () {
        document.querySelector("#opening").remove();
        question1();
      },
    })
    .set("#opening>.circle", {
      height: "60%",
    })
    .to("#opening>.circle", {
      height: "65%",
      duration: 5,
      ease: "elastic.out(3,0.3)",
    })
    .fromTo(
      "#opening>.rectangle",
      {
        rotate: "0deg",
      },
      {
        rotate: "360deg",
        duration: 5,
        ease: "power1.inOut",
      },
      0
    )
    .fromTo(
      "#opening>.star",
      {
        rotate: "0deg",
      },
      {
        rotate: "360deg",
        duration: 5,
        ease: "power1.out",
      },
      0
    )
    .fromTo(
      "#opening>.rectangle",
      { scale: 1 },
      { scale: 10, duration: 0.5, ease: "power2.in" },
      5
    )
    .fromTo(
      "#opening>.circle",
      { scale: 1 },
      { scale: 10, delay: 0.3, duration: 0.5, ease: "power2.in" },
      5
    )
    .fromTo(
      "#opening>.star",
      { scale: 1 },
      { scale: 10, delay: 0.5, duration: 0.5, ease: "power2.in" },
      5
    )
    .to("#opening", {
      opacity: 0,
      display: "none",
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
    });
  return tl;
};
let q1Transition = () => {
  let tl = gsap
    .timeline({
      onComplete: function () {
        document.querySelector("#question-1").remove();
        question2();
      },
    })
    .to("#question-1 .content", {
      opacity: 0,
      pointerEvents: "none",
      ease: "power1.out",
      duration: 0.3,
    })
    .to(
      "#question-1 .animating-bg > div",
      {
        opacity: 0,
        pointerEvents: "none",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#question-1 .content",
      {
        width: 0,
        paddingRight: 0,
        paddingLeft: 0,
        ease: "power1.out",
        duration: 0.3,
      },
      ">"
    )
    .to(
      "#question-1 .animating-bg",
      {
        width: "100%",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    );
  return tl;
};
let q2Transition = () => {
  let tl = gsap
    .timeline({
      onComplete: function () {
        document.querySelector("#question-2").remove();
        question3();
      },
    })
    .to("#question-2 .content", {
      opacity: 0,
      pointerEvents: "none",
      ease: "power1.out",
      duration: 0.3,
    })
    .to(
      "#question-2 .animating-bg > div",
      {
        opacity: 0,
        pointerEvents: "none",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#question-2 .content",
      {
        width: 0,
        paddingRight: 0,
        paddingLeft: 0,
        ease: "power1.out",
        duration: 0.3,
      },
      ">"
    )
    .to(
      "#question-2 .animating-bg",
      {
        width: "100%",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    )
    .to("#question-2", {
      display: "none",
    });
  return tl;
};
let q3Transition = () => {
  let tl = gsap
    .timeline({
      onComplete: function () {
        document.querySelector("#question-3").remove();
        calculating();
      },
    })
    .to("#question-3 .content", {
      opacity: 0,
      pointerEvents: "none",
      ease: "power1.out",
      duration: 0.3,
    })
    .to(
      "#question-3 .animating-bg > div",
      {
        opacity: 0,
        pointerEvents: "none",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#question-3 .content",
      {
        width: 0,
        paddingRight: 0,
        paddingLeft: 0,
        ease: "power1.out",
        duration: 0.3,
      },
      ">"
    )
    .to(
      "#question-3 .animating-bg",
      {
        width: "100%",
        ease: "power1.out",
        duration: 0.3,
      },
      "<"
    )
    .to("#question-3", {
      display: "none",
    });
  return tl;
};
let question1 = () => {
  let tl = gsap
    .timeline()
    .fromTo(
      "#question-1>.content",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-1>.animating-bg",
      {
        width: "0%",
      },
      {
        width: "40%",
        duration: 0.8,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-1 .rectangle",
      {
        bottom: "-100%",
        right: "55%",
      },
      {
        bottom: "65%",
        right: "55%",
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-1 .triangle",
      {
        bottom: "-100%",
        right: "-5%",
      },
      {
        bottom: "50%",
        right: "-5%",
        delay: 0.1,
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-1 .circle",
      {
        bottom: "-100%",
        right: "-20%",
      },
      {
        bottom: "-15%",
        right: "-20%",
        delay: 0.2,
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .to(
      "#question-1 .rectangle",
      {
        rotate: "360deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
      },
      2.3
    )
    .to(
      "#question-1 .triangle",
      {
        rotate: "-360deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
      },
      2.3
    )
    .to(
      "#question-1 .circle",
      {
        right: "-15%",
        bottom: "-10%",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 0.5,
        duration: 2,
        yoyo: true,
      },
      2.3
    );
  const q1Options = document.querySelectorAll("#question-1 .option");

  q1Options.forEach((item) => {
    item.addEventListener(
      "click",
      function (e) {
        switch (e.target.classList[1]) {
          case "1-1":
            score += 1;
            break;
          case "1-2":
            score += 3;
            break;
          case "1-3":
            score += 5;
            break;
        }
        q1Transition();
      },
      { once: true }
    );
  });
  return tl;
};
let question2 = () => {
  let tl = gsap
    .timeline()
    .fromTo(
      "#question-2>.content",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-2>.animating-bg",
      {
        width: "0%",
      },
      {
        width: "40%",
        duration: 0.8,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-2 .triangle",
      {
        top: "100%",
        left: "30%",
      },
      {
        top: "-5%",
        left: "30%",
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-2 .rectangle",
      {
        top: "150%",
        left: "-20%",
      },
      {
        top: "40%",
        left: "-20%",
        duration: 0.8,
        delay: 0.1,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-2 .circle",
      {
        top: "100%",
        left: "35%",
      },
      {
        top: "60%",
        left: "35%",
        delay: 0.2,
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-2 .triangle",
      { rotate: "25deg" },
      {
        rotate: "385deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
      },
      2.3
    )
    .fromTo(
      "#question-2 .rectangle",
      { rotate: "65deg" },
      {
        rotate: "-295deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
      },
      2.3
    )
    .to(
      "#question-2 .circle",
      {
        top: "58%",
        left: "38%",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 0.5,
        duration: 2,
        yoyo: true,
      },
      2.3
    );
  const q2Options = document.querySelectorAll("#question-2 .option");

  q2Options.forEach((item) => {
    item.addEventListener(
      "click",
      function (e) {
        switch (e.target.classList[1]) {
          case "2-1":
            score += 3;
            break;
          case "2-2":
            score += 5;
            break;
          case "2-3":
            score += 1;
            break;
        }
        q2Transition();
      },
      { once: true }
    );
  });
  return tl;
};
let question3 = () => {
  let tl = gsap
    .timeline()
    .fromTo(
      "#question-3>.content",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-3>.animating-bg",
      {
        width: "0%",
      },
      {
        width: "40%",
        duration: 0.8,
        ease: "power1.out",
      }
    )
    .fromTo(
      "#question-3 .circle",
      {
        top: "100%",
        right: "-15%",
      },
      {
        top: "-10%",
        right: "-15%",
        duration: 0.8,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-3 .rectangle",
      {
        top: "150%",
        right: "25%",
      },
      {
        top: "20%",
        right: "25%",
        duration: 0.8,
        delay: 0.1,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-3 .triangle",
      {
        top: "100%",
        right: "-10%",
      },
      {
        top: "50%",
        right: "-10%",
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
      },
      1.3
    )
    .fromTo(
      "#question-3 .triangle",
      { rotate: "25deg" },
      {
        rotate: "385deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
      },
      2.3
    )
    .fromTo(
      "#question-3 .rectangle",
      { rotate: "2deg" },
      {
        rotate: "-30deg",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3,
        duration: 5,
        yoyo: true,
      },
      2.3
    )
    .to(
      "#question-3 .circle",
      {
        top: "-13%",
        right: "-8%",
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 0.5,
        duration: 5,
        yoyo: true,
      },
      2.3
    );
  const q3Options = document.querySelectorAll("#question-3 .option");

  q3Options.forEach((item) => {
    item.addEventListener(
      "click",
      function (e) {
        switch (e.target.classList[1]) {
          case "3-1":
            score += 5;
            break;
          case "3-2":
            score += 1;
            break;
          case "3-3":
            score += 3;
            break;
        }
        q3Transition();
      },
      { once: true }
    );
  });
  return tl;
};
let calculating = () => {
  document.querySelector("body").style.overflow = "auto";
  document.querySelector("body").style.overflowX = "hidden";
  document.querySelector("body").style.overflowY = "auto";
  gsap.registerPlugin(ScrollTrigger);

  const colors = ["black", "secondary", "white", "notable", "primary"];
  const height = [5, 10, 15, 20, 30];
  const rotate = [15, 30, 60, 90, 180];
  const delays = [0, 0.5, 1, 1.5, 2];
  const instanceNumber = 10;
  const randomize = (limit) => {
    return Math.floor(Math.random() * (limit - 1));
  };

  const trianglesContainer = document.querySelector(".animation1");
  const rectanglesContainer = document.querySelector(".animation2");
  const circlesContainer = document.querySelector(".animation3");
  for (let i = 0; i < instanceNumber; i++) {
    // triangle
    const triangle = Object.assign(document.createElement("div"), {
      className: `triangle bg-${colors[randomize(5)]}`,
      style: `height: ${height[randomize(5)]}rem; transform: rotate(${
        rotate[randomize(5)]
      }deg); top: ${5 + i * 2}%;`,
    });
    trianglesContainer.appendChild(triangle);
    gsap.to(triangle, {
      left: "100%",
      scrollTrigger: {
        trigger: triangle,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        ease: "power1.out",
        markers: true,
        delay: delays[randomize(5)],
      },
    });
    // rectangle
    const rectangle = Object.assign(document.createElement("div"), {
      className: `rectangle bg-${colors[randomize(5)]}`,
      style: `height: ${height[randomize(5)]}rem; transform: rotate(${
        rotate[randomize(5)]
      }deg); top: ${40 + i * 2}%;`,
    });
    rectanglesContainer.appendChild(rectangle);
    gsap.to(rectangle, {
      left: "100%",
      scrollTrigger: {
        trigger: rectangle,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
        markers: true,
        delay: delays[randomize(5)],
      },
    });

    // circle
    const circle = Object.assign(document.createElement("div"), {
      className: `circle bg-${colors[randomize(5)]}`,
      style: `height: ${height[randomize(5)]}rem; transform: rotate(${
        rotate[randomize(5)]
      }deg); top: ${70 + i * 2}%;`,
    });
    circlesContainer.appendChild(circle);
    gsap.to(circle, {
      left: "100%",
      scrollTrigger: {
        trigger: circle,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
        markers: true,
        delay: delays[randomize(5)],
      },
    });
  }
  // return tl;
};
let triangle = () => {
  document.querySelector("#result").classList.replace("bg-white", "bg-primary");
  const blueStars = document.querySelectorAll(".blue-star");
  const blackStars = document.querySelectorAll(".black-star");

  let tl = gsap
    .timeline()
    .fromTo(
      ".type-triangle",
      { opacity: 0, display: "none" },
      {
        opacity: 1,
        display: "flex",
        delay: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      blueStars[0],
      {
        top: "-50%",
      },
      {
        top: "5%",
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blueStars[1],
      {
        top: "-50%",
      },
      {
        top: "20%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blueStars[2],
      {
        top: "-50%",
      },
      {
        top: "60%",
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blueStars[3],
      {
        top: "-50%",
      },
      {
        top: "30%",
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackStars[0],
      {
        top: "-50%",
      },
      {
        top: "40%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackStars[1],
      {
        top: "-50%",
      },
      {
        top: "10%",
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackStars[2],
      {
        top: "-50%",
      },
      {
        top: "50%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".white-triangle",
      {
        bottom: "-50%",
      },
      {
        bottom: "0%",
        duration: 1,
        ease: "power2.out",
      }
    )
    .fromTo(
      ".secondary-triangle",
      {
        bottom: "-50%",
      },
      {
        bottom: "0%",
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".black-triangle",
      {
        bottom: "-50%",
      },
      {
        bottom: "0%",
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      },
      "<"
    )
    .to(".black-star", {
      top: "-50%",
      duration: 1,
      ease: "power2.in",
      onComplete: function () {
        blackStars.forEach((item) => item.remove());
      },
    })
    .to(
      blueStars[3],
      {
        top: "-50%",
        duration: 1,
        ease: "power2.in",
        onComplete: function () {
          blueStars[3].remove();
        },
      },
      "<"
    )
    .fromTo(
      ".content",
      {
        width: "40%",
        left: "40%",
      },
      {
        width: "40%",
        left: "50%",
        duration: 1,
        ease: "power2.in",
        onComplete: function () {
          const items = document.querySelectorAll(".type-triangle .traits>li");
          gsap
            .timeline()
            .to(
              ".trait-1",
              {
                left: "50%",
                top: items[0].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-2",
              {
                left: "50%",
                top: items[1].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-3",
              {
                left: "50%",
                top: items[2].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            );
        },
      },
      "<"
    )
    .fromTo(
      ".content>.h3",
      {
        paddingLeft: "1.5rem",
      },
      {
        paddingLeft: "0rem",
        duration: 1,
        ease: "power2.in",
      },
      "<"
    )
    .to(
      ".secondary-triangle",
      {
        bottom: "25%",
        left: "25%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".secondary-triangle", {
            keyframes: {
              bottom: ["25%", "20%", "25%", "25%"],
              left: ["25%", "28%", "31%", "25%"],
              ease: "power1.inOut",
            },
            repeat: -1,
            duration: 15,
          });
        },
      },
      "<"
    )
    .to(
      ".white-triangle",
      {
        bottom: "30%",
        left: "30%",
        rotation: "85deg",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".white-triangle", {
            rotation: "55deg",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .to(
      ".black-triangle",
      {
        bottom: "40%",
        left: "30%",
        rotation: "135deg",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".black-triangle", {
            rotation: "165deg",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .fromTo(
      ".details",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      },
      "<"
    );
  return tl;
};
let circular = () => {
  document.querySelector("#result").classList.replace("bg-white", "bg-notable");
  const blueCircs = document.querySelectorAll(".blue-circ");
  const blackCircs = document.querySelectorAll(".black-circ");

  let tl = gsap
    .timeline()
    .fromTo(
      ".type-circle",
      { opacity: 0, display: "none" },
      {
        opacity: 1,
        display: "flex",
        delay: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      blueCircs[0],
      {
        top: "-50%",
      },
      {
        top: "10%",
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blueCircs[1],
      {
        top: "-50%",
      },
      {
        top: "2%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blueCircs[2],
      {
        top: "-50%",
      },
      {
        top: "40%",
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackCircs[0],
      {
        top: "-50%",
      },
      {
        top: "35%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackCircs[1],
      {
        top: "-50%",
      },
      {
        top: "15%",
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackCircs[2],
      {
        top: "-50%",
      },
      {
        top: "0%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".black-circle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-9%",
        duration: 1,
        ease: "power2.out",
      }
    )
    .fromTo(
      ".white-circle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-10%",
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".primary-circle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-13%",
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      },
      "<"
    )
    .to(".black-circ", {
      top: "-50%",
      duration: 1,
      ease: "power2.in",
      onComplete: function () {
        blackCircs.forEach((item) => item.remove());
      },
    })
    .fromTo(
      ".content",
      {
        width: "40%",
        left: "40%",
      },
      {
        width: "40%",
        left: "50%",
        duration: 1,
        ease: "power2.in",
        onComplete: function () {
          const items = document.querySelectorAll(".type-circle .traits>li");
          gsap
            .timeline()
            .to(
              ".trait-1",
              {
                left: "50%",
                top: items[0].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-2",
              {
                left: "50%",
                top: items[1].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-3",
              {
                left: "50%",
                top: items[2].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            );
        },
      },
      "<"
    )
    .to(
      ".primary-circle",
      {
        bottom: "25%",
        left: "25%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".primary-circle", {
            keyframes: {
              bottom: ["25%", "20%", "18%"],
              left: ["25%", "28%", "31%"],
              ease: "power1.inOut",
            },
            repeat: -1,
            yoyo: true,
            duration: 15,
          });
        },
      },
      "<"
    )
    .to(
      ".white-circle",
      {
        bottom: "15%",
        left: "30%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".white-circle", {
            bottom: "18%",
            left: "32%",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .to(
      ".black-circle",
      {
        bottom: "40%",
        left: "30%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".black-circle", {
            bottom: "43%",
            left: "25%",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .fromTo(
      ".details",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      },
      "<"
    )
    .to(
      ".type-circle p.h3",
      {
        paddingLeft: "0rem",
        duration: 1,
        ease: "power2.in",
      },
      "<"
    );
  return tl;
};
let rectangle = () => {
  document
    .querySelector("#result")
    .classList.replace("bg-white", "bg-secondary");
  const notableRects = document.querySelectorAll(".notable-rect");
  const blackRects = document.querySelectorAll(".black-rect");

  let tl = gsap
    .timeline()
    .fromTo(
      ".type-rectangle",
      { opacity: 0, display: "none" },
      {
        opacity: 1,
        display: "flex",
        delay: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    )
    .fromTo(
      notableRects[0],
      {
        top: "-50%",
      },
      {
        top: "0%",
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      notableRects[1],
      {
        top: "-50%",
      },
      {
        top: "15%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      notableRects[2],
      {
        top: "-50%",
      },
      {
        top: "40%",
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackRects[0],
      {
        top: "-50%",
      },
      {
        top: "35%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackRects[1],
      {
        top: "-50%",
      },
      {
        top: "45%",
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      blackRects[2],
      {
        top: "-50%",
      },
      {
        top: "0%",
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".black-rectangle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-9%",
        duration: 1,
        ease: "power2.out",
      }
    )

    .fromTo(
      ".notable-rectangle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-12%",
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".white-rectangle",
      {
        bottom: "-100%",
      },
      {
        bottom: "-5%",
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      },
      "<"
    )
    .to(".black-rect", {
      top: "-50%",
      duration: 1,
      ease: "power2.in",
      onComplete: function () {
        blackRects.forEach((item) => item.remove());
      },
    })
    .fromTo(
      ".content",
      {
        width: "40%",
        left: "40%",
      },
      {
        width: "40%",
        left: "50%",
        duration: 1,
        ease: "power2.in",
        onComplete: function () {
          const items = document.querySelectorAll(".type-rectangle .traits>li");
          gsap
            .timeline()
            .to(
              ".trait-1",
              {
                left: "50%",
                top: items[0].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-2",
              {
                left: "50%",
                top: items[1].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            )
            .to(
              ".trait-3",
              {
                left: "50%",
                top: items[2].getBoundingClientRect().top,
                duration: 1.5,
                ease: "power2.out",
              },
              "<"
            );
        },
      },
      "<"
    )
    .to(
      ".notable-rectangle",
      {
        bottom: "25%",
        left: "25%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".notable-rectangle", {
            rotation: "-15deg",
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            duration: 15,
          });
        },
      },
      "<"
    )
    .to(
      ".white-rectangle",
      {
        bottom: "15%",
        left: "30%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".white-rectangle", {
            bottom: "18%",
            left: "28%",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .to(
      ".black-rectangle",
      {
        bottom: "40%",
        left: "30%",
        duration: 1,
        ease: "power1.out",
        onComplete: function () {
          gsap.to(".black-rectangle", {
            rotation: "10deg",
            repeat: -1,
            delay: 0.3,
            yoyo: true,
            duration: 10,
          });
        },
      },
      "<"
    )
    .fromTo(
      ".details",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      },
      "<"
    )
    .to(
      ".type-rectangle p.h3",
      {
        paddingLeft: "0rem",
        duration: 1,
        ease: "power2.in",
      },
      "<"
    );
  return tl;
};
let fadeOut = () => {
  let tl = gsap.timeline().to("#result", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
    onComplete: function () {
      location.reload();
    },
  });

  return tl;
};
let showResult = () => {
  if (score >= 3 && score <= 5) {
    triangle();
  } else if (score >= 6 && score <= 11) {
    rectangle();
  } else {
    circular();
  }
};
// opening();
calculating();
// rectangle();
// circular();
// triangle();
const repeatBtn = document.querySelectorAll(".try-again");
repeatBtn.forEach((btn) => {
  btn.addEventListener(
    "click",
    function () {
      score = 0;
      fadeOut();
    },
    { once: true }
  );
});
