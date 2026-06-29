window.BLOG_POSTS = [
    {
        title: "On Perception, Representation, and What Gets Lost in the Chart",
        url: "Heatwave_in_Data_Analytics.html",
        tag: "Analytics",
        date: "Jun 29, 2026",
        dateValue: "2026-06-29",
        time: "5 min",
        description: "A Berlin heatwave reframed through perception, external representation, and the way meaning is shaped by what we choose to show."
    },
    {
        title: "Opinionated Analysts Beat Accurate Analysts",
        url: "Opinionated_vs_Accurate_Analysts.html",
        tag: "Analytics",
        date: "May 25, 2026",
        dateValue: "2026-05-25",
        time: "9 min",
        description: "Why interpretation and a defensible point of view often matter more than technical correctness alone."
    },
    {
        title: "Your KPIs Are Lying to You",
        url: "Your_KPIs_Are_Lying_To_You.html",
        tag: "KPI Governance",
        date: "May 12, 2026",
        dateValue: "2026-05-12",
        time: "8 min",
        description: "How metrics drift from useful signals into misleading stories, and why governance matters more than dashboards."
    },
    {
        title: "Spring Data Allergy: An Evening at SumUp",
        url: "Spring_Data_Allergy.html",
        tag: "Meetup Recap",
        date: "Apr 27, 2026",
        dateValue: "2026-04-27",
        time: "5 min",
        description: "A recap of the Data Berlin meetup at SumUp covering AI hype, data quality, and practical lessons from the field."
    },
    {
        title: "Beyond Good Intentions: What I Learned About Making DEIB Actually Work",
        url: "DEIB_Diversity_Equity_Inclusion_Belonging.html",
        tag: "Culture",
        date: "Nov 27, 2025",
        dateValue: "2025-11-27",
        time: "7 min",
        description: "Why measuring experience and belonging matters more than tracking demographics alone."
    },
    {
        title: "How to Build Effective BI Dashboards",
        url: "How_to_Build_Effective_BI_Dashboards.html",
        tag: "Business Intelligence",
        date: "Nov 14, 2025",
        dateValue: "2025-11-14",
        time: "6 min",
        description: "Practical principles for dashboards that guide decisions, not just display numbers."
    },
    {
        title: "The Quiet Revolution: Learning to Acknowledge Our Strengths",
        url: "The_Quiet_Revolution.html",
        tag: "AI & Work",
        date: "Nov 1, 2025",
        dateValue: "2025-11-01",
        time: "5 min",
        description: "How AI is reshaping the way data professionals work, quietly but irreversibly."
    },
    {
        title: "The Year Data Learned to Think: Reflections on 2025",
        url: "Reflections_on_2025.html",
        tag: "AI & Data",
        date: "Dec 1, 2025",
        dateValue: "2025-12-01",
        time: "8 min",
        description: "A look back at 2025: agentic AI, real-time analytics, and the governance work that really mattered."
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
