// Contact form WhatsApp integration
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const number = '+256744759181'; 
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `${number}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.location.href = whatsappUrl;
});

// Date updater in footer
function updateDate() {
    const now = new Date();
    document.getElementById('date-updater').textContent = now.toLocaleString();
}

updateDate();
setInterval(updateDate, 1000);

// Project link confirmation popup
const popup = document.getElementById('confirmation-popup');
const popupMessage = document.getElementById('popup-message');
const confirmOk = document.getElementById('confirm-ok');
const confirmCancel = document.getElementById('confirm-cancel');
let currentLink = '';

document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', function() {
        currentLink = this.getAttribute('data-link');
        popupMessage.textContent = 'Are you sure you want to visit this project?';
        popupMessage.style.color = 'black';
        popup.classList.add('show');
    });
});

confirmOk.addEventListener('click', function() {
    if (currentLink) {
        window.open(currentLink, '_blank');
    }
    popup.classList.remove('show');
});

confirmCancel.addEventListener('click', function() {
    popupMessage.textContent = 'Visit cancelled';
    popupMessage.style.color = 'red';
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'false');
    }
}

darkModeToggle.addEventListener('click', function() {
    const isDark = document.body.classList.contains('dark-mode');
    setDarkMode(!isDark);
});

// Load dark mode preference on page load
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// CV PDF generation and download
function generateAndDownloadCV() {
    const resumeHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: white; color: black;">
            <header style="text-align: center; border-bottom: 2px solid #25d366; padding-bottom: 20px; margin-bottom: 30px;">
                <h1 style="color: #25d366; margin: 0;">ATUKWASA UMAR</h1>
                <p style="font-size: 18px; margin: 5px 0;">Full Stack Developer</p>
                <p style="margin: 5px 0;">Email: bitbyte790@gmail.com | Phone: +256 744 759 181</p>
                <p style="margin: 5px 0;">Available for projects</p>
            </header>

            <section style="margin-bottom: 30px;">
                <h2 style="color: #25d366; border-bottom: 1px solid #25d366; padding-bottom: 5px;">Education</h2>
                <div style="margin-top: 15px;">
                    <h3>Software Engineering</h3>
                    <p style="font-style: italic;">Digital Regenysis International School</p>
                    <p>Currently studying - Expected completion: 2025</p>
                </div>
            </section>

            <section style="margin-bottom: 30px;">
                <h2 style="color: #25d366; border-bottom: 1px solid #25d366; padding-bottom: 5px;">Skills</h2>
                <div style="margin-top: 15px;">
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">HTML (30%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">CSS (25%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">JavaScript (25%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">PHP (20%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">React (20%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">Node.js (25%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">Python (40%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">MongoDB (20%)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 5px;">Express (15%)</span>
                    </div>
                </div>
            </section>

            <section style="margin-bottom: 30px;">
                <h2 style="color: #25d366; border-bottom: 1px solid #25d366; padding-bottom: 5px;">Projects</h2>
                <div style="margin-top: 15px;">
                    <div style="margin-bottom: 20px;">
                        <h3>Umar Furniture</h3>
                        <p>A modern e-commerce platform for furniture sales.</p>
                        <p style="font-style: italic;">Technologies: HTML, CSS, JavaScript, PHP</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h3>Asmin International</h3>
                        <p>International business website with multilingual support.</p>
                        <p style="font-style: italic;">Technologies: HTML, CSS, JavaScript, React</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h3>Orion Hub</h3>
                        <p>A hub for collaborative projects and resources.</p>
                        <p style="font-style: italic;">Technologies: HTML, CSS, JavaScript, Node.js</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h3>Smart Shop</h3>
                        <p>AI-powered shopping assistant application.</p>
                        <p style="font-style: italic;">Technologies: Python, JavaScript, HTML, CSS</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h3>Orion</h3>
                        <p>Project management tool with real-time collaboration.</p>
                        <p style="font-style: italic;">Technologies: React, Node.js, MongoDB, Express</p>
                    </div>
                </div>
            </section>

            <section style="margin-bottom: 30px;">
                <h2 style="color: #25d366; border-bottom: 1px solid #25d366; padding-bottom: 5px;">Contact</h2>
                <div style="margin-top: 15px;">
                    <p>Email: bitbyte790@gmail.com</p>
                    <p>Phone: +256 744 759 181</p>
                    <p>WhatsApp: +256 744 759 181</p>
                </div>
            </section>
        </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = resumeHTML;
    document.body.appendChild(element);

    const opt = {
        margin: 1,
        filename: 'ATUKWASA_UMAR_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        document.body.removeChild(element);
    });
}
