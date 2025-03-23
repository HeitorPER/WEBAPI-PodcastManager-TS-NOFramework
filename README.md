# Nome da aplicação
    Podcast Manager

# Descrição
    APP estilo netflix para gerenciar e assistir podcasts separados por categorias

# Dominio
    Podcasts feitos em video

# Features 
    -Listar episodios de podcasts em catgegorias
        -[saude, bodybuilder, mentalidade, humor, influencers]
    -Filtrar episodios por nomes de podcasts

# Como

# feature
    -Listar episodios de podcasts em catgegorias

# Como vou implementar
    retornar em api rest(json) o 
    nome do podcast, nome do espisodio, imagem de capa, link
    ```js
    [{
        podCastName: "Flow",
        episode: "CBUM - Flow #319",
        videoID: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saude", "bodybuilder"]

    },
    {
        podCastName: "Flow",
        episode: "JON VLOGS - Flow #418",
        videoID: "VEGS8VHmGz8",
        cover: "https://i.ytimg.com/vi/VEGS8VHmGz8/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=VEGS8VHmGz8",
        categories: ["humor", "influencers"]

    }

    ]    
    ```
