// dăt tên biên cho id content
const content = document.getElementById("content");
// dắt tên biên cho id search
const search = document.getElementById("search");

// Lấy dữ liệu từ API
async function getData() {
  try {
    const response = await fetch(
      "https://68aad6e8909a5835049d1f7a.mockapi.io/foods"
    );
    if (!response.ok) throw new Error("Lỗi mạng hoặc API"); // Kiểm tra lỗi
    const datafoods = await response.json(); // Chuyển phản hồi thành JSON
    console.log(datafoods); // Xử lý dữ liệu
    renderUI(datafoods);
  } catch (error) {
    console.error("Lỗi:", error.message); // Xử lý lỗi
  }
}
getData();

//funtion renderUI, datafoods for contentItem
function renderUI(datafoods) {
  datafoods.forEach((food) => {
    const contentItem = document.createElement("div");
    contentItem.classList.add("card");
    contentItem.innerHTML = `
       <article class="card">
          <span class="badge">${food.category}</span>
          <img
            class="thumb"
            src="${food.image}"
            alt="Phở Bò"
            loading="lazy"
          />
          <div class="body" bis_skin_checked="1">
            <h3 class="name">${food.name}</h3>
            <p class="desc">
              ${food.description}
            </p>
            <div class="row" bis_skin_checked="1">
              <span class="price">${food.price} VND</span>
              <button class="add-btn">Thêm</button>
            </div>
          </div>
        </article>
    `;
    content.appendChild(contentItem);
  });
}

