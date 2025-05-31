// 應用程式數據
const appData = {
  "itinerary": {
    "day1": {
      "title": "第一天：抵達與初探錦市場",
      "attractions": [
        {
          "name": "錦市場",
          "name_en": "Nishiki Market",
          "address": "京都府京都市中京區錦小路通",
          "google_maps": "https://maps.google.com/maps?q=錦市場,京都府京都市中京區錦小路通",
          "coordinates": [35.0041, 135.7677],
          "description": "被稱為京都廚房，可品嚐各式京都傳統小食",
          "opening_hours": "09:00-18:00",
          "entrance_fee": "免費",
          "estimated_time": "2-3小時"
        },
        {
          "name": "二條城",
          "name_en": "Nijo Castle",
          "address": "京都府京都市中京區二条通堀川西入二条城町541",
          "google_maps": "https://maps.google.com/maps?q=二条城,京都府京都市中京區二条通堀川西入二条城町541",
          "coordinates": [35.0142, 135.7483],
          "description": "德川家康的京都住所，冬季有精彩的夜間點燈活動",
          "opening_hours": "08:45-17:00",
          "entrance_fee": "1,030日圓",
          "estimated_time": "2小時"
        }
      ]
    },
    "day2": {
      "title": "第二天：東山區寺廟與祇園燈飾之旅",
      "attractions": [
        {
          "name": "清水寺",
          "name_en": "Kiyomizu-dera",
          "address": "京都府京都市東山區清水1-294",
          "google_maps": "https://maps.google.com/maps?q=清水寺,京都府京都市東山區清水1-294",
          "coordinates": [35.0030, 135.7854],
          "description": "世界文化遺產，著名的清水舞台可俯瞰京都市景",
          "opening_hours": "06:00-18:00",
          "entrance_fee": "500日圓",
          "estimated_time": "2-3小時"
        },
        {
          "name": "八坂神社",
          "name_en": "Yasaka Shrine",
          "address": "京都府京都市東山區祇園町北側625",
          "google_maps": "https://maps.google.com/maps?q=八坂神社,京都府京都市東山區祇園町北側625",
          "coordinates": [35.0031, 135.7786],
          "description": "祈求結緣美容的著名神社，全天24小時開放參拜",
          "opening_hours": "24小時",
          "entrance_fee": "免費",
          "estimated_time": "1小時"
        }
      ]
    },
    "day3": {
      "title": "第三天：金閣寺與嵐山懷石泡湯饗宴",
      "attractions": [
        {
          "name": "金閣寺(鹿苑寺)",
          "name_en": "Kinkaku-ji",
          "address": "京都府京都市北區金閣寺町1",
          "google_maps": "https://maps.google.com/maps?q=金閣寺,京都府京都市北區金閣寺町1",
          "coordinates": [35.0394, 135.7293],
          "description": "金光閃閃的建築倒映在鏡湖池中，是京都最著名的景點",
          "opening_hours": "09:00-17:00",
          "entrance_fee": "500日圓",
          "estimated_time": "1.5小時"
        },
        {
          "name": "嵐山竹林小徑",
          "name_en": "Arashiyama Bamboo Grove",
          "address": "京都府京都市右京區嵯峨天龍寺車道町",
          "google_maps": "https://maps.google.com/maps?q=嵐山竹林小徑,京都府京都市右京區嵯峨天龍寺車道町",
          "coordinates": [35.0150, 135.6723],
          "description": "穿越竹林的神秘小徑，陽光透過竹葉灑下絕美光影",
          "opening_hours": "24小時",
          "entrance_fee": "免費",
          "estimated_time": "1小時"
        }
      ]
    },
    "day4": {
      "title": "第四天：哲學之道與伏見清酒薈萃",
      "attractions": [
        {
          "name": "哲學之道",
          "name_en": "Philosopher's Path",
          "address": "京都府京都市左京區",
          "google_maps": "https://maps.google.com/maps?q=哲學之道,京都府京都市左京區",
          "coordinates": [35.0264, 135.7942],
          "description": "全長約2公里的散步道，春季櫻花盛開美不勝收",
          "opening_hours": "24小時",
          "entrance_fee": "免費",
          "estimated_time": "1.5小時"
        },
        {
          "name": "銀閣寺(慈照寺)",
          "name_en": "Ginkaku-ji",
          "address": "京都府京都市左京區銀閣寺町2",
          "google_maps": "https://maps.google.com/maps?q=銀閣寺,京都府京都市左京區銀閣寺町2",
          "coordinates": [35.0269, 135.7981],
          "description": "展現侘寂美學的銀閣與精美的枯山水庭園",
          "opening_hours": "08:30-17:00",
          "entrance_fee": "500日圓",
          "estimated_time": "1.5小時"
        },
        {
          "name": "伏見稻荷大社",
          "name_en": "Fushimi Inari Shrine",
          "address": "京都府京都市伏見區深草藪之內町68",
          "google_maps": "https://maps.google.com/maps?q=伏見稻荷大社,京都府京都市伏見區深草藪之內町68",
          "coordinates": [34.9671, 135.7727],
          "description": "千本鳥居的壯觀景象，是京都最著名的拍照景點",
          "opening_hours": "24小時",
          "entrance_fee": "免費",
          "estimated_time": "2-3小時"
        }
      ]
    },
    "day5": {
      "title": "第五天：中世古城巡禮與京都站購物返程",
      "attractions": [
        {
          "name": "東寺",
          "name_en": "To-ji Temple",
          "address": "京都府京都市南區九條町1",
          "google_maps": "https://maps.google.com/maps?q=東寺,京都府京都市南區九條町1",
          "coordinates": [34.9809, 135.7473],
          "description": "五重塔是京都的象徵之一，冬季雪景特別美麗",
          "opening_hours": "05:00-17:00",
          "entrance_fee": "600日圓",
          "estimated_time": "1.5小時"
        }
      ]
    }
  },
  "tickets": {
    "transportation": [
      {
        "name": "關西機場 HARUKA 特快車票",
        "platform": "Klook",
        "url": "https://www.klook.com/zh-TW/activity/1008-kansai-airport-express-haruka-ticket-japan/",
        "price": "單程 1,910日圓",
        "description": "關西機場直達京都站約75分鐘，最便捷的交通方式"
      },
      {
        "name": "京阪電車京都大阪觀光乘車券",
        "platform": "Klook",
        "url": "https://www.klook.com/zh-TW/activity/9882-kyoto-osaka-sightseeing-pass-japan/",
        "price": "一日券 1,000日圓",
        "description": "無限次搭乘京阪本線，可到伏見稻荷、祇園等景點"
      },
      {
        "name": "京都觀光一日券",
        "platform": "KKday",
        "url": "https://www.kkday.com/zh-tw/product/5228-keihan-kyoto-sightseeing-pass-japan",
        "price": "一日券 1,000日圓，24小時券 1,200日圓",
        "description": "京阪電車指定區間無限次搭乘，享有景點優惠"
      }
    ],
    "experiences": [
      {
        "name": "京都和服體驗",
        "platform": "Klook",
        "url": "https://www.klook.com/zh-TW/activity/2962-kyoto-kimono-rental-japan/",
        "price": "約 2,500日圓起",
        "description": "清水寺周邊和服體驗，包含髮型設計和攝影服務"
      },
      {
        "name": "嵐山嵯峨野小火車",
        "platform": "KKday",
        "url": "https://www.kkday.com/zh-tw/product/5230-sagano-romantic-train-japan",
        "price": "約 880日圓",
        "description": "穿越嵐山的觀光列車，春季賞櫻秋季賞楓絕佳"
      },
      {
        "name": "金閣寺+清水寺+伏見稻荷一日遊",
        "platform": "Klook",
        "url": "https://www.klook.com/zh-TW/activity/9884-kyoto-golden-pavilion-kiyomizu-fushimi-inari-day-tour-japan/",
        "price": "約 3,000日圓起",
        "description": "包含中文導遊和遊覽車接送，適合時間有限的旅客"
      }
    ],
    "dining": [
      {
        "name": "南禪寺順正傳統豆腐會席料理",
        "platform": "KKday",
        "url": "https://www.kkday.com/zh-tw/product/5235-nanzenji-junsei-tofu-kaiseki-japan",
        "price": "約 4,500日圓起",
        "description": "享用傳統京都豆腐料理，體驗正宗日式用餐文化"
      }
    ]
  },
  "budget": {
    "total": 30000,
    "categories": [
      {"name": "交通費", "amount": 6000, "percentage": 20, "color": "#d32f2f"},
      {"name": "住宿費", "amount": 8100, "percentage": 27, "color": "#f57c00"},
      {"name": "餐飲費", "amount": 9000, "percentage": 30, "color": "#388e3c"},
      {"name": "門票", "amount": 2400, "percentage": 8, "color": "#1976d2"},
      {"name": "購物", "amount": 4500, "percentage": 15, "color": "#7b1fa2"}
    ]
  }
};

