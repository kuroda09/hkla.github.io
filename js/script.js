window.addEventListener("DOMContentLoaded", (event) => {
  const homeLink = document.querySelector(".nav_item a[href='#home']");
  const aboutLink = document.querySelector(".nav_item a[href='#about']");
  const projectsLink = document.querySelector(".nav_item a[href='#projects']");
  const contactLink = document.querySelector(".nav_item a[href='#contact']");
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");

  const floatInSection = (section) => {
    const sectionRect = section.getBoundingClientRect();
    if (sectionRect.top <= window.innerHeight * 0.75) {
      section.style.animation = "floatUp 0.3s ease-out forwards";
    } else {
      section.style.animation = "";
    }
  };

  const floatSectionsOnScroll = () => {
    floatInSection(homeSection);
    floatInSection(aboutSection);
    floatInSection(projectsSection);
    floatInSection(contactSection);
  };

  window.addEventListener("scroll", floatSectionsOnScroll);
  floatSectionsOnScroll();

  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    aboutSection.style.animation = "";
    projectsSection.style.animation = "";
    homeSection.style.animation = "floatUp 0.5s ease-out forwards";
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.style.animation = "";
    projectsSection.style.animation = "";
    aboutSection.style.animation = "floatUp 0.5s ease-out forwards";
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  projectsLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.style.animation = "";
    aboutSection.style.animation = "";
    projectsSection.style.animation = "floatUp 0.5s ease-out forwards";
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

    contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.style.animation = "";
    aboutSection.style.animation = "";
    projectsSection.style.animation = "";
    contactSection.style.animation = "floatUp 0.5s ease-out forwards";
    contactSection.scrollIntoView({ behavior: "smooth" });
    });

});

window.addEventListener("DOMContentLoaded", (event) => {
  const projectContainers = document.querySelectorAll(".project_container");

  projectContainers.forEach((container) => {
    container.addEventListener("scroll", () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const scrollWidth = container.scrollWidth;

      const visibleWidth = scrollLeft + containerWidth;

      if (scrollLeft === 0) {
        container.classList.remove("scroll-right");
        container.classList.add("scroll-left");
      } else if (visibleWidth === scrollWidth) {
        container.classList.remove("scroll-left");
        container.classList.add("scroll-right");
      } else {
        container.classList.add("scroll-left", "scroll-right");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });