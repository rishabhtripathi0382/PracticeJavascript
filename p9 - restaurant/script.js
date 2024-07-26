document.addEventListener('DOMContentLoaded', function(){
    const menuData = [
        { name: 'Rajma Chaval', description: 'Rajma, Basmati rice, Onion, etc.', price: '₹ 180' },
        { name: 'Chole Bhature', description: 'Chole, Bhature, Chutney, etc.', price: '₹ 150' },
        { name: 'Vada Pav', description: 'Potato, Onion, Chutney, Pav, etc.', price: '₹ 20' }
      ];
      const menuContainer = document.getElementById('menu-items');

      menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
      });
});

