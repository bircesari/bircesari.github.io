window.BLOG_POSTS = [
    {
        title: "How to Build Effective BI Dashboards",
        url: "How_to_Build_Effective_BI_Dashboards.html",
        tag: "Analytics",
        date: "Nov 14",
        time: "6 min",
        description: "Practical principles for dashboards that drive decisions, not just display data."
    },
    {
        title: "Beyond Good Intentions: Making DEIB Actually Work",
        url: "DEIB_Diversity_Equity_Inclusion_Belonging.html",
        tag: "Culture",
        date: "Nov 27",
        time: "7 min",
        description: "What measuring the right things — not just counting heads — actually looks like."
    },
    {
        title: "The Quiet Revolution",
        url: "The_Quiet_Revolution.html",
        tag: "AI & Work",
        date: "Nov 1",
        time: "5 min",
        description: "How AI is reshaping the way data professionals work, quietly but irreversibly."
    },
    {
        title: "Reflections on 2025",
        url: "Reflections_on_2025.html",
        tag: "Personal",
        date: "Dec 1",
        time: "4 min",
        description: "Looking back at a year of transitions, lessons, and things worth keeping."
    }
];

/**
 * Renders 2 random recommended posts into .rec-grid, excluding the current page.
 * Call after DOM is ready:  renderRecommendations("DEIB_Diversity_...html");
 */
window.renderRecommendations = function(currentUrl) {
    const grid = document.querySelector(".rec-grid");
    if (!grid) return;

    const others = window.BLOG_POSTS.filter(p => p.url !== currentUrl);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 2);

    grid.innerHTML = shuffled.map(p => `
        <a href="${p.url}" class="rec-card">
            <div class="rec-tag">${p.tag}</div>
            <p class="rec-title">${p.title}</p>
            <p class="rec-desc">${p.description}</p>
            <span class="rec-meta">${p.date} · ${p.time} read</span>
        </a>
    `).join("");
};
