// Visualize your technical skills with a dynamic chart
document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        {name: "Network Security", level: 80},
        {name: "Python", level: 75},
        {name: "Ethical Hacking", level: 70},
        {name: "Linux", level: 85}
    ];

    const skillsContainer = document.getElementById('skills-chart');
    
    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level" style="width: ${skill.level}%">
                <span>${skill.level}%</span>
            </div>
        `;
        skillsContainer.appendChild(skillBar);
    });
});