import { notifyIndexNow } from '@/lib/indexnow'
import sitemap from '@/app/sitemap'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const urls = sitemap().map((entry) => entry.url)

  const result = await notifyIndexNow(urls)

  return NextResponse.json({
    success: result.ok,
    urlsSubmitted: urls.length,
    urls,
    indexNowStatus: result.status,
    indexNowStatusText: result.statusText,
    indexNowBody: result.body,
    keyFileVerification: result.verify,
  })
}
