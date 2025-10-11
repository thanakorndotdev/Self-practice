document.addEventListener("DOMContentLoaded", () =>{
    document.body.style.backgroundColor = "#FFFFCC";
    let name = prompt("What's your name?");
    const textMain = document.querySelector('h1');
    textMain.textContent = "Hi everyone I'm " + name + "!";
    textMain.classList.add('text-xl');
    textMain.style.color = "#778899";

    addNewMusic('Bye summer', 'IU');
    addNewMusic('จดจำ', 'Only Monday');
    addNewMusic('Con Te Partirò', 'Andrea Bocelli');
    renderMusics();

});

const musics = [];

function addMusic(Name,Author){
    musics.push({ Name,Author });
}

function getAllMusics(){
    return musics;
}

function addNewMusic(Name, Author){
    addMusic(Name, Author);
}

function renderMusics(){
    const li = document.getElementById('music-list')
    if (!li) return;
    li.innerHTML = '';
    const list = getAllMusics();

    list.forEach( music => {
        const p = document.createElement('p');
        p.textContent = `"${music.Name}" — ${music.Author}`;
        li.appendChild(p)
    });
}

