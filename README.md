This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) integrating [Wanda](https://design.wonderflow.ai/)

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`.


## Learn More

To learn more about **Wanda**, take a look at the following resources:

- [Wanda Documentation](https://design.wonderflow.ai/)
- [Wanda Storybook](https://wonderflow-bv.github.io/wanda/)
- [Wanda Repository](https://github.com/wonderflow-bv/wanda)

To learn more about **Next.js**, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Important

- Use ['use client'](https://nextjs.org/docs/getting-started/react-essentials#client-components) to load Wanda without having issues with SSR. 
- Use [SVGR](https://react-svgr.com/docs/next/) package and configuration in **next-config.js** to avoid problems loading .svg files.