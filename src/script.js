fetch('/src/projetos.json').then(response => {
    return response.json();
}).then(data => {
    let html = '';
    console.log(data);
    data.forEach(elemento => {
        html += `  <article id="card" class="card card-estilo card-largura p-0 m-4 col-12 col-md-3">
        <img  id="imagem" src="${elemento.imagem}"class="card-img-top card-posicao-imagem" alt="...">
        <div class="card-body">
          <h5 id="titulo" class="card-title">${elemento.titulo}</h5>
          <p id="subtitulo" class="card-text">${elemento.legenda}</p>
          <a href="${elemento.link}"class="btn btn-dark me-md-2">Acessar projeto</a>
        </div>
      </article>`
    });
    document.getElementById("cards-projetos").innerHTML = html;
}).catch(err => {
    console.log(err);
});