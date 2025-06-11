// src/app/api/preview/disable/route.ts
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  draftMode().disable() // Calling draftMode().disable() directly disables it

  // Get the redirect path from the search parameters or default to home
  const { searchParams } = new URL(request.url)
  const redirectPath = searchParams.get('redirect') || '/'
  
  return redirect(redirectPath)
}