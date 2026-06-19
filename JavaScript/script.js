// 1. Navbar: highlight the active
(function highlightActiveNav() {
    const links = document.querySelectorAll(".navbar a");
    const current = location.pathname.split("/").pop() || "Home.html";
    links.forEach((link) => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
})();

// 2. Card hover lift animation ( animal-card & shop-item)
(function cardHOverLift() {
    document.querySelectorAll(".animal-cardshop-item, .Our-mission, .team-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = "translateY(-6px)";
            card.style.boxShadow = "0 12px 28px rgba(0,0,0,0.18)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "";
        });
    });
})();

// ── 3. Smooth scroll for in-page anchor links ───────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ── 4. "Back to top" floating button (all pages) ─────────────
(function backToTop() {
    const btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.type = "button";
    btn.textContent = "↑";
    btn.title = "Back to top";
    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();

// ── 5. Auto-update copyright year in footer ──────────────────
(function setCopyrightYear() {
    document.querySelectorAll("footer p").forEach((p) => {
        if (/&copy;|©/.test(p.innerHTML)) {
            p.innerHTML = p.innerHTML.replace(/\d{4}/, new Date().getFullYear());
        }
    });
})();

// ── 6. Shopping Cart system (Shop.html + cart.html) ──────────
// Uses localStorage so the cart persists when navigating between
// Shop.html and cart.html. Each item: { name, price, image, qty }
const CART_STORAGE_KEY = "ubuntuRescueCart";

function getCart() {
    try {
        const data = localStorage.getItem(CART_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function addToCart(item) {
    const cart = getCart();
    const existing = cart.find((c) => c.name === item.name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({...item, qty: 1 });
    }
    saveCart(cart);
    updateCartBadge();
}

function removeFromCart(name) {
    let cart = getCart();
    cart = cart.filter((c) => c.name !== name);
    saveCart(cart);
    updateCartBadge();
}

function changeQty(name, delta) {
    const cart = getCart();
    const item = cart.find((c) => c.name === name);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(name);
    } else {
        saveCart(cart);
        updateCartBadge();
    }
}

function cartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount(cart) {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Shows a small badge with item count on the "Cart" nav link (all pages)
function updateCartBadge() {
    const cartLink = document.querySelector('.navbar a[href="cart.html"]');
    if (!cartLink) return;

    const count = cartCount(getCart());
    let badge = cartLink.querySelector(".cart-badge");

    if (count > 0) {
        if (!badge) {
            badge = document.createElement("span");
            badge.className = "cart-badge";
            cartLink.appendChild(badge);
        }
        badge.textContent = count;
    } else if (badge) {
        badge.remove();
    }
}

// ── 6a. Shop.html: wire up "Add to Cart" buttons ─────────────
(function shopAddToCart() {
    const shopItems = document.querySelectorAll(".shop-item");
    if (shopItems.length === 0) return;

    shopItems.forEach((item) => {
        const nameEl = item.querySelector("h3");
        const imgEl = item.querySelector("img");
        const priceEl = Array.from(item.querySelectorAll("p")).find((p) =>
            /price/i.test(p.textContent)
        );
        if (!nameEl || !priceEl) return;

        const priceMatch = priceEl.textContent.match(/(\d+(\.\d+)?)/);
        const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "add-to-cart-btn";
        addBtn.textContent = "Add to Cart";
        item.appendChild(addBtn);

        addBtn.addEventListener("click", () => {
            addToCart({
                name: nameEl.textContent.trim(),
                price: price,
                image: imgEl ? imgEl.getAttribute("src") : "",
            });
            addBtn.textContent = "Added ✓";
            addBtn.disabled = true;
            setTimeout(() => {
                addBtn.textContent = "Add to Cart";
                addBtn.disabled = false;
            }, 1000);
        });
    });
})();

// ── 6b. cart.html: render cart items, totals, checkout ───────
(function renderCartPage() {
    const container = document.getElementById("cart-container");
    if (!container) return; // not on cart.html

    function render() {
        const cart = getCart();
        container.innerHTML = "";

        if (cart.length === 0) {
            container.innerHTML = "<p class=\"empty-cart-msg\">Your cart is empty. Visit the Shop to find something special! 🐾</p>";
            const checkoutBtn = document.getElementById("checkout-btn");
            if (checkoutBtn) checkoutBtn.style.display = "none";
            removeCartSummary();
            return;
        }

        cart.forEach((item) => {
            const row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>R${item.price.toFixed(2)} each</p>
        </div>
        <div class="cart-item-qty">
          <button type="button" class="qty-btn" data-action="decrease">−</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" data-action="increase">+</button>
        </div>
        <p class="cart-item-subtotal">R${(item.price * item.qty).toFixed(2)}</p>
        <button type="button" class="remove-btn" title="Remove item">✕</button>
      `;

            row.querySelector('[data-action="decrease"]').addEventListener("click", () => {
                changeQty(item.name, -1);
                render();
            });
            row.querySelector('[data-action="increase"]').addEventListener("click", () => {
                changeQty(item.name, 1);
                render();
            });
            row.querySelector(".remove-btn").addEventListener("click", () => {
                removeFromCart(item.name);
                render();
            });

            container.appendChild(row);
        });

        renderCartSummary(cart);

        const checkoutBtn = document.getElementById("checkout-btn");
        if (checkoutBtn) checkoutBtn.style.display = "inline-block";
    }

    function renderCartSummary(cart) {
        removeCartSummary();
        const summary = document.createElement("div");
        summary.id = "cart-summary";
        summary.innerHTML = `<h3>Total: R${cartTotal(cart).toFixed(2)}</h3>`;
        container.after(summary);
    }

    function removeCartSummary() {
        const existing = document.getElementById("cart-summary");
        if (existing) existing.remove();
    }

    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            const cart = getCart();
            if (cart.length === 0) return;
            alert(
                `Thank you for your order! Your total is R${cartTotal(cart).toFixed(2)}.\nAll proceeds support Ubuntu Animal Rescue. 🐾`
            );
            saveCart([]);
            render();
        });
    }

    render();
})();

// Run on every page so the nav badge is always in sync
updateCartBadge();

// ── 7. AdoptionForm.html: friendlier validation feedback ─────
(function adoptionFormEnhancements() {
    const form = document.querySelector("form");
    if (!form) return;

    // Make the Cancel button ask for confirmation before navigating away,
    // so users don't lose typed info by accident.
    const cancelBtn = form.querySelector('input[type="button"][value="Cancel"]');
    if (cancelBtn) {
        cancelBtn.onclick = null; // remove inline handler to control it from here
        cancelBtn.addEventListener("click", () => {
            const confirmLeave = confirm("Are you sure you want to cancel? Your information will not be saved.");
            if (confirmLeave) {
                window.location.href = "Adoption.html";
            }
        });
    }

    // Replace inline submit alert with a nicer confirmation + prevent
    // actual submission (no backend exists yet).
    const submitBtn = form.querySelector('input[type="submit"]');
    if (submitBtn) {
        submitBtn.removeAttribute("onclick");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your application! We will review it and get back to you soon.");
            form.reset();
        });
    }
})();

// ── 8. ContactUs.html: Leaflet map of the shelter's location ─
// Leaflet (leaflet.css/js) is already linked in ContactUs.html's <head>,
// so no Google API key is needed — this draws a free OpenStreetMap-based
// map centred on Polokwane, South Africa with a marker for the shelter.
(function initContactMap() {
    const mapTarget = document.getElementById("map");
    if (!mapTarget || typeof L === "undefined") return; // not on ContactUs.html, or Leaflet not loaded

    // Polokwane, South Africa coordinates
    const shelterLat = -23.9045;
    const shelterLng = 29.4688;

    const map = L.map("map").setView([shelterLat, shelterLng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(map);

    L.marker([shelterLat, shelterLng])
        .addTo(map)
        .bindPopup("<strong>Ubuntu Animal Rescue</strong><br>Polokwane, South Africa")
        .openPopup();
})();

// ── 9. Generic image fallback ────────────────────────────────
// If any animal/shop/team photo fails to load (broken local path),
// swap in a neutral placeholder so the layout doesn't break.
(function imageFallback() {
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("error", function handler() {
            this.removeEventListener("error", handler);
            this.src =
                "https://via.placeholder.com/300x200/cce7e7/2c6e6e?text=Image+Unavailable";
        });
    });
})();