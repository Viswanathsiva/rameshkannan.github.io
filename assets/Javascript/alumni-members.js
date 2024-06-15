// Array of Alumni profile objects
const profiles = [
  {
    name: "Saikiran Naikoti",
    image: "SaiKiran.jpg",
    degree: "M. Tech.",
    year: "2022 - 2024",
    thesisTitle:
      "Transition of cavity to finger during fluid injection through granular medium",
    thesisLink: "",
    email: "naikotisaikiran22@gmail.com",
    affiliation: "Advanced Structural Engineering Consultants",
  },
  {
    name: "Megha S Narayanan",
    image: "Megha.jfif",
    degree: "M. Tech.",
    year: "2021 - 2023",
    thesisTitle:
      "Numerical modelling of soil - coir geotextile interaction during pullout loading",
    thesisLink: "",
    email: "megha19898@gmail.com",
    affiliation: "Hamburg University of Technology, Germany",
  },
  {
    name: "Prakash Badu",
    image: "Prakash.jpg",
    degree: "M. Tech.",
    year: "2021 - 2023",
    thesisTitle:
      "Micromechanics of aggregate-rubber interactions during simple shear - A DEM study",
    thesisLink: "",
    email: "prakash.badu123@gmail.com",
    affiliation: "Montana State University, USA",
  },
  {
    name: "Rajeev Ranjan Kumar",
    image: "Rajeev.png",
    degree: "M. Tech.",
    year: "2021 - 2023",
    thesisTitle: "A Simplified Hyperbolic model for gas hydrate sediments",
    thesisLink: "",
    email: "rajeev.kumar.14c@gmail.com",
    affiliation: "Prof.VS.Raju Consultants",
  },
  {
    name: "Shabna Thasneem",
    image: "Shabna_2022.jpg",
    degree: "M. Tech.",
    year: "2020 - 2022",
    thesisTitle:
      "Numerical modelling of 3D geo-reinforcment to quantify interfacial strength characteristics",
    thesisLink: "",
    email: "shabnathasneem11@gmail.com",
    affiliation: "Larsen & Toubro Construction",
  },
  {
    name: "Rahul Ramachandran",
    image: "Rahul_2022.jpg",
    degree: "M. Tech.",
    year: "2020 - 2022",
    thesisTitle:
      "Evolution of voids and constrictions during shearing granular materials",
    thesisLink: "",
    email: "ce17b124@smail.iitm.ac.in",
    affiliation: "",
  },
  {
    name: "Neeraj Pulaganti",
    image: "Neeraj_2021.png",
    degree: "M. Tech.",
    year: "2019 - 2021",
    thesisTitle:
      "Quantification of constriction size distribution in porous media considering the effect of gradation and packing",
    thesisLink: "",
    email: "neerajpulaganti141@gmail.com",
    affiliation: "Bauer Engineering India Private Limited",
  },
  {
    name: "Selvakumar N",
    image: "Selva_2020.png",
    degree: "M. Tech.",
    year: "2018 - 2020",
    thesisTitle:
      "Particle migration studies of bentonite suspension through granular soils",
    thesisLink: "",
    email: "selvakumar0410@gmail.com",
    affiliation: "Oil and Natural Gas Corporation (ONGC)",
  },
  {
    name: "Neeraj Keserwani",
    image: "Neeraj_2020.png",
    degree: "M. Tech.",
    year: "2018 - 2020",
    thesisTitle:
      "Numerical analysis to determine pile load capacity for construction of Regional Rapid Transit System (RRTS) in NCR",
    thesisLink: "",
    email: "neerajkeserwani78@gmail.com",
    affiliation: "Rail India Technical and Economic Service (RITES)",
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
    clone.querySelector(".std-thesis-title").textContent = profile.thesisTitle;
    clone.querySelector(".std-thesis-link").href = profile.thesisLink;
    clone.querySelector(".std-email").textContent = profile.email;
    clone.querySelector(".std-affiliation").textContent = profile.affiliation;
    clone.querySelector("img").src =
      "../assets/images/students/alumni/" + profile.image;

    container.appendChild(clone);
  });
}

window.onload = displayProfiles;
