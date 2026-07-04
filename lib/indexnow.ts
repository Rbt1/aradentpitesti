const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'bb6850efaad2401c9216973a0335961d'
const INDEXNOW_HOST = 'www.aradentpitesti.ro'

export async function verifyKeyFile() {
  const url = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`
  try {
    const verifyResponse = await fetch(url, { cache: 'no-store' })
    const verifyText = await verifyResponse.text()

    console.log('Verify file URL:', url)
    console.log('Verify file status:', verifyResponse.status)
    console.log('Verify file content:', JSON.stringify(verifyText))
    console.log('Verify file length:', verifyText.length)

    return {
      url,
      status: verifyResponse.status,
      content: verifyText,
      length: verifyText.length,
      matchesKey: verifyText === INDEXNOW_KEY,
    }
  } catch (error) {
    console.error('Verify file fetch failed:', error)
    return {
      url,
      status: 0,
      content: '',
      length: 0,
      matchesKey: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function notifyIndexNow(urls: string[]) {
  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  const verify = await verifyKeyFile()

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
      verify,
    }
  } catch (error) {
    console.error('IndexNow notification failed:', error)
    return {
      ok: false,
      status: 0,
      statusText: 'fetch_error',
      body: error instanceof Error ? error.message : String(error),
      verify,
    }
  }
}