// 應用程式狀態
let currentPage = 'dashboard';
let currentDay = 1;
let budgetChart = null;

// DOM 元素
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const dayTabs = document.querySelectorAll('.day-tab');
const dayContent = document.getElementById('day-content');
const modal = document.getElementById('attraction-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

// 初始化應用程式
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDayTabs();
    initializeQuickActions();
    initializeDashboardOverview();
    initializeBudgetChart();
    initializeTickets();
    initializeMap();
    initializeBudgetCalculator();
    initializeModal();
    
    // 顯示第一天的行程
    showDayContent(1);
});

// 導航功能
function initializeNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.dataset.page;
            showPage(targetPage);
            updateActiveNavButton(this);
        });
    });
}

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
    }
}

function updateActiveNavButton(activeButton) {
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// 天數標籤功能
function initializeDayTabs() {
    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const day = parseInt(this.dataset.day);
            showDayContent(day);
            updateActiveDayTab(this);
        });
    });
}

function updateActiveDayTab(activeTab) {
    dayTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
}

function showDayContent(day) {
    currentDay = day;
    const dayData = appData.itinerary[`day${day}`];
    
    if (!dayData) return;
    
    const attractionsHtml = dayData.attractions.map(attraction => 
        createAttractionCard(attraction)
    ).join('');
    
    dayContent.innerHTML = `
        <div class="day-header">
            <h3>${dayData.title}</h3>
        </div>
        <div class="attractions-grid">
            ${attractionsHtml}
        </div>
    `;
    
    // 重新綁定事件監聽器
    bindAttractionEvents();
}

