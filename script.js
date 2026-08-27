const studies = [
  { id: "Wen2024", title: "Auction-Based Behavior Tree Evolution for Heterogeneous Multi-Agent Systems", doi: "10.3390/app14177896", form: "Wen2024.html" },
  { id: "Scherf2023", title: "Interactively learning behavior trees from imperfect human demonstrations", doi: "10.3389/frobt.2023.1152595", form: "Scherf2023.html" },
  { id: "Iovino2023", title: "A Framework for Learning Behavior Trees in Collaborative Robotic Applications", doi: "10.1109/CASE56687.2023.10260363", form: "Iovino2023.html" },
  { id: "Pezzato2023", title: "Active Inference and Behavior Trees for Reactive Action Planning and Execution in Robotics", doi: "10.1109/TRO.2022.3226144", form: "Pezzato2023.html" },
  { id: "Verma2021", title: "Automatic generation of behavior trees for the execution of robotic manipulation tasks", doi: "10.1109/ETFA45728.2021.9613583", form: "Verma2021.html" },
  { id: "Fusaro2021", title: "Human-Aware Method to Plan Complex Cooperative and Autonomous Tasks using Behavior Trees", doi: "10.1109/HUMANOIDS47582.2021.9555683", form: "Fusaro2021.html" },
  { id: "Rovida2017", title: "Extended Behavior Trees for Quick Definition of Flexible Robotic Tasks", doi: "10.1109/IROS.2017.8206598", form: "Rovida2017.html" },
  { id: "Zhou2024", title: "LLM-BT: Performing Robotic Adaptive Tasks based on Large Language Models and Behavior Trees", doi: "10.1109/ICRA57147.2024.10610183", form: "Zhou2024.html" },
  { id: "Montague2024", title: "A Hierarchical Approach to Evolving Behaviour-Trees for Swarm Control", doi: "10.1007/978-3-031-56852-7_12", form: "Montague2024.html" },
  { id: "Ruiz2022", title: "Automating Adaptive Execution Behaviors for Robot Manipulation", doi: "10.1109/ACCESS.2022.3223995", form: "Ruiz2022.html" },
  { id: "El2021", title: "To Resume or Not to Resume: A Behavior Tree Extension", doi: "10.23919/ACC50511.2021.9482969", form: "El2021.html" },
  { id: "Hallawa2020", title: "Evolving Instinctive Behaviour in Resource-Constrained Autonomous Agents Using Grammatical Evolution", doi: "10.1007/978-3-030-43722-0_24", form: "Hallawa2020.html" },
  { id: "Herranz2022", title: "Decentralised Negotiation for Multi-Object Collective Transport with Robot Swarms", doi: "10.1109/ICARSC55462.2022.9784801", form: "Herranz2022.html" },
  { id: "Deng2023", title: "Learning Behavior Trees by Evolution-Inspired Approaches", doi: "10.1145/3583133.3590642", form: "Deng2023.html" },
  { id: "Beherey2023", title: "Human Robot Collaborative Assembly Using Behavior Trees and Dynamic Tree Dispatching", doi: null, source: "https://ieeexplore.ieee.org/document/10363080", form: "Behery2023.html" },
  { id: "Segura-Muros2017", title: "Integration of an automated hierarchical task planner in ROS using behaviour trees", doi: "10.1109/SMC-IT.2017.11", form: "Segura2017.html" },
  { id: "Li2022", title: "Towards Adaptive Behavior Trees for Robot Task Planning", doi: "10.1109/CAC57257.2022.10055567", form: "Li2022.html" },
  { id: "Chen2024", title: "Integrating Intent Understanding and Optimal Behavior Planning for Behavior Tree Generation from Human Instructions", doi: "10.24963/ijcai.2024/755", form: "Chen2024.html" },
  { id: "Alberts2024", title: "ReBeT: Architecture-based Self-adaptation of Robotic Systems through Behavior Trees", doi: "10.1109/ACSOS61780.2024.00018", form: "Alberts2024.html" },
  { id: "Scheper2016", title: "Behavior Trees for Evolutionary Robotics", doi: "10.1162/ARTL_a_00192", form: "Scheper2016.html" },
  { id: "Abiyev2016", title: "Robot soccer control using behaviour trees and fuzzy logic", doi: "10.1016/j.procs.2016.09.430", form: "Abiyev2016.html" },
  { id: "Verdaguer-Gonzalez2025", title: "Boosting Behavior Tree Generation for Robots with Large Language Models and Genetic Programming", doi: "10.1109/SIMPAR62925.2025.10979061", form: "Verdaguer2025.html" },
  { id: "Yang2023", title: "Robot Behavior Tree Manipulation Using Language Models", doi: "10.1109/ITAIC58329.2023.10409012", form: "Yang2023.html" },
  { id: "Wu2022", title: "RBT-HCI: A Reliable Behavior Tree Planning Method with Human-Computer Interaction", doi: "10.1109/ROBIO55434.2022.10011651", form: "Wu2022.html" },
  { id: "Chen2023", title: "Co-Designing Body and Behavior via Planning-based Hierarchical Grammatical Evolution", doi: "10.1109/ICRAIC61978.2023.00026", form: "Chen2023.html" },
  { id: "Cheng2023", title: "Legs as Manipulator: Pushing Quadrupedal Agility Beyond Locomotion", doi: "10.1109/ICRA48891.2023.10161470", form: "Cheng2023.html" },
  { id: "Colledanchise2019", title: "Learning of Behavior Trees for Autonomous Agents", doi: "10.1109/TG.2018.2816806", form: "Colledanchise2018.html" },
  { id: "Wang2021", title: "Extending Behavior Trees with Market-Based Task Allocation in Dynamic Environments", doi: "10.1145/3440084.3441211", form: "Wang2020.html" },
  { id: "LeMasurier2024", title: "Reactive or Proactive? How Robots Should Explain Failures", doi: "10.1145/3610977.3634963", form: "Lemasurier2024.html" },
  { id: "Hallawa2017", title: "Instinct-Driven Dynamic Hardware Reconfiguration: Evolutionary Algorithm Optimized Compression for Autonomous Sensory Agents", doi: "10.1145/3067695.3084202", form: "Hallawa2017.html" },
  { id: "Rostamnia2025", title: "Towards Adaptable and Uncertainty-aware Behavior Trees", doi: "10.1109/RoSE66716.2025.00006", form: "Rostamnia2025.html" }
];

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const current = document.body.dataset.page;
  document.querySelectorAll(".site-nav a[data-page]").forEach((link) => {
    if (link.dataset.page === current) link.setAttribute("aria-current", "page");
  });
}

