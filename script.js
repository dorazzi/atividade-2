let requestURL = "https://www.luizpicolo.com.br/api.json";
let arquivos = new XMLHttpRequest();
arquivos.open('GET', requestURL);
arquivos.responseType = 'json'
arquivos.send();

arquivos.onload = function () {
  var dados = arquivos.response.articles

  let noticiaDestaque = new NoticiaDestaque(dados[0].title, dados[0].publishedAt, dados[0].author, dados[0].description, dados[0].urlToImage, dados[0].url, dados[0].content)
  let pagina = document.getElementById("noticia_destaque")
  pagina.insertAdjacentHTML('afterbegin', noticiaDestaque.pegar + '<br/> ');

  dados.shift();

  dados.forEach(dados => {
    let title = dados.title;
    let publishedAt = dados.publishedAt;
    let author = dados.author;
    let description = dados.description;
    let urlToImage = dados.urlToImage;
    let url = dados.url;
    let content = dados.content;


    let noticia = new Noticia(title, publishedAt, author, description, url, content)
    let noticiaDestaque = new NoticiaDestaque(title, publishedAt, author, description, urlToImage, url, content)
    let pagina = document.getElementById("noticias")

    pagina.insertAdjacentHTML('afterbegin', noticia.formar + '<br/> ');

  })


}
