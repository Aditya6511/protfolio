// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add event listener to contact form submit button
document.querySelector('#contact form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#contact input[type="text"]').value;
    const email = document.querySelector('#contact input[type="email"]').value;
    const message = document.querySelector('#contact textarea').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Add your own logic to handle form submission here
});

// Add event listener to project images
document.querySelectorAll('#projects img').forEach(image => {
    image.addEventListener('click', event => {
        const project = event.target.parentNode;
        const projectName = project.querySelector('h3').textContent;
        const projectDescription = project.querySelector('p').textContent;
        console.log(`Project Name: ${projectName}, Project Description: ${projectDescription}`);
        // Add your own logic to handle project image click here
    });
});

// Add event listener to scroll to top button
window.addEventListener('scroll', event => {
    const scrollTopButton = document.querySelector('#scroll-to-top');
    if (window.scrollY > 500) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.querySelector('#scroll-to-top').addEventListener('click', event => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});