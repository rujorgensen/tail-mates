const rootDir: string = 'dist/libs/frontend/storybook-web-components';

const server = Bun.serve({
    fetch(req) {
        const url = new URL(req.url);

        if (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html')) {
            return new Response(Bun.file(rootDir + '/index.html'));
        }

        try {
            return new Response(Bun.file(rootDir + url.pathname));
        } catch {
            console.error('File not found:', rootDir + url.pathname);
            return new Response(Bun.file(rootDir + '/index.html'));
        }
    }
});

console.log(`Server running at http://localhost:${server.port}`);