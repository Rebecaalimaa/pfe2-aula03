const cadastro = document.querySelector('header form');
const tcorpo = document.querySelector('main tbody');
const listaArmazenada = JSON.parse(window.localStorage.getItem('contatos'));

if(!listaArmazenada){ /**!=nao */
    window.localStorage.setItem('contatos', JSON.stringify([]));
    alert('Esta página armazena dados sensíveis!');
    listaArmazenada = [];
}else{
    preencherTabela();
}

cadastro.addEventListener('submit', async e =>{
    e.preventDefault();
    const novoRegistro = {
        nome: cadastro.nome.value,
        email: cadastro.email.value,
        telefone: cadastro.telefone.value,
        endereco: cadastro.endereco.value,
        cpf: cadastro.cpf.value
    };
    listaArmazenada.push(novoRegistro);
    await preencherTabela();
    await salvar();
});

async function preencherTabela(){
    tcorpo.innerHTML = '';
    listaArmazenada.forEach((c, i ) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.nome}</td>
            <td>${c.email}</td>
            <td>${c.telefone}</td>
            <td>${c.endereco}</td>
            <td>${c.cpf}</td>
            <td>
                <button class="btn btn-danger" onclick="excluir(${i})">-</button>
                  <button class="btn btn-warning" onclick="editar(${i})">*</button>
            </td>
        `;
        tcorpo.appendChild(tr);
    });
}

async function salvar(){
    window.localStorage.setItem('contatos', JSON.stringify(listaArmazenada));
}

function excluir(i){

    listaArmazenada.splice(i, 1);
    preencherTabela();
    salvar();

    }
    
function editar (i){
    
        }
    