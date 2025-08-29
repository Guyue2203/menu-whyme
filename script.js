// 完整的菜单数据直接嵌入 - 无需网络请求
const dishes = [
  { "id": 1, "name": "麻辣烫" },
  { "id": 2, "name": "鸡公煲" },
  { "id": 3, "name": "卤肉卷" },
  { "id": 4, "name": "火鸡面" },
  { "id": 5, "name": "卤粉" },
  { "id": 6, "name": "兰州拉面" },
  { "id": 7, "name": "烤冷面" },
  { "id": 8, "name": "蛋炒饭" },
  { "id": 9, "name": "麻薯" },
  { "id": 10, "name": "面包" },
  { "id": 11, "name": "馄饨" },
  { "id": 12, "name": "烤肉" },
  { "id": 13, "name": "轻食" },
  { "id": 14, "name": "新疆炒米粉" },
  { "id": 15, "name": "泡菜" },
  { "id": 16, "name": "福鼎肉片" },
  { "id": 17, "name": "凉皮" },
  { "id": 18, "name": "凉面" },
  { "id": 19, "name": "汉堡" },
  { "id": 20, "name": "烧烤" },
  { "id": 21, "name": "麻辣香锅" },
  { "id": 22, "name": "煲仔饭" },
  { "id": 23, "name": "石锅拌饭" },
  { "id": 24, "name": "重庆小面" },
  { "id": 25, "name": "煎饼果子" },
  { "id": 26, "name": "铁板饭" },
  { "id": 27, "name": "卷饼" },
  { "id": 28, "name": "饭团" },
  { "id": 29, "name": "盖饭" },
  { "id": 30, "name": "三明治" },
  { "id": 31, "name": "刀削面" },
  { "id": 32, "name": "泡面" },
  { "id": 33, "name": "小龙虾" },
  { "id": 34, "name": "串串火锅" },
  { "id": 35, "name": "烤馕" },
  { "id": 36, "name": "自选菜" },
  { "id": 37, "name": "粥" },
  { "id": 38, "name": "炸鸡" },
  { "id": 39, "name": "过桥米线" },
  { "id": 40, "name": "水果捞" },
  { "id": 41, "name": "关东煮" },
  { "id": 42, "name": "塔可" },
  { "id": 43, "name": "锅盔" },
  { "id": 44, "name": "肠粉" },
  { "id": 45, "name": "酸辣粉" },
  { "id": 46, "name": "冒菜" },
  { "id": 47, "name": "黄焖鸡" },
  { "id": 48, "name": "意面" },
  { "id": 49, "name": "水饺" },
  { "id": 50, "name": "抄手" },
  { "id": 51, "name": "蛋糕" },
  { "id": 52, "name": "卤菜" },
  { "id": 53, "name": "披萨" },
  { "id": 54, "name": "锅贴" },
  { "id": 55, "name": "鱼粉" },
  { "id": 56, "name": "炸串" },
  { "id": 57, "name": "钵钵鸡" },
  { "id": 58, "name": "水煮鱼片" },
  { "id": 59, "name": "海底捞" },
  { "id": 60, "name": "章鱼小丸子" },
  { "id": 61, "name": "烧饼" },
  { "id": 62, "name": "飞饼" },
  { "id": 63, "name": "酱香饼" },
  { "id": 64, "name": "叉烧饭" },
  { "id": 65, "name": "冰粉" },
  { "id": 66, "name": "自选小料糖水" },
  { "id": 67, "name": "油泼面" },
  { "id": 68, "name": "烤鸭" },
  { "id": 69, "name": "包子" },
  { "id": 70, "name": "小碗菜" },
  { "id": 71, "name": "冷面" },
  { "id": 72, "name": "干锅" },
  { "id": 73, "name": "麻辣拌" },
  { "id": 74, "name": "土豆粉" },
  { "id": 75, "name": "沙拉" },
  { "id": 76, "name": "鸭血粉丝" },
  { "id": 77, "name": "烧鸭饭" },
  { "id": 78, "name": "擂饭" },
  { "id": 79, "name": "鸡蛋灌饼" },
  { "id": 80, "name": "炒河粉" },
  { "id": 81, "name": "肉夹馍" },
  { "id": 82, "name": "青团" },
  { "id": 83, "name": "汤圆" },
  { "id": 84, "name": "煎饺" },
  { "id": 85, "name": "烤包子" },
  { "id": 86, "name": "烤鸡腿" },
  { "id": 87, "name": "车轮饼" },
  { "id": 88, "name": "奶酪包" },
  { "id": 89, "name": "冒烤鸭" },
  { "id": 90, "name": "芋泥冰" },
  { "id": 91, "name": "藕粉" },
  { "id": 92, "name": "梅菜扣肉" },
  { "id": 93, "name": "灌汤包" },
  { "id": 94, "name": "炒年糕" },
  { "id": 95, "name": "舒芙蕾" }
];

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
  '灌汤包': '🥟', '炒年糕': '🍚', '舒芙蕾': '🍰'
};

// 初始化
function init() {
  updateStats();
  document.querySelector('.food-icon').style.animation = 'bounce 1s ease-in-out';
  document.querySelector('.placeholder p').textContent = '点击下方按钮发现今日美食';
}

// 更新统计信息
function updateStats() {
  document.getElementById('totalDishes').textContent = dishes.length;
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
    alert('菜单为空！');
    return;
  }
  
  const dish = dishes[Math.floor(Math.random() * dishes.length)];
  showRecommendation(dish);
}

// 事件监听
document.addEventListener('DOMContentLoaded', init);
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
