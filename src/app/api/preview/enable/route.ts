// src/app/api/preview/enable/route.ts
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
// Use a relative path to ensure it's found
import { previewSecretId } from '../../../../sanity/lib/client'

// A secret to ensure only Sanity Studio can trigger preview mode
const SANITY_PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') // The slug of the document to preview
  const type = searchParams.get('type') // The type of the document

  // Check the secret and next parameters
  if (!SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Preview secret is not set.' }, { status: 500 })
  }
  if (secret !== SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  if (!slug && !type) { // Allow previewing the studio itself or a generic page if no slug/type
    draftMode().enable() // Calling draftMode().enable() directly enables it
    return redirect('/studio') // Or a generic preview page
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable() // Calling draftMode().enable() directly enables it

  // Determine the redirect path
  let redirectPath = '/'
  if (type === 'homePage') {
    redirectPath = '/'
  } else if (type === 'aboutPage') {
    redirectPath = '/about'
  } else if (type === 'menuPage') {
    redirectPath = '/menu'
  } else if (type === 'location' && slug) {
    redirectPath = `/locations/${slug}` // Assuming you have a [slug] page for locations
  } else if (slug) {
    // Generic fallback if type is not recognized but slug exists
    // You might want to adjust this based on your routing structure
    redirectPath = `/${slug}`
  }
  // Add more specific redirects based on your content types and routing

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  return redirect(redirectPath)
}