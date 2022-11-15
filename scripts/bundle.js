const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

const [, , watch] = process.argv;

(async () => {
  await esbuild.build({
    plugins: [
      cssModulesPlugin({
        inject: true,
        localsConvention: 'dashes',
        filter: /\.module\.css$/,
      }),
    ],
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
