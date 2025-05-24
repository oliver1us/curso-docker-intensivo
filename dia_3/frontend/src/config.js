let config = { apiUrl: '/api' }

export async function loadConfig() {
  try {
    const res = await fetch('/config.json')
    config = await res.json()
  } catch (err) {
    console.warn('No se pudo cargar config.json, usando valores por defecto', err)
  }
}

export function getApiUrl() {
  return config.apiUrl
}

