const journals = [
  {
    journalName:
      "Kumar J. S., Chaudhuri A., Detournay E., and <b>Kandasami R. K.</b> (2023) “Fluid injection-induced cavity expansion in dry porous medium” , International Journal for Numerical and Analytical Methods in Geomechanics, Vol. 48(1), pp. 104-122",
    publicationLink: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nag.3631",
    downloadLink: "",
  },
  {
    journalName: "John Doe",
    publicationLink: "new link 3",
    downloadLink: "new link 4",
  },
  {
    journalName: "Jane Smith",
    publicationLink: "new link 5",
    downloadLink: "new link 6",
  },
];

function createJournalList() {
  const ol = document.getElementById("journal-pub-ol");

  journals.forEach((journal) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="jrnl-pub-li">${journal.journalName}</span> |
      <a class="mx-2 icon-link icon-link-hover publicationPageLink" href="${journal.publicationLink}" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-box-arrow-up-right"></i>
      </a> |
      <a class="mx-2 downloadLink" href="${journal.downloadLink}" target="_blank" rel="noopener noreferrer" download="">
        <i class="bi bi-download"></i>
      </a>
    `;
    ol.appendChild(li);
  });
}

window.onload = createJournalList;
