const patents = [
  {
    patentName: "123456",
    publicationLink: "new link 5",
    downloadLink: "new link 6",
  },
];

function createPatentList() {
  const ol = document.getElementById("patent-ol");

  patents.forEach((patent) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="jrnl-pub-li">${patent.patentName}</span> |
      <a class="mx-2 icon-link icon-link-hover publicationPageLink" href="${patent.publicationLink}" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-box-arrow-up-right"></i>
      </a> |
      <a class="mx-2 downloadLink" href="${patent.downloadLink}" target="_blank" rel="noopener noreferrer" download="">
        <i class="bi bi-download"></i>
      </a>
    `;
    ol.appendChild(li);
  });
}

window.onload = createPatentList;
