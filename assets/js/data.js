/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI",
  role: "Étudiant SIO",
  avatar: "./assets/images/my-avatar.png",
  location: "France",
  email: "tariq.laaboudi.sn@gmail.com",
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" },
    { icon: "logo-linkedin", link: "#" },
    { icon: "logo-twitter", link: "#" }
  ]
};

export const aboutData = {
  text: `<p>Étudiant SIO-SISR en 2ᵉ année, spécialisé en réseaux et passionné de hardware. Organisé, méthodique et toujours prêt à bricoler, j'aime comprendre, optimiser et résoudre les problèmes.</p>
         <p>Auteur du projet Optimize Alot et de multiples documentations techniques, je construis des solutions simples, efficaces et reproductibles. Expérience pratique en Windows, dépannage et maintenance.</p>`,
  services: [
    { title: "Développement Web", text: "Création de sites modernes et responsive.", icon: "./assets/images/icon-dev.svg" },
    { title: "Design UI/UX", text: "Maquettes et prototypage d'interfaces.", icon: "./assets/images/icon-design.svg" },
    { title: "Applications Mobiles", text: "Développement iOS et Android.", icon: "./assets/images/icon-app.svg" },
    { title: "Photographie", text: "Shooting et retouche professionnelle.", icon: "./assets/images/icon-photo.svg" }
  ]
};

export const resumeData = {
  education: [
    {
      school: "BTS SIO - SISR (Lycée Marie Curie)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2023 — 2025",
      desc: "Option Solutions d'infrastructure, systèmes et réseaux."
    },
    {
      school: "Bac Pro SN (Lycée Saint-Pierre)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2021 — 2024",
      desc: "Systèmes Numériques, mention Bien."
    }
  ],
  experience: [
    {
      title: "Stage Eursocan - Euroscan", // Titre + Entreprise fusionnés pour l'affichage
      date: "2025",
      desc: "Accueil client, dépannage PC (hardware/software) et gestion logistique."
    },
    {
      title: "Stage RPM MULTIMEDIA",
      date: "2023",
      desc: "Maintenance et réparation PC, électronique de base et support client."
    }
  ],
  skills: [
    { name: "Documentation Technique", percent: 80 }, // Noms raccourcis pour que ça rentre bien
    { name: "Hardware & Dépannage", percent: 90 },
    { name: "Admin Sys & Réseaux", percent: 60 },
    { name: "Gestion Infrastructure", percent: 50 }
  ]
};

export const portfolioData = [
  {
    title: "Documentation FOG",
    category: "Développement Web",
    image: "./assets/images/project-1.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG"
  },
  {
    title: "Documentation AD",
    category: "Applications",
    image: "./assets/images/project-2.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine"
  },
  {
    title: "Design Gamma",
    category: "Web Design",
    image: "./assets/images/project-3.svg", // Attention j'ai remis .svg (si c'est .jpg change le)
    link: "#"
  },
  {
    title: "Site Delta",
    category: "Développement Web",
    image: "./assets/images/project-4.svg", // Attention j'ai remis .svg (si c'est .jpg change le)
    link: "#"
  }
];