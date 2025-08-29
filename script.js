let dishes = [];

// 从 menu.json 读取菜谱
fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    dishes = data;
  })
  .catch(err => {
    console.error("读取 menu.json 出错:", err);
  });

document.getElementById("chooseBtn").addEventListener("click", () => {
  if (dishes.length === 0) {
    document.getElementById("result").textContent = "菜单还没有加载好呢！";
    return;
  }
  const dish = dishes[Math.floor(Math.random() * dishes.length)];
  document.getElementById("result").textContent = "推荐吃：" + dish.name;
});
