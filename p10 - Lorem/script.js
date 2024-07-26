function generateLoremIpsum() {
    const paragraphs = document.getElementById('paragraphs').value;
    const loremText = document.getElementById('lorem-text');
    loremText.innerHTML = '';
  
    for (let i = 0; i < paragraphs; i++) {
      const p = document.createElement('p');
      p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      loremText.appendChild(p);
    }
  }
  