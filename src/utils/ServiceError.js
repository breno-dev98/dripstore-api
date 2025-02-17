class ServiceError extends Error {
    constructor(message, statusCode) {
        super(message);  // Passa a mensagem para o construtor da classe Error
        this.name = "ServiceError";  // Nome do erro
        this.statusCode = statusCode || 400;  // Status code padrão é 400 (erro de validação)
    }
}

export default ServiceError;
