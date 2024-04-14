const productForm = document.getElementById('product-form');
const productList = document.querySelector('#product-list tbody');
const newProductBtn = document.getElementById('new-product-btn');

productForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;
  const productValue = document.getElementById('product-value').value;
  const productAvailable = document.getElementById('product-available').value;
  
  const newRow = productList.insertRow();
  newRow.innerHTML = `
    <td>${productName} - ${productDescription}</td>
    <td>${productValue}</td>
  `;
  
  Array.from(productList.rows)
    .sort((a, b) => parseFloat(a.cells[1].textContent) - parseFloat(b.cells[1].textContent))
    .forEach(row => productList.appendChild(row));
  
  productForm.reset();
});

newProductBtn.addEventListener('click', function() {
  document.getElementById('form-container').style.display = 'block';
});

