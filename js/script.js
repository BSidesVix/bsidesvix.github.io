(function ($, window) {

    "use strict";
    const fg = new fg_();
    const AppInit = new AppInit_();
    const Plugins = new AppInit.AppPlugins_();
    
    const appHTML = {
        contentGalery: function () {
            const imgs = [
                {
                   id: 1,
                   name: "Alexandre Dimas Santos Reis",                    
                   src: "./img/about/img01.jpg",
                   title: 'DeepWeb, Darkweb e DarkNet',                    
                   desc: `<p>
                            O que é, os perigos e  como acessar
                         </p>`
                },
                {
                    id: 2,
                    name: "André Bessa da Silva",
                    title: "Aplicação de ferramentas de IA na rotina do desenvolvedor",
                    src: "./img/about/img02.jpg",
                    desc: `<p>
                    Nesta palestra o objetivo é mostrar a aplicação de ferramentas de IA na rotina do desenvolvimento de aplicações como forma de aumentar a produtividade e como suporte na busca de resolução de problemas; Abordando ferramentas como ChatGPT, GitHub CoPilot.
                           </p>`
                },
                {
                    id: 3,
                    name: "Fernanda Modolo Vieira Machado",
                    title: "Requisitos de auditoria para o tratamento de dados pessoais relacionados com IA",
                    src: "./img/about/img03.jpg",
                    desc: `<p>
                            visa fornecer conselhos práticos para ajudar a explicar os processos, serviços e decisões entregues ou assistidos pela IA, aos indivíduos por eles afetados.  
                           </p>`
                },
                {
                    id: 4,
                    name: "Fabio Gomes Rocha",
                    title: "Developers vs AI :: How to do Secure Code?",
                    src: "./img/about/img04.jpeg",
                    desc: `<p>
                           Descubra como a inteligência artificial está revolucionando a forma como escrevemos códigos e desenvolvemos sistemas nesta palestra envolvente. Abordaremos a adoção da IA para a geração automática de códigos, seu papel crucial no apoio ao desenvolvimento de sistemas e seu impacto na segurança dos códigos e da empresa. Além disso, ofereceremos insights práticos sobre o uso adequado da IA para garantir uma codificação segura e eficaz. Junte-se a nós para uma exploração emocionante do futuro da programação e da segurança cibernética.
                          </p>`
                },
                {
                    id: 5,
                    name: "Zoziel Pinto Freire",
                    title: "Ransomware ninguém segura esse bebê levado",
                    src: "./img/about/img05.jpeg",
                    desc: `<p>
                            Durante essa talk irei demostrar diferentes comportamentos de Ransomwares. Estarei fazendo uma analise detalhada de como alguns ransomwares funcionam. Estarei abordando os topicos abaixo:
                         </p>
                         <br/>
                         <p>
                         Técnicas de Propagação: Exploração de vulnerabilidades. Phishing e arquivos maliciosos.<br/><br/>    
                         Tecnicas de analise: Analises dinamicas e estaticas Shimcache Amcache Prefetch Ferramentas usadas.<br/><br/>
                         Impacto e Consequências: Como o ransomware afeta sistemas e redes. Implicações para empresas e usuários individuais.<br/><br/>
                         Medidas de prevenção e mitigação: Melhores práticas de segurança cibernética. Importância de atualizações de software e backups regulares.<br/><br/>Educação do usuário e conscientização sobre ameaças cibernéticas.<br/><br/>
                         Resposta a Incidentes: Plano de resposta a incidentes de segurança.<br/><br/>
                         </p>  
                         `
                },
                {
                    id: 6,
                    name: "Helena Carreço e Thiago Grisolfi",
                    title: "DevSecOps na Prática: Construindo uma esteira com ferramentas Open Source",
                    src: "./img/about/img06.png",
                    desc: `<p>
                            Nesta palestra exploraremos o universo das automações em cybersec, demonstrando de forma prática como integrar etapas de validação de segurança na pipeline, usando exclusivamente ferramentas Open Source. Partiremos do conceito de DevSecOps, passando pela implementação das ferramentas e chegando à entrega dos resultados numa ferramenta de gestão de vulnerabilidades.
                        </p>`
                },
                {
                    id: 7,
                    name: "Thiago Peixoto + Daiane Santos",
                    title: "Explorando Frida: Um Guia Prático Passo a Passo em Segurança Android",
                    src: "./img/about/img07.png",
                    desc: `<p>
                    Em vários cenários de segurança mobile, precisamos de ferramentas de instrumentação, na maioria das vezes utilizamos o Frida ou tools que são criadas a partir dela. Tão importante quanto reproduzir, é entender como ela funciona de fato. Nessa talk abordaremos como o Frida funciona, desde a arquitetura até execução pratica.
                    </p>`
                },
                {
                    id: 8,
                    name: "Deivison Henrique Lourenço Mendes",
                    title: "Usando OSINT para mapear padrões de comportamentos em redes sociais",
                    src: "./img/about/img08.png",
                    desc: `<p>
                    Como descobrir padrões de comportamentos por meio da OSINT, correlacionando as informações levantadas e definir onde seu alvo passa férias, o que gosta de comer, quais seus hábitos de leitura, e como isso nos expõe.
                    </p>`
                },
                {
                    id: 9,
                    name: " Otávio Lube dos Santos",
                    title: "Impactos da IA na Segurança e Privacidade da Sociedade Contemporânea",
                    src: "./img/about/img09.jpg",
                    desc: `<p>
                    A palestra abordará os avanços significativos da Inteligência Artificial (IA) na sociedade contemporânea. Exploraremos como a IA está transformando diversas áreas, destacando seus benefícios, como automação de processos repetitivos e diagnósticos médicos avançados. Contudo, também discutiremos os desafios avdindos destas inovações, incluindo vulnerabilidades de segurança, ameaças cibernéticas potencializadas por IA e impactos na privacidade, especialmente relacionados à vigilância e reconhecimento facial. Como podemos desenvolver soluções éticas e regulamentações para mitigar esses desafios, promovendo a inovação responsável, com menos vieses. A palestra concluirá enfatizando a importância da colaboração entre setores público e privado para estabelecer padrões éticos na IA, proporcionando uma reflexão sobre o papel crucial da sociedade na orientação de um futuro seguro e ético para a inteligência artificial.
                    </p>`
                },
                {
                    id: 10,
                    name: "Thiago Cunha da Silva",
                    title: "Explorando o Dark Casino - CVE-2024-21412",
                    src: "./img/about/img10.jpeg",
                    desc: `<p>
                    Explicação do modelo de exploração da CVE-2024-21412 utilizado pelo Dark Casino como alvo traders e como isso pode ser subvertido para ser utilizado em operações de red team. 
                    </p>`
                },
                {
                    id: 11,
                    name: "Messias Gomes da Silva",
                    title: "Stack de Machine Learning (ML)",
                    src: "./img/about/img11.jpeg",
                    desc: `<p>
                    Stack simples para padronizar a publicação de modelos de ML
                    </p>`
                },
                {
                    id: 12,
                    name: "Sérgio Maia Rabelo",
                    title: "Ciberataques na Gestão Pública - Os ransonwares estão ai, as políticas de segurança não.",
                    src: "./img/about/img12.JPG",
                    desc: `<p>
                    A palestra será voltada para a importância das políticas de segurança na gestão pública, quanto ao aumento de ataques de "ransonwares" no setor público.
                    Situações básicas que não são levadas em consideração, quando pensa somente em questão de "hardware" em licitações, deixando de lado à Segurança da Informação.
                    </p>`
                },
                {
                    id: 13,
                    name: "Fernando Henrique Mengali",
                    title: "Exploração e Correção de vulnerabilidades",
                    src: "./img/about/img13.jpeg",
                    desc: `<p>
                            1.0 Introdução  - 1 hora<br/>
                            1.1 Como uma vulnerabilidade é criada.<br/>
                            1.2 Como uma vulnerabilidade é identificada.<br/>
                            1.3 Como uma vulnerabilidade pode ser explorada.<br/>
                            1.4 Como uma vulnerabilidade pode ser corrigida.<br/>
                    </p>
                    <p>
                            2.0 Cross-site scripting (XSS) - 1 hora<br/>
                            2.1. Compreensão do XSS: tipos (Reflected, Stored, DOM-based).<br/>
                            2.2. Identificação da vulnerabilidades XSS.<br/>
                            2.3  Exploração da vulnerabilidade utilizando roubo de cookies<br/>
                            2.3  Exploração da vulnerabilidade através da criação de keylogger e ativação da camera, audio do laptop.<br/>
                            2.3. Técnicas de mitigação e boas práticas de desenvolvimento.<br/>
                    
                    </p>

                    <p>
                            3.0 SQL Injection - 1 hora<br/>
                            3.1. Noções básicas de SQL Injection: Error-based.<br/>
                            3.2. Demonstrações práticas de exploração de vulnerabilidades SQL Injection.<br/>
                            3.3. Estratégias de prevenção e sanitização de entradas.<br/>
                    
                    </p>

                    <p> 
                    
                    4.0 RCE (Remote Code Execution) - 1 hora<br/>
                    4.1. Entendimento do RCE e suas implicações.<br/>
                    4.2. Exemplos práticos de exploração de vulnerabilidades RCE.<br/>
                    4.3. Medidas preventivas e configurações seguras.<br/>

                    </p>
                    
                    `
                },
                {
                    id: 14,
                    name: "Maycon Maia Vitali",
                    title: "Explorando Vulnerabilidades em SmartContracts",
                    src: "./img/about/img14.JPEG",
                    desc: `<p>
                       Essa palestra visa introduzir a linguagem de programação Solidity, responsável pela grande maioria dos contratos inteligentes da rede Etherium, e apresentar as classes de vulnerabilidades mais comuns em sua implementação.
                    </p>`
                },
                {
                    id: 15,
                    name: "Fernando Mercês",
                    title: "Hackeando MESMO o sistema: como estudar computação",
                    src: "./img/about/img15.jpg",
                    desc: `<p>
                    Fernando é Pesquisador de Ameaças na [Trend Micro](https://www.trendmicro.com/), onde atua como investigador de ciber crime, utilizando engenharia reversa e técnicas de inteligência de ameaças no time de Pesquisa de Ameaças Futuras (FTR). Criador de várias [ferramentas livres](https://github.com/merces) na área, com frequência apresenta suas pesquisas nos principais eventos de segurança no Brasil e no exterior. É também professor e fundador da [Mente Binária](https://www.mentebinaria.com.br/), uma instituição de ensino e pesquisa sem fins lucrativos comprometida com o ensino de computação no Brasil.
                    </p>`
                },
            ]

            imgs.forEach(element => {
            $(".container_about").append(`
            <div class="box_about" >
                <div class="inner_img" title="Clica em min">
                    <div style="background-image:url(${element.src}); background-size: cover; background-position: center; background-repeat: no-repeat;" id="${element.id}" class="img"></div>
                    <div class="title_about_"> ${element.name} </div>
                </div>
            </div>`);
               $(`#${element.id}`).data("data", element)
            });

             let carousel04 = $(".carousel04")
                 
             carousel04.slick({
                dots: true,
                infinite: true,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 4000,
                slidesToShow: 5,
                slidesToScroll: 5,
        
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            centerMode: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    }
                ]
            });

       },
       contentGaleryModal: function(id,src,desc) {
        return `<div class="galary_container"> 
                ${desc}
        </div>`
       } 
    }   
    /*                 $(".slick-track").html(`
                <div class="box_inner">
                    <div class="info">
                        <div class="title">
                            <h2>Galeria de fotos - Evento realizado em Maio/2023</h2>
                        </div>
                    </div>
                    <div class="container_galeria carousel02">
                        ${msg}
                    </div>
                </div>
                `); */
    // gerais  
    
    const App = {
        init: function () {
            this.menuChangeColor();
            appHTML.contentGalery();
            Events.init();
        },
        scrollMenuPage: function(href,posicao) {
            switch (href) {
                case '#home':
                    $("html,body").animate({
                        scrollTop: posicao - $('#top').outerHeight() - 60
                    }, 1000);
                break;
                case '#evento':
                        $("html,body").animate({
                            scrollTop: posicao - $('#top').outerHeight() - 60
                        }, 1000);
                    break;
                    case '#programacao':
                        $("html,body").animate({
                            scrollTop: posicao - $('#top').outerHeight()  - 60
                        }, 1000);
                    break;
                    case '#fotos':
                        $("html,body").animate({
                            scrollTop: posicao - $('#top').outerHeight()  - 60
                        }, 1000);
                    break;
                    case '#palestra':
                        $("html,body").animate({
                            scrollTop: posicao - $('#top').outerHeight()  - 60
                        }, 1000);
            }
        },
        scrollMenu: function (e, this_) {
            e.preventDefault();
            let href = $(this_).attr("href");
            let posicao = $(href).offset().top;
            this.scrollMenuPage(href,posicao)
        },
        menuChangeColor: function() {
          if($(window).scrollTop() <= 1) {
                $("header").removeClass("top");  
               /*  $(".container_menu nav ul li a").removeClass("active") */
            }
          else if($(window).scrollTop() >= 1) {
                $("header").addClass("top");
                /* $(".container_menu nav ul li a").addClass("active"); */
            }
        },
        modalAbout: function() {
            
        }
    }


    const Events = {
        init: function () {
            try {
                $(window).on('scroll',function (e) {
                    e.preventDefault(); 
                    App.menuChangeColor();
                 });
                $(".bars").on("click", function () {
                    const container_menu = $(".container_menu");
                    const bars = $(".bars");
                
                    if(!$(container_menu).hasClass("active")) {
                        $(".bars").html('<span class="fa fa-times" aria-hidden="true"></span>');
                        container_menu.addClass('active');
                    } else {
                        $(".bars").html('<span class="fa fa-bars" aria-hidden="true"></span>');
                        container_menu.removeClass('active');
                    }
             
                 });

                $(".nav-link[href^='#']").on("click", function (e) {
                    const this_ = this;
                   
                    if($(".container_menu").hasClass("active")) {
                        $(".bars").html('<span class="fa fa-bars" aria-hidden="true"></span>');
                        $(this_).closest(".container_menu").removeClass('active');
                    } else {

                    }
                    App.scrollMenu(e, this_);
                });
                $(".about .inner_img").on("click", function () {
                    let {id,src,name,title,desc} = $(this).find(".img").data("data");
                    const html = appHTML.contentGaleryModal(id,src,desc)
                   Plugins.modal({
                      width: "700px",
                      title: name,
                      footer: "<span>" + title + "</span>",
                      font: "fa fa-times",
                      class: "about-modal",
                      idBody: "modal-body-galery",
                      body: html
                   })
                })
             
            } catch (err) {
                new CatchLogs_("catch: " + err.message, "script.js  | Events - init");
            }

        }
    }

    $(document).ready(function () {
        App.init();
    });

})(jQuery, window);



