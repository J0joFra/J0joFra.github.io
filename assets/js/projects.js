document.addEventListener('DOMContentLoaded', function () {
    const projects = [
         {
            id: 1,
            title: "Kickstarter Projects",
            image: "assets/images/dashboard1.png",
            description: "**Kickstarter Projects** 🚀\n\nKickstarter è una piattaforma di crowdfunding progettata per aiutare i creatori a trasformare le loro idee in realtà, connettendoli a sostenitori in tutto il mondo.\n\n**Caratteristiche principali:**\n- Analisi dettagliata dei progetti, inclusi obiettivi, finanziamenti e tassi di successo.\n- Colonne chiave come:\n  - **usd_pledged**: importo finanziato in USD (conversione effettuata da Kickstarter).\n  - **usd_pledged_real** e **usd_goal_real**: conversioni accurate basate sull'API Fixer.io.\n\n**Strumenti utilizzati:**\n- Power BI 📊\n\n**Fonte dati:**\n- [Kaggle Dataset - Kickstarter Projects](https://www.kaggle.com/datasets/kemical/kickstarter-projects)\n\n💡 Questo progetto è un'eccellente risorsa per esplorare le tendenze del crowdfunding e analizzare le performance dei progetti su Kickstarter.",
        },
        {
            id: 2,
             title: "Project Title 2",
            image: "assets/images/dashboard2.gif",
            description: "A brief description of the project. Tools and tech used: R, SQL.",
        },
        {
            id: 3,
             title: "Project Title 3",
            image: "assets/images/dashboard3.png",
            description: "A brief description of the project. Tools and tech used: Python, scikit-learn, Tableau.",
        },
        {
            id: 4,
             title: "Project Title 4",
            image: "assets/images/dashboard4.gif",
            description: "A brief description of the project. Tools and tech used: Python, pandas, matplotlib.",
        },
        {
            id: 5,
             title: "Project Title 5",
             image: "assets/images/dashboard5.png",
            description: "A brief description of the project. Tools and tech used: R, SQL.",
        },
          {
            id: 6,
            title: "Project Title 6",
            image: "assets/images/dashboard6.gif",
            description: "A brief description of the project. Tools and tech used: Python, scikit-learn, Tableau.",
        }
    ];
    const projectButtons = document.querySelectorAll(".view-project-btn");
    const modal = document.getElementById("projectModal");
    const modalImage = document.querySelector(".modal-img");
    const modalDescription = document.querySelector(".modal-description");

     projectButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
         const projectId = parseInt(e.target.closest(".project").dataset.projectId);
            const project = projects.find(proj => proj.id === projectId);
            if (project) {
              modalImage.src = project.image;
              modalDescription.innerHTML = project.description;
              //modal.style.display = "block"; // Removed this
              modal.classList.add('show'); // Added this to actually show the modal by adding the class
            }
        });
    });
});

function closeModal() {
    const modal = document.getElementById("projectModal");
   // modal.style.display = "none"; // Removed this
   modal.classList.remove('show'); // Added this to remove the class and hide the modal
}

 window.onclick = function(event) {
      const modal = document.getElementById("projectModal");
    if (event.target == modal) {
      // modal.style.display = "none"; // Removed this
      modal.classList.remove('show') // Added this to remove the class and hide the modal
    }
  }