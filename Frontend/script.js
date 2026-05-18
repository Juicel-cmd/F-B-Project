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
    {emoji:'🧅',name:'Onion Rings',desc:'Crispy battered rings, served with ranch',price:85,kcal:380,badge:'\''},
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
    {emoji:'DONUT',name:'Glazed Donut x2',desc:'Fluffy yeast donuts with sweet glaze',price:55,kcal:480,badge:''},
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

// ── BOOT LOADER SYSTEM ──────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initUser();
  updateClock();
  setInterval(updateClock, 1000);
  renderMenu();
});

// ── AUTH & USER INIT ──────────────────────────────────────
function initUser() {
  const token = localStorage.getItem('token');
  const storedName = localStorage.getItem('username');
  
  if (!token || !storedName) {
    currentUser = null;
    renderUserArea();
    return;
  }
  
  currentUser = { username: storedName };
  renderUserArea();
  fetchPoints();
}

function renderUserArea() {
  const area = document.getElementById('user-area');
  if (!area) return;

  if (!currentUser) {
    area.innerHTML = `<button class="btn-login-redirect" onclick="window.location.href='login.html'">Sign In</button>`;
    return;
  }
  
  const initials = currentUser.username ? currentUser.username.slice(0, 2).toUpperCase() : 'QB';
  area.innerHTML = `
    <div class="user-chip" style="display:flex; align-items:center; gap:10px;">
      <div class="user-avatar" style="background:var(--yellow); color:#000; padding:5px; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold;">${initials}</div>
      <div class="user-info">
        <div class="user-name" style="font-weight:bold;">${currentUser.username}</div>
        <div class="user-pts" id="user-pts-display" style="color:var(--yellow); font-size:0.85rem;">⭐ loading...</div>
      </div>
    </div>
    <button class="topbar-logout-btn" onclick="logout()" style="background:transparent; border:1px solid #fff; color:#fff; cursor:pointer; margin-left:10px; padding:2px 8px; border-radius:4px;">Logout</button>
  `;
}

async function fetchPoints() {
  if (!currentUser) return;
  try {
    const res = await fetch(`http://localhost:5000/points/${currentUser.username}`, {
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
    await fetch('http://localhost:5000/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
  } catch (e) {}
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('userPoints');
  window.location.href = 'login.html';
}

// ── POINTS ────────────────────────────────────────────────
async function addPoints(pointsToAdd) {
  if (!currentUser) return 0;
  try {
    const res = await fetch('http://localhost:5000/points/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: currentUser.username, points: pointsToAdd })
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

// ── SCREENSAVER & KIOSK FUNCTIONS ───────────────────────────
function startSession() {
  document.getElementById('screensaver').style.display = 'none';
}

function setDine(button, type) {
  dineMode = type;
  document.querySelectorAll('.dine-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  showToast(`Switched to ${type}`);
}

function setCategory(element, category) {
  currentCategory = category;
  document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  document.getElementById('menu-title').innerText = category;
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if(!grid) return;
  grid.innerHTML = '';
  const items = MENU[currentCategory] || [];
  
  items.forEach((item, index) => {
    grid.innerHTML += `
      <div class="menu-card" onclick="addToCart('${item.name}', ${item.price})" style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:15px; text-align:center; cursor:pointer;">
        <div class="menu-card-icon" style="font-size:2rem; margin-bottom:5px;">${item.emoji}</div>
        <h4 style="margin:5px 0;">${item.name}</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">${item.desc}</p>
        <strong style="color:var(--yellow);">₱${item.price.toFixed(2)}</strong>
      </div>
    `;
  });
}

function addToCart(name, price) {
  const exist = cart.find(item => item.name === name);
  if (exist) { exist.quantity++; } 
  else { cart.push({ name, price, quantity: 1 }); }
  updateCartUI();
  showToast(`${name} added!`);
}

function updateCartUI() {
  const itemsContainer = document.getElementById('order-items');
  const emptyView = document.getElementById('empty-order');
  if(!itemsContainer) return;
  
  if(cart.length === 0) {
    if(emptyView) emptyView.style.display = 'block';
    document.querySelectorAll('.order-item-row').forEach(e => e.remove());
    document.getElementById('checkout-btn').disabled = true;
    updatePrices(0);
    return;
  }
  
  if(emptyView) emptyView.style.display = 'none';
  document.querySelectorAll('.order-item-row').forEach(e => e.remove());
  
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    const row = document.createElement('div');
    row.className = 'order-item-row';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.padding = '8px 0';
    row.style.borderBottom = '1px solid var(--border)';
    row.innerHTML = `
      <div>${item.name} x${item.quantity}</div>
      <div>₱${(item.price * item.quantity).toFixed(2)}</div>
    `;
    itemsContainer.appendChild(row);
  });
  
  updatePrices(subtotal);
  document.getElementById('checkout-btn').disabled = false;
  document.getElementById('order-count').innerText = cart.reduce((a, b) => a + b.quantity, 0);
}

function updatePrices(subtotal) {
  const vat = subtotal * 0.12;
  const total = subtotal + vat;
  document.getElementById('subtotal').innerText = `₱${subtotal.toFixed(2)}`;
  document.getElementById('vat').innerText = `₱${vat.toFixed(2)}`;
  document.getElementById('total').innerText = `₱${total.toFixed(2)}`;
}

// ── CHECKOUT ─────────────────────────────────────────────
async function checkout() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const vat = subtotal * 0.12;
  const totalAmount = parseFloat((subtotal + vat).toFixed(2));
  const randomOrderNum = Math.floor(Math.random() * 90) + 10;

  // Disable button to prevent double clicks
  const btn = document.getElementById('checkout-btn');
  btn.disabled = true;
  btn.innerText = 'Placing Order...';

  // Build order payload for backend
  const orderPayload = {
    customer_name: currentUser ? currentUser.username : 'Guest',
    customer_email: currentUser ? (currentUser.email || '') : '',
    items: cart.map(i => ({ name: i.name, price: i.price, qty: i.quantity })),
    total: totalAmount,
    order_type: dineMode,
    notes: ''
  };

  try {
    const res = await fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(orderPayload)
    });

    const data = await res.json();

    if (!res.ok) {
      showToast('Order failed: ' + (data.message || 'Please try again'));
      btn.disabled = false;
      btn.innerText = 'Place Order →';
      return;
    }

    // ✅ Order saved — now show confirmation modal
    document.getElementById('modal-num').innerText = randomOrderNum;

    if (currentUser) {
      const earned = Math.floor(totalAmount / 50);
      const finalPoints = await addPoints(earned);
      document.getElementById('pts-earned-text').innerText = `+${earned} pts earned!`;
      document.getElementById('pts-total-text').innerText = finalPoints;
      document.getElementById('points-earned').style.display = 'block';
    } else {
      document.getElementById('points-earned').style.display = 'none';
    }

    document.getElementById('modal').classList.add('active');

  } catch (err) {
    console.error('Checkout error:', err);
    showToast('Connection failed. Is the server running on port 5000?');
    btn.disabled = false;
    btn.innerText = 'Place Order →';
  }
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  clearOrder();
  document.getElementById('screensaver').style.display = 'flex';
}

function clearOrder() {
  cart = [];
  updateCartUI();
  document.getElementById('order-count').innerText = 0;
}

function updateClock() {
  const clockEl = document.getElementById('clock');
  if(!clockEl) return;
  const now = new Date();
  clockEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}