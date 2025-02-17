import ServiceError from "./ServiceError.js";

export function validarEndereco(data) {
    const {cep, logradouro, cidade, estado, complemento, numero} = data

        if (typeof cep !== 'string' || cep.length !== 8) {
            throw new ServiceError('CEP inválido, cep deve ser uma string e conter 8 caracteres', 400);
        }
        // Validar que logradouro, cidade e estado são strings não vazias
        if (typeof logradouro !== 'string' || logradouro.trim() === '') {
            throw new ServiceError('Logradouro é obrigatório e deve ser uma string', 400);
        }

        if (typeof cidade !== 'string' || cidade.trim() === '') {
            throw new ServiceError('Cidade é obrigatória e deve ser uma string', 400);
        }

        if (typeof estado !== 'string' || estado.trim() === '') {
            throw new ServiceError('Estado é obrigatório e deve ser uma string', 400);
        }

        // Validar que numero é um número (se for fornecido)
        if (numero && typeof numero !== 'number') {
            throw new ServiceError('Número deve ser um número', 400);
        }

        // O complemento é opcional, então podemos validar se o tamanho não ultrapassa 255 caracteres
        if (complemento && typeof complemento !== 'string' || complemento.length > 255) {
            throw new ServiceError('Complemento deve ser uma string e ter no máximo 255 caracteres', 400);
        }

}