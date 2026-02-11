export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
        "url": "https://jasebrand-awareness.com",
        "description": "Community-driven alert platform highlighting active fraud warnings, reported losses of $500,000+, and consumer protection guidance related to Jase Brand (aka Jason Perez). Not a promotional site.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://jasebrand-awareness.com/reports?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Community Alert Platform",
            "logo": {
                "@type": "ImageObject",
                "url": "https://jasebrand-awareness.com/icon.png"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
