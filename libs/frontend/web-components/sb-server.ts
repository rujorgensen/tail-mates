const server = Bun.serve({
    fetch(req) {

        const url = new URL(req.url);

        if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
            return new Response(Bun.file(import.meta.dir + "/storybook-static/index.html"));
        }

        try {
            return new Response(Bun.file(import.meta.dir + "/storybook-static" + url.pathname));
        } catch {
            console.error("File not found:", import.meta.dir + "/storybook-static" + url.pathname);
            return new Response(Bun.file(import.meta.dir + "/storybook-static/index.html"));
        }
    }
});

console.log(`Server running at http://localhost:${server.port}`);