// ── MENU DATA ─────────────────────────────────────────────
const MENU = {
  Burgers:[
    {emoji:'🍔',name:'Classic Smash Burger',desc:'Double smashed patty, American cheese, pickles & special sauce',price:189,kcal:680,badge:'hot'},
    {emoji:'🍔',name:'Bacon BBQ Stack',desc:'Triple beef, crispy bacon, cheddar, onion rings, BBQ sauce',price:229,kcal:820,badge:''},
    {emoji:'🍔',name:'Spicy Crispy Chicken',desc:'Buttermilk chicken fillet, jalapeños, chipotle mayo, lettuce',price:199,kcal:590,badge:'hot'},
    {emoji:'🥬',name:'Mushroom Swiss Burger',desc:'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli',price:209,kcal:570,badge:'new'},
    {emoji:'🍔',name:'Signature QB Burger',desc:'Our iconic burger with QB sauce, double patty, fresh tomato',price:249,kcal:750,badge:'hot'},
    {emoji:'🍔',name:'Cheeseburger',desc:'Simple, classic, always great. Single patty, cheese & ketchup',price:99,kcal:390,badge:'value'},
  ],
  Chicken:[
    {emoji:'🍗',name:'Crispy Fried Chicken',desc:'3-piece golden-fried chicken, seasoned with secret spices',price:179,kcal:720,badge:'hot'},
    {emoji:'🥩',name:'Grilled Chicken Platter',desc:'Herb-marinated grilled breast, steamed veggies & gravy',price:195,kcal:480,badge:'new'},
    {emoji:'🍗',name:'Chicken Strips x5',desc:'Tender chicken strips with your choice of dipping sauce',price:149,kcal:420,badge:''},
    {emoji:'🌮',name:'Chicken Wrap',desc:'Crispy chicken, lettuce, tomato, ranch in a warm tortilla',price:165,kcal:510,badge:''},
    {emoji:'🍗',name:'Spicy Buffalo Wings',desc:'8-piece wings tossed in fiery buffalo sauce',price:219,kcal:640,badge:'hot'},
    {emoji:'🍗',name:'Chickenjoy Family Bucket',desc:'8-piece mixed chicken, perfect for sharing',price:459,kcal:0,badge:'value'},
  ],
  'Fries & Sides':[
    {emoji:'🍟',name:'Large Fries',desc:'Golden crispy fries, lightly salted',price:79,kcal:490,badge:'hot'},
    {emoji:'🍟',name:'Medium Fries',desc:'Classic medium serving of fries',price:59,kcal:340,badge:''},
    {emoji:'🧀',name:'Cheese Fries',desc:'Loaded with creamy nacho cheese sauce',price:99,kcal:580,badge:'new'},
    {emoji:'🌭',name:'Loaded Hotdog',desc:'Jumbo hotdog, mustard, relish, onions',price:89,kcal:420,badge:''},
    {emoji:'🥗',name:'Side Salad',desc:'Fresh greens, cucumber, tomato & dressing',price:69,kcal:120,badge:''},
    {emoji:'🧅',name:'Onion Rings',desc:'Crispy battered rings, served with ranch',price:85,kcal:380,badge:''},
  ],
  'Rice Meals':[
    {emoji:'🍚',name:'Burger Steak + Rice',desc:'Juicy beef patties with mushroom gravy over steamed rice',price:155,kcal:680,badge:'hot'},
    {emoji:'🍚',name:'Chicken + Rice',desc:'1-pc crispy chicken with steamed rice & gravy',price:139,kcal:590,badge:''},
    {emoji:'🍛',name:'Beef Tapa + Rice',desc:'Sweet cured beef tapa with garlic rice & sunny side egg',price:169,kcal:720,badge:'new'},
    {emoji:'🍚',name:'Pork BBQ + Rice',desc:'Grilled pork skewer, steamed rice & atchara',price:149,kcal:650,badge:''},
    {emoji:'🍳',name:'Silog Meal',desc:'Your choice of protein, garlic rice & egg',price:129,kcal:610,badge:''},
  ],
  Beverages:[
    {emoji:'🥤',name:'Large Cola',desc:'Chilled Coca-Cola, large cup with ice',price:69,kcal:200,badge:''},
    {emoji:'🥤',name:'Medium Cola',desc:'Refreshing medium-sized Coke',price:55,kcal:150,badge:''},
    {emoji:'🥛',name:'Chocolate Shake',desc:'Thick, creamy chocolate milkshake',price:95,kcal:420,badge:'hot'},
    {emoji:'🍋',name:'Lemonade Slush',desc:'Tangy frozen lemonade, sweet & icy',price:79,kcal:180,badge:'new'},
    {emoji:'☕',name:'Hot Coffee',desc:'Freshly brewed arabica coffee',price:65,kcal:5,badge:''},
    {emoji:'🧃',name:'Orange Juice',desc:'Fresh-squeezed orange juice, 350ml',price:75,kcal:140,badge:''},
  ],
  Desserts:[
    {emoji:'🍦',name:'Soft Serve Cone',desc:'Classic creamy vanilla soft serve',price:39,kcal:200,badge:'hot'},
    {emoji:'🍫',name:'Hot Fudge Sundae',desc:'Vanilla ice cream, rich hot fudge sauce',price:75,kcal:390,badge:''},
    {emoji:'🥧',name:'Buko Pie Slice',desc:'Flaky crust, tender young coconut filling',price:65,kcal:310,badge:'new'},
    {emoji:'🍩',name:'Glazed Donut x2',desc:'Fluffy yeast donuts with sweet glaze',price:55,kcal:480,badge:''},
    {emoji:'🎂',name:'Birthday Cake Slice',desc:'Vanilla sponge with sprinkles & cream',price:89,kcal:440,badge:''},
  ],
  'Value Meals':[
    {emoji:'🎁',name:'QB Value Meal 1',desc:'Cheeseburger + Small Fries + Medium Cola',price:149,kcal:820,badge:'value'},
    {emoji:'🎁',name:'QB Value Meal 2',desc:'Chicken Strips + Large Fries + Large Cola',price:219,kcal:1050,badge:'value'},
    {emoji:'🎁',name:'Family Feast',desc:'2 Burgers + 8-pc Chicken + 2 Large Fries + 4 Drinks',price:799,kcal:0,badge:'value'},
    {emoji:'🎁',name:'Solo Meal Deal',desc:'Smash Burger + Medium Fries + Medium Cola',price:249,kcal:960,badge:'hot'},
  ],
  Breakfast:[
    {emoji:'🥞',name:'Pancake Platter',desc:'3 fluffy pancakes, butter & maple syrup',price:109,kcal:520,badge:''},
    {emoji:'🥚',name:'Egg McMuffin',desc:'Egg, Canadian bacon & cheese on toasted muffin',price:99,kcal:300,badge:'hot'},
    {emoji:'🌯',name:'Breakfast Burrito',desc:'Scrambled eggs, sausage, cheese in tortilla',price:119,kcal:450,badge:'new'},
    {emoji:'🥣',name:'Oatmeal Bowl',desc:'Creamy oats with brown sugar & almonds',price:79,kcal:290,badge:''},
    {emoji:'☕',name:'Breakfast Combo',desc:'Pancakes + Egg + Coffee — start your day right',price:169,kcal:700,badge:'value'},
  ],
};

