const esbuild = require('esbuild');

const [, , watch] = process.argv;

(async () => {
  await esbuild.build({
    entryPoints: ['src/index.tsx'],
    sourcemap: true,
    platform: 'browser',
    bundle: true,
    color: true,
    outdir: './serve/dist',
    logLevel: 'info',
    entryNames: 'bundle-[name]',
    watch: watch === '--watch',
    define: {
      id: 'process.env.NODE_ENV',
      str: '"development"',
    },
  });
})();
