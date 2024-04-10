<a href="https://livekit.io/">
  <img src="./.github/assets/livekit-mark.png" alt="vKonnekt logo" width="100" height="100">
</a>

# vKonnekt Meet

<p>
  <a href="https://meet.livekit.io"><strong>Try the demo</strong></a>
  •
  <a href="https://github.com/livekit/components-js">vKonnekt Components</a>
  •
  <a href="https://docs.livekit.io/">vKonnekt Docs</a>
  •
  <a href="https://livekit.io/cloud">vKonnekt Cloud</a>
  •
  <a href="https://blog.livekit.io/">Blog</a>
</p>

<br>

vKonnekt Meet is an open source video conferencing app built on [vKonnekt Components](https://github.com/livekit/components-js), [vKonnekt Cloud](https://livekit.io/cloud), and Next.js. It's been completely redesigned from the ground up using our new components library.

![vKonnekt Meet screenshot](./.github/assets/livekit-meet.jpg)

## Tech Stack

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- App is built with [@livekit/components-react](https://github.com/livekit/components-js/) library.

## Demo

Give it a try at https://meet.livekit.io.

## Dev Setup

Steps to get a local dev setup up and running:

1. Run `pnpm install` to install all dependencies.
2. Copy `.env.example` in the project root and rename it to `.env.local`.
3. Update the missing environment variables in the newly created `.env.local` file.
4. Run `pnpm dev` to start the development server and visit [http://localhost:3000](http://localhost:3000) to see the result.
5. Start development 🎉