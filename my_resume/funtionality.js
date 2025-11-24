
        // Toggle between professional and styled modes
        function toggleStyle() {
            const body = document.body;
            const icon = document.getElementById('toggle-icon');
            const text = document.getElementById('toggle-text');
            
            if (body.classList.contains('professional')) {
                body.classList.remove('professional');
                body.classList.add('styled');
                icon.textContent = '💼';
                text.textContent = 'Professional Mode';
                localStorage.setItem('cvStyle', 'styled');
                initNeuralNetwork();
            } else {
                body.classList.remove('styled');
                body.classList.add('professional');
                icon.textContent = '🎨';
                text.textContent = 'Creative Mode';
                localStorage.setItem('cvStyle', 'professional');
            }
        }

        // Load saved preference
        window.addEventListener('DOMContentLoaded', () => {
            const savedStyle = localStorage.getItem('cvStyle');
            if (savedStyle === 'styled') {
                document.body.classList.remove('professional');
                document.body.classList.add('styled');
                document.getElementById('toggle-icon').textContent = '💼';
                document.getElementById('toggle-text').textContent = 'Professional Mode';
                initNeuralNetwork();
            }
        });

        // Neural Network Animation
        let animationFrame;
        
        function initNeuralNetwork() {
            const canvas = document.getElementById('neural');
            const ctx = canvas.getContext('2d');
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const nodes = [];
            const nodeCount = 50;
            
            class Node {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                }
                
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }
                
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(0, 198, 198, 0.5)';
                    ctx.fill();
                }
            }
            
            for (let i = 0; i < nodeCount; i++) {
                nodes.push(new Node());
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                nodes.forEach(node => {
                    node.update();
                    node.draw();
                });
                
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.strokeStyle = `rgba(0, 198, 198, ${0.2 * (1 - distance / 150)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }
                
                animationFrame = requestAnimationFrame(animate);
            }
            
            // Cancel previous animation if exists
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            
            animate();
            
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }
