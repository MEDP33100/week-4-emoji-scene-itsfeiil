// the elements
const showSceneButton = document.getElementById('showSceneButton');
const scene = document.getElementById('scene');
const cloud = document.getElementById('cloud');
const butterflyLeft = document.getElementById('butterfly-left');
const butterflyRight = document.getElementById('butterfly-right');

// click to show emoji scene
showSceneButton.addEventListener('click', () => {
    showSceneButton.style.display = 'none';
    scene.style.display = 'block';
});

// hover to show butterflies
cloud.addEventListener('mouseenter', () => {
    gsap.to([butterflyLeft, butterflyRight], {
        x: '20%',
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
    });
});
cloud.addEventListener('mouseleave', () => {
    gsap.to([butterflyLeft, butterflyRight], {
        x: '0%',
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
    });
});