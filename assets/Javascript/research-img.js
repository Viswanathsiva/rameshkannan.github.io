const imgContents = [
  {
    img: "failure_surface.jpg",
    name: "Failure Surface for Cohesive Frictional Materials",
  },
  {
    img: "frac.png",
    name: "Fracture Capture Simulator",
  },
  {
    img: "velocity.png",
    name: "Flow Kinematics of Granular Materials through Hopper considering Realistic Morphology",
  },
  {
    img: "Preprocessing.jfif",
    name: "CITA - Concrete Image Thresholder and Analyser",
  },
  {
    img: "zones.jfif",
    name: "Fluid Induced Cavity Expansion Model for Porous Medium",
  },
  {
    img: "Temperature.jfif",
    name: "Methane Extraction from Horizontal Wellbore in Gas-Hydrate Reservoir using THMC simulator",
  },
  {
    img: "Triaxial.jpeg",
    name: "High Pressure Temperature Gas Controlled Triaxial Apparatus",
  },
  {
    img: "sand.jfif",
    name: "3D Modelling of Soil-Geogrid Interaction",
  },
  {
    img: "termite_mound.png",
    name: "Termite Mound",
  },
];

function displayImages() {
  const container = document.getElementById("carousel-item-container");

  let slideContent = "";

  imgContents.forEach((imgContent) => {
    slideContent += `
      <div class="carousel-item" data-bs-interval="2000">
        <img src="${
          "../assets/images/others/" + imgContent.img
        }" class="d-block" alt="" />
        <p class="text-center">${imgContent.name}</p>
      </div>`;
  });

  container.innerHTML = slideContent;
}

window.onload = displayImages;
