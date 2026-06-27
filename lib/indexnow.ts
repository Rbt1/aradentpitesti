const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'bb6850efaad2401c9216973a0335961d'
const INDEXNOW_HOST = 'www.aradentpitesti.ro'

export async function notifyIndexNow(urls: string[]) {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })
    return response.ok
  } catch (error) {
    console.error('IndexNow notification failed:', error)
    return false
  }
}
