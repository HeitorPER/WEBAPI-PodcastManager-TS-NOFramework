export enum StatusCode {
    OK = 200,                     // Requisição bem-sucedida
    CREATED = 201,                // Recurso criado com sucesso
    ACCEPTED = 202,               // Requisição aceita, mas ainda em processamento
    NO_CONTENT = 204,             // Requisição bem-sucedida, mas sem conteúdo
    MOVED_PERMANENTLY = 301,      // Recurso movido permanentemente
    FOUND = 302,                  // Recurso movido temporariamente
    BAD_REQUEST = 400,            // Requisição inválida
    UNAUTHORIZED = 401,           // Falta de autenticação
    FORBIDDEN = 403,              // Acesso proibido
    NOT_FOUND = 404,              // Recurso não encontrado
    METHOD_NOT_ALLOWED = 405,     // Método HTTP não permitido
    INTERNAL_SERVER_ERROR = 500,  // Erro interno do servidor
    NOT_IMPLEMENTED = 501,        // Método não implementado
    BAD_GATEWAY = 502,            // Erro de gateway
    SERVICE_UNAVAILABLE = 503,    // Serviço temporariamente indisponível
    GATEWAY_TIMEOUT = 504         // Timeout no gateway
}
