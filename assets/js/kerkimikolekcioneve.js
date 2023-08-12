document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.querySelector('.fa-magnifying-glass');
    var searchDialog = document.querySelector('.search-dialog');
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');
    
    var watches = [
        { name: 'COMPETENCE SKELETON III', price: 829.00, url: 'orat/skeleton.html', imgSrc: 'assets/image/skelton.webp' },
        { name: 'DEEP SEA 200', price: 349.00, url: 'orat/deep.html', imgSrc: 'assets/image/deep sea.webp'  },
        { name: 'ROCKSHELL MARK III SCUBA', price: 499.00, url: 'orat/rockshel.html', imgSrc: 'assets/image/rockyellow.jpg' },
        { name: 'PRIMELINE DAY DATE II', price: 799.00, url: 'orat/primeline.html', imgSrc: 'assets/image/primeline.webp'  },
        { name: 'TEMPOMASTER CHRONO', price: 519.00, url: 'orat/tempomaster.html', imgSrc: 'assets/image/tempomaster.webp'  },
        { name: 'VALIAS GENTS', price: 249.00, url: 'orat/valias.html', imgSrc: 'assets/image/valias.webp'  },
        { name: 'VENUS DIAMOND', price: 329.00, url: 'orat/venus.html', imgSrc: 'assets/image/venus.webp'  },
        { name: 'SEAROCK AUTOMATIC', price: 829.00, url: 'orat/searock.html', imgSrc: 'assets/image/searock.webp'  },
    ];

    searchIcon.addEventListener('click', function() {
        searchDialog.classList.toggle('active');
        searchInput.focus();
    });

    searchButton.addEventListener('click', function() {
        var searchTerm = searchInput.value.toLowerCase();
        var filteredWatches = watches.filter(function(watch) {
            return watch.name.toLowerCase().includes(searchTerm);
        });

        displayFilteredWatches(filteredWatches);
    });
    

    // Inside the displayFilteredWatches function
function displayFilteredWatches(filteredWatches) {
    var modeletContainer = document.querySelector('.modeleta');
    modeletContainer.innerHTML = '';

    filteredWatches.forEach(function(watch) {
        var card = document.createElement('div');
        card.className = 'carda1';
        card.innerHTML = `
            <div class="body-card">
                <div class="image-container">
                    <img src="${watch.imgSrc}" style="width: 35%; padding-left: 387px;">
                    <a href="${watch.url}" target="_blank" class="watch-link">
                <h3 style="padding-left: 520px;">${watch.name}</h3>
            </a>
            <h4 style="padding-left: 570px;">CHF ${watch.price.toFixed(2)}</h4>
                </div>
            </div>
        `;

        modeletContainer.appendChild(card);
    });
}

});
