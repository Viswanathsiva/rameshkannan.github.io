// Array of Alumni profile objects
const profiles = [
  {
    name: "Jithin S Kumar",
    image: "./assets/images/students/jsk.jpg",
    degree: "Ph.D.",
    year: "2019 - Till now",
    researchTitle: "Fluid-Solid interaction, Cavity expansion modelling",
    profileLink: "",
    email: "ce19d012@smail.iitm.ac.in",
    keywords: "Physics of fingering, Fracturing, Patterns",
    googleSchLink:
      "https://scholar.google.co.in/citations?user=TcJS02cAAAAJ&hl=en",
    researchGateLink: "https://www.researchgate.net/profile/Jithin-Kumar-3",
    linkedinLink: "https://in.linkedin.com/in/jithin-s-kumar-090591b2",
  },
  {
    name: "Nanduri Sesha Sai Pavan Kalyan",
    image: "./assets/images/students/Pavan.jpg",
    degree: "M.S. + Ph.D.",
    year: "2019 - Till now",
    researchTitle:
      "Improving the performance of ballasts to support high speed rail tracks",
    profileLink: "https://ce19d201.wixsite.com/pkwebsite",
    email: "ce19s020@smail.iitm.ac.in",
    keywords: "Particle characterization, µCT, Contact mechanics",
    googleSchLink:
      "https://scholar.google.co.in/citations?user=R5rSqzgAAAAJ&hl=en",
    researchGateLink: "",
    linkedinLink: "",
  },
  {
    name: "Sahil Wani",
    image: "./assets/images/students/Sahil.png",
    degree: "Ph.D.",
    year: "2020 - Till now",
    researchTitle: "Mechanics of gas hydrate sediments",
    profileLink: "https://sites.google.com/view/sahilwani/",
    email: "ce20d016@smail.iitm.ac.i",
    keywords:
      "Constitutive behaviour, Modelling of geo-materials, Boundary value problems",
    googleSchLink:
      "https://scholar.google.co.in/citations?user=JjfrZE8AAAAJ&hl=en",
    researchGateLink: "https://www.researchgate.net/profile/Sahil-Wani",
    linkedinLink: "https://in.linkedin.com/in/sahil-wani",
  },
  {
    name: "Nitish Kumar",
    image: "./assets/images/students/Nithish.png",
    degree: "M.S. + Ph.D",
    year: "2020 - Till now",
    researchTitle: "Enhancing the interfacial characteristics of geo-materials",
    profileLink: "",
    email: "ce20s009@smail.iitm.ac.in",
    keywords: "Natural inspirations, Patterns, Pre-stressing",
    googleSchLink:
      "https://scholar.google.com/citations?user=zW5E5J4AAAAJ&hl=en",
    researchGateLink: "https://www.researchgate.net/profile/Nitish_Kumar148",
    linkedinLink: "",
  },
  {
    name: "Mahima S Rao",
    image: "./assets/images/students/Mahima.JPG",
    degree: "Ph.D.",
    year: "2022 - Till now",
    researchTitle: "Methane extraction by carbon dioxide sequestration",
    profileLink: "https://sites.google.com/view/mahimasrao/home",
    email: "ce22d009@smail.iitm.ac.in | 5mahimasrao5@gmail.com",
    keywords: "Gas hydrates, Geomechanics, Characterisation",
    googleSchLink:
      "https://scholar.google.com/citations?user=U9g7qmEAAAAJ&hl=en&oi=ao",
    researchGateLink: "https://www.researchgate.net/profile/Mahima-Rao-2",
    linkedinLink: "",
  },
];

//Funtion to display student profiles
function displayProfiles() {
  const container = document.getElementById("profiles-container");
  const template = document.getElementById("profile-template");

  profiles.forEach((profile) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".std-name").textContent = profile.name;
    clone.querySelector(".std-degree").textContent = profile.degree;
    clone.querySelector(".std-year").textContent = profile.year;
    clone.querySelector(".std-research-title").textContent =
      profile.researchTitle;
    clone.querySelector(".std-profile-link").href = profile.profileLink;
    clone.querySelector(".std-email").textContent = profile.email;
    clone.querySelector(".std-keywords").textContent = profile.keywords;
    clone.querySelector("img").src = profile.image;
    clone.querySelector(".google-scholoar").href = profile.googleSchLink;
    clone.querySelector(".research-gate").href = profile.researchGateLink;
    clone.querySelector(".linkedin").href = profile.linkedinLink;

    container.appendChild(clone);
  });
}

window.onload = displayProfiles;
