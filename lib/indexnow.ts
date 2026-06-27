const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'bb6850efaad2401c9216973a0335961d'
const INDEXNOW_HOST = 'www.aradentpitesti.ro'

export async function notifyIndexNow(urls: string[]) {
  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const bodyText = await response.text()

    console.log('IndexNow request payload:', JSON.stringify(payload))
    console.log('IndexNow response status:', response.status, response.statusText)
    console.log('IndexNow response body:', bodyText)

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: bodyText,
    }
  } catch (error) {
    console.error('IndexNow notification failed:', error)
    return {
      ok: false,
      status: 0,
      statusText: 'fetch_error',
      body: error instanceof Error ? error.message : String(error),
    }
  }
}
