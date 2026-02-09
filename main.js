// ===== INITIAL DATA =====
let todos = [
    { id: 1, text: 'Complete security audit', completed: false },
    { id: 2, text: 'Update portfolio projects', completed: false },
    { id: 3, text: 'Write blog post on XSS', completed: true }
];

let resources = {
    learning: [
        { id: 1, title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { id: 2, title: 'HackTheBox', url: 'https://www.hackthebox.com/' },
        { id: 3, title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security' }
    ],
    tools: [
        { id: 4, title: 'Burp Suite', url: 'https://portswigger.net/burp' },
        { id: 5, title: 'Metasploit', url: 'https://www.metasploit.com/' },
        { id: 6, title: 'Wireshark', url: 'https://www.wireshark.org/' }
    ],
    documentation: [
        { id: 7, title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
        { id: 8, title: 'Python Docs', url: 'https://docs.python.org/' },
        { id: 9, title: 'React Docs', url: 'https://react.dev/' }
    ],
    community: [
        { id: 10, title: 'GitHub', url: 'https://github.com/' },
        { id: 11, title: 'Stack Overflow', url: 'https://stackoverflow.com/' },
        { id: 12, title: 'Reddit /r/netsec', url: 'https://reddit.com/r/netsec' }
    ]
};

const newsData = [
    {
        id: 1,
        category: 'security',
        title: 'Critical Zero-Day Found in Apache Log4j',
        description: 'A severe vulnerability affecting millions of Java applications has been discovered...',
        date: '2025-02-08',
        source: 'SecurityWeek'
    },
    {
        id: 2,
        category: 'tech',
        title: 'AI Model GPT-5 Announced by OpenAI',
        description: 'OpenAI unveils next-generation language model with improved reasoning capabilities...',
        date: '2025-02-07',
        source: 'TechCrunch'
    },
    {
        id: 3,
        category: 'security',
        title: 'New Ransomware Campaign Targets Healthcare',
        description: 'Cybersecurity researchers have identified a sophisticated ransomware operation...',
        date: '2025-02-06',
        source: 'BleepingComputer'
    },
    {
        id: 4,
        category: 'tech',
        title: 'Quantum Computing Breakthrough Achieved',
        description: 'Scientists demonstrate practical quantum error correction at scale...',
        date: '2025-02-05',
        source: 'Nature'
    }
];

const projectsData = [
    {
        id: 1,
        title: 'SecureAuth Platform',
        description: 'Multi-factor authentication system with biometric integration and zero-knowledge proof implementation.',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        status: 'Production',
        github: 'https://github.com/username/secureauth'
    },
    {
        id: 2,
        title: 'VulnScanner Pro',
        description: 'Automated vulnerability scanner with machine learning-based exploit detection and reporting.',
        tech: ['Go', 'TensorFlow', 'MongoDB', 'React', 'GraphQL'],
        status: 'Beta',
        github: 'https://github.com/username/vulnscanner'
    },
    {
        id: 3,
        title: 'CryptoComm',
        description: 'End-to-end encrypted messaging application with perfect forward secrecy.',
        tech: ['Rust', 'WebRTC', 'Signal Protocol', 'React Native'],
        status: 'Development',
        github: 'https://github.com/username/cryptocomm'
    },
    {
        id: 4,
        title: 'ThreatIntel Dashboard',
        description: 'Real-time threat intelligence aggregation and visualization platform.',
        tech: ['Node.js', 'Elasticsearch', 'Kibana', 'Vue.js', 'Socket.io'],
        status: 'Production',
        github: 'https://github.com/username/threatintel'
    }
];

const blogPosts = [
    {
        id: 1,
        title: 'Understanding SQL Injection: From Basics to Advanced',
        excerpt: 'A comprehensive guide to SQL injection vulnerabilities, exploitation techniques, and prevention strategies...',
        category: 'security',
        date: '2025-02-01',
        tags: ['SQL', 'Web Security', 'OWASP']
    },
    {
        id: 2,
        title: 'Building Secure APIs with JWT Authentication',
        excerpt: 'Learn how to implement robust JWT-based authentication in your REST APIs with best practices...',
        category: 'development',
        date: '2025-01-28',
        tags: ['API', 'JWT', 'Security']
    },
    {
        id: 3,
        title: 'Reverse Engineering Malware: A Practical Approach',
        excerpt: 'Step-by-step tutorial on analyzing malicious software using IDA Pro and dynamic analysis tools...',
        category: 'tutorial',
        date: '2025-01-25',
        tags: ['Malware', 'Reverse Engineering', 'IDA Pro']
    }
];

const careerData = [
    {
        id: 1,
        period: '2024 - Present',
        title: 'Senior Security Researcher',
        company: 'CyberSec Labs',
        description: 'Leading advanced threat research and penetration testing engagements for Fortune 500 clients.',
        achievements: [
            'Discovered 5 critical vulnerabilities in major software platforms',
            'Led red team operations for 20+ enterprises',
            'Published research on novel attack vectors'
        ]
    },
    {
        id: 2,
        period: '2022 - 2024',
        title: 'Security Engineer',
        company: 'TechGuard Solutions',
        description: 'Developed security solutions and conducted vulnerability assessments.',
        achievements: [
            'Built automated security scanning pipeline',
            'Reduced incident response time by 60%',
            'Trained 50+ developers on secure coding'
        ]
    },
    {
        id: 3,
        period: '2020 - 2022',
        title: 'Junior Security Analyst',
        company: 'SecureNet Corp',
        description: 'Performed security monitoring and incident response.',
        achievements: [
            'Analyzed 1000+ security events monthly',
            'Implemented SIEM correlation rules',
            'Achieved CEH and OSCP certifications'
        ]
    }
];

const labServices = [
    {
        id: 1,
        title: 'AI-Powered Phishing Detector',
        description: 'Machine learning model that analyzes emails and websites for phishing indicators.',
        status: 'testing',
        tech: ['Python', 'TensorFlow', 'NLP'],
        uptime: '87%'
    },
    {
        id: 2,
        title: 'Blockchain Audit Tool',
        description: 'Smart contract vulnerability scanner for Ethereum and Solana.',
        status: 'stable',
        tech: ['Solidity', 'Rust', 'Web3.js'],
        uptime: '99%'
    },
    {
        id: 3,
        title: 'Network Traffic Analyzer',
        description: 'Real-time network packet analysis with anomaly detection.',
        status: 'unstable',
        tech: ['Go', 'Wireshark', 'ML'],
        uptime: '72%'
    }
];

// ===== CIRCUIT BACKGROUND ANIMATION =====
const canvas = document.getElementById('circuit-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class CircuitNode {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

const nodes = Array.from({ length: 50 }, () => new CircuitNode());

function animateCircuit() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / 150})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.stroke();
            }
        });
    });

    // Update and draw nodes
    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    requestAnimationFrame(animateCircuit);
}

