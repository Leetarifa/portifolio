const projetos = [
  {
    title: "Lastrear Imóvel",
    disc: "Plataforma mobile para centralização de leads e otimização da análise de crédito.",
    descricao: "Lastrear Imóvel é uma plataforma mobile desenvolvida para empresas do setor imobiliário",
    techUtilizadas: ["React", "Node.js", "MongoDB", "JavaScript"],
    imagemPrincipal: "assets/celular.jpg",
    link: {
      front: "https://github.com/Melancia-Salgada/PI5_website",
      back: "https://github.com/Melancia-Salgada/aprovafacil",
      mobile: "https://github.com/Melancia-Salgada/lastrear-imovel"
    }
  },
  {
    title: "EasyPsi",
    disc: "Sistema de gerenciamento de pacientes e controle financeiro para psicólogos.",
    descricao: "EasyPsi é uma plataforma de gestão para psicólogos que trabalham online",
    techUtilizadas: ["React", "FastAPI", "MongoDB", "JavaScript", "Google Agenda API"],
    imagemPrincipal: "assets/home.png",
    link: {
      front: "https://github.com/Melancia-Salgada/psico-frontend",
      back: "https://github.com/Melancia-Salgada/psico-backend"
    }
  },
  {
    title: "InkDash",
    disc: "Aplicação React para gerenciamento de estúdios de tatuagem.",
    descricao: "InkDash inclui login, dashboard, controle de clientes e agendamentos.",
    techUtilizadas: ["React", "JavaScript", "Axios", "React Router DOM"],
    imagemPrincipal: "assets/dashboard.jpg",
    link: {
      front: "https://github.com/TechWeavers/tattoo-management-react",
      back: "https://github.com/TechWeavers/PI-StreetWise-ERP-3Semestre"
    }
  },
  {
    title: "Tattoo Service Node.js",
    disc: "Sistema de gerenciamento para estúdios de tatuagem em Node.js.",
    descricao: "Projeto inicial desenvolvido para a Streetwise.",
    techUtilizadas: ["Node.js", "Express", "Sequelize", "MySQL"],
    imagemPrincipal: "assets/agenda.jpg",
    link: {
      front: "https://github.com/TechWeavers/tattoo-service-nodejs",
      back: "https://github.com/TechWeavers/tattooManagement"
    }
  },
  {
    title: "Odara English School",
    disc: "Website responsivo para escola de inglês com abordagem afrocentrada.",
    descricao: "Site moderno e responsivo destacando cursos, professores e horários.",
    techUtilizadas: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imagemPrincipal: "assets/odara.jpg",
    link: {
      front: "https://github.com/turtoga/OdaraEnglishSchool"
    }
  }
];

const container = document.getElementById("projetos-container");

projetos.forEach((p, index) => {
  const div = document.createElement("div");
  div.className = "projeto project-card";
  div.setAttribute("tabindex", "0");
  div.setAttribute("role", "button");
  div.setAttribute("aria-pressed", "false");
  div.dataset.title = p.title;
  div.dataset.description = `${p.disc}\n\n${p.descricao}\n\nTecnologias: ${p.techUtilizadas.join(", ")}`;
  div.dataset.image = p.imagemPrincipal;

  div.innerHTML = `
    <img src="${p.imagemPrincipal}" alt="${p.title}" />
    <h3>${p.title}</h3>
    <p><strong>${p.disc}</strong></p>
    <p>${p.descricao}</p>
    <p><strong>Tecnologias:</strong> ${p.techUtilizadas.join(", ")}</p>
    <p><strong>Links:</strong>
      ${p.link.front ? `<a href="${p.link.front}" target="_blank">Frontend</a>` : ""}
      ${p.link.back ? ` | <a href="${p.link.back}" target="_blank">Backend</a>` : ""}
      ${p.link.mobile ? ` | <a href="${p.link.mobile}" target="_blank">Mobile</a>` : ""}
    </p>
  `;
  container.appendChild(div);
});

// Modal logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalImage = document.getElementById('modalImage');
const modalCloseBtn = modal.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');

let currentIndex = 0;

function openModal(index) {
  const card = projectCards[index];
  modalTitle.textContent = card.dataset.title;
  modalDesc.textContent = card.dataset.description;
  modalImage.src = card.dataset.image;
  modalImage.alt = card.dataset.title;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  currentIndex = index;
  projectCards.forEach((c, i) => c.setAttribute('aria-pressed', i === index));
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  projectCards.forEach(c => c.setAttribute('aria-pressed', 'false'));
}

projectCards.forEach((card, index) => {
  card.addEventListener('click', () => openModal(index));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(index);
    }
  });
});

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});