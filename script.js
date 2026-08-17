document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Button geklickt: " + btn.getAttribute('data-filter'));

            // Existiert ein aktiver Button?
            const currentActive = document.querySelector('.filter-btn.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {

                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block'; // Erzwinge Anzeige
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
