// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Mock wine database
const wineDatabase = [
    { name: 'Cabernet Sauvignon', type: 'drue', region: 'Bordeaux' },
    { name: 'Chardonnay', type: 'drue', region: 'Burgund' },
    { name: 'Bordeaux', type: 'region', country: 'Frankrike' },
    { name: 'Toscana', type: 'region', country: 'Italia' }
];

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const matches = wineDatabase.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm) ||
        (item.region && item.region.toLowerCase().includes(searchTerm)) ||
        (item.country && item.country.toLowerCase().includes(searchTerm))
    );

    displayResults(matches);
});

function displayResults(results) {
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    searchResults.innerHTML = results
        .map(item => `<div class="search-result-item">${item.name} (${item.type})</div>`)
        .join('');
    
    searchResults.style.display = 'block';
}
