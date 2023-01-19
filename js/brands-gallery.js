(function () {
  const carouselParnersItems = [
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/yamaha.png" alt="Yamaha icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/shaw.png" alt="Shaw icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/casio.png" alt="Casio icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/knight.png" alt="Knight icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/musicman.png" alt="Musicman icon"></div>',
  ];
  let currentPartnersIndex = 0;
  function renderPartnersCard() {
    const partnersItemsContainer = document.querySelector(
      ".brands-gallery-box"
    );
    partnersItemsContainer.innerHTML = carouselParnersItems[currentPartnersIndex];
    if (window.innerWidth > 767) {
      const secondPartnersItemIndex =
        currentPartnersIndex + 1 >= carouselParnersItems.length ? 0 : currentPartnersIndex + 1;
      partnersItemsContainer.innerHTML += carouselParnersItems[secondPartnersItemIndex];

      if (window.innerWidth > 990) {
        const thirdPartnersItemIndex =
          secondPartnersItemIndex + 1 >= carouselParnersItems.length ? 0 : secondPartnersItemIndex + 1;
        partnersItemsContainer.innerHTML += carouselParnersItems[thirdPartnersItemIndex];
        if (window.innerWidth > 990) {
          const forthPartnersItemIndex =
            thirdPartnersItemIndex + 1 >= carouselParnersItems.length ? 0 : thirdPartnersItemIndex + 1;
          partnersItemsContainer.innerHTML += carouselParnersItems[forthPartnersItemIndex];
        }
      }
    }
  }
  function showNextPartnersCard() {
    currentPartnersIndex =
      currentPartnersIndex + 1 >= carouselParnersItems.length ? 0 : currentPartnersIndex + 1;
    renderPartnersCard();
  }
  function showPrevPartnersCard() {
    currentPartnersIndex =
      currentPartnersIndex - 1 < 0 ? carouselParnersItems.length - 1 : currentPartnersIndex - 1;
    renderPartnersCard();
  }
  renderPartnersCard();
  const nextPartnersButton = document.querySelector(".brands-gallery-button-next");
  nextPartnersButton.addEventListener("click", showNextPartnersCard);
  const prevPartnersButton = document.querySelector(".brands-gallery-button-prev");
  prevPartnersButton.addEventListener("click", showPrevPartnersCard);

  window.addEventListener("resize", renderPartnersCard);
})();