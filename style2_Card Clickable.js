document.addEventListener("DOMContentLoaded", function() {
  const tourCards = document.querySelectorAll(".tour-card");

  tourCards.forEach(card => {
    card.addEventListener("click", function() {
      const destination = this.getAttribute("data-destination");
      if (destination) {
        window.location.href = destination;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all tour cards
    const tourCards = document.querySelectorAll(".tour-card");
  
    // Get the maximum height among all tour cards
    const maxHeight = Math.max(...Array.from(tourCards, card => card.offsetHeight));
  
    // Set the height of all tour cards to the maximum height
    tourCards.forEach(card => {
      card.style.height = maxHeight + "px";
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Get all tour cards
    const tourCards = document.querySelectorAll(".tour-card");
  
    // Get the maximum height among all tour cards
    const maxHeight = Math.max(...Array.from(tourCards, card => card.offsetHeight));
  
    // Set the height of all tour cards to the maximum height
    tourCards.forEach(card => {
      card.style.height = maxHeight + "px";
    });
  });
    