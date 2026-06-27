import { notifyIndexNow } from '@/lib/indexnow'
import sitemap from '@/app/sitemap'
import { NextResponse } from 'next/server'

export async function GET() {
  const urls = sitemap().map((entry) => entry.url)

  const success = await notifyIndexNow(urls)
  return NextResponse.json({ success, urlsSubmitted: urls.length })
}
