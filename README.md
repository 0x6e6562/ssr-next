# SSR Repro Using Next.js

This is a simple repro for an [issue](https://github.com/rpearce/react-medium-image-zoom/issues/202) with `react-medium-image-zoom` and SSR.

Steps to reproduce:

    $ npm i
    $ npm run dev

        > ssr-next@1.0.0 dev /Users/0x6e6562/Workspace/ssr-next
        > next

        [ wait ]  starting the development server ...
        [ info ]  waiting on http://localhost:3000 ...
        [ ready ] compiled successfully - ready on http://localhost:3000
        [ event ] build page: /next/dist/pages/_error
        [ wait ]  compiling ...
        [ ready ] compiled successfully - ready on http://localhost:3000
        [ event ] build page: /
        [ wait ]  compiling ...
        [ ready ] compiled successfully - ready on http://localhost:3000
        ReferenceError: HTMLElement is not defined
            at Object.focusOptionsPolyfill (/Users/0x6e6562/Workspace/ssr-next/node_modules/react-medium-image-zoom/dist/cjs/Main-3e4e31be.js:23:3)
            at Object.<anonymous> (/Users/0x6e6562/Workspace/ssr-next/node_modules/react-medium-image-zoom/dist/cjs/Uncontrolled.js:18:6)
            at Module._compile (internal/modules/cjs/loader.js:1139:30)
            at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
            at Module.load (internal/modules/cjs/loader.js:988:32)
            at Function.Module._load (internal/modules/cjs/loader.js:896:14)
            at Module.require (internal/modules/cjs/loader.js:1028:19)
            at require (internal/modules/cjs/helpers.js:72:18)
            at Object.<anonymous> (/Users/0x6e6562/Workspace/ssr-next/node_modules/react-medium-image-zoom/dist/cjs/index.js:14:20)
            at Module._compile (internal/modules/cjs/loader.js:1139:30)
            at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)
            at Module.load (internal/modules/cjs/loader.js:988:32)
            at Function.Module._load (internal/modules/cjs/loader.js:896:14)
            at Module.require (internal/modules/cjs/loader.js:1028:19)
            at require (internal/modules/cjs/helpers.js:72:18)
            at Object.react-medium-image-zoom (/Users/0x6e6562/Workspace/ssr-next/.next/server/static/development/pages/index.js:173:18)