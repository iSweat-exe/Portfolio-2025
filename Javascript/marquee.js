const marqueeContent = document.querySelector('.marquee-content span');
        
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentElement.appendChild(clone);
        
        anime({
          targets: '.marquee-content span',
          translateX: ['0%', '-100%'],
          easing: 'linear',
          duration: 2000,
          loop: true
        });