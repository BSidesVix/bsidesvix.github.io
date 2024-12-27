const fg_ = function () {
  this.hash_id = function (caracter = false, ModeType = false) {

    caracter = caracter && parseInt(caracter) > 0 && parseInt(caracter) <= 1000 ? parseInt(caracter) : 21;
    caracter = caracter - 21;

    if (caracter <= 1) {
      caracter = 5
    };

    let randomnumber_;

    let alpha = "";

    if (ModeType == "uppercase") {
      randomnumber_ = 35;
      alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
    } else {
      randomnumber_ = 61;
      alpha = new Array('A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'Y', 'y', 'X', 'x', 'Z', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
    }

    let randomstr = '';

    for (let i = 0; i < caracter; i++) {
      let randomnumber = Math.floor(Math.random() * randomnumber_);
      randomstr += alpha[randomnumber];
    }

    return "cC" + randomstr

  },
    // obrigar que seja json string se for inteiro vai dar erro tem que ser estrutura json string
    this.JSONparse = function (data) {
      let return_ = null;

      try {

        return_ = JSON.parse(data);

      } catch (error) {

      }

      return return_;

    },
    this.is_development = function () {

      //return window.location.host === ".com";

    },
    this.log = this.is_development() ? console.log : function () { };
    this.debounce = function (func, wait, immediate) {

      let timeout;

      return function executedFunction() {
        let context = this;
        let args = arguments;

        let later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
      }
    }
}

window.CatchLogs_ = function (msg, local) {
  this.msg = msg;
  this.local = local;
  this.constructor = function () {
    console.log(this.msg + " --- " + this.local);
  }
  this.constructor()
}
const failure = function (){
  Swal.fire(
      '',
      'Falha ao enviar email',
      'error'
    )
};

const sucesso = function(){
  Swal.fire(
      '',
      'E-mail enviado com sucesso',
      'success'
    )
};


let  anoAtualExibir = function(options_) {
  const defaults = {
      el : ".ano_footer2"
  };
  
  const options = $.extend({}, defaults, options_);

  let anoAtual = new Date();
  let ano = anoAtual.getFullYear();
  $(options.el).html(ano);
}
  anoAtualExibir({
      el:".ano_footer"
  });