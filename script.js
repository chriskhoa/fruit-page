const width = window.innerWidth;
const height = window.innerHeight;
const splitText = new SplitType(".split", {
  types: "words, chars",
});
// fix accessibility for split text using aria label
let words = splitText.words;
let texts = document.querySelectorAll(".split");
texts.forEach((text) => {
  text.setAttribute("aria-label", text.innerText);
});
words.forEach((word) => {
  word.setAttribute("aria-hidden", "true");
});

let mm = gsap.matchMedia();

// mobile animation
mm.add("(max-width: 599px) and (prefers-reduced-motion: no-preference)", () => {
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
  introtl.to(
    "#to_lychee",
    {
      opacity: 1,
    },
    "<"
  );

  /* LYCHEE SECTION */
  let lycheetl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lychee",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  lycheetl.to("#lychee_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  lycheetl.to("#lychee", {
    backgroundImage: "radial-gradient(#840000 100%, #ff8080 130%)",
  });
  lycheetl.fromTo(
    "#lychee_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  lycheetl.fromTo(
    "#lychee_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  lycheetl.to("#lychee_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  lycheetl.to("#lychee_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to papaya
  lycheetl.to("#lychee", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#840000 -30%, #FFC080 0%)",
  });
  lycheetl.to(
    "#lychee",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFC080",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to("#to_papaya", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* PAPAYA SECTION */
  let papayatl = gsap.timeline({
    scrollTrigger: {
      trigger: "#papaya",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  papayatl.to("#papaya_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  papayatl.to("#papaya", {
    backgroundImage: "radial-gradient(#d75300 100%, #FFC080 130%)",
  });
  papayatl.fromTo(
    "#papaya_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  papayatl.fromTo(
    "#papaya_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  papayatl.to("#papaya_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  papayatl.to("#papaya_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to durian
  papayatl.to("#papaya", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#d75300 -30%, #FFEE80 0%)",
  });
  papayatl.to(
    "#papaya",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFEE80",
    },
    "<"
  );
  papayatl.to(
    "#papaya_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to("#to_durian", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* DURIAN SECTION */
  let duriantl = gsap.timeline({
    scrollTrigger: {
      trigger: "#durian",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  duriantl.to("#durian_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  duriantl.to("#durian", {
    backgroundImage: "radial-gradient(#808000 100%, #FFEE80 130%)",
  });
  duriantl.fromTo(
    "#durian_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  duriantl.fromTo(
    "#durian_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  duriantl.to("#durian_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  duriantl.to("#durian_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to custard apple
  duriantl.to("#durian", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#808000 -30%, #80FF80 0%)",
  });
  duriantl.to(
    "#durian",
    {
      ease: "power2.inOut",
      backgroundColor: "#80FF80",
    },
    "<"
  );
  duriantl.to(
    "#durian_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to("#to_custard", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* CUSTARD APPLE SECTION */
  let custardtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#custard",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  custardtl.to("#custard_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  custardtl.to("#custard", {
    backgroundImage: "radial-gradient(#0a7a00 100%, #80FF80 130%)",
  });
  custardtl.fromTo(
    "#custard_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  custardtl.fromTo(
    "#custard_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  custardtl.to("#custard_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  custardtl.to("#custard_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to mangosteen
  custardtl.to("#custard", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#0a7a00 -30%, #BB80FF 0%)",
  });
  custardtl.to(
    "#custard",
    {
      ease: "power2.inOut",
      backgroundColor: "#BB80FF",
    },
    "<"
  );
  custardtl.to(
    "#custard_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to("#to_mangosteen", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* MANGOSTEEN SECTION */
  let mangosteentl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mangosteen",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  mangosteentl.to("#mangosteen_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  mangosteentl.to("#mangosteen", {
    backgroundImage: "radial-gradient(#55006e 100%, #bb80ff 130%)",
  });
  mangosteentl.fromTo(
    "#mangosteen_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  mangosteentl.fromTo(
    "#mangosteen_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to end
  mangosteentl.to("#mangosteen", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#55006e -30%, #FFFFFF 0%)",
  });
  mangosteentl.to(
    "#mangosteen",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFFFFF",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to("#to_end", {
    opacity: 1,
    ease: "power2.inOut",
  });
});

