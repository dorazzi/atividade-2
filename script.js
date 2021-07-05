


let requestURL = "https://www.luizpicolo.com.br/api.json";
let arquivos = new XMLHttpRequest();
arquivos.open('GET', requestURL);
arquivos.responseType = 'json'
arquivos.send();

arquivos.onload = function () {
  var dados = arquivos.response

  dados.articles.forEach(dados => {
    let title = dados.title;
    let publishedAt = dados.publishedAt;
    let author = dados.author;
    let description = dados.description;
    let urlToImage = dados.urlToImage;
    let url = dados.url;
    let content = dados.content;


    let noticia = new Noticia(title, publishedAt, author, description, url, content)
    let noticiaDestaque = new NoticiaDestaque(title, publishedAt, author, description, urlToImage, url, content)
    let pagina = document.getElementById("container")

    pagina.insertAdjacentHTML('afterbegin', noticia.formar + '<br/> ');

  })


}
for (let i = 0; i < 1; i++) {
  let requestURL = "https://www.luizpicolo.com.br/api.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let arquivos = request.response;

    const elemento = document.getElementById("container");
    let title = arquivos.articles[0].title;
    let publishedAt = arquivos.articles[0].publishedAt;
    let author = arquivos.articles[0].author;
    let description = arquivos.articles[0].description;
    let urlToImage = arquivos.articles[0].urlToImage;
    let url = arquivos.articles[0].url;
    let content = arquivos.articles[0].content;

    let noticiaDestaque = new NoticiaDestaque(title, publishedAt, author, description, urlToImage, url, content)
    elemento.insertAdjacentHTML("afterbegin", noticiaDestaque.pegar);
  }
}