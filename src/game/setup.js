const setup = {
  // Add dinamically cards to UI (rows/columns)
  // Easy   - 20 cards - 4/5
  // Medium - 30 cards - 5/6
  // Hard   - 50 cards - 5/10
  addCardsToUI: (difficulty) => {
    const cardsCount = CONSTANTS.difficulties[difficulty];
    const rowsCount = 5;
    const columnsCount = cardsCount / rowsCount;

    // Update cards count
    CONSTANTS.cardsCount = cardsCount;

    // Reset UI
    gameContainer.innerHTML = "";

    for (let i = 0; i < rowsCount; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      for (let j = 0; j < columnsCount; j++) {
        const flipContainerElement = document.createElement("div");
        flipContainerElement.classList.add("flip-container");

        const flipElement = document.createElement("div");
        flipElement.classList.add("flip");

        const frontCardElement = document.createElement("div");
        frontCardElement.classList.add("front");

        const backCardElement = document.createElement("div");
        backCardElement.classList.add("back");

        flipElement.append(...[frontCardElement, backCardElement]);
        flipContainerElement.appendChild(flipElement);
        rowElement.appendChild(flipContainerElement);
      }
      gameContainer.appendChild(rowElement);
    }
  },
};
