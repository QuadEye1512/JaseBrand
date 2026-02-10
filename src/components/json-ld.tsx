export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jase Brand Awareness",
        "url": "https://jasebrand-awareness.com",
        "description": "Public awareness notice regarding alleged investment scams linked to Jase Brand (Jason Perez).",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://jasebrand-awareness.com/reports?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Consumer Awareness Group",
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
