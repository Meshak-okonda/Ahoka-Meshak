
// les competences

    const competence = document.getElementById('competence')
    fetch('https://api.jsonbin.io/b/6070867f181177735ef526ff').then(function(response) {
        if(response.ok) {
            response.json().then(function(json) {
            text = json;
            let a = 1;
            text = text.Competences

            for (element of text){
                // création d'une div
                let div = document.createElement('div')
                div.className = "point_general point" + a
                // création du span container de l'icon
                let spanInterieur = document.createElement('span')
                spanInterieur.className = 'texte'

                // création de l'icone grace à la classe de l'icon fontawesome
                let icon = document.createElement('i')
                icon.className = element.icon

                // incorporation de l'icon dans l'element
                spanInterieur.appendChild(icon)

                // création de tout les element
                div.appendChild(spanInterieur)

                // creation de l'element dans le div contenaire
                competence.appendChild(div)
                a++;
            }
            });
        } else {
            console.log('Le serveur Json a comme probleme : ' + response.status + ': ' + response.statusText);
        }
        })



// Le formulaire

    const mail = document.getElementById('floatingMail')
    const nom = document.getElementById('floatingNom')
    const raison = document.getElementById('floatingSelect')
    const detail = document.getElementById('floatingTextarea2')
    const btn = document.getElementById('submit')
        function chargement(){
            btn.innerText = ""
            btn.innerHTML = `<div class="spinner-border text-info" role="status">
                             <span class="visually-hidden">Loading...</span>
                             </div>`
            if (verif()){
                setTimeout(e=>{
                    btn.innerHTML = ` `
                    btn.style.backgroundColor = "green"
                    btn.innerText = "Merci"
                }, 2000)
                setTimeout(e=>{
                    btn.style.backgroundColor = "transparent"
                    reinit()
                    btn.innerText = "Envoyer"
                }, 4000)
            }
            else{
                setTimeout(e=>{
                    btn.innerHTML = ` `
                    btn.style.backgroundColor = "red"
                    btn.innerText = "Erreur"
                },1000)
                setTimeout(e=>{
                    btn.innerHTML = ` `
                    btn.style.backgroundColor = "transparent"
                    btn.innerText = "Envoyer"
                },2000)
            }
    }

    function reinit(){
        mail.value = ""
        nom.value = ""
        detail.innerText = ""
        raison.value = 0
    }
    function verif(){
        if (mail.value.trim() == "" || nom.value.trim() == ""|| raison.value == 0)
        { return false}
        else{
            return true
        }
    }


// Les carousel

function ajoutCarousel(element, compteur){
    let carEl = document.getElementById("carEl")
    let carLien = document.getElementById("carLien")
    let carImg = document.getElementById('carImg')

    if (compteur == 1){
        carEl.classList.add("active")
    }
    carEl.id = " "
    carLien.href = "#" + element.id
    carLien.id = " "
    carImg.setAttribute("src", "/" + element.photo)
    carImg.setAttribute("alt", element.titre)
    carImg.id = " "
}

let carParent = document.getElementById('carParent')
fetch('https://api.jsonbin.io/b/6074b43e5b165e19f61e2ce0/1').then(function(response) {
    if(response.ok) {
       response.json().then(function(json) {
            text = json;
            text = text.projets
            var car = `<div class="carousel-item" id="carEl">
                <a data-toggle="modal" href="#portfolioModal1" id="carLien">
                    <img src="img/Back-ground.jpg" class="d-block w-100 for-modal" alt="" id="carImg">
                </a>
            </div>`

            let compteur = 1
            for (element of text){
                carParent.innerHTML += car
                ajoutCarousel(element, compteur)
                compteur++;
            }
        });
    } else {
        console.log('Le serveur Json a comme probleme : ' + response.status + ': ' + response.statusText);
    }
})

// Les Modals

function ajoutModal(text) {
    // le contenaire parent
    let modalElement = document.getElementById('element')
    modalElement.id = element.id

    // création du titre de la modal
    let titre = document.getElementById('elementTitre')
    titre.innerText = element.titre
    titre.id = " "

    // Création du sous-titre de la modal
    let sousTitre = document.getElementById('elementSousTitre')
    sousTitre.innerText = element.sous_titre
    sousTitre.id = " "

    // image
    let image = document.getElementById('elementImage')
    image.src = element.photo
    image.id = " "

    // description
    let description = document.getElementById('elementDescription')
    description.innerText = element.description
    description.id = " "
    // date
    let date = document.getElementById('elementDate')
    date.innerText = element.date
    date.id = " "
 }

let body = document.getElementById('body')
fetch('https://api.jsonbin.io/b/6074b43e5b165e19f61e2ce0/1').then(function(response) {
    if(response.ok) {
      response.json().then(function(json) {
        text = json;
        text = text.projets
        const modal = `<div class="portfolio-modal modal fade" id="element" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-dismiss="modal"><i class="fas fa-times"></i></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                        <!-- Project Details Go Here-->
                                        <h2 class="text-uppercase" id="elementTitre">Project Name</h2>
                                        <p class="item-intro text-muted" id="elementSousTitre">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img class="img-fluid d-block mx-auto" src="img/profil.jpg" alt="" id="elementImage"/>
                                        <p id="elementDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed atque temporibus eaque itaque nesciunt corrupti distinctio architecto nobis vel similique, possimus obcaecati quibusdam aut in, repellendus consequuntur? Impedit, animi. Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul class="list-inline">
                                            <li id="elementDate">Date: January 2020</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fas fa-times mr-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>elementImage
            </div>`

        for (element of text){
            body.innerHTML += modal
            ajoutModal(element)
        }
        
            });
            } else {
            console.log('Le serveur Json a comme probleme : ' + response.status + ': ' + response.statusText);
            }
        })