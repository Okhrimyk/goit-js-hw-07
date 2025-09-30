const catList = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");
const titleList = document.querySelectorAll(".item h2")
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const elementCount = item.querySelectorAll("ul li").length;
    const elementStyle = item.querySelectorAll("ul li");
    const elementStyleList = item.querySelectorAll("ul")

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementCount}`);
    elementStyle.forEach(item => {
        item.style.border = " 1px solid #808080";
        item.style.borderRadius = "4px";
        item.style.padding = "8px 16px";
        item.style.marginBottom = "8px";
        item.style.maxWidth = "360px";
        item.style.height = "40px";
    })
    elementStyleList.forEach(item => {
        item.style.display = "block";
        item.style.padding = "0px";
        item.style.justifyContent ="center";
    })
    titleList.forEach(item => {
        item.style.margin = "16px 0"
    })
})
itemList.forEach(item => {
item.style.backgroundColor = "#f6f6fe";
item.style.borderRadius = "8px";
item.style.width = "392px";
item.style.padding = "16px";
item.style.margin = "24px";
})
