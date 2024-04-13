const projects = [
  {
    projectTitile:
      "Investigations on the influence of Geogrids in Bituminous Pavements",
    role: "Principal Investigator",
    sponsor: "IndInfravit Trust",
    timePeriod: "2024 - 2027",
  },
  {
    projectTitile:
      "Study of compaction mechanics of bituminous mixtures and applications in 3-D paving",
    role: "Co-Principal Investigator",
    sponsor: "Core research grant, SERB",
    timePeriod: "2024 - 2027",
  },
  {
    projectTitile:
      "Improving the performance of ballasts to support high-speed rail tracks",
    role: "Principal Investigator",
    sponsor:
      "Scheme for Promotion of Academic and Research Collaboration, MHRD",
    timePeriod: "2023 - 2025",
  },
  {
    projectTitile:
      "Optimization of coir geotextiles based on its form for low-volume rural roads",
    role: "Principal Investigator",
    sponsor: "Ministry of Road Transport and Highways of India",
    timePeriod: "2022 - 2023",
  },
  {
    projectTitile: "Subsurface mechanics and geo-energy laboratory",
    role: "Co-Principal Investigator",
    sponsor: "MHRD-IIT Madras, IoE Scheme",
    timePeriod: "2021 - 2026",
  },
  {
    projectTitile:
      "Multi-physical understanding of the mechanics of gas hydrate sediments",
    role: "Principal Investigator",
    sponsor: "New Faculty Seed Grant, IIT Madras",
    timePeriod: "2021 - 2024",
  },
  {
    projectTitile:
      "Framework for optimizing and enhancing the performance of concrete pavements using natural coir fibres (CoirCon)",
    role: "Co-Principal Investigator",
    sponsor: "Coir Board",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile:
      "Field demonstration and standardization of coir geotextiles for erosion control and pavement applications",
    role: "Co-Principal Investigator",
    sponsor: "Coir Board",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile: "Geotechnical aspects and dam design - Kalpasar dam project",
    role: "Co-Principal Investigator",
    sponsor: "National Centre for Coastal Research, MOES",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile: "Fluid injection through porous media",
    role: "Principal Investigator",
    sponsor: "Exploratory research project, IIT Madras",
    timePeriod: "2020 - 2021",
  },
  {
    projectTitile:
      "A critical understanding on the mechanics of gas hydrate sediments for sustainable long term energy extraction",
    role: "Principal Investigator",
    sponsor: "Start-up Research Grant, SERB",
    timePeriod: "2019 - 2023",
  },
  {
    projectTitile: "Particle Migration Studies in Porous Media",
    role: "Principal Investigator",
    sponsor: "New Faculty Initiation Grant, IIT Madras",
    timePeriod: "2019 - 2023",
  },
];

function createProjects() {
  const container = document.getElementById("profiles-container");
  const template = document.getElementById("profile-template");

  projects.forEach((project) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".prj-title").textContent = project.projectTitile;
    clone.querySelector(".prj-role").textContent = project.role;
    clone.querySelector(".prj-sponsor").textContent = project.sponsor;
    clone.querySelector(".prj-timePeriod").textContent = project.timePeriod;

    container.appendChild(clone);
  });
}

window.onload = createProjects;
