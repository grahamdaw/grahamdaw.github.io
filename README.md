# grahamdaw.github.io

GitHub page for me.

This is a [Next.js](https://nextjs.org/) TypeScript project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using [Grommet](https://v2.grommet.io/) as the UI Framework.


## Dev

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Grommet Theme
Theme customization from [Grommet Theme Builder](https://grommet-theme-builder.netlify.app/)

## Deployment
The GitHub page is hosted from the `docs/`directory on the `live` branch.

Any changes pushed to the `main` branch are automatically exported with `next export -out docs/` (via GitHub Actions) and committed to the `live` branch. The export directory is `docs/` as GitHub pages doesn't yet allow any other directories to be used as the source. 