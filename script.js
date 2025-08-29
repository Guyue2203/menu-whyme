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

// 从 menu.json 读取菜谱 - 微信浏览器兼容版本
async function loadMenu() {
  try {
    // 显示加载状态
    document.querySelector('.placeholder p').textContent = '正在加载美味菜单...';
    
    // 添加时间戳避免微信缓存
    const timestamp = new Date().getTime();
    const response = await fetch(`menu.json?t=${timestamp}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    dishes = data;
    updateStats();
    
    // 添加加载完成动画
    document.querySelector('.food-icon').style.animation = 'bounce 1s ease-in-out';
    document.querySelector('.placeholder p').textContent = '点击下方按钮发现今日美食';
    
  } catch (error) {
    console.error("读取 menu.json 出错:", error);
    
    // 微信浏览器特殊处理 - 使用XHR作为备选
    console.log("尝试XHR方式加载...");
    try {
      await loadMenuWithXHR();
    } catch (xhrError) {
      console.error("XHR也失败了，使用备用菜单", xhrError);
      useBackupMenu();
    }
  }
}

// 使用XMLHttpRequest作为微信浏览器的备选方案
function loadMenuWithXHR() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const timestamp = new Date().getTime();
    
    xhr.open('GET', `menu.json?t=${timestamp}`, true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.setRequestHeader('Pragma', 'no-cache');
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          dishes = JSON.parse(xhr.responseText);
          updateStats();
          document.querySelector('.food-icon').style.animation = 'bounce 1s ease-in-out';
          document.querySelector('.placeholder p').textContent = '点击下方按钮发现今日美食';
          resolve();
        } catch (e) {
          reject(e);
        }
      } else {
        reject(new Error(`XHR failed with status ${xhr.status}`));
      }
    };
    
    xhr.onerror = function() {
      reject(new Error('XHR request failed'));
    };
    
    xhr.send();
  });
}

// 使用备用菜单
function useBackupMenu() {
  dishes = getBackupMenu();
  updateStats();
  document.querySelector('.placeholder p').textContent = '使用本地菜单，点击下方按钮开始';
}

// 微信浏览器优化的备用菜单数据
function getBackupMenu() {
  // 直接返回完整的菜单数据，避免额外的网络请求
  return [
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
}

// 启动加载
loadMenu();

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