// ── STATE ─────────────────────────────────────────────────
let cart = [];
let currentCategory = 'Burgers';
let dineMode = 'Dine In';
let currentUser = null;
let currentPoints = 0;

// ── AUTH & USER INIT ──────────────────────────────────────
function initUser() {
  const stored = localStorage.getItem('user');
  if (!stored) {
    renderUserArea();
    return;
  }
  currentUser = JSON.parse(stored);
  renderUserArea();
  fetchPoints();
}

function renderUserArea() {
  const area = document.getElementById('user-area');
  if (!currentUser) {
    area.innerHTML = `<a href="login.html" class="topbar-login-btn">Login</a>`;
    return;
  }
  const initials = currentUser.username
    ? currentUser.username.slice(0, 2).toUpperCase()
    : '?';
  area.innerHTML = `
    <div class="user-chip">
      <div class="user-avatar">${initials}</div>
      <div class="user-info">
        <div class="user-name">${currentUser.username}</div>
        <div class="user-pts" id="user-pts-display">⭐ loading...</div>
      </div>
    </div>
    <button class="topbar-logout-btn" onclick="logout()">Logout</button>
  `;
}

async function fetchPoints() {
  if (!currentUser) return;
  try {
    const res = await fetch(`http://localhost:3000/points/${currentUser.id}`, {
      credentials: 'include'
    });
    if (!res.ok) return;
    const data = await res.json();
    currentPoints = data.points || 0;
    updatePointsDisplay();
  } catch (e) {
    const el = document.getElementById('user-pts-display');
    if (el) el.textContent = '⭐ 0 pts';
  }
}

function updatePointsDisplay() {
  const el = document.getElementById('user-pts-display');
  if (el) el.textContent = `⭐ ${currentPoints} pts`;
}

async function logout() {
  try {
    await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
  } catch (e) {}
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

// ── POINTS ────────────────────────────────────────────────
async function addPoints(pointsToAdd) {
  if (!currentUser) return 0;
  try {
    const res = await fetch('http://localhost:3000/points/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ userId: currentUser.id, points: pointsToAdd })
    });
    if (!res.ok) return currentPoints;
    const data = await res.json();
    currentPoints = data.totalPoints || (currentPoints + pointsToAdd);
    updatePointsDisplay();
    return currentPoints;
  } catch (e) {
    console.warn('Could not save points:', e);
    return currentPoints;
  }
}

// ── SCREENSAVER ───────────────────────────────────────────
function startSession() {
  document.getElementById('screensaver').classList.add('hidden');
}