animateCircuit();

// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');

        // Update active states
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });
    });
});

// ===== CURRENT TIME =====
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

// ===== TODO FUNCTIONALITY =====
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = todos.map(todo => `
        <div class="todo-item">
            <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" 
                 onclick="toggleTodo(${todo.id})">
                ${todo.completed ? '✓' : ''}
            </div>
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="todo-delete" onclick="deleteTodo(${todo.id})">×</button>
        </div>
    `).join('');
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

document.getElementById('addTodoBtn').addEventListener('click', () => {
    document.getElementById('todoModal').classList.add('active');
});

document.getElementById('saveTodoBtn').addEventListener('click', () => {
    const input = document.getElementById('todoInput');
    if (input.value.trim()) {
        todos.push({
            id: Date.now(),
            text: input.value.trim(),
            completed: false
        });
        renderTodos();
        input.value = '';
        document.getElementById('todoModal').classList.remove('active');
    }
});

// ===== RECENT POSTS =====
function renderRecentPosts() {
    const recentPostsDiv = document.getElementById('recentPosts');
    const recentPosts = blogPosts.slice(0, 3);
    
    recentPostsDiv.innerHTML = recentPosts.map(post => `
        <div class="post-item">
            <div class="post-title">${post.title}</div>
            <div class="post-meta">${post.date} • ${post.category}</div>
        </div>
    `).join('');
}

// ===== NEWS FEED =====
let currentFilter = 'all';

function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    const filtered = currentFilter === 'all' 
        ? newsData 
        : newsData.filter(n => n.category === currentFilter);

    newsGrid.innerHTML = filtered.map(news => `
        <div class="news-item">
            <span class="news-badge">${news.category.toUpperCase()}</span>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-description">${news.description}</p>
            <div class="news-meta">${news.date} • ${news.source}</div>
        </div>
    `).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderNews();
    });
});

document.getElementById('refreshNews').addEventListener('click', () => {
    const btn = document.getElementById('refreshNews');
    btn.style.transform = 'rotate(360deg)';
    btn.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
        btn.style.transform = 'rotate(0deg)';
        renderNews();
    }, 500);
});

