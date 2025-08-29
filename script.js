let dishes = [];
let selectedCount = 0;

// 食物表情映射
const foodEmojis = {
  '麻辣烫': '🌶️', '鸡公煲': '🐔', '卤肉卷': '🌯', '火鸡面': '🍜',
  '卤粉': '🍜', '兰州拉面': '🍜', '烤冷面': '🥞', '蛋炒饭': '🍳',
  '麻薯': '🍡', '面包': '🍞', '馄饨': '🥟', '烤肉': '🍖',
  '轻食': '🥗', '新疆炒米粉': '🍜', '泡菜': '🥬', '福鼎肉片': '🥩',
  '凉皮': '🍜', '凉面': '🍜', '汉堡': '🍔', '烧烤': '🍖',
  '麻辣香锅': '🌶️', '煲仔饭': '🍚', '石锅拌饭': '🍚', '重庆小面': '🍜',
  '煎饼果子': '🥞', '铁板饭': '🍳', '卷饼': '🌯', '饭团': '🍙',
  '盖饭': '🍚', '三明治': '🥪', '刀削面': '🍜', '泡面': '🍜',
  '小龙虾': '🦞', '串串火锅': '🍢', '烤馕': '🫓', '自选菜': '🍽️',
  '粥': '🥣', '炸鸡': '🍗', '过桥米线': '🍜', '水果捞': '🍎',
  '关东煮': '🍢', '塔可': '🌮', '锅盔': '🥙', '肠粉': '🍚',
  '酸辣粉': '🍜', '冒菜': '🌶️', '黄焖鸡': '🐔', '意面': '🍝',
  '水饺': '🥟', '抄手': '🥟', '蛋糕': '🍰', '卤菜': '🥘',
  '披萨': '🍕', '锅贴': '🥟', '鱼粉': '🐟', '炸串': '🍢',
  '钵钵鸡': '🐔', '水煮鱼片': '🐟', '海底捞': '🍲', '章鱼小丸子': '🐙',
  '烧饼': '🥞', '飞饼': '🥞', '酱香饼': '🥞', '叉烧饭': '🍚',
  '冰粉': '🍧', '自选小料糖水': '🍬', '油泼面': '🍜', '烤鸭': '🦆',
  '包子': '🥟', '小碗菜': '🥘', '冷面': '🍜', '干锅': '🥘',
  '麻辣拌': '🌶️', '土豆粉': '🍜', '沙拉': '🥗', '鸭血粉丝': '🦆',
  '烧鸭饭': '🍚', '擂饭': '🍚', '鸡蛋灌饼': '🥞', '炒河粉': '🍜',
  '肉夹馍': '🥙', '青团': '🍡', '汤圆': '🍡', '煎饺': '🥟',
  '烤包子': '🥟', '烤鸡腿': '🍗', '车轮饼': '🥞', '奶酪包': '🧀',
  '冒烤鸭': '🦆', '芋泥冰': '🍠', '藕粉': '🌸', '梅菜扣肉': '🥩',
  '灌汤包': '🥟', '炒年糕': '🍚', '舒芙蕾': '🍰', '再选一次': '🎲'
};

// 从 menu.json 读取菜谱
fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    dishes = data;
    updateStats();
    // 添加加载完成动画
    document.querySelector('.food-icon').style.animation = 'bounce 1s ease-in-out';
  })
  .catch(err => {
    console.error("读取 menu.json 出错:", err);
    document.querySelector('.placeholder p').textContent = '菜单加载失败，请刷新页面重试';
  });

// 更新统计信息
function updateStats() {
  document.getElementById('totalDishes').textContent = dishes.filter(d => d.name !== '再选一次').length;
  document.getElementById('selectedCount').textContent = selectedCount;
}

// 获取食物对应的emoji
function getFoodEmoji(foodName) {
  return foodEmojis[foodName] || '🍽️';
}

// 显示推荐结果
function showRecommendation(dish) {
  const resultContainer = document.getElementById('resultContainer');
  const resultText = document.getElementById('result');
  const resultEmoji = document.getElementById('resultEmoji');
  
  // 更新文本和表情
  resultText.textContent = dish.name;
  resultEmoji.textContent = getFoodEmoji(dish.name);
  
  // 显示结果容器
  resultContainer.style.display = 'block';
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // 更新计数
  selectedCount++;
  updateStats();
}

// 随机推荐功能
function recommendDish() {
  if (dishes.length === 0) {
    alert('菜单还没有加载好呢！');
    return;
  }
  
  // 过滤掉"再选一次"
  const validDishes = dishes.filter(d => d.name !== '再选一次');
  
  if (validDishes.length === 0) {
    alert('没有可选的菜品！');
    return;
  }
  
  const dish = validDishes[Math.floor(Math.random() * validDishes.length)];
  showRecommendation(dish);
}

// 事件监听
document.getElementById("chooseBtn").addEventListener("click", recommendDish);
document.getElementById("tryAgainBtn").addEventListener("click", recommendDish);

// 键盘支持
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    recommendDish();
  }
});

// 添加按钮点击效果
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});
