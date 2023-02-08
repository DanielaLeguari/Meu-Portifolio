fetch('./cursos.json').then(response => {
    return response.json();
}).then(data => {
    let html = '';
    console.log(data);
    data.forEach(elemento =>
        html +=
        `
    <article class="card card-largura  p-0 m-4 col-12 col-md-3" style="width: 18rem;">
    <div class="card-body borda-card-cursos">
        <h5 class="card-title">${elemento.titulo}</h5>
        <p class="card-text">${elemento.instituicao}</p>
    </div>
</article>
        `
    );
    document.getElementById("cursos").innerHTML = html;
}).catch(err => {
    console.log(err);
});