// ── DINE MODE ─────────────────────────────────────────────
function setDine(btn, mode) {
  document.querySelectorAll('.dine-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  dineMode = mode;
}

// ── CATEGORIES ────────────────────────────────────────────
function setCategory(el, cat) {
  document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentCategory = cat;
  document.getElementById('menu-title').textContent = cat;
  renderMenu(cat);
}

// ── RENDER MENU ───────────────────────────────────────────
function renderMenu(cat) {
  const grid  = document.getElementById('menu-grid');
  const items = MENU[cat] || [];
  grid.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    let badge = '';
    if      (item.badge === 'hot')   badge = '<div class="badge badge-hot">🔥 Popular</div>';
    else if (item.badge === 'new')   badge = '<div class="badge badge-new">✨ New</div>';
    else if (item.badge === 'value') badge = '<div class="badge badge-value">💰 Value</div>';
    else if (item.badge === 'promo') badge = '<div class="badge badge-promo">🎉 Promo</div>';
    const kcalStr  = item.kcal > 0 ? `<div class="item-kcal">${item.kcal} kcal</div>` : '';
    const safeName = item.name.replace(/'/g, "\\'");
    card.innerHTML = `
      <div class="item-img">${badge}${item.emoji}</div>
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="item-bottom">
          <div>
            <div class="item-price">₱${item.price}</div>
            ${kcalStr}
          </div>
          <button class="add-btn" onclick="addItem(event,'${safeName}',${item.price},'${item.emoji}')">+</button>
        </div>
      </div>`;
    card.onclick = (e) => {
      if (!e.target.classList.contains('add-btn'))
        addItem(e, item.name, item.price, item.emoji);
    };
    grid.appendChild(card);
  });
}

// ── CART ACTIONS ──────────────────────────────────────────
function addItem(e, name, price, emoji) {
  e.stopPropagation();
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; }
  else { cart.push({ name, price, emoji, qty: 1 }); }
  renderCart();
  showToast(`${emoji} ${name} added!`);
  const btn = e.target.closest ? e.target.closest('.add-btn') || e.target : e.target;
  if (btn) { btn.style.transform = 'scale(0.85)'; setTimeout(() => btn.style.transform = '', 120); }
}

function removeItem(name) {
  cart = cart.filter(i => i.name !== name);
  renderCart();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  renderCart();
}

function clearOrder() {
  cart = [];
  renderCart();
}

// ── RENDER CART ───────────────────────────────────────────
function renderCart() {
  const container   = document.getElementById('order-items');
  const countEl     = document.getElementById('order-count');
  const checkoutBtn = document.getElementById('checkout-btn');
  const totalQty    = cart.reduce((a, i) => a + i.qty, 0);
  countEl.textContent = totalQty;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-order">
        <div class="empty-icon">🛒</div>
        <p>No items yet.<br>Tap a menu item to add it.</p>
      </div>`;
    checkoutBtn.disabled = true;
    updateTotals(0);
    return;
  }

  container.innerHTML = '';
  cart.forEach(item => {
    const safeName = item.name.replace(/'/g, "\\'");
    const div = document.createElement('div');
    div.className = 'order-item';
    div.innerHTML = `
      <div class="oi-emoji">${item.emoji}</div>
      <div class="oi-info">
        <div class="oi-name">${item.name}</div>
        <div class="oi-price">₱${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="oi-qty">
        <button class="qty-btn" onclick="changeQty('${safeName}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${safeName}', 1)">+</button>
      </div>
      <div class="oi-remove" onclick="removeItem('${safeName}')">✕</div>`;
    container.appendChild(div);
  });

  const subtotal = cart.reduce((a, i) => a + i.price * i.qty, 0);
  updateTotals(subtotal);
  checkoutBtn.disabled = false;
}

function updateTotals(subtotal) {
  const vat   = subtotal * 0.12;
  const total = subtotal + vat;
  document.getElementById('subtotal').textContent = '₱' + subtotal.toFixed(2);
  document.getElementById('vat').textContent      = '₱' + vat.toFixed(2);
  document.getElementById('total').textContent    = '₱' + total.toFixed(2);
}

// ── CHECKOUT ──────────────────────────────────────────────
async function checkout() {
  const num = Math.floor(Math.random() * 90) + 10;
  document.getElementById('modal-num').textContent = num;

  // 1 point per item ordered
  const totalItems  = cart.reduce((a, i) => a + i.qty, 0);
  const pointsBlock = document.getElementById('points-earned');

  if (currentUser && totalItems > 0) {
    const newTotal = await addPoints(totalItems);
    document.getElementById('pts-earned-text').textContent = `+${totalItems} pt${totalItems !== 1 ? 's' : ''} earned!`;
    document.getElementById('pts-total-text').textContent  = newTotal;
    pointsBlock.style.display = 'block';
  } else {
    pointsBlock.style.display = 'none';
  }

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  cart = [];
  renderCart();
  document.getElementById('screensaver').classList.remove('hidden');
}

// ── TOAST ─────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2000);
}

// ── CLOCK ─────────────────────────────────────────────────
function updateClock() {
  const now  = new Date();
  let h      = now.getHours();
  const m    = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('clock').textContent =
    `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
}

// ── INIT ──────────────────────────────────────────────────
initUser();
renderMenu('Burgers');
updateClock();
setInterval(updateClock, 1000);