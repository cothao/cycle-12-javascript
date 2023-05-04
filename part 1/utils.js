const xP = document.querySelector('.xp')
const img = document.querySelector('img')
const ow = document.querySelector('.ow')

btn.addEventListener('click', () => {
    if (enemyHealth > 0 && enemyHealth !== 100) {
        gsap.to('img', {
            top: '-10%'
        })
        setTimeout(() => {
            gsap.to("img", {
              top: "0%",
            });
        }, 450)
        ow.style.display = 'block'
        setTimeout(() => {
            ow.style.display = "none";
        }, 350);
    }
    gsap.to(".healthbar", {
      width: enemyHealth + "%",
    });
    if (enemyHealth === 0) {
        xP.style.display = 'block'
    }
})

