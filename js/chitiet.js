const product = document.querySelector("#detail");
const id = new URLSearchParams(window.location.search).get("id");
const url = `https://67767e6612a55a9a7d0be92f.mockapi.io/Nikeshoes/${id}`;

async function getKitchenItem(url) {
  const response = await fetch(url);
  const data = await response.json();
  product.innerHTML = `
    <div class = "box">

        <div class = "box1">
            <div class = "hinhanh">
              <img src="${data.Image}" alt="">
            </div>
          </div>
  
          <div class = "box2">
            <div class = "tieude">
              <h3>${data.Name}</h3>
            </div>
            <div class = "shoe">
              <p>Men's shoes</p>
            </div>
            <div class = "para">
              <p>${data.Price}</p>
              <p class = "pa">Select a color</p>
            </div>
            <div class = "luachon">
              <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bae357-0e9d-48c1-92c3-f5173bb734a9/WMNS+AIR+JORDAN+1+LOW.png" alt="">
              <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3aae78bd-26c4-42d3-ba2c-bf833aa2958c/WMNS+AIR+JORDAN+1+LOW.png" alt="">
              <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a6bc590c-60b8-4fcb-b51a-8e4a28c4170c/WMNS+AIR+JORDAN+1+LOW.png" alt="">
              <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b27504f6-8fd1-408b-a8f4-4da2f12cdba7/WMNS+AIR+JORDAN+1+LOW.png" alt="">
            </div>
            <div class = "select">
              <p class = "chon">Select size</p>
            </div>
          <div>
            <div class = "butt">
              <button class = "nut"><p class = "pa">EU 35.5</p></button>
              <button class = "nut"><p class = "pa">EU 36</p></button>
              <button class = "nut"><p class = "pa">EU 36.5</p></button>
              <button class = "nut"><p class = "pa">EU 37</p></button>
            </div>
            <div class = "butt1">
              <button class = "nut"><p class = "pa">EU 37.5</p></button>
              <button class = "nut"><p class = "pa">EU 38</p></button>
              <button class = "nut"><p class = "pa">EU 38.5</p></button>
              <button class = "nut"><p class = "pa">EU 39</p></button>
            </div>
          </div>

          <div class = "add">
            <h3><button><a href="./camon.html">Add to cart</a></button></h3>
          </div>
  
        </div>
    </div>
        `;
}

getKitchenItem(url);