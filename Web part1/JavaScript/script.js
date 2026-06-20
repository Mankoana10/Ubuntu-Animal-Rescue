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
            container.innerHTML = "<p class=\"empty-cart-msg\">Your cart is empty 🛒.  Visit the Shop to find something special! 🐾</p>";
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

// ── Shop search (Shop.html) ───────────────────────────────────
(function shopSearch() {
    const input = document.getElementById('shop-search');
    if (!input) return; // not on Shop.html

    const resultsEl = document.getElementById('shop-search-results');
    const cards = Array.from(document.querySelectorAll('.shop-item'));

    function getCardText(card) {
        const h3 = card.querySelector('h3');
        const desc = card.querySelector('p');
        const priceP = Array.from(card.querySelectorAll('p')).find((p) => /price/i.test(p.textContent)) || card.querySelectorAll('p')[1];

        return [h3 ? h3.textContent : '', desc ? desc.textContent : '', priceP ? priceP.textContent : '']
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
    }

    function filter() {
        const q = (input.value || '').trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
            const text = card.dataset.searchText || (card.dataset.searchText = getCardText(card));
            const matches = !q || text.includes(q);
            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount += 1;
        });

        if (!resultsEl) return;
        if (!q) {
            resultsEl.textContent = '';
        } else if (visibleCount === 0) {
            resultsEl.textContent = 'No results found.';
        } else {
            resultsEl.textContent = `Showing ${visibleCount} result${visibleCount === 1 ? '' : 's'}.`;
        }
    }

    input.addEventListener('input', filter);
    filter();
})();

// ── 7. AdoptionForm.html: friendlier validation feedback ─────
document.getElementById('adoptionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 1. Stop page reload - this makes it AJAX

    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('successMsg');

    // Disable button so user can't double-click
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // 2. AJAX submit with fetch - no page reload
    fetch("https://formsubmit.co/mankoanamarcia@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json' // FormSubmit needs this for AJAX
            }
        })
        .then(response => {
            if (response.ok) {
                // 3. Success - show message instead of alert
                successMsg.textContent = "Thank you for your application! We will review it and get back to you soon 🐾";
                successMsg.style.color = "green";
                form.reset(); // clear form
            } else {
                throw new Error('Server error');
            }
        })
        .catch(error => {
            // 4. Error handling - show on page, not alert
            successMsg.textContent = "Oops! Something went wrong. Please try again.";
            successMsg.style.color = "red";
            console.error('Error:', error);
        })
        .finally(() => {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Application';
        });
});