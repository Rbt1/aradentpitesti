import { notifyIndexNow } from '@/lib/indexnow'
import { articole } from '@/data/articole'
import { NextResponse } from 'next/server'

export async function GET() {
  const base = 'https://www.aradentpitesti.ro'

  const urls = [
    `${base}/`,
    `${base}/servicii/implantologie`,
    `${base}/servicii/chirurgie-orala`,
    `${base}/servicii/endodontie`,
    `${base}/servicii/parodontologie`,
    `${base}/servicii/obturatii`,
    `${base}/servicii/protetica-dentara`,
    `${base}/servicii/all-on-4-all-on-6`,
    `${base}/dr-robert-lungu`,
    `${base}/resurse`,
    `${base}/blog`,
    `${base}/preturi`,
    `${base}/contact`,
    ...articole.map((a) => `${base}/blog/${a.slug}`),
  ]

  const success = await notifyIndexNow(urls)
  return NextResponse.json({ success, urlsSubmitted: urls.length })
}
