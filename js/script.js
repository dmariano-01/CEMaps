// Configuração do mapa com restrição de área
const mapBounds = L.latLngBounds(
    L.latLng(-4.85, -37.45), // Sudoeste
    L.latLng(-4.60, -37.25)  // Nordeste
);

const map = L.map('map', {
    zoomControl: false,
    maxBounds: mapBounds,
    maxBoundsViscosity: 1.0
}).setView([-4.7128, -37.3531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ícone vermelho
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Dados das escolas com imagens
const escolas = [
    {
        nome: "Escola de Ensino Fundamental Professor Francisco Ezequiel",
        coordenadas: [-4.70756582342084, -37.49257352720901],
        endereco: "NOVA BELEM, SN 62810-000 Icapuí - CE.",
        contato: "(88) 3432-1025",
        instagram: "https://www.instagram.com/escola_ezequiel/?igsh=MWk5ZjB3bndjcHUyZQ%3D%3D#",
        imagens: [
            'https://via.placeholder.com/800x600/FF9999/FFFFFF?text=Escola+1',
            'https://via.placeholder.com/800x600/99FF99/FFFFFF?text=Escola+2'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Horizonte da Cidadania",
        coordenadas: [-4.651352180890123, -37.476296721206246],
        endereco: "PRAIA DE REDONDA, 62810-000 Icapuí - CE.",
        contato: "(88) 3432-3137",
        instagram: "https://www.instagram.com/horizontedacidadania?igsh=cW9yaTlxdjZuZ3Ux",
        imagens: [
            'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QykmZvNCH9e8h1NAaxIyww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=189.65886&pitch=0&thumbfov=100',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Professora Joana Marques Bezerra",
        coordenadas: [-4.677249362890056, -37.4039516678148],
        endereco: "PRAIA DE BARREIRAS, SN 62810-000 Icapuí - CE.",
        contato: "(88) 99884-9262",
        instagram: "https://www.instagram.com/escjoanamarques?igsh=MTJ4MzBoY3RiMmkxeA==",
        imagens: [
            'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QykmZvNCH9e8h1NAaxIyww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=189.65886&pitch=0&thumbfov=100',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Professora Raimunda Lacerda",
        coordenadas: [-4.694944095585511, -37.376638423502264],
        endereco: "AVENIDA ESAU LACERDA, 2121 MUTAMBA. 62810-000 Icapuí - CE.",
        contato: "(88) 3432-1011",
        instagram: "https://www.instagram.com/escolaraimundalacerda?igsh=MXIzODhmcnZtbThsbg==",
        imagens: [
            'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QykmZvNCH9e8h1NAaxIyww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=189.65886&pitch=0&thumbfov=100',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Professora Mizinha",
        coordenadas: [-4.706590812765561, -37.36045144996711],
        endereco: "AVENIDA 22 DE JANEIRO, MORRO ALTO. 62810-000 Icapuí - CE.",
        contato: "(88) 3432-1127",
        instagram: "https://www.instagram.com/escola_mizinha/?igsh=anRnM2I4eG5mcWtu#",
        imagens: [
            'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QykmZvNCH9e8h1NAaxIyww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=189.65886&pitch=0&thumbfov=100',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola Estadual de Educação Profissional Jaime da Cunha Rebouças",
        coordenadas: [-4.688882293519494, -37.40445030478692],
        endereco: "CE 261 SERRA DO MAR, SN - MUTAMBA CEP: 62810000",
        instagram: "https://www.instagram.com/ep.jaimecunhareboucas/",
        contato: "Indefinido",
        imagens: [
            'https://lh5.googleusercontent.com/p/AF1QipP992w9yvNd4CcghXYRaa3f0JjZ62aToqw1mAB_=w426-h240-k-no',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Professora Carlota Tavares de Holanda",
        coordenadas: [-4.739786357115177, -37.31300996612148],
        endereco: "RUA CORONEL RICARDO HOLANDA, SN 62810-000 Icapuí - CE.",
        instagram: "https://www.instagram.com/escolacarlota_?igsh=MTRrNWRnMDBtMTVhaA==",
        contato: "Indefinido",
        imagens: [
            'https://lh5.googleusercontent.com/p/AF1QipP992w9yvNd4CcghXYRaa3f0JjZ62aToqw1mAB_=w426-h240-k-no',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Fundamental Professora Maria Edilce Barbosa",
        coordenadas: [-4.758363368502437, -37.29077886582949],
        endereco: "RUA JOAQUIM MARQUES, SN MELANCIAS DE BAIXO. 62810-000 Icapuí - CE.",
        instagram: "https://www.instagram.com/escmariaedilce?igsh=MXQzNHdvbDFuZzZubA==",
        contato: "Indefinido",
        imagens: [
            'https://lh5.googleusercontent.com/p/AF1QipP992w9yvNd4CcghXYRaa3f0JjZ62aToqw1mAB_=w426-h240-k-no',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    },
    {
        nome: "Escola de Ensino Médio Professor Gabriel Epifânio dos Reis",
        coordenadas: [-4.701307989682287, -37.36205160022613],
        endereco: "RUA FILIZOLINA FREITAS, SN CAJUAIS. 62810-000 Icapuí - CE.",
        instagram: "https://www.instagram.com/escola.gabriel?igsh=NzgxaXAxMTN4N3Y5",
        contato: "(88) 3432-1079",
        imagens: [
            'https://lh5.googleusercontent.com/p/AF1QipP992w9yvNd4CcghXYRaa3f0JjZ62aToqw1mAB_=w426-h240-k-no',
            'https://via.placeholder.com/800x600/FF99FF/FFFFFF?text=Escola+4'
        ]
    }
];

const markers = L.layerGroup().addTo(map);

function createCarousel(images) {
    let currentIndex = 0;
    const carousel = document.createElement('div');
    carousel.className = 'image-carousel';
    
    const imgContainer = document.createElement('div');
    images.forEach((img, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.className = `carousel-image ${index === 0 ? 'active' : ''}`;
        imgContainer.appendChild(imgEl);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-nav carousel-prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-nav carousel-next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';

    const updateImages = () => {
        const images = carousel.querySelectorAll('.carousel-image');
        images.forEach(img => img.classList.remove('active'));
        images[currentIndex].classList.add('active');
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    });

    carousel.appendChild(imgContainer);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
    
    return carousel;
}

function atualizarMarcadores(escolasFiltradas) {
    markers.clearLayers();
    
    escolasFiltradas.forEach(escola => {
        const marker = L.marker(escola.coordenadas, { icon: redIcon })
            .on('click', () => {
                const carousel = createCarousel(escola.imagens);
                const detailsHtml = `
                    <div class="school-card">
                        <h2>${escola.nome}</h2>
                        ${carousel.outerHTML}
                        <p><i class="fas fa-map-marker-alt"></i> ${escola.endereco}</p>
                        <p><i class="fas fa-phone"></i> ${escola.contato}</p>
                        <a href="${escola.instagram}" target="_blank" class="instagram-btn">
                            <i class="fab fa-instagram"></i>
                            Instagram
                        </a>
                    </div>
                `;
                document.getElementById('school-details').innerHTML = detailsHtml;
            });
        markers.addLayer(marker);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const escolasFiltradas = escolas.filter(escola => 
        escola.nome.toLowerCase().includes(termo)
    );
    atualizarMarcadores(escolasFiltradas);
});

atualizarMarcadores(escolas);

// Bloquear zoom fora dos limites
map.setMaxBounds(mapBounds);