fetch('./projetos.json').then(response => {
  return response.json();
}).then(data => {
  let html = '';
  console.log(data);
  data.forEach(elemento => {
    html += `  <article id="card" class="card card-projetos card-largura p-0 m-4 col-12 col-md-4">
        <img  id="imagem" src="${elemento.imagem}"class="card-img-top card-posicao-imagem" alt="...">
        <div class="card-body">
          <h3 id="titulo" class="card-title fonte-principal text-center">${elemento.titulo}</h3>
          <p id="subtitulo" class="card-text cor-texto-paragrafo mb-2">${elemento.legenda}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href="${elemento.link}" target="_blank" class="botao-cor-projetos">Acessar projeto</a>
          </div>
          
        </div>
      </article>`
  });
  document.getElementById("cards-projetos").innerHTML = html;
}).catch(err => {
  console.log(err);
});