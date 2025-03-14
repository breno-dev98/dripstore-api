import bcrypt from 'bcrypt'

const hashSenha = async (senha) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(senha, salt)
}

const compararSenha = async (senhaDigitada, senhaHash) => {
    return await bcrypt.compare(senhaDigitada, senhaHash);
};

export { hashSenha, compararSenha }