function number_Decimal(value) {
  if(value <= 9 ) return `0${value}`
  return value
}

        const dataDoEvento = '2025-06-07 08:00:00';
            
            const evento = function(dataDoEvento) {
                const dataDoEventoFormat = moment(dataDoEvento,'YYYY-MM-DD HH:mm:ss')
                const dateCurrent = moment()
                let duration = moment.duration(dataDoEventoFormat - dateCurrent,'milliseconds')
                duration = moment.duration(duration - 1000, 'milliseconds');
                const days = parseInt(duration.asDays());
                const  hours = duration.hours();
                const  minutes = duration.minutes()
                const seconds = duration.seconds();

                if(dataDoEventoFormat > dateCurrent) {
                      
                    $(".days").html(number_Decimal(days))     
                    $(".hours").html(number_Decimal(hours))
                    $(".minutes").html(number_Decimal(minutes))
                    $(".seconds").html(number_Decimal(seconds))
                    
                    setTimeout(function(){
                        evento(dataDoEvento)
                    }, 1000);
                }
            }
            
            //evento(dataDoEvento)
 
            let countpage = localStorage.getItem("CountPagee") ? parseInt(localStorage.getItem("CountPagee")) : 0;
/* 
            setTimeout(() => {
                localStorage.setItem("CountPagee", countpage  + 1);
                window.location.reload()
            
            }, 12000); */
