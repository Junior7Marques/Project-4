// e186b8154d4e3452c3f58cf517c62352
// api key

// const data = new Date()
// let hora = data.getHours();
// console.log(hora)

// if (hora >= 1) {
//     let back = document.querySelector('body');
//     back.style.backgroundColor = '#000';
    
// }

let container = document.querySelector('.container');
let caixaBusca = document.querySelector('.caixa-busca button');
let climaBox = document.querySelector('.clima-box');
let climaDetalhes = document.querySelector('.clima-detalhes');
let erro404 = document.querySelector('.not-found');

caixaBusca.addEventListener('click', () => {
    let apiKey = 'e186b8154d4e3452c3f58cf517c62352';

    let cidade = document.querySelector('.caixa-busca  input').value;

    if (cidade === '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`).then(response => response.json()).then(json => {
            if(json.cod === '404'){
                container.style.height = '600px';
                caixaBusca.style.display = 'none';
                climaDetalhes.style.display = 'none';
                erro404.style.display = 'block';
                erro404.classList.add('fadeIn');
                return;
            }

            erro404.style.display = 'none';
            erro404.classList.remove('fadeIn');

            let image = document.querySelector('.clima-box img');
            let temperatura = document.querySelector('.clima-box .temperatura');
            let descricao = document.querySelector('.clima-box .descricao');
            let umidade = document.querySelector('.clima-detalhes .humidity span');
            let vento = document.querySelector('.clima-detalhes .vento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = './imagens/clear.png';
                    break;

                case 'Rain':
                    image.src = './imagens/rain.png';
                    break;

                case 'Snow':
                    image.src = './imagens/snow.png';
                    break;
    
                case 'Clouds':
                    image.src = './imagens/cloud.png';
                    break;
    
                case 'Haze':
                    image.src = './imagens/mist.png';
                    break;
    
                default:
                    image.src = '';
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descricao.innerHTML = `${json.weather[0].description}`;
            umidade.innerHTML = `${json.main.humidity}`;
            vento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            climaBox.style.display = '';
            climaDetalhes.style.display = '';
            climaBox.classList.add('fadeIn');
            climaDetalhes.classList.add('fadeIn');
            container.style.height = '590px';

        });




});