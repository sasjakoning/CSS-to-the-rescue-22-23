const rotateYSlider = document.getElementById('rotateY');
document.documentElement.style.setProperty('--rotateY', rotateYSlider.value + 'deg');

const rotateXSlider = document.getElementById('rotateX');
document.documentElement.style.setProperty('--rotateX', rotateYSlider.value + 'deg');

const translateZSlider = document.getElementById('translateZ');
document.documentElement.style.setProperty('--translateZ', rotateYSlider.value + 'em');

const translateYSlider = document.getElementById('translateY');
document.documentElement.style.setProperty('--translateY', rotateYSlider.value + 'em');



// edit the rotateY css variable based on the slider value
rotateYSlider.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--rotateY', e.target.value + 'deg');
    }
);

// edit the rotateX css variable based on the slider value
rotateXSlider.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--rotateX', e.target.value + 'deg');
    }
);

translateZSlider.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--translateZ', e.target.value + 'em');
    }
);

translateYSlider.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--translateY', e.target.value + 'em');
    }
);