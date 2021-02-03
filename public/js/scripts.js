//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var w = window.innerWidth;
console.log(w);
if ( w <= 500 ) {
    document.getElementById("email_icon").href = "mailto:contato@easymd.com.br"
}
else {
    document.getElementById("email_icon").href = "https://mail.google.com/a/?view=cm&fs=1&to=contato@easymd.com.br"
}

var dict = {
    "Fornecemos serviços em desenvolvimento de software para potencializar seu empreendimento.": {
         pt: "Fornecemos serviços em desenvolvimento de software para potencializar seu empreendimento.",
         en: "We provide software development services to enhance your enterprise."
    },
    "Conheça mais": {
         pt: "Conheça mais",
         en: "Know more"
    },
    "Sobre": {
         pt: "Sobre",
         en: "About"
    },
    "Somos uma empresa que presta serviços de consultoria e desenvolvimento de software. Sobre nossos serviços, podemos destacar:": {
         pt: "Somos uma empresa que presta serviços de consultoria e desenvolvimento de software. Sobre nossos serviços, podemos destacar:",
         en: "We are a company that provides consulting services and software development. About our services, we can highlight:"
    },
    "D&M de Paginas Web": {
         pt: "D&M de Paginas Web",
         en: "D&M of Web Pages:"
    },
    "Se trata do Desenvolvimento e Manutenção de páginas web, onde o foco é criar e manter páginas que poderão impulsionar seu empreendimento. Preços a partir de R$37,00.": {
         pt: "Se trata do Desenvolvimento e Manutenção de páginas web, onde o foco é criar e manter páginas que poderão impulsionar seu empreendimento. Preços a partir de R$37,00.",
         en: "It is about the Development and Maintenance of web pages, where the focus is to create and maintain pages that can boost your enterprise. Prices starting from R$37,00."
    },
    "Consultoria em Presença Digital": {
         pt: "Consultoria em Presença Digital",
         en: "Digital Presence Consulting"
    },
    "Se trata em criar estratégias para aumentar a presença de seu empreendimento na internet, como nas redes sociais. Preços a partir de R$24,00.": {
         pt: "Se trata em criar estratégias para aumentar a presença de seu empreendimento na internet, como nas redes sociais. Preços a partir de R$24,00.",
         en: "It is about creating strategies to increase the presence of your enterprise on the internet, as in social networks. Prices starting from R$24.00."
    },
    "Desenvolvimento de Software": {
         pt: "Desenvolvimento de Software",
         en: "Software development"
    },
    "Se trata do desenvolvimento de softwares que irão solucionar problemas que afetam seu empreendimento ou servir como ferramenta de suporte. Preços a partir de R$45,00.": {
        pt: "Se trata do desenvolvimento de softwares que irão solucionar problemas que afetam seu empreendimento ou servir como ferramenta de suporte. Preços a partir de R$45,00.",
        en: "It is about the development of software that will solve problems that affect your enterprise or serve as a support tool. Prices from R $ 45,00."
    },
    "Contato": {
        pt: "Contato",
        en: "Contact"
    },
    "Curioso ou em busca de mais informações? Entre em contato conosco clicando em um dos icones abaixo:": {
        pt: "Curioso ou em busca de mais informações? Entre em contato conosco clicando em um dos icones abaixo:",
        en: "Curious or looking for more information? Contact us by clicking on one of the icons below:"
    },
    "Todos os Direitos Reservados.": {
        pt: "Todos os Direitos Reservados.",
        en: "All Rights Reserved."
    },
}

var change = true;
function translate(){
    if(change){
        var translator = $('body').translate({lang: "en", t: dict});
        document.getElementById("translate").innerHTML = "Mude para português";
        change = false;
    }
    else{
        var translator = $('body').translate({lang: "pt", t: dict});
        document.getElementById("translate").innerHTML = "Change to english";
        change = true;
    }
}