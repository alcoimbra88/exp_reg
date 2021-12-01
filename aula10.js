// Encontra todas as palavras

const palavrasRegEx= /([\wÀ-ú]+)/gi


// Não Números

const naoNumerosRegEx = /\D/

// Valida IP

const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}/g

// Valida CPF

const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida Telefones

const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/ 

// Valida senhas fortes

const validaSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g

// Validas E-mails
// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Permissiva)
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+