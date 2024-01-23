async function products() {
  const result = await fetch("https://dummyjson.com/products");
  const response = await result.json();
  const MobileProducts = response.products;

  console.log(response);

  const view = MobileProducts.map(function (mob) {
    return `
      <h2>${mob.title}</h2>
      <img src="${mob.thumbnail}" />
    `;
  });

  document.querySelector(".Mobiles").innerHTML = view.join("");
}

// Call the function
products();
