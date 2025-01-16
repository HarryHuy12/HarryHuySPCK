const url = "https://67767e6612a55a9a7d0be92f.mockapi.io/Nikeshoes";


async function getShoes() {
  const response = await fetch(url);
  const data = await response.json();
  showShoes(data);
}

function showShoes(data) {
  const showShoes = document.getElementById("showShoes");
  for (let i = 0; i < data.length; i++) {
    showShoes.innerHTML += `
    <div class="card" style="width: 35rem; height : 44rem;">
        <img src="${data[i].Image}">
        <div class="card-body">
          <h5 class="card-title">${data[i].Name}</h5>
          <p class="text">${data[i].Price}</p> 
        </div>
      </div>
        `;
  }
}

function searchShoes() 
{
  let valueSearch = document.getElementById("search").value;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let productSearch = data.filter(value => {
      return value.Name.toLowerCase().includes(valueSearch.toLowerCase());
    });
    document.getElementById("showShoes").innerHTML = '';
    let product = '';
    productSearch.map(value=> product += `<div class="card" style="width: 35rem; height : 44rem;">
        <img src="${value.Image}">
        <div class="card-body">
          <h5 class="card-title">${value.Name}</h5>
          <p class="text">${value.Price}</p> 
        </div>
      </div>`);
      if (product == '') {
        product = 'Not Found';
      }else{
        document.getElementById("showShoes").innerHTML = product;
      }
    
  })
  .catch(error => console.log(error));
}
//${}: dùng để bỏ thuộc tính vào trong dấu ``

getShoes();

