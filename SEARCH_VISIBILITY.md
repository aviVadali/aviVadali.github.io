# Getting Avi Vadali’s website into Google Search

The preferred public address is https://avivadali.github.io/.

## Already prepared

- A descriptive homepage title identifying Avi Vadali, theoretical physics, and MIT.
- Unique titles and descriptions for About, Papers, and Talks.
- Canonical URLs for the public pages, plus social sharing metadata.
- Person structured data on the homepage, linking the existing scholarly profiles.
- A sitemap at `/sitemap.xml` and a crawlable `/robots.txt` that points to it.
- The existing `google79a47bde3311eae8.html` verification file, preserved unchanged.
- Readable HTML content and ordinary links that work without JavaScript.

These are prepared locally. They take effect after the files are published to the root website. Structured data helps describe the profile; it does not guarantee a special search result or higher ranking.

## After publishing

1. Open [Google Search Console](https://search.google.com/search-console/). Add a **URL-prefix property** for `https://avivadali.github.io/`. A URL-prefix property is suitable when you do not control DNS for the parent `github.io` domain.
2. Complete ownership verification. If Search Console supplies the existing verification filename, confirm that file is publicly accessible and click Verify. If it supplies a different file, publish that exact file first. Having an old verification file in the repository does not establish verification for your current Google account.
3. Open **Sitemaps** and submit `sitemap.xml`.
4. In **URL Inspection**, inspect `https://avivadali.github.io/`, run the live test, and request indexing. Inspect Papers and Talks as needed. Check the Page indexing report later for exclusions or errors.
5. Add this exact homepage URL to your MIT department or group profile, Google Scholar profile, GitHub profile, and any other academic profiles you maintain. Relevant links help people and crawlers discover the site.
6. Keep your name, affiliation, paper titles, and links accurate. A short useful academic site is enough; do not pad it with keywords or filler posts.

Indexing can take days to weeks and is not guaranteed. Repeated requests do not make crawling faster. Search Console is a better diagnostic than checking a single Google query. Being indexed also does not guarantee a particular position for broad searches such as “theoretical physics”; start by checking searches for your name and “Avi Vadali MIT.”

## Maintenance

When adding a public page, add its canonical URL to `sitemap.xml`. If the site’s public address changes, update the canonical URLs, Open Graph URLs, homepage structured-data URL, sitemap, and robots.txt together. Do not add inaccurate `lastmod` dates.

## Official guidance

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