// desktop animation
mm.add("(min-width: 600px) and (prefers-reduced-motion: no-preference)", () => {
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
  introtl.to(
    "#to_lychee",
    {
      opacity: 1,
    },
    "<"
  );

  /* LYCHEE SECTION */
  let lycheetl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lychee",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  lycheetl.to("#lychee_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  lycheetl.to("#lychee", {
    backgroundImage: "radial-gradient(#840000 100%, #ff8080 130%)",
  });
  lycheetl.fromTo(
    "#lychee_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  lycheetl.fromTo(
    "#lychee_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  lycheetl.to("#lychee_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  lycheetl.to("#lychee_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });

  // transition to papaya
  lycheetl.to("#lychee", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#840000 -30%, #FFC080 0%)",
  });
  lycheetl.to(
    "#lychee",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFC080",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to("#to_papaya", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* PAPAYA SECTION */
  let papayatl = gsap.timeline({
    scrollTrigger: {
      trigger: "#papaya",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  papayatl.to("#papaya_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  papayatl.to("#papaya", {
    backgroundImage: "radial-gradient(#d75300 100%, #FFC080 130%)",
  });
  papayatl.fromTo(
    "#papaya_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  papayatl.fromTo(
    "#papaya_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  papayatl.to("#papaya_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  papayatl.to("#papaya_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to durian
  papayatl.to("#papaya", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#d75300 -30%, #FFEE80 0%)",
  });
  papayatl.to(
    "#papaya",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFEE80",
    },
    "<"
  );
  papayatl.to(
    "#papaya_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to("#to_durian", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* DURIAN SECTION */
  let duriantl = gsap.timeline({
    scrollTrigger: {
      trigger: "#durian",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  duriantl.to("#durian_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  duriantl.to("#durian", {
    backgroundImage: "radial-gradient(#808000 100%, #FFEE80 130%)",
  });
  duriantl.fromTo(
    "#durian_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  duriantl.fromTo(
    "#durian_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  duriantl.to("#durian_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  duriantl.to("#durian_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to custard apple
  duriantl.to("#durian", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#808000 -30%, #80FF80 0%)",
  });
  duriantl.to(
    "#durian",
    {
      ease: "power2.inOut",
      backgroundColor: "#80FF80",
    },
    "<"
  );
  duriantl.to(
    "#durian_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to("#to_custard", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* CUSTARD APPLE SECTION */
  let custardtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#custard",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  custardtl.to("#custard_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  custardtl.to("#custard", {
    backgroundImage: "radial-gradient(#0a7a00 100%, #80FF80 130%)",
  });
  custardtl.fromTo(
    "#custard_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  custardtl.fromTo(
    "#custard_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  custardtl.to("#custard_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  custardtl.to("#custard_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to mangosteen
  custardtl.to("#custard", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#0a7a00 -30%, #BB80FF 0%)",
  });
  custardtl.to(
    "#custard",
    {
      ease: "power2.inOut",
      backgroundColor: "#BB80FF",
    },
    "<"
  );
  custardtl.to(
    "#custard_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to("#to_mangosteen", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* MANGOSTEEN SECTION */
  let mangosteentl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mangosteen",
      end: `+=${height * 2}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  mangosteentl.to("#mangosteen_name .char", {
    opacity: 0,
    y: "+=50px",
    ease: "bounce.in",
    stagger: 0.05,
  });
  mangosteentl.to("#mangosteen", {
    backgroundImage: "radial-gradient(#55006e 100%, #bb80ff 130%)",
  });
  mangosteentl.fromTo(
    "#mangosteen_title .char",
    {
      y: "+=30px",
    },
    {
      y: "",
      opacity: 1,
      ease: "bounce.out",
      stagger: 0.05,
    }
  );
  mangosteentl.fromTo(
    "#mangosteen_image",
    {
      scale: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 0.2,
    ease: "power2.out",
  });
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });
  // transition to end
  mangosteentl.to("#mangosteen", {
    ease: "power2.inOut",
    backgroundImage: "radial-gradient(#55006e -30%, #FFFFFF 0%)",
  });
  mangosteentl.to(
    "#mangosteen",
    {
      ease: "power2.inOut",
      backgroundColor: "#FFFFFF",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to("#to_end", {
    opacity: 1,
    ease: "power2.inOut",
  });
});

// // reduce motion for mobile
mm.add("(max-width: 599px) and (prefers-reduced-motion: reduce)", () => {
  /* Animation for intro section */
  let introtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      end: `+=${height * 3}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  //   FRUIT PAGE
  introtl.to("#fruit_page", {
    // scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#fruit_page", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   WITH A
  introtl.to(
    "#with_a",
    {
      opacity: 1,
    }
    // "<"
  );
  introtl.to("#with_a", {
    // scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#with_a", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   TWIST
  introtl.to(
    "#twist",
    {
      opacity: 1,
    }
    // "<"
  );
  // introtl.to("#twist", {
  //   scale: 3,
  //   ease: "power2.in",
  //   rotation: 180,
  //   keyframes: { color: ["#FF8080", "#FFC080", "#FFEE80"] },
  // });
  // introtl.to("#twist", {
  //   scale: 6,
  //   ease: "power2.out",
  //   rotation: 360,
  //   keyframes: { color: ["#80FF80", "#80AAFF", "#BB80FF"] },
  // });
  introtl.to("#twist", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  // ARE YOU READY FOR SOMETHING
  introtl.to(
    "#ready .char",
    // { x: "+=100" },
    {
      // x: "",
      opacity: 1,
      // stagger: 0.05,
      ease: "power2.out",
    }
    // "<"
  );
  introtl.to(
    "#exotic .char",
    // {
    //   scale: 3,
    // },
    {
      opacity: 1,
      // scale: 1,
      // stagger: 0.05,
      ease: "power2.out",
    }
  );
  //   LET LEARN ABOUT
  introtl.to("#ready", {
    // x: "+=100",
    opacity: 0,
  });
  introtl.to("#learn .char", {
    opacity: 1,
    // stagger: 0.05,
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    x: "+=1rem",
  });
  introtl.to(
    "#question_mark",
    {
      // rotation: 360,
      ease: "power2.in",
      opacity: 0,
      // x: "+=200",
    },
    "<"
  );
  //   FRUITS
  introtl.to("#fruits .char", {
    opacity: 1,
    // stagger: 0.05,
    ease: "power2.in",
  });
  //   TRANSITION TO LYCHEE
  // introtl.to("#exotic", {
  //   ease: "power2.in",
  //   keyframes: {
  //     color: ["#FF8080", "#FFC080", "#FFEE80", "#80FF80", "#80AAFF", "#BB80FF"],
  //   },
  // });
  introtl.to("#exotic", {
    ease: "power2.in",
    // scale: 10,
    color: "#FF8080",
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
    // scale: 20,
    opacity: 0,
  });
  introtl.to(
    "#intro",
    {
      backgroundColor: "#FF8080",
    },
    "<"
  );
  introtl.to(
    "#to_lychee",
    {
      opacity: 1,
    },
    "<"
  );

  /* LYCHEE SECTION */
  let lycheetl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lychee",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  lycheetl.to("#lychee_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  lycheetl.to("#lychee", {
    backgroundColor: "#840000",
  });
  lycheetl.to(
    "#lychee_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  lycheetl.to(
    "#lychee_image",
    // {
    //   scale: 0.2,
    // },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // lycheetl.to("#lychee_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  lycheetl.to("#lychee_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to papaya
  // lycheetl.to("#lychee", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#840000 -30%, #FFC080 0%)",
  // });
  lycheetl.to("#lychee", {
    ease: "power2.inOut",
    backgroundColor: "#FFC080",
  });
  lycheetl.to(
    "#lychee_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to("#to_papaya", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* PAPAYA SECTION */
  let papayatl = gsap.timeline({
    scrollTrigger: {
      trigger: "#papaya",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  papayatl.to("#papaya_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  papayatl.to("#papaya", {
    backgroundColor: "#d75300",
  });
  papayatl.to(
    "#papaya_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  papayatl.to(
    "#papaya_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // papayatl.to("#papaya_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  papayatl.to("#papaya_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to durian
  // papayatl.to("#papaya", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#d75300 -30%, #FFEE80 0%)",
  // });
  papayatl.to("#papaya", {
    ease: "power2.inOut",
    backgroundColor: "#FFEE80",
  });
  papayatl.to(
    "#papaya_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to("#to_durian", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* DURIAN SECTION */
  let duriantl = gsap.timeline({
    scrollTrigger: {
      trigger: "#durian",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  duriantl.to("#durian_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  duriantl.to("#durian", {
    backgroundColor: "#808000",
  });
  duriantl.to(
    "#durian_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  duriantl.to(
    "#durian_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // duriantl.to("#durian_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  duriantl.to("#durian_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to custard apple
  // duriantl.to("#durian", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#808000 -30%, #80FF80 0%)",
  // });
  duriantl.to("#durian", {
    ease: "power2.inOut",
    backgroundColor: "#80FF80",
  });
  duriantl.to(
    "#durian_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to("#to_custard", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* CUSTARD APPLE SECTION */
  let custardtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#custard",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  custardtl.to("#custard_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  custardtl.to("#custard", {
    backgroundColor: "#0a7a00",
  });
  custardtl.to(
    "#custard_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  custardtl.to(
    "#custard_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // custardtl.to("#custard_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  custardtl.to("#custard_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to mangosteen
  // custardtl.to("#custard", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#0a7a00 -30%, #BB80FF 0%)",
  // });
  custardtl.to("#custard", {
    ease: "power2.inOut",
    backgroundColor: "#BB80FF",
  });
  custardtl.to(
    "#custard_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to("#to_mangosteen", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* MANGOSTEEN SECTION */
  let mangosteentl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mangosteen",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  mangosteentl.to("#mangosteen_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  mangosteentl.to("#mangosteen", {
    backgroundColor: "#55006e",
  });
  mangosteentl.to(
    "#mangosteen_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  mangosteentl.to(
    "#mangosteen_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // mangosteentl.to("#mangosteen_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to end
  // mangosteentl.to("#mangosteen", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#55006e -30%, #FFFFFF 0%)",
  // });
  mangosteentl.to("#mangosteen", {
    ease: "power2.inOut",
    backgroundColor: "#FFFFFF",
  });
  mangosteentl.to(
    "#mangosteen_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to("#to_end", {
    opacity: 1,
    ease: "power2.inOut",
  });
});

// // reduce motion for desktop
mm.add("(min-width: 600px) and (prefers-reduced-motion: reduce)", () => {
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
    // scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#fruit_page", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   WITH A
  introtl.to(
    "#with_a",
    {
      opacity: 1,
    }
    // "<"
  );
  introtl.to("#with_a", {
    // scale: 10,
    ease: "power2.in",
    opacity: 0.5,
  });
  introtl.to("#with_a", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  //   TWIST
  introtl.to(
    "#twist",
    {
      opacity: 1,
    }
    // "<"
  );
  // introtl.to("#twist", {
  //   scale: 3,
  //   ease: "power2.in",
  //   rotation: 180,
  //   keyframes: { color: ["#FF8080", "#FFC080", "#FFEE80"] },
  // });
  // introtl.to("#twist", {
  //   scale: 6,
  //   ease: "power2.out",
  //   rotation: 360,
  //   keyframes: { color: ["#80FF80", "#80AAFF", "#BB80FF"] },
  // });
  introtl.to("#twist", {
    // scale: 20,
    ease: "power2.out",
    opacity: 0,
  });
  // ARE YOU READY FOR SOMETHING
  introtl.to(
    "#ready .char",
    // { x: "+=100" },
    {
      // x: "",
      opacity: 1,
      // stagger: 0.05,
      ease: "power2.out",
    }
    // "<"
  );
  introtl.to(
    "#exotic .char",
    // {
    //   scale: 3,
    // },
    {
      opacity: 1,
      // scale: 1,
      // stagger: 0.05,
      ease: "power2.out",
    }
  );
  //   LET LEARN ABOUT
  introtl.to("#ready", {
    // x: "+=100",
    opacity: 0,
  });
  introtl.to("#learn .char", {
    opacity: 1,
    // stagger: 0.05,
  });
  introtl.to("#exotic", {
    ease: "power2.in",
    x: "+=1rem",
  });
  introtl.to(
    "#question_mark",
    {
      // rotation: 360,
      ease: "power2.in",
      opacity: 0,
      // x: "+=200",
    },
    "<"
  );
  //   FRUITS
  introtl.to("#fruits .char", {
    opacity: 1,
    // stagger: 0.05,
    ease: "power2.in",
  });
  //   TRANSITION TO LYCHEE
  // introtl.to("#exotic", {
  //   ease: "power2.in",
  //   keyframes: {
  //     color: ["#FF8080", "#FFC080", "#FFEE80", "#80FF80", "#80AAFF", "#BB80FF"],
  //   },
  // });
  introtl.to("#exotic", {
    ease: "power2.in",
    // scale: 10,
    color: "#FF8080",
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
    // scale: 20,
    opacity: 0,
  });
  introtl.to(
    "#intro",
    {
      backgroundColor: "#FF8080",
    },
    "<"
  );
  introtl.to(
    "#to_lychee",
    {
      opacity: 1,
    },
    "<"
  );

  /* LYCHEE SECTION */
  let lycheetl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lychee",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  lycheetl.to("#lychee_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  lycheetl.to("#lychee", {
    backgroundColor: "#840000",
  });
  lycheetl.to(
    "#lychee_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  lycheetl.to(
    "#lychee_image",
    // {
    //   scale: 0.2,
    // },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // lycheetl.to("#lychee_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  lycheetl.to("#lychee_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to papaya
  // lycheetl.to("#lychee", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#840000 -30%, #FFC080 0%)",
  // });
  lycheetl.to("#lychee", {
    ease: "power2.inOut",
    backgroundColor: "#FFC080",
  });
  lycheetl.to(
    "#lychee_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to(
    "#lychee_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  lycheetl.to("#to_papaya", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* PAPAYA SECTION */
  let papayatl = gsap.timeline({
    scrollTrigger: {
      trigger: "#papaya",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  papayatl.to("#papaya_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  papayatl.to("#papaya", {
    backgroundColor: "#d75300",
  });
  papayatl.to(
    "#papaya_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  papayatl.to(
    "#papaya_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // papayatl.to("#papaya_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  papayatl.to("#papaya_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to durian
  // papayatl.to("#papaya", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#d75300 -30%, #FFEE80 0%)",
  // });
  papayatl.to("#papaya", {
    ease: "power2.inOut",
    backgroundColor: "#FFEE80",
  });
  papayatl.to(
    "#papaya_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to(
    "#papaya_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  papayatl.to("#to_durian", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* DURIAN SECTION */
  let duriantl = gsap.timeline({
    scrollTrigger: {
      trigger: "#durian",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  duriantl.to("#durian_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  duriantl.to("#durian", {
    backgroundColor: "#808000",
  });
  duriantl.to(
    "#durian_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  duriantl.to(
    "#durian_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // duriantl.to("#durian_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  duriantl.to("#durian_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to custard apple
  // duriantl.to("#durian", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#808000 -30%, #80FF80 0%)",
  // });
  duriantl.to("#durian", {
    ease: "power2.inOut",
    backgroundColor: "#80FF80",
  });
  duriantl.to(
    "#durian_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to(
    "#durian_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  duriantl.to("#to_custard", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* CUSTARD APPLE SECTION */
  let custardtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#custard",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  custardtl.to("#custard_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  custardtl.to("#custard", {
    backgroundColor: "#0a7a00",
  });
  custardtl.to(
    "#custard_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  custardtl.to(
    "#custard_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // custardtl.to("#custard_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  custardtl.to("#custard_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to mangosteen
  // custardtl.to("#custard", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#0a7a00 -30%, #BB80FF 0%)",
  // });
  custardtl.to("#custard", {
    ease: "power2.inOut",
    backgroundColor: "#BB80FF",
  });
  custardtl.to(
    "#custard_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to(
    "#custard_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  custardtl.to("#to_mangosteen", {
    opacity: 1,
    ease: "power2.inOut",
  });

  /* MANGOSTEEN SECTION */
  let mangosteentl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mangosteen",
      end: `+=${height * 1}`,
      pin: true,
      scrub: 1,
      markers: false,
    },
  });
  mangosteentl.to("#mangosteen_name .char", {
    opacity: 0,
    // y: "+=50px",
    ease: "power2.in",
    // stagger: 0.05,
  });
  mangosteentl.to("#mangosteen", {
    backgroundColor: "#55006e",
  });
  mangosteentl.to(
    "#mangosteen_title .char",
    // {
    //   y: "+=30px",
    // },
    {
      // y: "",
      opacity: 1,
      ease: "power2.out",
      // stagger: 0.05,
    }
  );
  mangosteentl.to(
    "#mangosteen_image",
    // {
    //   scale: 0.2,
    // },
    {
      // scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
  // mangosteentl.to("#mangosteen_des .word", {
  //   opacity: 0.2,
  //   ease: "power2.out",
  // });
  mangosteentl.to("#mangosteen_des .word", {
    opacity: 1,
    ease: "power2.inOut",
    // stagger: 0.05,
  });
  // transition to end
  // mangosteentl.to("#mangosteen", {
  //   ease: "power2.inOut",
  //   backgroundImage: "radial-gradient(#55006e -30%, #FFFFFF 0%)",
  // });
  mangosteentl.to("#mangosteen", {
    ease: "power2.inOut",
    backgroundColor: "#FFFFFF",
  });
  mangosteentl.to(
    "#mangosteen_image",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_title",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to(
    "#mangosteen_des",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );
  mangosteentl.to("#to_end", {
    opacity: 1,
    ease: "power2.inOut",
  });
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
