const typer = document.querySelector(".typer");
const projectsContainer = document.querySelector("#projects-container");
const aboutUl = document.querySelector("#aboutUl");
const skillsUl = document.querySelector("#skillsUl");
const serviceThumb = document.querySelectorAll(".sevice-thumb");
const serviceCard = document.querySelectorAll(".service-card");
const moveUp = document.querySelector(".move-up");

let currentText = "";
let currentTextIndex = 0;
let currentLetter = "";
let currentLetterIndex = 0;

// define functions

const removeText = () => {
  if (currentLetterIndex > 0) {
    currentLetter = currentLetter.slice(0, currentLetterIndex - 1);
    currentLetterIndex--;
    typer.textContent = currentLetter;
    setTimeout(() => {
      removeText();
    }, 200);
  } else {
    setTimeout(() => {
      currentTextIndex++;
      type();
    }, 400);
  }
};

const type = () => {
  if (currentTextIndex >= text.length) currentTextIndex = 0;
  currentText = text[currentTextIndex];
  if (currentLetterIndex < currentText.length) {
    currentLetter += currentText[currentLetterIndex];
    currentLetterIndex++;
    typer.textContent = currentLetter;
    setTimeout(() => {
      type();
    }, 400);
  } else {
    setTimeout(() => {
      removeText();
    }, 400);
  }
};

const addIconsInAbout = () => {
  aboutIcons.forEach((icon) => {
    const li = document.createElement("li");
    li.className =
      "w-7 h-7 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,.4)] cursor-pointer";
    const i = document.createElement("i");
    i.className = `${icon} text-2xl colored`;
    li.appendChild(i);
    aboutUl.appendChild(li);
  });
};

const showSkills = () => {
  skillsIcons.forEach((skill) => {
    const li = document.createElement("li");
    li.className =
      "w-full flex flex-wrap justify-between items-center content-center bg-[#edeaf0] shadow-md px-4 py-2 rounded-md cursor-pointer";
    const i = document.createElement("i");
    i.className = `${skill.class} text-2xl colored`;
    const h2 = document.createElement("h2");
    h2.textContent = skill.progress;
    const div = document.createElement("div");
    div.className = "w-full h-2 mt-3 relative";
    const span = document.createElement("span");
    span.className = `w-full h-2 rounded-md absolute`;
    span.style.width = skill.progress;
    span.style.background = skill.color;
    div.appendChild(span);
    li.appendChild(i);
    li.appendChild(h2);
    li.appendChild(div);
    skillsUl.appendChild(li);
  });
};

const showProjects = () => {
  projects.forEach((project) => {
    const el = document.createElement("div");
    el.className =
      "w-full h-[150px] lg:h-[200px] xl:h-[250px] md:h-[170px]  relative bg-black overflow-hidden shadow-lg shadow-[rgba(0,0,0,.3)] rounded-md";
    el.innerHTML = `
      <img
        src="${project?.hero}"
        class="w-full h-full object-cover absolute"
        alt=""
      />
      <div
        class="w-full h-full absolute bg-[rgba(0,0,0,.5)] backdrop-blur-sm hover:opacity-100 opacity-0"
      >
        <h2 class="text-center text-2xl lg:text-3xl md:text-xl py-2 text-primary-white font-semibold">
          ${project?.title}
        </h2>
        <ul
          class="flex flex-wrap gap-2 justify-center items-center content-center mt-2"
        ></ul>
        <div class="flex justify-center items-center mt-3 gap-2">
          <a
            class="px-2 py-1 bg-[rgba(255,255,255,.6)] rounded-md text-primary-gray hover:text-black cursor-pointer"
            target="_blank"
            href="${project?.demo}"
            >Visit</a
          >
          <a
            class="px-2 py-1 bg-[rgba(255,255,255,.6)] rounded-md text-primary-gray hover:text-black cursor-pointer"
            target="_blank"
            href="${project?.source}"
            >Source Code</a
          >
        </div>
      </div>
    `;
    const ul = el.querySelector("ul");
    project?.developedBy?.forEach((language) => {
      const li = document.createElement("li");
      li.className =
        "w-7 h-7 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,.4)] cursor-pointer";
      const i = document.createElement("i");
      i.className = `${iconClasses[language]} text-2xl colored`;
      li.appendChild(i);
      ul.appendChild(li);
    });

    projectsContainer.appendChild(el);
  });
};

// create event listeners
serviceThumb.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const id = thumb.getAttribute("data-id");
    console.log(id);
    serviceCard.forEach((card) => {
      if (card.id === id) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
      serviceThumb.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
});

document.addEventListener("scroll", (ev) => {
  if (window.scrollY > window.innerHeight) {
    moveUp.classList.add("active");
  } else {
    moveUp.classList.remove("active");
  }
});

moveUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// intiating and calling functions

type();
addIconsInAbout();
showSkills();
showProjects();
