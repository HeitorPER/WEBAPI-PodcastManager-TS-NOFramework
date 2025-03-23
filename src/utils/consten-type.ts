export enum ContentTypes {
    JSON = "application/json",                   // JSON
    FORM_URLENCODED = "application/x-www-form-urlencoded",  // Formulário URL codificado
    TEXT_PLAIN = "text/plain",                    // Texto simples
    HTML = "text/html",                           // HTML
    XML = "application/xml",                     // XML
    YAML = "application/x-yaml",                 // YAML
    PDF = "application/pdf",                     // PDF
    JPEG = "image/jpeg",                         // Imagem JPEG
    PNG = "image/png",                           // Imagem PNG
    GIF = "image/gif",                           // Imagem GIF
    MULTIPART_FORM_DATA = "multipart/form-data", // Formulário multipart (normalmente usado para upload de arquivos)
    OCTET_STREAM = "application/octet-stream",   // Fluxo de dados binários
    CSV = "text/csv",                            // Arquivo CSV
    MP3 = "audio/mpeg",                          // Áudio MP3
    WAV = "audio/wav",                           // Áudio WAV
    ZIP = "application/zip",                    // Arquivo ZIP
    RTF = "application/rtf",                     // RTF (Rich Text Format)
    EML = "message/rfc822"                       // E-mail (formato RFC 822)
}
