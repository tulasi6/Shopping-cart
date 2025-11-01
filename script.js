const options = document.querySelectorAll('.option');
const totalPrice = document.getElementById('totalPrice');

options.forEach(option => {
    option.addEventListener('click', function() {
        // Dropdowns are hidden
        options.forEach(opt => {
            opt.classList.remove('selected');
            const selectors = opt.querySelector('.size-selectors');
            if (selectors) selectors.style.display = 'none';
        });
        
        // Shows dropdown for the options
        this.classList.add('selected');
        const selectedSelectors = this.querySelector('.size-selectors');
        if (selectedSelectors) selectedSelectors.style.display = 'block';
        
        const price = this.getAttribute('data-price');
        totalPrice.textContent = `DKK ${price}`;
    });
});

document.querySelector('.add-to-cart').addEventListener('click', function() {
    const selected = document.querySelector('.option.selected');
    const optionNum = selected.getAttribute('data-option');
    const price = selected.getAttribute('data-price');
    alert(`Added ${optionNum} pair(s) to cart - Total: DKK ${price}`);
});