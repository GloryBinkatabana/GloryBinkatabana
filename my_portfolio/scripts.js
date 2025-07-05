        // Global state
        let currentSection = "home";
        
        // Projects data
        const projects = [
            {
                id: "studysmart",
                title: "StudySmart Platform",
                description: "A comprehensive learning management system with automated progress tracking and personalized study recommendations.",
                objective: "To develop full-stack development skills while creating a practical solution for academic performance tracking.",
                challenge: "Creating an intuitive interface that could handle complex data relationships between users, courses, and progress metrics.",
                process: "Developed in Kotlin, this Android application provides tools for student exam preparation, with a roadmap including Agentic AI integration for dynamic and personalized study content. ",
                codeSnippet: `// Flutter widget for category selection
class CategoryButton extends StatelessWidget {
                body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CategoryButton(subject: subject, category: 'Notes', requiresSelection: true),
            CategoryButton(subject: subject, category: 'Quizzes', requiresSelection: true),
            CategoryButton(subject: subject, category: 'Exams', requiresSelection: true),
            CategoryButton(subject: subject, category: 'Past Papers', requiresSelection: true),
          ],
        ),
      ),`,
                takeaways: [
                
                    "Developed a cross-platform mobile application using Flutter and Dart, targeting both Android and iOS. ",
                     "Implemented a user-friendly interface (UI) and user experience (UX) tailored for student exam preparation. ",
                     "Gained experience in state management within a Flutter application . ",
                     "Designed and structured application logic for features like study material organization, progress tracking, or practice quizzes. "
                ],
                technologies: ["Flutter", "Dart", "python", "Androidstudio", "xml"],
                //githubUrl: "https://github.com/glory/studysmart",
                //liveUrl: "https://studysmart-demo.com"
                 status: ["Project In Progress"]
            },
            {
                id: "doxafro",
                title: "DoxaFro e-commerce Platform",
                description: "my brand's e-commerce platform showcasing African cultural products with a focus on multimedia content.",
                objective: "To create a visually appealing and culturally sensitive e-commerce platform that highlights African beauty.",
                challenge: "Ensuring fast loading times for high-quality images and videos while maintaining a smooth shoping user experience.",
                process: "Being developed using React and TypeScript, with a custom image optimization hook for efficient media handling.",
                codeSnippet: `//Dummy code snippet for checking out order tracking 
                function useOrderTracking(orderId) {
                const [orderStatus, setOrderStatus] = useState(null);`,
                takeaways: [
                    "Advanced React patterns and performance optimization techniques",
                    "Experience with multimedia content handling and optimization",
                    "Understanding of cultural sensitivity in digital design",
                    "Skills in creating engaging interactive experiences"
                ],
                technologies: ["React", "TypeScript", "Framer Motion", "wordpress"],
                githubUrl: "https://github.com/glory/doxafro"
            },
            {
                id: "MLG",
                title: "Machine Learning educational platform",
                description: " A platform for learning and practicing machine learning concepts with interactive tutorials and coding challenges.",
                objective: "To provide a comprehensive resource for understanding Machine Learning concepts, theory, mathematical foundations, and practical implementation.",
                challenge: "Bridging the gap between complex ML theory, mathematical formulas, and hands-on coding application for effective learning.",
                process: "Developed an interactive webpage combining detailed theoretical explanations (with MathJax for formulas), step-by-step calculation examples, and practical Python code snippets with direct Google Colab links for execution.",
                codeSnippet: `import pandas as pd
import numpy as np

# Create a sample DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Alice', 'David', 'Eve', 'Frank'],
    'Age': [24, 27, 22, 24, np.nan, 29, 30],
    'City': ['New York', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Miami', 'Chicago'],
    'Salary': [70000, 80000, 60000, 70000, 90000, 75000, 65000]
}
df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)
print("\n---")`,
                takeaways: [
                    "Comprehensive understanding of core ML concepts and algorithms",
                    "Application of mathematical formulas in ML contexts",
                    "Practical implementation of ML algorithms using Python libraries (Scikit-learn, TensorFlow)",
                    "Familiarity with the CRISP-DM data science workflow",
                    "Ability to interpret and evaluate ML model performance"
                ],
                technologies: ["Pandas", "TensorFlow/Keras", "NLTK (Natural Language Toolkit)", "Matplotlib", "Seaborn", "Scikit-learn", "NumPy", "Google Colab", "python"],
                githubUrl: "https://github.com/GloryBinkatabana/MachineLearning_Explained",
                liveUrl: "https://glorybinkatabana.github.io/MachineLearning_Explained/",
                status: ["Project Completed"]
            },
            {
  id: "CustomerChurn",
  title: "Machine Learning Customer Churn Prediction",
  description: "A web application predicting customer churn based on historical behavior and demographics, providing insights for retention strategies.",
  objective: "To build and deploy a machine learning model that accurately predicts customer churn, integrated into an interactive web application for business users.",
  challenge: "Integrating diverse customer data, handling imbalanced datasets, optimizing model performance for high accuracy, and deploying a scalable web application.",
  process: "Researched and pre-processed customer behavior and demographic data from public sources. Developed and fine-tuned multiple classification models (e.g., Logistic Regression, Random Forest) using cross-validation. Built an intuitive web application with Dash for real-time predictions and integrated the best-performing ML model. Deployed the application as a web service on Render for live access.",
  codeSnippet: "import pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Sample data loading (replace with your actual dataset path)\n# df = pd.read_csv('your_churn_dataset.csv')\n\n# For demonstration, let's create a dummy DataFrame\ndata = {\n    'CustomerID': range(1, 101),\n    'MonthlyCharges': [50 + i for i in range(100)],\n    'TotalCharges': [1000 + i*10 for i in range(100)],\n    'Tenure': [1 + i%70 for i in range(100)],\n    'Gender': ['Male' if i%2==0 else 'Female' for i in range(100)],\n    'Churn': [1 if i%5==0 else 0 for i in range(100)] # 1 for churn, 0 for no churn\n}\ndf = pd.DataFrame(data)\n\nprint(\"Initial DataFrame Head:\")\nprint(df.head())\n\nprint(\"\\nChurn Distribution:\")\nprint(df['Churn'].value_counts())\n\n# Example of basic preprocessing (handling missing values in TotalCharges)\ndf['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')\ndf.dropna(inplace=True)\n\nprint(\"\\nDataFrame after basic cleaning (dropna):\")\nprint(df.info())\n",
  takeaways: [
    "Experience with end-to-end Machine Learning project lifecycle.",
    "Proficiency in data cleaning, Exploratory Data Analysis (EDA), and feature engineering.",
    "Model selection, training, and hyperparameter tuning for classification tasks.",
    "Web application development using Dash (Python, HTML, CSS, JavaScript).",
    "Practical understanding of model deployment strategies (e.g., Render).",
    "Ability to analyze and interpret customer behavior for business insights."
  ],
  technologies: [
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Dash (Plotly)",
    "HTML",
    "CSS",
    "JavaScript",
    "Render (Deployment Platform)",
    "Kaggle / UCI ML Repository (Data Sources)"
  ],
  githubUrl: "https://github.com/FreeYungHammy/MLG382-Project1",
  liveUrl: "https://grade-predictor-j4yq.onrender.com/",
  status: ["Project Completed"]
},
            
            {
                id: "hydroponics",
                title: "Smart Hydroponics Kit",
                description: "IoT-enabled hydroponics system with automated monitoring and mobile app integration.",
                objective: "To explore IoT development and data collection while solving real-world agricultural challenges.",
                challenge: "Integrating hardware sensors with software systems and creating reliable data pipelines for real-time monitoring.",
                process: "Developed using Arduino for sensor management and NodeRed for an interactive dashboard.",
                codeSnippet: `# Data processing pipeline
def process_sensor_data(raw_data):
    cleaned_data = validate_and_clean(raw_data)
    
    analysis = {
        'ph_status': analyze_ph(cleaned_data['ph']),
        'nutrient_level': calculate_nutrients(cleaned_data),
        'growth_prediction': predict_growth(cleaned_data)
    }
    
    return generate_recommendations(analysis)`,
                takeaways: [
                    "Experience with IoT development and hardware-software integration",
                    "Data pipeline creation and real-time processing skills",
                    "Interactive dashboard development with NodeRed",
                    "Understanding of agricultural technology applications"
                ],
                technologies: ["Arduino", "Python", "java", "NodeRed", "IoT Sensors"],
                githubUrl: "https://github.com/GloryBinkatabana/NodeRed",
                status: ["Project Completed"]
            }
        ];
        
        // Toolkit data
        const toolkit = {
            "BI & Visualization": [
                { name: "Power BI", icon: "fas fa-chart-line" },
                { name: "Tableau", icon: "fas fa-chart-bar" },
                { name: "Excel", icon: "fas fa-file-excel" },
                { name: "Python Libraries", icon: "fab fa-python" },
                { name: "Microsoft SQL Server Management Studio", icon: "fas fa-database" },
            ],
            "Databases & Languages": [
                { name: "SQL", icon: "fas fa-database" },
                { name: "PostgreSQL", icon: "fas fa-server" },
                { name: "Python", icon: "fab fa-python" },
                { name: "JavaScript", icon: "fab fa-js-square" },
                { name: "R", icon: "fas fa-chart-area" }
            ],
            "ETL & Data Warehousing": [
                { name: "Pandas", icon: "fas fa-table" },
                { name: "Talend", icon: "fas fa-project-diagram" },
                { name: "NumPy", icon: "fas fa-calculator" },
                { name: "Oracle", icon: "fas fa-database" },
                { name: "SSIS", icon: "fas fa-exchange-alt" }
            ],
            "Cloud Platforms": [
                { name: "AWS", icon: "fab fa-aws" },
                { name: "Azure", icon: "fab fa-microsoft" },
                { name: "Google Cloud", icon: "fab fa-google" },
                { name: "Docker", icon: "fab fa-docker" }
            ]
        };
        
        // Splash screen elements
        const splashScreen = document.getElementById('splash-screen');
        const binaryRainContainer = document.querySelector('.binary-rain-container');
        const nameReveal = document.getElementById('name-reveal');
        const accessGranted = document.getElementById('access-granted');
        
        // ========================
        // NEW SPLASH SCREEN LOGIC
        // ========================
        function createBinaryLine(left) {
            const line = document.createElement('div');
            line.classList.add('binary-line');
            line.style.left = `${left}px`;
            line.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
            line.style.animationDelay = `-${Math.random() * 5}s`; // Staggered start
            line.textContent = Array.from({ length: 20 }, () => Math.round(Math.random())).join('\n');
            binaryRainContainer.appendChild(line);
            
            // Remove after animation to prevent memory leak and recreate for continuous rain
            line.addEventListener('animationiteration', () => {
                line.remove();
                createBinaryLine(left);
            });
        }
        
        function startBinaryRain() {
            const numLines = Math.floor(window.innerWidth / 20); // Adjust based on font size/line width
            for (let i = 0; i < numLines; i++) {
                createBinaryLine(i * 20); // 20px apart for each line
            }
        }
        
        function animateSplashScreen() {
            startBinaryRain();
            
            // Reveal name
            setTimeout(() => {
                nameReveal.classList.add('active');
            }, 2000); // After 2 seconds
            
            // Type "ACCESS GRANTED" and fade out splash screen
            setTimeout(() => {
                const text = '> ACCESS GRANTED';
                let i = 0;
                accessGranted.style.opacity = 1; // Make sure it's visible
                
                const typingInterval = setInterval(() => {
                    if (i < text.length) {
                        accessGranted.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        accessGranted.classList.add('flash'); // Add flash effect
                        
                        setTimeout(() => {
                            splashScreen.style.opacity = 0; // Fade out splash screen
                            setTimeout(() => {
                                splashScreen.style.display = 'none'; // Hide completely after fade
                                document.getElementById('portfolio-content').style.display = 'block';
                            }, 1000); // Wait for fade out to complete
                        }, 1000); // After flash animation
                    }
                }, 100); // Typing speed (100ms per character)
            }, 4000); // Start typing after 4 seconds
        }
        
        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize splash screen
            if (sessionStorage.getItem('skipSplash')) {
                splashScreen.style.display = 'none';
                document.getElementById('portfolio-content').style.display = 'block';
            } else {
                animateSplashScreen();
            }
            
            // Initialize navigation
            initNavigation();
            
            // Initialize projects
            renderProjects();
            
            // Initialize toolkit
            renderToolkit();
            
            // Initialize neural network
            initNeuralNetwork();
            
            // Initialize event listeners
            initEventListeners();
            
            // Initialize ETL animation
            new ETLAnimation();
        });
        
        // Navigation functions
        function initNavigation() {
            const navButtons = document.querySelectorAll('.nav-btn');
            
            navButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const section = button.getAttribute('data-section');
                    scrollToSection(section);
                });
            });
        }
        
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                
                // Update current section
                currentSection = sectionId;
                
                // Update active button
                const navButtons = document.querySelectorAll('.nav-btn');
                navButtons.forEach(button => {
                    if (button.getAttribute('data-section') === sectionId) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            }
        }
        
        // Project functions
        function renderProjects() {
            const projectsGrid = document.getElementById('projects-grid');
            
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.dataset.id = project.id;
                
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-explore">Click to explore →</div>
                `;
                
                projectCard.addEventListener('click', () => {
                    openProjectModal(project);
                });
                
                projectsGrid.appendChild(projectCard);
            });
        }
        
        function openProjectModal(project) {
            const modalContainer = document.getElementById('project-modal-container');
            
            modalContainer.innerHTML = `
                <div class="project-modal">
                    <div class="modal-content">
                    
                        <div class="modal-header">
                            <h2>${project.title}</h2>
                            <button class="close-btn">&times;</button>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Learning Objective</h3>
                            <p>${project.objective}</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>The Challenge</h3>
                            <p>${project.challenge}</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>My Process & Solution</h3>
                            <p>${project.process}</p>
                            ${project.codeSnippet ? `
                                <div class="code-snippet">
                                    <pre><code>${project.codeSnippet}</code></pre>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="modal-section">
                            <h3>Key Takeaways & Skills Demonstrated</h3>
                            <ul class="takeaway-list">
                                ${project.takeaways.map(takeaway => `
                                    <li class="takeaway-item">
                                        <span class="takeaway-bullet">•</span>
                                        <span>${takeaway}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            ${project.status ? `<div class="project-status">${project.status.join(', ')}</div>` : ''}

                        </div>
                        
                        <div class="modal-links">
                            ${project.githubUrl ? `
                                <a href="${project.githubUrl}" target="_blank" class="modal-link github-link">
                                    <i class="fab fa-github"></i>
                                    GitHub Repository
                                </a>
                            ` : ''}
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" class="modal-link demo-link">
                                    <i class="fas fa-external-link-alt"></i>
                                    Live Demo
                                </a>
                            ` : ''}
                            
                           
                        </div>
                    </div>
                </div>
            `;
            
            // Add close event listener
            const closeBtn = modalContainer.querySelector('.close-btn');
            closeBtn.addEventListener('click', () => {
                modalContainer.innerHTML = '';
            });
        }
        
        // Toolkit functions
        function renderToolkit() {
            const toolkitGrid = document.getElementById('toolkit-grid');
            
            for (const [category, tools] of Object.entries(toolkit)) {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'toolkit-category';
                
                let toolsHTML = '<div class="tools-grid">';
                tools.forEach(tool => {
                    toolsHTML += `
                        <div class="tool-item">
                            <i class="${tool.icon}"></i>
                            <span>${tool.name}</span>
                        </div>
                    `;
                });
                toolsHTML += '</div>';
                
                categoryCard.innerHTML = `
                    <h3>${category}</h3>
                    ${toolsHTML}
                `;
                
                toolkitGrid.appendChild(categoryCard);
            }
        }
        
        // Neural network functions
        function initNeuralNetwork() {
            const canvas = document.getElementById('neural-canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const nodes = [];
            const nodeCount = 50;
            
            // Create nodes
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: 2
                });
            }
            
            // Animation function
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Update and draw nodes
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;
                    
                    // Bounce off edges
                    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                    
                    // Draw node
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = '#00c6c6';
                    ctx.fill();
                });
                
                // Draw connections
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.strokeStyle = `rgba(0, 198, 198, ${1 - distance / 150})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                }
                
                requestAnimationFrame(animate);
            }
            
            // Start animation
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }
        
        // Event listeners
        function initEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) { // Ensure the form exists before adding listener
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Your email address where messages should be sent
            const yourEmail = "glorybinkatabana@gmail.com";  
            
            const form = e.target;
            const formData = new FormData(form);
            const submitBtn = form.querySelector('.submit-btn'); // Select the submit button within the form

            // Construct mailto link with subject and body from form data
            const subject = `Message from ${formData.get('name')}`;
            const body = `Message:\n${formData.get('message')}\n\nFrom: ${formData.get('email')}`;
            const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Disable button and provide feedback to the user
            if (submitBtn) { // Check if submit button exists
                submitBtn.disabled = true;
                submitBtn.textContent = 'Opening Email...';
            }
            
            // Open user's email client after a short delay for UX feedback
            setTimeout(() => {
                window.location.href = mailtoLink; // This attempts to open the email client

                // Re-enable button and reset text after the email client is prompted
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
                
                // Optional: Reset form after a further delay, allowing time for email client to open
                setTimeout(() => form.reset(), 1000); 
            }, 500); // Short delay for visual feedback
        });
    }
    
    // Close modal by clicking outside (from your original code)
    document.addEventListener('click', (e) => {
        const modalContainer = document.getElementById('project-modal-container');
        // Check if modalContainer exists and if the click was outside the modal content
        if (modalContainer && e.target.classList.contains('project-modal') && modalContainer.innerHTML) {
            modalContainer.innerHTML = ''; // Clear modal content to close it
        }
    });
}

// Call initEventListeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initEventListeners);
        
        // ETL ANIMATION CLASS
        class ETLAnimation {
            constructor() {
                this.character = document.getElementById('character');
                this.extractIcon = document.getElementById('extractIcon');
                this.transformIcon = document.getElementById('transformIcon');
                this.loadIcon = document.getElementById('loadIcon');
                
                this.currentPhase = 0;
                this.phaseProgress = 0;
                this.animationSpeed = 0.005; // Controls how fast the animation progresses
                this.dataBag = null;
                
                this.phases = [
                    // Initial position, no movement
                    { name: 'start', duration: 0.5, position: { bottom: 40, left: 40 } },
                    // Walk to Extract icon
                    { name: 'walkToExtract', duration: 2, position: { bottom: 40, left: 80 } },
                    // At Extract icon, pause and glow
                    { name: 'atExtract', duration: 1, position: { bottom: 40, left: 80 } },
                    // Exit Extract, move up stairs-1
                    { name: 'exitExtract', duration: 2, position: { bottom: 130, left: 176 } },
                    // Walk to Transform icon
                    { name: 'walkToTransform', duration: 2, position: { bottom: 200, left: 300 } },
                    // At Transform icon, pause and glow
                    { name: 'atTransform', duration: 1, position: { bottom: 200, left: 300 } },
                    // Exit Transform, move up stairs-2
                    { name: 'exitTransform', duration: 2, position: { bottom: 290, left: 416 } },
                    // Walk to Load icon (adjusted position)
                    { name: 'walkToLoad', duration: 2, position: { bottom: 320, left: 520 } },
                    // At Load icon, pause and glow
                    { name: 'atLoad', duration: 1, position: { bottom: 320, left: 520 } },
                    // Exit Load, move down stairs-3 (horizontal)
                    { name: 'exitLoad', duration: 2, position: { bottom: 40, left: 640 } },
                    // Return to start position
                    { name: 'returnToStart', duration: 3, position: { bottom: 40, left: 40 } }
                ];
                
                this.init();
            }
            
            init() {
                // Set initial character position
                this.character.style.bottom = this.phases[0].position.bottom + 'px';
                this.character.style.left = this.phases[0].position.left + 'px';
                this.animate();
            }
            
            // Creates a data bag element with specified type and text
            createDataBag(type) {
                const bag = document.createElement('div');
                bag.className = `data-bag ${type}`; // Use 'extracted' or 'transformed' class
                bag.textContent = 'DATA';
                return bag;
            }
            
            // Adds a 'glowing' class to an icon
            addGlow(icon) {
                icon.classList.add('glowing');
            }
            
            // Removes the 'glowing' class from an icon
            removeGlow(icon) {
                icon.classList.remove('glowing');
            }
            
            // Adds or removes the 'walking' class for character animation
            setWalking(walking) {
                if (walking) {
                    this.character.classList.add('walking');
                } else {
                    this.character.classList.remove('walking');
                }
            }
            
            // Updates the character's position based on current phase and progress
            updateCharacterPosition() {
                const currentPhaseData = this.phases[this.currentPhase];
                const nextPhaseData = this.phases[(this.currentPhase + 1) % this.phases.length];
                
                // Calculate interpolated position for smooth movement
                const startPos = currentPhaseData.position;
                const endPos = nextPhaseData.position;
                
                const interpolatedBottom = startPos.bottom + (endPos.bottom - startPos.bottom) * this.phaseProgress;
                const interpolatedLeft = startPos.left + (endPos.left - startPos.left) * this.phaseProgress;
                
                this.character.style.bottom = interpolatedBottom + 'px';
                this.character.style.left = interpolatedLeft + 'px';
            }
            
            // Handles actions at the beginning of each animation phase
            handlePhaseTransition() {
                const currentPhaseData = this.phases[this.currentPhase];
                
                // Remove glow from all icons before applying to the current one
                this.removeGlow(this.extractIcon);
                this.removeGlow(this.transformIcon);
                this.removeGlow(this.loadIcon);

                switch (currentPhaseData.name) {
                    case 'start':
                        this.setWalking(true);
                        break;
                        
                    case 'walkToExtract':
                        this.setWalking(true);
                        break;
                        
                    case 'atExtract':
                        this.setWalking(false);
                        this.addGlow(this.extractIcon);
                        this.dataBag = this.createDataBag('extracted');
                        this.character.appendChild(this.dataBag);
                        break;
                        
                    case 'exitExtract':
                        this.setWalking(true);
                        break;
                        
                    case 'walkToTransform':
                        this.setWalking(true);
                        break;
                        
                    case 'atTransform':
                        this.setWalking(false);
                        this.addGlow(this.transformIcon);
                        if (this.dataBag) {
                            this.character.removeChild(this.dataBag);
                        }
                        this.dataBag = this.createDataBag('transformed');
                        this.character.appendChild(this.dataBag);
                        break;
                        
                    case 'exitTransform':
                        this.setWalking(true);
                        break;
                        
                    case 'walkToLoad':
                        this.setWalking(true);
                        break;
                        
                    case 'atLoad':
                        this.setWalking(false);
                        this.addGlow(this.loadIcon);
                        if (this.dataBag) {
                            this.character.removeChild(this.dataBag);
                            this.dataBag = null;
                        }
                        break;
                        
                    case 'exitLoad':
                        this.setWalking(true);
                        break;
                        
                    case 'returnToStart':
                        this.setWalking(true);
                        break;
                }
            }
            
            // Main animation loop
            animate() {
                this.phaseProgress += this.animationSpeed;
                
                // If current phase is complete, move to the next
                if (this.phaseProgress >= 1) {
                    this.phaseProgress = 0;
                    this.currentPhase = (this.currentPhase + 1) % this.phases.length;
                    this.handlePhaseTransition();
                }
                
                this.updateCharacterPosition();
                
                requestAnimationFrame(() => this.animate());
            }
        }
   