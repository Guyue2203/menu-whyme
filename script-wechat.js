// 微信浏览器专用版本 - 直接内嵌菜单数据
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
  { "id": 50, "name": "抄手" }
];

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
  '水饺': '🥟', '抄手': '🥟'
};

let selectedCount = 0;

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
  
  resultText.textContent = dish.name;
  resultEmoji.textContent = getFoodEmoji(dish.name);
  
  resultContainer.style.display = 'block';
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
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