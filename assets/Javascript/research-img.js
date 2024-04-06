const imgContents = [
  {
    img: "./assets/images/others/failure_surface.jpg",
    name: "Failure Surface for Cohesive Frictional Materials",
  },
  {
    img: "./assets/images/others/frac.png",
    name: "Fracture Capture Simulator",
  },
  {
    img: "./assets/images/others/velocity.png",
    name: "Flow Kinematics of Granular Materials through Hopper considering Realistic Morphology",
  },
  {
    img: "./assets/images/others/Preprocessing.jfif",
    name: "CITA - Concrete Image Thresholder and Analyser",
  },
  {
    img: "./assets/images/others/zones.jfif",
    name: "Fluid Induced Cavity Expansion Model for Porous Medium",
  },
  {
    img: "./assets/images/others/Temperature.jfif",
    name: "Methane Extraction from Horizontal Wellbore in Gas-Hydrate Reservoir using THMC simulator",
  },
  {
    img: "./assets/images/others/Triaxial.jpeg",
    name: "High Pressure Temperature Gas Controlled Triaxial Apparatus",
  },
  {
    img: "./assets/images/others/sand.jfif",
    name: "3D Modelling of Soil-Geogrid Interaction",
  },
  {
    img: "./assets/images/others/termite_mound.png",
    name: "Termite Mound",
  },
];

function displayImages() {
  const container = document.getElementById("carousel-item-container");

  let slideContent = "";

  imgContents.forEach((imgContent) => {
    slideContent += `
      <div class="carousel-item" data-bs-interval="3000">
        <img src="${imgContent.img}" class="d-block" alt="" />
        <p class="text-center">${imgContent.name}</p>
      </div>`;
  });

  container.innerHTML = slideContent;
}

window.onload = displayImages;
