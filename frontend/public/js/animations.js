const skillsTextElements = document.getElementsByClassName('.skillsText');
if(skillsTextElements){
    skillsTextElements.forEach((text, index) => {
        window.addEventListener('scroll', () => {
            const scrollPosition = text.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;    
            // const scrollSpeed = index === 0 ? 2.1 : index === 1 ? 1.85 : index === 2 ? 1.65 : 1.25;
            const scrollSpeed = index === 0 ? 1 : index === 1 ? 1.35 : index === 2 ? 1.85 : 2;
            const adjustedScrollPercentage = ((windowHeight - scrollPosition) / windowHeight) * 100 * scrollSpeed;
    
            text.style.backgroundSize = `${adjustedScrollPercentage}% 100%`;
        });
    });
}