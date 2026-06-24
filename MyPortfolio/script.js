const portfolioData = {
    profile: {
        name: "Тимур",
        profession: "Разработчик ПО",
        age: 18
    },
    
    projects: [
        {
            id: 1,
            title: "Адаптивное веб-портфолио",
            category: "Веб",
            likes: 150,
            technologies: ["HTML", "CSS", "JavaScript", "Grid"]
        },
        {
            id: 2,
            title: "Алгоритм бинарной нормализации",
            category: "Бекенд",
            likes: 95,
            technologies: ["C++", "Bitwise Operations"]
        },
        {
            id: 3,
            title: "Финансовый анализатор данных",
            category: "Веб",
            likes: 210,
            technologies: ["Python", "JavaScript", "Pandas"]
        },
        {
            id: 4,
            title: "Интерфейс системы пропуска",
            category: "Дизайн",
            likes: 45,
            technologies: ["CSS", "Figma"]
        },
        {
            id: 5,
            title: "Симулятор космического передатчика",
            category: "Бекенд",
            likes: 130,
            technologies: ["JavaScript", "Node.js"]
        },
        {
            id: 6,
            title: "test",
            category: "-",
            likes: 999,
            technologies: ["Assembler"]
        }
    ],
    
    preferences: new Map([
        ["theme", "dark"],
        ["language", "ru"]
    ])
};

const galleryContainer = document.querySelector('.projects-grid');
if (galleryContainer){

    portfolioData.projects.forEach(project => {

        const cardElement = document.createElement('div');
        const titleElement = document.createElement('h3');
        const categoryElement = document.createElement('p');
        const techElement = document.createElement('p');
        const likesElement = document.createElement('span');

        cardElement.classList.add('project-card');
        titleElement.classList.add('card-title');
        categoryElement.classList.add('card-text');
        techElement.classList.add('card-text');
        likesElement.classList.add('card-text');
        
        likesElement.style.fontWeight = '600';
        likesElement.style.color = '#38bdf8';

        titleElement.textContent = project.title;
        categoryElement.textContent = `Категория: ${project.category}`;
        techElement.textContent = `Технологии: ${project.technologies.join(', ')}`;
        likesElement.textContent = `Лайков: ${project.likes}`;

        cardElement.append(titleElement);
        cardElement.append(categoryElement);
        cardElement.append(techElement);
        cardElement.append(likesElement);

        galleryContainer.append(cardElement);
    })
    console.log('Succesfully rendered: ${portfolioData.projects.length}')
} else {
    console.error('.projects-grid not found on the page')
}

console.log("База данных инициализирована");
console.log(portfolioData);


const profileKeys = Object.keys(portfolioData.profile);

console.log("\nКлючи профиля");
console.log(profileKeys);

const topProjectsStrings = portfolioData.projects
    .filter(project => project.likes > 100)
    .map(project => `Проект: [${project.title}] из категории [${project.category}]`);

console.log("\nЛучшие работы (> 100 лайков)");
console.log(topProjectsStrings);


let totalLikes = 0;

portfolioData.projects.forEach(project => {
    totalLikes += project.likes;
});

console.log("\nСтатистика администратора");
console.log(`Общее число лайков: ${totalLikes}`);


const uniqueTechnologies = new Set();

portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => {
        uniqueTechnologies.add(tech);
    });
});

console.log("\nОблако тегов (Уникальные технологии)");
console.log(uniqueTechnologies);