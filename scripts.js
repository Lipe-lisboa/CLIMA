const conteiner = document.querySelector('.container');
const pesquisa = document.querySelector('.pesquisa-box button');
const clima = document.querySelector('.clima-box');
const detalhes = document.querySelector('.clima-detalhes');
const erro = document.querySelector('.nao-encontrado');

pesquisa.addEventListener('click', () =>{
    const APIKey = '108521e3766c70c79f61797a4cc7af1a';
    const cidade = document.querySelector('.pesquisa-box input').value;

    if (cidade === ''){
        return;
    }

    /*
    API url:
    */
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404'){
                conteiner.style.height = '400px';
                clima.style.display = 'none';
                detalhes.style.display = 'none';
                erro.style.display = 'block';
                erro.classList.add('fadeIn');
                return
            }

            erro.style.display = 'none';
            erro.classList.remove('fadeIn');  
            
            const imagem = document.querySelector('.clima-box img');
            const descricao = document.querySelector('.clima-box .descrição')
            const temperatura = document.querySelector('.temperatura p');
            const umidade = document.querySelector('.umidade .text span');
            const velocidade =  document.querySelector('.velocidade-vento .text span');


            switch (json.weather[0].main) {
                case 'Clear':
                    imagem.src = 'images/clear.png';
                    break;

                case 'Cloud':
                    imagem.src = 'images/cloud.png';
                    break;

                case 'Clouds':
                    imagem.src = 'images/cloud.png';
                    break;

                case 'Rain':
                    imagem.src = 'images/rain.png';
                    break;
            
                case 'Snow':
                    imagem.src = 'images/snow.png';
                    break;

                case 'Haze':
                    imagem.src = 'images/mist.png';
                    break;

                default:
                    imagem.src = '';
                    break;                    
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}`;
            descricao.innerHTML = `${(json.weather[0].description)}`;
            umidade.innerHTML = `${(json.main.humidity)}%`;
            velocidade.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


            clima.classList.add('fadeIn');
            detalhes.classList.add('fadeIn');
            conteiner.style.height = '605px';
        }
    )
})





