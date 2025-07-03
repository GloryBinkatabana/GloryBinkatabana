
  
        // Neural network background animation
        const canvas = document.querySelector('.neural-network');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let nodes = [];
        const numNodes = Math.min(Math.floor(window.innerWidth / 40), 50);

        function createNodes() {
            nodes = [];
            for (let i = 0; i < numNodes; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1
                });
            }
        }
        createNodes();

        function drawNetwork() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.globalAlpha = 1 - (distance / 200);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;

            ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
            for (let node of nodes) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
                
                node.x += node.vx;
                node.y += node.vy;
                
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            }
        }

        function animate() {
            drawNetwork();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createNodes();
        });

        // Fixed Gauge animation logic
        document.addEventListener('DOMContentLoaded', () => {
            const gauges = document.querySelectorAll('.gauge-container');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        const gauge = entry.target;
                        const percent = parseInt(gauge.dataset.percent, 10);
                        const fillPath = gauge.querySelector('.gauge-fill');
                        const percentText = gauge.querySelector('.gauge-percentage');
                        const pointerWrapper = gauge.querySelector('.gauge-pointer-wrapper');
                        
                        gauge.classList.add('animated');

                        // Calculate path length for proper semicircle
                        const pathLength = 188.5; // Approximate length of semicircle path
                        
                        // Set initial state
                        fillPath.style.strokeDasharray = pathLength;
                        fillPath.style.strokeDashoffset = pathLength;

                        // Calculate pointer rotation (-90deg to +90deg for semicircle)
                        const rotationDegrees = (percent / 100) * 180 - 90;

                        // Animate after a short delay
                        setTimeout(() => {
                            // Animate the fill
                            fillPath.style.strokeDashoffset = pathLength - (percent / 100) * pathLength;
                            
                            // Animate the pointer
                            pointerWrapper.style.transform = `translateX(-50%) rotate(${rotationDegrees}deg)`;
                            pointerWrapper.style.setProperty('--pointer-rotation', `${rotationDegrees}deg`);
                        }, 100);

                        // Animate percentage counter
                        let currentPercent = 0;
                        const duration = 1500;
                        const increment = percent / (duration / 16);

                        const counter = setInterval(() => {
                            currentPercent += increment;
                            if (currentPercent >= percent) {
                                currentPercent = percent;
                                clearInterval(counter);
                                
                                // Add shake effect to pointer only
                                pointerWrapper.classList.add('shake');
                                
                                // Remove shake after 7 seconds
                                setTimeout(() => {
                                    pointerWrapper.classList.remove('shake');
                                }, 7000);
                            }
                            percentText.textContent = `${Math.round(currentPercent)}%`;
                        }, 16);

                    } else if (!entry.isIntersecting && entry.target.classList.contains('animated')) {
                        // Reset when out of view
                        const gauge = entry.target;
                        const fillPath = gauge.querySelector('.gauge-fill');
                        const percentText = gauge.querySelector('.gauge-percentage');
                        const pointerWrapper = gauge.querySelector('.gauge-pointer-wrapper');

                        const pathLength = 188.5;
                        fillPath.style.strokeDashoffset = pathLength;
                        pointerWrapper.style.transform = `translateX(-50%) rotate(-90deg)`;
                        percentText.textContent = '0%';
                        pointerWrapper.classList.remove('shake');
                        gauge.classList.remove('animated');
                    }
                });
            }, { threshold: 0.5 });

            gauges.forEach(gauge => {
                observer.observe(gauge);
            });
        });
