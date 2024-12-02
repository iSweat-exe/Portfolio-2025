const marqueeContent = document.querySelector('.marquee-content span');
        
        // Clone the content to create an infinite loop effect
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentElement.appendChild(clone);
        
        // Set up animation with Anime.js
        anime({
          targets: '.marquee-content span',
          translateX: ['0%', '-100%'],
          easing: 'linear',
          duration: 2000,
          loop: true
        });