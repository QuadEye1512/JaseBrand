import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jasebrand-awareness.com";
    const now = new Date();

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/reports`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/report-scam`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        // Anchor-based deep links for SEO — helps Google understand in-page sections
        {
            url: `${baseUrl}/#how-the-scam-operates`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#why-search-jase-brand`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#what-to-do`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];
}
