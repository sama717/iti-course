let btn = document.getElementById("btn");
let search = document.getElementById("search");
let resultsContainer = document.getElementById("results"); 

let products = [
    {
        name: "iPhone",
        price: 1000,
        description: "Apple iPhone 13 Phone"
    },
    {
        name: "Samsung",
        price: 950,
        description: "Samsung Galaxy Phone Android"
    },
    {
        name: "Oppo",
        price: 800,
        description: "Oppo 3310 Phone Android"
    }
];

btn.addEventListener("click", function() {
    let filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(search.value.toLowerCase()) ||
               product.description.toLowerCase().includes(search.value.toLowerCase());
    });
    
    resultsContainer.innerHTML = "";

    let table = document.createElement("table");
    table.classList.add("results-table"); 

    let headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Name</th><th>Price</th><th>Description</th>";
    table.appendChild(headerRow);

    for (let i = 0; i < filteredProducts.length; i++) {
        let product = filteredProducts[i];
        let row = document.createElement("tr");
        row.innerHTML = `<td>${product.name}</td><td>$${product.price}</td><td>${product.description}</td>`;
        table.appendChild(row);
    }

    resultsContainer.appendChild(table);
});
