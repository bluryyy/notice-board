//Conexão com o Banco de Dados
const db = require('../../knexfile.js')

/**
 * Inserir um avisos no Banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: {titulo: <string>, data: <string>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
async function salvar(aviso) {
  return db.insert(aviso).into('avisos').then(_ => {
    return {
      tipo: "Sucesso",
      corpo: "Dados inseridos com sucesso!"
    }
  })
    .catch(erro => {
      return {
        tipo: "Erro",
        corpo: "Erro ao retornar" + erro
      }

    })
}//fim do salvar

module.exports = {salvar}
