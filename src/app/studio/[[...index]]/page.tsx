// src/app/studio/[[...index]]/page.tsx
'use client'

/**
 * This route is responsible for the Sanity Studio.
 * It catches all routes starting with /studio.
 *
 * You can learn more about the Next.js App Router here:
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config' // Adjust path as necessary

export default function StudioPage() {
  //  Supports the same props as \`import {Studio} from 'sanity'\`
  return <NextStudio config={config} />
}

// If you have a dynamic_metadata file, you might want to add this to prevent it from trying to generate metadata for studio routes
// export const dynamic = 'force-static' // Or 'error' if you prefer to catch it