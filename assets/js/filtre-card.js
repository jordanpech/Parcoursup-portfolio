let activeButton = null;

function filterCards(category, button) {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    if (category === 'reset') {
      card.classList.remove('hidden');
    } else {
      if (card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  if (activeButton) {
    activeButton.classList.remove('active-filter');
  }
  if (category !== 'reset') {
    button.classList.add('active-filter');
    activeButton = button;
  }
}


function resetFilters() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.classList.remove('active-filter');
  });
  filterCards('reset', null);
}
