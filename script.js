const width = window.innerWidth;
const height = window.innerHeight;
const splitText = new SplitType(".split");
let mm = gsap.matchMedia();

// mobile animation
mm.add("(max-width: 599px)", () => {
  /* Animation for intro section */
  let introtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      end: `+=${height * 6}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  //   FRUIT PAGE
  introtl.to("#fruit_page", {
    scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#fruit_page", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   WITH A
  introtl.to(
    "#with_a",
    {
      opacity: 1,
    },
    "<"
  );
  introtl.to("#with_a", {
    scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#with_a", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   TWIST
  introtl.to(
    "#twist",
    {
      opacity: 1,
    },
    "<"
  );
  introtl.to("#twist", {
    scale: 3,
    ease: "power2.in",
    rotation: 180,
    keyframes: { color: ["#FF8080", "#FFC080", "#FFEE80"] },
  });
  introtl.to("#twist", {
    scale: 6,
    ease: "power2.out",
    rotation: 360,
    keyframes: { color: ["#80FF80", "#80AAFF", "#BB80FF"] },
  });
  introtl.to("#twist", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  // ARE YOU READY FOR SOMETHING
  introtl.fromTo(
    "#ready .char",
    { x: "+=100" },
    {
      x: "",
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
    },
    "<"
  );
  introtl.fromTo(
    "#exotic .char",
    {
      scale: 3,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.05,
      ease: "power2.out",
    }
  );
  //   LET LEARN ABOUT
  introtl.to("#ready", {
    x: "+=100",
    opacity: 0,
  });
  introtl.to("#learn .char", {
    opacity: 1,
    stagger: 0.05,
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    x: "+=1rem",
  });
  introtl.to(
    "#question_mark",
    {
      rotation: 360,
      ease: "power2.in",
      opacity: 0,
      x: "+=200",
    },
    "<"
  );
  //   FRUITS
  introtl.to("#fruits .char", {
    opacity: 1,
    stagger: 0.05,
    ease: "power2.in",
  });
  //   TRANSITION TO LYCHEE
  introtl.to("#exotic", {
    ease: "power2.in",
    keyframes: {
      color: ["#FF8080", "#FFC080", "#FFEE80", "#80FF80", "#80AAFF", "#BB80FF"],
    },
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    scale: 10,
    keyframes: {
      color: ["#BB80FF", "#80AAFF", "#80FF80", "#FFEE80", "#FFC080", "#FF8080"],
    },
  });
  introtl.to(
    "#learn",
    {
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  );
  introtl.to(
    "#fruits",
    {
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  );
  introtl.to("#exotic", {
    scale: 20,
    opacity: 0,
  });
  introtl.to(
    "#intro",
    {
      backgroundColor: "#FF8080",
    },
    "<"
  );
});

// desktop animation
mm.add("(min-width: 600px)", () => {
  /* Animation for intro section */
  let introtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      end: `+=${height * 6}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  //   FRUIT PAGE
  introtl.to("#fruit_page", {
    scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#fruit_page", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   WITH A
  introtl.to(
    "#with_a",
    {
      opacity: 1,
    },
    "<"
  );
  introtl.to("#with_a", {
    scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#with_a", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   TWIST
  introtl.to(
    "#twist",
    {
      opacity: 1,
    },
    "<"
  );
  introtl.to("#twist", {
    scale: 3,
    ease: "power2.in",
    rotation: 180,
    keyframes: { color: ["#FF8080", "#FFC080", "#FFEE80"] },
  });
  introtl.to("#twist", {
    scale: 6,
    ease: "power2.out",
    rotation: 360,
    keyframes: { color: ["#80FF80", "#80AAFF", "#BB80FF"] },
  });
  introtl.to("#twist", {
    scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  // ARE YOU READY FOR SOMETHING
  introtl.fromTo(
    "#ready .char",
    { x: "+=100" },
    {
      x: "",
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
    },
    "<"
  );
  introtl.fromTo(
    "#exotic .char",
    {
      scale: 3,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.05,
      ease: "power2.out",
    }
  );
  //   LET LEARN ABOUT
  introtl.to("#ready", {
    x: "+=100",
    opacity: 0,
  });
  introtl.to("#learn .char", {
    opacity: 1,
    stagger: 0.05,
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    x: "+=1.8rem",
  });
  introtl.to(
    "#question_mark",
    {
      rotation: 360,
      ease: "power2.in",
      opacity: 0,
      x: "+=200",
    },
    "<"
  );
  //   FRUITS
  introtl.to("#fruits .char", {
    opacity: 1,
    stagger: 0.05,
    ease: "power2.in",
  });
  //   TRANSITION TO LYCHEE
  introtl.to("#exotic", {
    ease: "power2.in",
    keyframes: {
      color: ["#FF8080", "#FFC080", "#FFEE80", "#80FF80", "#80AAFF", "#BB80FF"],
    },
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    scale: 10,
    keyframes: {
      color: ["#BB80FF", "#80AAFF", "#80FF80", "#FFEE80", "#FFC080", "#FF8080"],
    },
  });
  introtl.to(
    "#learn",
    {
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  );
  introtl.to(
    "#fruits",
    {
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  );
  introtl.to("#exotic", {
    scale: 20,
    opacity: 0,
  });
  introtl.to(
    "#intro",
    {
      backgroundColor: "#FF8080",
    },
    "<"
  );
});

// lenis smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
