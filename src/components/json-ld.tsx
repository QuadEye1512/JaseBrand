export function JsonLd() {
    const baseUrl = "https://jasebrand-awareness.com";

    // 1. WebSite schema — core site identity
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jase Brand Scam Alert",
        "alternateName": [
            "Jase Brand Fraud Warning",
            "Jason Perez Scam Alert",
            "Jase Brand Warning 2026"
        ],
        "url": baseUrl,
        "description": "Community-driven alert platform highlighting active fraud warnings, reported losses of $500,000+, and consumer protection guidance related to Jase Brand (aka Jason Perez).",
        "inLanguage": "en-US",
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/reports?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Community Alert Platform",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.png`
            }
        }
    };

    // 2. Article / Report schema — main page treated as investigative article for rich snippets
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
        "alternativeHeadline": "Jase Brand (Jason Perez) Investment Fraud Warning — Community Alert",
        "description": "Comprehensive community-driven alert about Jase Brand (aka Jason Perez), covering reported losses of $500,000+, how the scam operates, and what to do if contacted.",
        "url": baseUrl,
        "datePublished": "2026-01-01T00:00:00Z",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "author": {
            "@type": "Organization",
            "name": "Community Alert Platform",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "Community Alert Platform",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": baseUrl
        },
        "keywords": "Jase Brand, Jason Perez, scam alert, investment fraud, 2026 update, fraud investigation, online scam, consumer protection",
        "articleSection": "Consumer Protection",
        "about": {
            "@type": "Thing",
            "name": "Jase Brand Investment Fraud",
            "description": "Alleged investment scam operated under the name Jase Brand (alias Jason Perez), involving unsolicited social media contact and advance-fee fraud tactics."
        }
    };

    // 3. FAQPage schema — massive SEO boost for Google rich snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Jase Brand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jase Brand is a name associated with active fraud warnings and consumer reports regarding alleged investment schemes. The individual also operates under the alias Jason Perez. Reported losses exceed $500,000."
                }
            },
            {
                "@type": "Question",
                "name": "Is Jase Brand a scam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, according to multiple consumer reports and an active fraud investigation. The Jase Brand warning page highlights reported losses of $500,000+ tied to individuals operating under this name, involving unsolicited contact, promises of high returns, and requests for upfront fees."
                }
            },
            {
                "@type": "Question",
                "name": "How does the Jase Brand scam work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The scam operates in four stages: (1) Initial Contact via unsolicited messages on Instagram, WhatsApp, or Telegram; (2) The Promise of high-return investment opportunities or exclusive venture deals; (3) The Trap — requests for upfront fees labeled as 'liquidity proof,' 'tax clearance,' or 'legal retainers'; (4) After Payment, communication ceases and victims are blocked."
                }
            },
            {
                "@type": "Question",
                "name": "Who is Jason Perez in relation to Jase Brand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jason Perez is an alias associated with Jase Brand. Both names have been referenced in fraud reports and consumer warnings related to alleged investment scams with reported losses exceeding $500,000."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do if I was contacted by Jase Brand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If contacted by someone claiming to represent Jase Brand: (1) Avoid transferring any funds upfront; (2) Document all communications including screenshots and transaction receipts; (3) Report the interaction to official fraud reporting agencies such as the FTC or FBI IC3; (4) Share your experience via community reporting tools to help protect others."
                }
            },
            {
                "@type": "Question",
                "name": "How much money has been lost to Jase Brand scams?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "According to the community-driven alert platform, reported losses tied to individuals operating under the name Jase Brand (also known as Jason Perez) exceed $500,000. The actual amount may be higher as many victims do not report."
                }
            },
            {
                "@type": "Question",
                "name": "Where does Jase Brand contact victims?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jase Brand reportedly contacts victims via unsolicited messages on social platforms including Instagram, WhatsApp, and Telegram. The outreach appears personal but is part of a mass-targeting strategy."
                }
            },
            {
                "@type": "Question",
                "name": "Is Jase Brand legitimate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Multiple consumer reports and active fraud warnings indicate that Jase Brand is not a legitimate investment opportunity. The pattern matches common tactics used by online investment frauds — people are urged to exercise extreme caution and not send money."
                }
            },
            {
                "@type": "Question",
                "name": "How can I report a Jase Brand scam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can report a Jase Brand scam to: (1) The FTC at reportfraud.ftc.gov; (2) The FBI Internet Crime Complaint Center (IC3) at ic3.gov; (3) Action Fraud UK at actionfraud.police.uk; (4) Community platforms like this site. All reports can be submitted anonymously."
                }
            },
            {
                "@type": "Question",
                "name": "What are the red flags of the Jase Brand scam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key red flags include: unsolicited contact on social media, promises of high-return investment opportunities, requests for upfront payments labeled as 'liquidity proof' or 'tax clearance' or 'legal retainers', pressure to act quickly, refusal to provide verifiable credentials, and ceasing communication after receiving payment."
                }
            }
        ]
    };

    // 4. BreadcrumbList schema — helps Google understand site hierarchy
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Jase Brand Scam Alert",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Evidence & Reports",
                "item": `${baseUrl}/reports`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Report a Scam",
                "item": `${baseUrl}/report-scam`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
