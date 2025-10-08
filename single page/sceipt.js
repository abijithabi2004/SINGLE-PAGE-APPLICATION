document.addEventListener('DOMContentLoaded', () => {
  const projectsData = [
    { title: "Single Page Application", description: "Dynamic and responsive SPA for seamless user experience.", link: "#" },
    { title: "Bus Tracker", description: "Real-time bus tracker with schedule monitoring.", link: "#" },
    { title: "Android UI", description: "Sleek and modern UI tailored for Android apps.", link: "#" }
  ];
  const navButtons = document.querySelectorAll('.nav-button');
  const projectsContainer = document.getElementById('projects-container');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('menu-btn');

  // Load projects
  projectsData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card bg-gray-800/70 p-6 rounded-lg shadow-md border border-gray-700 relative z-10';
    card.innerHTML = `
      <h3 class="text-white text-xl font-semibold mb-3">${p.title}</h3>
      <p class="text-gray-300 mb-4">${p.description}</p>
      <a href="${p.link}" class="text-indigo-400 hover:text-indigo-600 font-semibold">Learn More →</a>
    `;
    projectsContainer.appendChild(card);
  });

  // Section switching
  const showSection = (id) => {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    navButtons.forEach(btn => {
      btn.classList.toggle('bg-white', btn.dataset.section === id);
      btn.classList.toggle('text-black', btn.dataset.section === id);
      btn.classList.toggle('text-gray-300', btn.dataset.section !== id);
    });
    mobileMenu.classList.add('hidden'); // Close mobile menu after click
  };

  navButtons.forEach(btn => btn.addEventListener('click', () => showSection(btn.dataset.section)));

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  showSection('home');
});
