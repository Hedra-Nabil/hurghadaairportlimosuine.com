// Cloudflare Worker for Hurghada Airport Limousine & Transfers
// Serves static assets via Workers Assets and handles edge redirects

const REDIRECTS = new Map([
  ["/services/cairo-airport-lounges", "/services/hurghada-airport-lounges"],
  ["/services/sharm-airport-lounges", "/services/hurghada-airport-lounges"],
  ["/airports/cairo-international-airport", "/airports/hurghada-international-airport"],
  ["/airports/sharm-el-sheikh-international-airport", "/airports/hurghada-international-airport"],
  ["/airports/cairo-airport-terminal-1", "/airports/hurghada-airport-terminal-1"],
  ["/airports/sharm-airport-terminal-1", "/airports/hurghada-airport-terminal-1"],
  ["/airports/cairo-airport-terminal-2", "/airports/hurghada-airport-terminal-2"],
  ["/airports/sharm-airport-terminal-2", "/airports/hurghada-airport-terminal-2"],
  ["/airports/cairo-airport-terminal-3", "/airports/hurghada-airport-terminal-1"],
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cleanPath = url.pathname.replace(/\/$/, '') || '/';

    // 1. Edge 301 Redirects
    if (REDIRECTS.has(cleanPath)) {
      const target = REDIRECTS.get(cleanPath);
      url.pathname = target;
      return Response.redirect(url.toString(), 301);
    }

    // 2. Fetch from Cloudflare Workers Static Assets
    const response = await env.ASSETS.fetch(request);

    // 3. Security and Caching Headers
    if (response.status === 200) {
      const headers = new Headers(response.headers);
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("X-Frame-Options", "DENY");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

      // Cache static assets (images, fonts, css, js) aggressively
      if (url.pathname.match(/\.(webp|jpg|jpeg|png|gif|svg|css|js|woff2?)$/i)) {
        headers.set("Cache-Control", "public, max-age=31536000, immutable");
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
