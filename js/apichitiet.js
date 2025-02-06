const url = "https://67767e6612a55a9a7d0be92f.mockapi.io/Nikeshoes";

async function getKitchenItems() {
  const response = await fetch(url);
  const data = await response.json();
  addKitchenItem(data);
}
getKitchenItems();

function addKitchenItem(items) {
  const showItems = document.getElementById("showItems");
  for (let i = 0; i < items.length; i++) {
    showItems.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${items[i].Image}" alt="">
        <div class="card-body">
             <h5 class="card-title">${items[i].Name}</h5>
            <p class="card-text">${items[i].Price}</p>
            <a href="./detail.html?id=${items[i].id}" class="btn btn-primary">Detail</a>
        </div>
    </div>
    `;
  }
}