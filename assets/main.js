/**
 * Função navegação das paginas
 * 
 */
(function (){
    const megaterio = document.querySelector('#megaterio');
    const servicos = document.querySelector('#servicos');
    const portifolio = document.querySelector('#portifolio');
    const sobre = document.querySelector('#sobre');
    const btnMegaterio = document.querySelector('#btn-megaterio');
    const btnServicos = document.querySelector('#btn-servicos');
    const btnPortifolio = document.querySelector('#btn-portifolio');
    const btnSobre = document.querySelector('#btn-sobre');

    const pages = [megaterio, servicos, portifolio, sobre];


    btnMegaterio.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false ) { el.classList.toggle('hidden') }
        };
        
        megaterio.classList.toggle('hidden');
    });
    
    btnServicos.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        servicos.classList.toggle('hidden');
    });
    
    btnPortifolio.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        portifolio.classList.toggle('hidden');
    });
    
    btnSobre.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        sobre.classList.toggle('hidden');
    }); 

})();
