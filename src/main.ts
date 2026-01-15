interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

declare const Typed: new (element: string, options: {
  stringsElement: string;
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
}) => void;

async function loadProjects(): Promise<Project[]> {
  try {
    const response = await fetch('./data/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to load projects: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

function createProjectCard(project: Project): HTMLDivElement {
  const projectElement = document.createElement('div');
  projectElement.className = 'project-card';

  projectElement.innerHTML = `
    <div class="project-image">
      <h3>${project.title}</h3>
    </div>
    <div class="project-content">
      <p>${project.description}</p>
      <p>Technologies: ${project.technologies.join(', ')}</p>
      <div class="project-links">
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
      </div>
    </div>
  `;

  return projectElement;
}

async function renderProjects(): Promise<void> {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;

  const projects = await loadProjects();

  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });
}

function initTyped(): void {
  new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTyped();
  renderProjects();
});
