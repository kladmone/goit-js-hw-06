const categoriesList = document.querySelector("#categories").children;

console.log(`Number of categories: ${categoriesList.length}`);

for (const item of categoriesList) {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelector("ul").children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