// ===== CAREER TIMELINE =====
function renderTimeline() {
    const timelineView = document.getElementById('timelineView');
    timelineView.innerHTML = `
        <div class="timeline">
            ${careerData.map(career => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-date">${career.period}</div>
                        <h3 class="timeline-title">${career.title}</h3>
                        <h4 style="color: var(--text-secondary); margin-bottom: 1rem;">${career.company}</h4>
                        <p class="timeline-description">${career.description}</p>
                        <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--text-secondary);">
                            ${career.achievements.map(a => `<li style="margin-bottom: 0.5rem;">${a}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderDetailedResume() {
    const detailedView = document.getElementById('detailedView');
    detailedView.innerHTML = `
        <div class="hud-panel">
            <div class="panel-header">
                <span>◢ DETAILED RESUME</span>
            </div>
            <div class="panel-body" style="line-height: 1.8;">
                <h2 style="margin-bottom: 2rem; color: var(--primary-cyan);">PROFESSIONAL EXPERIENCE</h2>
                ${careerData.map(career => `
                    <div style="margin-bottom: 3rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <h3 style="color: var(--text-primary);">${career.title}</h3>
                            <span style="color: var(--text-dim);">${career.period}</span>
                        </div>
                        <h4 style="color: var(--primary-blue); margin-bottom: 1rem;">${career.company}</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">${career.description}</p>
                        <div style="margin-top: 1rem;">
                            <strong style="color: var(--primary-cyan);">Key Achievements:</strong>
                            <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: var(--text-secondary);">
                                ${career.achievements.map(a => `<li style="margin-bottom: 0.5rem;">${a}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
                
                <h2 style="margin: 3rem 0 2rem; color: var(--primary-cyan);">SKILLS</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div>
                        <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Security</h4>
                        <p style="color: var(--text-secondary);">Penetration Testing, Vulnerability Assessment, Threat Intelligence, Incident Response</p>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Programming</h4>
                        <p style="color: var(--text-secondary);">Python, Go, Rust, JavaScript, C++</p>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Tools</h4>
                        <p style="color: var(--text-secondary);">Burp Suite, Metasploit, IDA Pro, Wireshark, Docker, Kubernetes</p>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Certifications</h4>
                        <p style="color: var(--text-secondary);">OSCP, CEH, CISSP, GPEN</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.querySelectorAll('.career-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.career-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const view = btn.getAttribute('data-view');
        document.querySelectorAll('.career-view').forEach(v => v.classList.remove('active'));
        document.getElementById(`${view}View`).classList.add('active');
    });
});

document.getElementById('downloadResume').addEventListener('click', () => {
    alert('Resume download feature - Connect to your actual PDF file');
});

// ===== RESOURCES =====
function renderResources() {
    const container = document.getElementById('resourceCategories');
    
    container.innerHTML = Object.keys(resources).map(category => `
        <div class="category-section">
            <div class="category-header">
                <span class="category-icon">◈</span>
                <h2 class="category-title">${category.toUpperCase()}</h2>
            </div>
            <div class="resource-list">
                ${resources[category].map(resource => `
                    <div class="resource-item">
                        <a href="${resource.url}" target="_blank" class="resource-link">
                            ${resource.title}
                        </a>
                        <button class="resource-delete" onclick="deleteResource(${resource.id})">×</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function deleteResource(id) {
    Object.keys(resources).forEach(category => {
        resources[category] = resources[category].filter(r => r.id !== id);
    });
    renderResources();
}

document.getElementById('addResourceBtn').addEventListener('click', () => {
    document.getElementById('resourceModal').classList.add('active');
});

document.getElementById('saveResourceBtn').addEventListener('click', () => {
    const title = document.getElementById('resourceTitle').value.trim();
    const url = document.getElementById('resourceUrl').value.trim();
    const category = document.getElementById('resourceCategory').value;
    
    if (title && url) {
        resources[category].push({
            id: Date.now(),
            title,
            url
        });
        renderResources();
        
        document.getElementById('resourceTitle').value = '';
        document.getElementById('resourceUrl').value = '';
        document.getElementById('resourceModal').classList.remove('active');
    }
});

document.getElementById('resourceSearch').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.resource-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
});

// ===== PROJECTS =====
function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    
    projectGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <span class="project-badge">${project.status}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-meta" style="margin-top: 1rem;">
                <a href="${project.github}" target="_blank" style="color: var(--primary-cyan);">
                    View on GitHub →
                </a>
            </div>
        </div>
    `).join('');
}

// ===== BLOG =====
let currentCategory = 'all';

function renderBlog() {
    const blogGrid = document.getElementById('blogGrid');
    const filtered = currentCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);
    
    blogGrid.innerHTML = filtered.map(post => `
        <div class="blog-post">
            <h3 class="blog-title">${post.title}</h3>
            <div class="news-meta">${post.date} • ${post.category}</div>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="tech-stack">
                ${post.tags.map(tag => `<span class="tech-tag">#${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

document.getElementById('blogCategory').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    renderBlog();
});

document.getElementById('blogSearch').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.blog-post').forEach(post => {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// ===== LAB SERVICES =====
function renderLab() {
    const labGrid = document.getElementById('labGrid');
    
    labGrid.innerHTML = labServices.map(service => `
        <div class="lab-service">
            <h3 class="project-title">${service.title}</h3>
            <span class="lab-status ${service.status}">${service.status.toUpperCase()}</span>
            <p class="project-description">${service.description}</p>
            <div class="tech-stack">
                ${service.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div style="margin-top: 1rem; color: var(--text-dim);">
                Uptime: <span style="color: var(--success);">${service.uptime}</span>
            </div>
        </div>
    `).join('');
}

// ===== MODAL CLOSE FUNCTIONALITY =====
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('active');
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    renderRecentPosts();
    renderNews();
    renderTimeline();
    renderDetailedResume();
    renderResources();
    renderProjects();
    renderBlog();
    renderLab();
});