function createAttractionCard(attraction) {
    return `
        <div class="attraction-card">
            <div class="attraction-header">
                <div class="attraction-name">${attraction.name}</div>
                <div class="attraction-name-en">${attraction.name_en}</div>
            </div>
            <div class="attraction-body">
                <div class="attraction-info">
                    <div class="info-item">
                        <span class="info-label">地址:</span>
                        <span>${attraction.address}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">開放時間:</span>
                        <span>${attraction.opening_hours}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">門票費用:</span>
                        <span>${attraction.entrance_fee}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">建議時間:</span>
                        <span>${attraction.estimated_time}</span>
                    </div>
                </div>
                <p class="attraction-description">${attraction.description}</p>
                <div class="attraction-actions">
                    <a href="${attraction.google_maps}" target="_blank" class="btn-maps">
                        📍 Google Maps 導航
                    </a>
                    <button class="btn-details" onclick="showAttractionDetails('${attraction.name}')">
                        詳細資訊
                    </button>
                </div>
            </div>
        </div>
    `;
}

function bindAttractionEvents() {
    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const attractionName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showAttractionDetails(attractionName);
        });
    });
}

// 快速操作
function initializeQuickActions() {
    const quickActionButtons = document.querySelectorAll('[data-action]');
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            handleQuickAction(action);
        });
    });
}

