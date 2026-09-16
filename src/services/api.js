// No emulador Android, 10.0.2.2 aponta para o localhost da maquina host.
const BASE_URL = "http://10.0.2.2:3000";

export async function buscarLivros() {
  // TODO: implementar
  try {
    const response = await fetch(`${BASE_URL}/livros`)
    if(!response.ok){
      throw new Error(`Erro ${response.status}: falha ao buscar livros.`)
    }
    return response.json()
  } catch (error) {
    console.error('buscarLivros', error.message)
    throw error
  }
}

export async function buscarLivroPorId(id) {
  // TODO: implementar
  try {
    const response = await fetch (`${BASE_URL}/livros/${id}`)
    if(!response.ok){
      throw new Error(`Erro ${response.status}: falha ao buscar livro.`)
    }
    return response.json()
  } catch (error) {
    console.error('buscarLivroPorId', error.message)
    throw error
  }
}

export async function adicionarFavorito(livroId, observacao) {
  // TODO: implementar
  try {
    const response = await fetch(`${BASE_URL}/favoritos`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ livroId, observacao })
    })
    if (!response.ok){
      const corpo = await response.json().catch(() => ({}))
      const error = new Error(corpo.erro ?? `Erro ${response.status}: falha ao adicionar favoritos.`)
      error.status = response.status
      throw error
    }
    return response.json
  } catch (error) {
    console.error('adicionarFavorito:', error.message)
    throw error
  }
}

export async function listarFavoritos() {
  // TODO: implementar
  try {
    const response = await fetch(`${BASE_URL}/favoritos`)
    if (!response.ok){
      throw new Error(`Erro ${response.status}: falha ao listar favoritos`)
    }
    return response.json
  } catch (error) {
    console.error("listarFavoritos:", error.message)
    throw error
  }
}

export async function editarFavorito(id, observacao) {
  // TODO: implementar
}

export async function removerFavorito(id) {
  // TODO: implementar
}
