document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const sortSelect = document.getElementById('sortSelect');
    const resultsSection = document.getElementById('resultsSection');

    const wordModal = document.getElementById('wordModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalBody = document.getElementById('modalBody');

    let currentFilter = 'all';
    let currentSort = 'alphabet'; // Default to alphabetical as per standard dictionary
    let searchQuery = '';

    // Initialize
    renderResults();

    // Event Listeners
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderResults();
        });
    }

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        toggleClearButton();
        renderResults();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        toggleClearButton();
        searchInput.focus();
        renderResults();
    });

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active state
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // Update filter
            currentFilter = chip.dataset.filter;
            renderResults();
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close modal on backdrop click
    wordModal.addEventListener('click', (e) => {
        if (e.target === wordModal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !wordModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    function toggleClearButton() {
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
    }

    function renderResults() {
        resultsSection.innerHTML = '';

        // Filter data
        const filteredData = window.dictionaryData.filter(item => {
            let matchesFilter = false;

            if (currentFilter === 'all') {
                matchesFilter = true;
            } else if (currentFilter === 'other') {
                // Match anything that is NOT one of the main categories
                matchesFilter = !['verb', 'noun', 'adjective', 'pronoun'].includes(item.type);
            } else {
                matchesFilter = item.type === currentFilter;
            }

            const matchesSearch = item.word.toLowerCase().includes(searchQuery) ||
                item.translation.toLowerCase().includes(searchQuery) ||
                item.type.toLowerCase().includes(searchQuery) || // Support searching by type
                (item.subtype && item.subtype.toLowerCase().includes(searchQuery)) || // Support searching by subtype
                (item.plural && item.plural.toLowerCase().includes(searchQuery)) || // Support searching by plural form
                (item.v1 && item.v1.toLowerCase().includes(searchQuery)) ||
                (item.v2 && item.v2.toLowerCase().includes(searchQuery)) ||
                (item.v3 && item.v3.toLowerCase().includes(searchQuery));

            return matchesFilter && matchesSearch;
        });

        // Sort data
        if (currentSort === 'alphabet') {
            filteredData.sort((a, b) => a.word.localeCompare(b.word));
        } else if (currentSort === 'latest') {
            // Assuming data.js is ordered oldest to newest (top to bottom),
            // reverse it to show latest added first.
            filteredData.reverse();
        }

        // Show empty state if no results
        if (filteredData.length === 0) {
            if (searchQuery.length > 0) {
                resultsSection.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-illustration">🔍</div>
                        <h3>No results found</h3>
                        <p>Try searching for a different word.</p>
                    </div>
                `;
            } else {
                // Initial state or cleared search
                resultsSection.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-illustration">📚</div>
                        <h3>Start typing to search</h3>
                        <p>Find verbs (V1, V2, V3), pronouns, nouns, and more.</p>
                    </div>
                `;
            }
            return;
        }

        // Limit results for performance (Light Access)
        const displayData = filteredData.slice(0, 50);

        // Render simplified items (List View)
        displayData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'word-card';
            // Make card clickable
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openModal(item));

            let content = '';

            // Simple Header
            content += `
                <div class="card-header">
                    <h2 class="word-title">${capitalize(item.word)}</h2>
                    <span class="word-type type-${item.type} clickable-badge" data-search="${item.type}">${item.type}</span>
                </div>
                <!-- Grammar Subtype Hint for List View -->
                ${item.subtype ? `<div class="subtype-container" style="font-size: 0.8rem; color: var(--accent-color); margin-bottom: 4px;">
                    ${item.subtype.split(' / ').map(sub => `<span class="clickable-badge" data-search="${sub}">${sub}</span>`).join(' / ')}
                </div>` : ''}
                <div class="translation">${item.translation}</div>
            `;

            // Verb Timeline (List View)
            if (item.type === 'verb') {
                content += `
                    <div class="verb-timeline" style="padding: 0.8rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">
                        <div class="verb-connector"></div>
                        <div class="verb-form">
                            <span class="form-label">V1</span>
                            <span class="form-word">${item.v1}</span>
                        </div>
                        <div class="verb-form">
                            <span class="form-label">V2</span>
                            <span class="form-word">${item.v2}</span>
                        </div>
                        <div class="verb-form">
                            <span class="form-label">V3</span>
                            <span class="form-word">${item.v3}</span>
                        </div>
                    </div>
                `;
            }

            // Add a subtle hint that there is more
            if (item.type === 'verb' || item.tenses || item.example || item.multiexamples || item.detail) {
                content += `<div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 8px; display: flex; align-items: center; gap: 4px;">
                    <span>View details & examples</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </div>`;
            }

            card.innerHTML = content;

            // Add click listeners to badges inside the card
            const badges = card.querySelectorAll('.clickable-badge');
            badges.forEach(badge => {
                badge.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent opening modal
                    const term = e.target.dataset.search;
                    searchInput.value = term;
                    searchInput.dispatchEvent(new Event('input')); // Trigger search
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            resultsSection.appendChild(card);
        });

        // If more results exist, show a "Load more" indicator or count
        if (filteredData.length > 50) {
            const moreIndicator = document.createElement('div');
            moreIndicator.className = 'empty-state';
            moreIndicator.style.padding = '1rem';
            moreIndicator.innerHTML = `<p>... and ${filteredData.length - 50} more results. Refine your search.</p>`;
            resultsSection.appendChild(moreIndicator);
        }
    }

    function openModal(item) {
        let content = '';

        // Header
        content += `
            <div class="card-header" style="padding-right: 3rem;">
                <h2 class="word-title" style="font-size: 2rem;">${capitalize(item.word)}</h2>
                <div style="text-align: right;">
                    <span class="word-type type-${item.type}">${item.type}</span>
                </div>
            </div>
        `;

        // Grammar Details Section
        if (item.subtype || item.detail) {
            content += `<div class="grammar-info" style="margin-bottom: 1rem; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 12px;">`;
            if (item.subtype) {
                content += `<div style="color: var(--accent-color); font-weight: 600; margin-bottom: 4px;">`;
                content += item.subtype.split(' / ').map(sub => `<span class="clickable-badge" data-search="${sub}">${sub}</span>`).join(' / ');
                content += `</div>`;
            }
            if (item.detail) {
                content += `<div style="color: var(--text-secondary); font-size: 0.9rem;">${item.detail}</div>`;
            }
            content += `</div>`;
        }

        content += `<div class="translation" style="font-size: 1.25rem; margin-bottom: 2rem;">${item.translation}</div>`;

        // Noun Plural Form (if available)
        if (item.plural) {
            content += `
                <div class="noun-forms" style="margin-bottom: 1.5rem; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; display: flex; align-items: center; gap: 1rem;">
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Plural Form:</span>
                    <span style="font-size: 1.1rem; font-weight: 600; color: var(--secondary-color);">${item.plural}</span>
                </div>
            `;
        }

        // Verb Timeline (Full Version in Modal)
        if (item.type === 'verb') {
            content += `
                <div class="verb-timeline">
                    <div class="verb-connector"></div>
                    <div class="verb-form">
                        <span class="form-label">V1</span>
                        <span class="form-word">${item.v1}</span>
                    </div>
                    <div class="verb-form">
                        <span class="form-label">V2</span>
                        <span class="form-word">${item.v2}</span>
                    </div>
                    <div class="verb-form">
                        <span class="form-label">V3</span>
                        <span class="form-word">${item.v3}</span>
                    </div>
                </div>
            `;
        }

        // Examples / Tenses
        if (item.tenses) {
            content += `<div class="tenses-box">`;
            content += `<h4 class="tenses-title">Examples in Tenses</h4>`;

            for (const [tenseName, example] of Object.entries(item.tenses)) {
                content += `
                    <div class="tense-item">
                        <span class="tense-name">${tenseName}</span>
                        <p class="tense-example">${example}</p>
                    </div>
                `;
            }
            content += `</div>`;
        } else if (item.multiexamples) {
            content += `<div class="multi-example-container">`;
            item.multiexamples.forEach(ex => {
                content += `
                    <div class="multi-example-item">
                        <span class="multi-example-label">${ex.label}</span>
                        <p class="example-text">${ex.text}</p>
                    </div>
                 `;
            });
            content += `</div>`;
        } else if (item.example) {
            content += `
                <div class="example-box">
                    <span class="example-label">Example:</span>
                    <p class="example-text">${item.example}</p>
                </div>
            `;
        }

        modalBody.innerHTML = content;

        // Add click listeners to badges in modal
        const badges = modalBody.querySelectorAll('.clickable-badge');
        badges.forEach(badge => {
            badge.addEventListener('click', (e) => {
                // e.stopPropagation(); // Not needed as we want to potentially close modal and search? 
                // Currently user probably wants to search. Let's close modal and search.
                const term = e.target.dataset.search;
                closeModal();
                searchInput.value = term;
                searchInput.dispatchEvent(new Event('input'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        wordModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        wordModal.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalBody.innerHTML = '';
        }, 300); // Wait for transition
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});
