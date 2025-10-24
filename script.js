// Efeito de confete
document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#ff4e7a', '#6a3093', '#ffafbd', '#ffc3a0'];
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.zIndex = '-1';
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
    
    // Criar confetes periodicamente
    setInterval(createConfetti, 200);
    
    // Efeito de digitação no título
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
});