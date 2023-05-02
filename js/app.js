let init = () => {
  let container = document.getElementsByClassName('jumbo-slider__container')[0];
  let slides = document.getElementsByClassName('jumbo-slider__slide');
  let circles = document.getElementsByClassName('jumbo-slider__circle');
  let links = document.getElementsByClassName('jumbo-slider__link');
  let current = 1;
  let time = 6000;

  // add animation class to slide
  setTimeout( () => {
    slides[0].classList.add('jumbo-slider__slide--active');
  }, 100);

  links[current - 1].classList.add('jumbo-slider__link--active');

  // update elipsis and links
  let updateNav = (current) => {
    for (let i = 0; i < slides.length; i++) {
      links[i].classList.remove('jumbo-slider__link--active');
      circles[i].classList.remove('jumbo-slider__circle--filled');
    }

    links[current - 1].classList.add('jumbo-slider__link--active');
    circles[current - 1].classList.add('jumbo-slider__circle--filled');

    // console.log(`current: ${current}`);
  }

  let startSliding = () => {
    setInterval( () => {
      console.log(`current: ${current}`);
      updateNav(current);
      slides[1].classList.add('jumbo-slider__slide--active');
      slides[0].classList.remove('jumbo-slider__slide--active');

      if (current < slides.length) {
        current++;
        // updateNav(current);
      } else {
        current = 1;
      }
      container.appendChild(slides[0].cloneNode([true]));
      container.removeChild(slides[0]);
      
    }, 6000);
  }

  startSliding();
}

init();