(function () {
  const carouselBrandsItems = [
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/yamaha.png" alt="Yamaha icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/shaw.png" alt="Shaw icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/casio.png" alt="Casio icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/knight.png" alt="Knight icon"></div>',
    '<div class="brands-gallery-item"><img class="brands-gallery-item-img" src="img/brands/musicman.png" alt="Musicman icon"></div>',
  ];
  let currentBrandsIndex = 0;
  function renderBrandsCard() {
    const brandsItemsContainer = document.querySelector(".brands-gallery-box");
    brandsItemsContainer.innerHTML = carouselBrandsItems[currentBrandsIndex];
    if (window.innerWidth > 767) {
      const secondBrandsItemIndex =
        currentBrandsIndex + 1 >= carouselBrandsItems.length
          ? 0
          : currentBrandsIndex + 1;
      brandsItemsContainer.innerHTML +=
        carouselBrandsItems[secondBrandsItemIndex];

      if (window.innerWidth > 990) {
        const thirdBrandsItemIndex =
          secondBrandsItemIndex + 1 >= carouselBrandsItems.length
            ? 0
            : secondBrandsItemIndex + 1;
        brandsItemsContainer.innerHTML +=
          carouselBrandsItems[thirdBrandsItemIndex];
        if (window.innerWidth > 990) {
          const forthBrandsItemIndex =
            thirdBrandsItemIndex + 1 >= carouselBrandsItems.length
              ? 0
              : thirdBrandsItemIndex + 1;
          brandsItemsContainer.innerHTML +=
            carouselBrandsItems[forthBrandsItemIndex];
        }
      }
    }
  }
  function showNextBrandsCard() {
    currentBrandsIndex =
      currentBrandsIndex + 1 >= carouselBrandsItems.length
        ? 0
        : currentBrandsIndex + 1;
    renderBrandsCard();
  }
  function showPrevBrandsCard() {
    currentBrandsIndex =
      currentBrandsIndex - 1 < 0
        ? carouselBrandsItems.length - 1
        : currentBrandsIndex - 1;
    renderBrandsCard();
  }
  renderBrandsCard();
  const nextBrandsButton = document.querySelector(
    ".brands-gallery-button-next"
  );
  nextBrandsButton.addEventListener("click", showNextBrandsCard);
  const prevBrandsButton = document.querySelector(
    ".brands-gallery-button-prev"
  );
  prevBrandsButton.addEventListener("click", showPrevBrandsCard);

  window.addEventListener("resize", renderBrandsCard);
})();