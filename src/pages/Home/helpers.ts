export const setAnimations = () => {
  const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showX");
      } else {
        // entry.target.classList.remove("showX");
      };
    })
  });

  const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showY");
      } else {
        // entry.target.classList.remove("showY");
      };
    })
  });
  
  const hiddenXElements = document.querySelectorAll(".hiddenX");
  const hiddenYElements = document.querySelectorAll(".hiddenY");
  hiddenXElements.forEach((el) => observerX.observe(el));
  hiddenYElements.forEach((el) => observerY.observe(el));
};