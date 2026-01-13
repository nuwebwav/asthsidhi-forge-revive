import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
}

export const SEO = ({
    title = "Astsiddhi Metal - Premium Steel Products Manufacturer & Supplier",
    description = "Astsiddhi Metal is a leading manufacturer and exporter of stainless steel pipes, tubes, plates, sheets, fasteners, and industrial raw materials. Quality products delivered globally.",
    keywords = "stainless steel pipes, steel tubes, metal supplier, industrial materials, steel manufacturer, India"
}: SEOProps) => {
    const location = useLocation();
    const baseUrl = "https://astsiddhimetal.com";
    // Remove trailing slash for consistency except for root
    const path = location.pathname === '/' ? '' : location.pathname;
    const canonicalUrl = `${baseUrl}${path}`;

    useEffect(() => {
        // Update Title
        document.title = title;

        const updateOrCreateMeta = (selector: string, attributes: Record<string, string>) => {
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                Object.entries(attributes).forEach(([key, value]) => {
                    element?.setAttribute(key, value);
                });
                document.head.appendChild(element);
            }
            return element;
        };

        // Update Meta Tags
        const descriptionMeta = updateOrCreateMeta('meta[name="description"]', { name: 'description' });
        descriptionMeta.setAttribute('content', description);

        const keywordsMeta = updateOrCreateMeta('meta[name="keywords"]', { name: 'keywords' });
        keywordsMeta.setAttribute('content', keywords);

        // Update Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // Update OG Tags
        const ogTitle = updateOrCreateMeta('meta[property="og:title"]', { property: 'og:title' });
        ogTitle.setAttribute('content', title);

        const ogDescription = updateOrCreateMeta('meta[property="og:description"]', { property: 'og:description' });
        ogDescription.setAttribute('content', description);

        const ogUrl = updateOrCreateMeta('meta[property="og:url"]', { property: 'og:url' });
        ogUrl.setAttribute('content', canonicalUrl);

        // Update Twitter Tags
        const twitterTitle = updateOrCreateMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
        twitterTitle.setAttribute('content', title);

        const twitterDescription = updateOrCreateMeta('meta[name="twitter:description"]', { name: 'twitter:description' });
        twitterDescription.setAttribute('content', description);

    }, [title, description, keywords, canonicalUrl]);

    return null;
};
