const rotateYSlider = document.getElementById('rotateY');
document.documentElement.style.setProperty('--rotateY', rotateYSlider.value + 'deg');


// edit the rotateY css variable based on the slider value
rotateYSlider.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--rotateY', e.target.value + 'deg');
    }
);