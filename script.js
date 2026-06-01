// Scroll reveal
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
sections.forEach(s => observer.observe(s));

// Form
function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#2A6B4F';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Send message →';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
    }, 3000);
}