function handleQuickAction(action) {
    switch(action) {
        case 'view-itinerary':
            showPage('itinerary');
            updateActiveNavButton(document.querySelector('[data-page="itinerary"]'));
            break;
        case 'view-tickets':
            showPage('tickets');
            updateActiveNavButton(document.querySelector('[data-page="tickets"]'));
            break;
        case 'view-map':
            showPage('map');
            updateActiveNavButton(document.querySelector('[data-page="map"]'));
            break;
    }
}

// 儀表板總覽
function initializeDashboardOverview() {
    const dayItems = document.querySelectorAll('.day-item');
    dayItems.forEach(item => {
        item.addEventListener('click', function() {
            const day = parseInt(this.dataset.day);
            showPage('itinerary');
            updateActiveNavButton(document.querySelector('[data-page="itinerary"]'));
            
            // 切換到對應的天數
            setTimeout(() => {
                const dayTab = document.querySelector(`[data-day="${day}"]`);
                if (dayTab) {
                    showDayContent(day);
                    updateActiveDayTab(dayTab);
                }
            }, 100);
        });
    });
}

// 預算圓餅圖
function initializeBudgetChart() {
    const canvas = document.getElementById('budgetChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const data = appData.budget.categories;
    
    // 手動繪製圓餅圖
    drawPieChart(ctx, data, canvas.width, canvas.height);
}

function drawPieChart(ctx, data, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;
    
    let currentAngle = -Math.PI / 2; // 從頂部開始
    
    data.forEach(category => {
        const sliceAngle = (category.percentage / 100) * 2 * Math.PI;
        
        // 繪製扇形
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = category.color;
        ctx.fill();
        
        // 繪製邊框
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 繪製標籤
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
        
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${category.name}`, labelX, labelY - 5);
        ctx.fillText(`${category.percentage}%`, labelX, labelY + 10);
        
        currentAngle += sliceAngle;
    });
}

// 票券功能
function initializeTickets() {
    renderTickets('transportation', appData.tickets.transportation);
    renderTickets('experiences', appData.tickets.experiences);
    renderTickets('dining', appData.tickets.dining);
}

function renderTickets(category, tickets) {
    const container = document.getElementById(`${category}-tickets`);
    if (!container) return;
    
    const ticketsHtml = tickets.map(ticket => 
        createTicketCard(ticket)
    ).join('');
    
    container.innerHTML = ticketsHtml;
}

function createTicketCard(ticket) {
    return `
        <div class="ticket-card">
            <div class="ticket-header">
                <div class="ticket-name">${ticket.name}</div>
                <div class="ticket-platform">📱 ${ticket.platform}</div>
            </div>
            <div class="ticket-body">
                <div class="ticket-price">${ticket.price}</div>
                <p class="ticket-description">${ticket.description}</p>
                <a href="${ticket.url}" target="_blank" class="btn-ticket">
                    立即購買
                </a>
            </div>
        </div>
    `;
}

// 地圖功能
function initializeMap() {
    const markersContainer = document.getElementById('attraction-markers');
    if (!markersContainer) return;
    
    const allAttractions = [];
    Object.values(appData.itinerary).forEach(day => {
        allAttractions.push(...day.attractions);
    });
    
    const markersHtml = allAttractions.map(attraction => 
        createAttractionMarker(attraction)
    ).join('');
    
    markersContainer.innerHTML = markersHtml;
}

function createAttractionMarker(attraction) {
    return `
        <div class="attraction-marker" onclick="showAttractionDetails('${attraction.name}')">
            <div class="marker-name">${attraction.name}</div>
            <div class="marker-address">${attraction.address}</div>
        </div>
    `;
}

// 預算計算器
function initializeBudgetCalculator() {
    const totalBudgetInput = document.getElementById('total-budget');
    const budgetItemsContainer = document.getElementById('budget-items');
    const dailyAmountElement = document.getElementById('daily-amount');
    
    if (!totalBudgetInput || !budgetItemsContainer || !dailyAmountElement) return;
    
    // 初始渲染
    renderBudgetItems();
    updateDailyAmount();
    
    // 監聽總預算變化
    totalBudgetInput.addEventListener('input', function() {
        updateBudgetCalculation();
        renderBudgetItems();
        updateDailyAmount();
    });
}

function renderBudgetItems() {
    const budgetItemsContainer = document.getElementById('budget-items');
    const totalBudget = parseInt(document.getElementById('total-budget').value) || 30000;
    
    const itemsHtml = appData.budget.categories.map(category => {
        const amount = Math.round(totalBudget * category.percentage / 100);
        return `
            <div class="budget-item">
                <div class="budget-category">
                    <div class="category-color" style="background-color: ${category.color}"></div>
                    <span>${category.name}</span>
                </div>
                <div class="budget-amount">¥${amount.toLocaleString()}</div>
            </div>
        `;
    }).join('');
    
    budgetItemsContainer.innerHTML = itemsHtml;
}

function updateBudgetCalculation() {
    const totalBudget = parseInt(document.getElementById('total-budget').value) || 30000;
    
    appData.budget.categories.forEach(category => {
        category.amount = Math.round(totalBudget * category.percentage / 100);
    });
    
    appData.budget.total = totalBudget;
}

function updateDailyAmount() {
    const totalBudget = parseInt(document.getElementById('total-budget').value) || 30000;
    const dailyAmount = Math.round(totalBudget / 5);
    
    const dailyAmountElement = document.getElementById('daily-amount');
    dailyAmountElement.textContent = `¥${dailyAmount.toLocaleString()}`;
}

// 模態框功能
function initializeModal() {
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function showAttractionDetails(attractionName) {
    const attraction = findAttractionByName(attractionName);
    if (!attraction) return;
    
    modalBody.innerHTML = `
        <h2>${attraction.name}</h2>
        <h3 class="attraction-name-en">${attraction.name_en}</h3>
        
        <div class="modal-info">
            <div class="info-item">
                <strong>地址：</strong>${attraction.address}
            </div>
            <div class="info-item">
                <strong>開放時間：</strong>${attraction.opening_hours}
            </div>
            <div class="info-item">
                <strong>門票費用：</strong>${attraction.entrance_fee}
            </div>
            <div class="info-item">
                <strong>建議遊覽時間：</strong>${attraction.estimated_time}
            </div>
        </div>
        
        <div class="modal-description">
            <h4>景點介紹</h4>
            <p>${attraction.description}</p>
        </div>
        
        <div class="modal-actions">
            <a href="${attraction.google_maps}" target="_blank" class="btn btn--primary">
                📍 Google Maps 導航
            </a>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function findAttractionByName(name) {
    for (const day of Object.values(appData.itinerary)) {
        const attraction = day.attractions.find(attr => attr.name === name);
        if (attraction) return attraction;
    }
    return null;
}

// 全域函數（供 HTML onclick 使用）
window.showAttractionDetails = showAttractionDetails;

// 鍵盤事件
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 觸控支援
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (currentPage === 'itinerary') {
            if (diff > 0 && currentDay < 5) {
                // 向上滑動，下一天
                const nextDay = currentDay + 1;
                const nextTab = document.querySelector(`[data-day="${nextDay}"]`);
                if (nextTab) {
                    showDayContent(nextDay);
                    updateActiveDayTab(nextTab);
                }
            } else if (diff < 0 && currentDay > 1) {
                // 向下滑動，上一天
                const prevDay = currentDay - 1;
                const prevTab = document.querySelector(`[data-day="${prevDay}"]`);
                if (prevTab) {
                    showDayContent(prevDay);
                    updateActiveDayTab(prevTab);
                }
            }
        }
    }
}