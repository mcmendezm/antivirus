function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    const registerButton = document.querySelector('.btn.register');
    const loginButton = document.querySelector('.btn.login');

    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('visible');
        registerButton.classList.add('hidden');
        loginButton.classList.add('hidden');
    } else {
        searchInput.classList.remove('visible');
        searchInput.classList.add('hidden');
        registerButton.classList.remove('hidden');
        loginButton.classList.remove('hidden');
    }
}