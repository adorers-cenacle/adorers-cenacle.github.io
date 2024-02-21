  const background = document.getElementById('background');
    const numClouds = 5;

    for (let i = 0; i < numClouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 80}%`;
        cloud.style.width = `${Math.random() * 200 + 100}px`;
        cloud.style.height = `${Math.random() * 100 + 50}px`;
        cloud.style.opacity = `${Math.random() * 0.4 + 0.4}`;
        background.appendChild(cloud);
    }

    const rainbow = document.createElement('div');
    rainbow.className = 'rainbow';
    background.appendChild(rainbow);

    const movingText = document.createElement('div');
    movingText.id = 'movingText';
    movingText.style.top = '30%';
    movingText.style.left = '50%';
    movingText.style.transform = 'translateX(-50%)';
    movingText.innerText = 'Your Moving Text';
    document.body.appendChild(movingText);

    const content = document.getElementById('content');
    content.style.top = '50%';
