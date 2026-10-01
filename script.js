// Portfolio Interactive JavaScript - Sukhmanpreet Kaur

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSmoothScroll();
  initProjectFilters();
  initModals();
  initClipboard();
  initContactForm();
  initCounterAnimations();
});

/* Theme Toggle (Dark/Light) */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.className = 'fas fa-sun text-yellow-400';
  } else {
    document.body.classList.remove('light-mode');
    if (themeIcon) themeIcon.className = 'fas fa-moon text-cyan-400';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      
      if (themeIcon) {
        themeIcon.className = isLight ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-cyan-400';
      }
      showToast(isLight ? 'Light theme activated' : 'Dark theme activated');
    });
  }
}

/* Mobile Navigation Menu */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* Smooth Scrolling */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* Project Category Filtering */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/30');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });

      // Add active state to clicked button
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      btn.classList.add('bg-cyan-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/30');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* Modal Popup System */
const modalData = {
  drowsiness: {
    title: "AI-Based Driver Drowsiness Detection System",
    subtitle: "Real-time Computer Vision & Machine Learning Driver Safety Protocol",
    period: "Jan 2026 – Apr 2026",
    role: "Lead ML & Computer Vision Engineer",
    tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "XGBoost", "LightGBM", "Tkinter", "Pygame"],
    github: "https://github.com/sukhman01-ctrl/driver_drowsiness_system",
    details: `
      <h4 class="text-lg font-bold text-cyan-400 mb-2">Technical System Architecture</h4>
      <p class="text-slate-300 mb-4 text-sm leading-relaxed">
        Engineered an end-to-end real-time driver monitoring solution designed to prevent fatigue-related road accidents using facial landmark tracking and ensemble machine learning.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <h5 class="font-semibold text-purple-400 text-sm mb-1">Feature Extraction</h5>
          <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
            <li><strong>Eye Aspect Ratio (EAR):</strong> Calculates eye closure duration.</li>
            <li><strong>Mouth Aspect Ratio (MAR):</strong> Detects continuous yawning patterns.</li>
            <li><strong>Head Pose Estimation:</strong> MediaPipe 3D facial mesh for nod detection.</li>
          </ul>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <h5 class="font-semibold text-emerald-400 text-sm mb-1">Performance Benchmarks</h5>
          <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
            <li><strong>XGBoost Model Accuracy:</strong> 94.6%</li>
            <li><strong>Real-Time Execution:</strong> 30–35 FPS on standard webcams</li>
            <li><strong>Models Evaluated:</strong> Logistic Regression, SVM, Random Forest, XGBoost</li>
          </ul>
        </div>
      </div>

      <h4 class="text-lg font-bold text-cyan-400 mb-2">Interactive Wake-Up Protocol</h4>
      <p class="text-slate-300 mb-3 text-sm leading-relaxed">
        Unlike passive alarm systems, this system triggers a active verification challenge before system reset:
      </p>
      <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1 mb-4">
        <li><strong>Acoustic Alert:</strong> Pygame audio alert at escalating frequencies.</li>
        <li><strong>Blink Pattern Test:</strong> Requires double-blink sequence within 3 seconds.</li>
        <li><strong>Head Movement Exercise:</strong> Left/Right head turn verification via landmark tracking.</li>
        <li><strong>On-Screen Reaction Test:</strong> Tkinter GUI test to confirm active motor response.</li>
      </ol>
    `
  },
  aihealth: {
    title: "AIHEALTH – AI-Powered Health Tracker",
    subtitle: "Full-Stack MERN & Google Gemini 1.5 Flash Health Assistant Platform",
    period: "Feb 2026 – Mar 2026",
    role: "Full-Stack & AI Integration Developer",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Google Gemini 1.5 Flash API", "JWT", "Bcrypt.js"],
    github: "https://github.com/sukhman01-ctrl/AIHEALTH",
    details: `
      <h4 class="text-lg font-bold text-cyan-400 mb-2">Overview & Core Value</h4>
      <p class="text-slate-300 mb-4 text-sm leading-relaxed">
        AIHEALTH is a personalized full-stack healthcare ecosystem designed to combine real-time biometric tracking with generative AI health coaching.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <h5 class="font-semibold text-cyan-400 text-sm mb-1">Gemini AI Integration</h5>
          <p class="text-xs text-slate-300 leading-relaxed">
            Connected to <strong>Google Gemini 1.5 Flash API</strong> with prompt engineering to deliver context-aware diet plans, fitness regimens, mental wellness tips, and risk assessments.
          </p>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <h5 class="font-semibold text-purple-400 text-sm mb-1">Security & Auth</h5>
          <p class="text-xs text-slate-300 leading-relaxed">
            Robust security layer built using JSON Web Tokens (JWT) for stateless session handling and Bcrypt.js for salt-hashed password protection.
          </p>
        </div>
      </div>

      <h4 class="text-lg font-bold text-cyan-400 mb-2">Interactive Dashboard Features</h4>
      <ul class="list-disc list-inside text-xs text-slate-300 space-y-1 mb-4">
        <li><strong>Vitals Tracking:</strong> Monitor heart rate, sleep cycles, activity levels, and daily mood scores.</li>
        <li><strong>Dynamic Risk Assessment:</strong> Highlights potential health risks based on user trends.</li>
        <li><strong>RESTful API Architecture:</strong> Clean separation between React frontend and Express middleware.</li>
      </ul>
    `
  },
  ecommerce: {
    title: "E-Commerce Sales Analytics Dashboard",
    subtitle: "End-to-End Business Intelligence & DAX Analytics",
    period: "June 2026 – July 2026",
    role: "Data Analyst & Power BI Specialist",
    tech: ["Microsoft Power BI", "Microsoft Excel", "DAX", "Data Cleaning", "Data Visualization", "Business Analytics"],
    github: "",
    details: `
      <h4 class="text-lg font-bold text-cyan-400 mb-2">Project Overview</h4>
      <p class="text-slate-300 mb-4 text-sm leading-relaxed">
        Comprehensive business intelligence solution created in Power BI to analyze over 5,000 retail e-commerce transactions, identifying revenue drivers, profit margins, and inventory performance.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
          <span class="block text-2xl font-bold text-emerald-400 font-heading">5,000+</span>
          <span class="text-xs text-slate-400">Transactions Analyzed</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
          <span class="block text-2xl font-bold text-cyan-400 font-heading">DAX</span>
          <span class="text-xs text-slate-400">Calculated Metrics</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
          <span class="block text-2xl font-bold text-purple-400 font-heading">MoM / QoQ</span>
          <span class="text-xs text-slate-400">Trend Insights</span>
        </div>
      </div>

      <h4 class="text-lg font-bold text-cyan-400 mb-2">Key Business Insights Generated</h4>
      <ul class="list-disc list-inside text-xs text-slate-300 space-y-1 mb-4">
        <li><strong>Profitability & Discount Impact:</strong> Discovered high-discount thresholds that eroded product profit margins.</li>
        <li><strong>Payment Method Breakdown:</strong> Identified customer preferences across digital wallets, credit, and COD.</li>
        <li><strong>Category Performance:</strong> Formulated cross-selling recommendations based on top-performing item clusters.</li>
      </ul>
    `
  }
};

function initModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-project');
      const data = modalData[projectKey];

      if (data && modal && modalBody) {
        modalBody.innerHTML = `
          <div class="mb-4 border-b border-slate-700 pb-4">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 class="text-2xl font-bold text-white font-heading">${data.title}</h3>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">${data.period}</span>
            </div>
            <p class="text-sm text-cyan-400/90 font-medium mb-2">${data.subtitle}</p>
            <p class="text-xs text-slate-400"><strong>Role:</strong> ${data.role}</p>
            
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${data.tech.map(t => `<span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${t}</span>`).join('')}
            </div>
          </div>
          
          <div>${data.details}</div>

          ${data.github ? `
            <div class="mt-6 pt-4 border-t border-slate-700 flex justify-end">
              <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition">
                <i class="fab fa-github"></i> View GitHub Repository
              </a>
            </div>
          ` : ''}
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

/* Clipboard Copy Utility */
function initClipboard() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(err => {
          showToast('Failed to copy text');
        });
      }
    });
  });
}

/* Contact Form Simulation */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }
}

/* Animated Stats Counter */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter-val');
  const speed = 200;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
          const count = +counter.innerText.replace('%', '').replace('+', '');
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc) + (counter.getAttribute('data-suffix') || '');
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target + (counter.getAttribute('data-suffix') || '');
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* Toast Notifications */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-cyan-500/40 shadow-xl text-sm flex items-center gap-2 transform translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle text-cyan-400"></i> <span>${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}