function renderStudies() {
  const target = document.querySelector("#study-rows");
  if (!target) return;

  target.innerHTML = studies.map((study, index) => {
    const form = `<a href="artifacts/author-validation/${study.form}" target="_blank" rel="noopener">Open form</a>`;
    const doi = study.doi
      ? `<a href="https://doi.org/${study.doi}" target="_blank" rel="noopener">${study.doi}</a>`
      : `<a href="${study.source}" target="_blank" rel="noopener">Publisher record</a>`;

    return `
      <tr>
        <td>${String(index + 1).padStart(2, "0")}</td>
        <td><span class="study-id">${study.id}</span></td>
        <td>${study.title}</td>
        <td>${doi}</td>
        <td>${form}</td>
      </tr>`;
  }).join("");

  const count = document.querySelector("#study-count");
  if (count) count.textContent = String(studies.length);
}

function renderAuthorForms() {
  const target = document.querySelector("#author-form-list");
  if (!target) return;

  target.innerHTML = studies.map((study) => `
    <article class="artifact-card compact">
      <span class="status">Included</span>
      <h3>${study.id}</h3>
      <p><em>${study.title}</em></p>
      <a class="file-link" href="artifacts/author-validation/${study.form}" target="_blank" rel="noopener">Open validation form</a>
    </article>
  `).join("");
}

function setYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function revealLinkedDisclosure() {
  const target = document.querySelector(window.location.hash);
  if (target instanceof HTMLDetailsElement) target.open = true;
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderStudies();
  renderAuthorForms();
  setYear();
  revealLinkedDisclosure();
});

window.addEventListener("hashchange", revealLinkedDisclosure);
