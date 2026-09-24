const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main[id], section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Configuração do leitor de navegação
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px", // Deteta quando a secção está visível no topo
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
