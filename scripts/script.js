
const setLabel = (lbl, val) => {
    document.getElementById(`slider-${lbl}-label`).value = val;
}

const setLabels = (values) => {
    setLabel("min", values[0]);
    setLabel("max", values[1]);
}


$('#dates').slider().on('slide', function (ev) {
    setLabels(ev.value);
});




window.onload = function () {
    var canvas = document.getElementById("canvasGrafico");
    if (canvas) {
        //altura da canvas
        var altura = 200;
        //largura da canvas
        var largura = 1000;
        //posição horizontal inicial do gráfico
        var x = 0;
        //valor dos pontos do gráfico, que será alterado aleatoriamente
        var valor;

        //formatando a canvas
        canvas.setAttribute("width", largura);
        canvas.setAttribute("height", altura);

        //obtendo o contexto 2d
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "lime";
        ctx.fillRect(0, 0, largura, altura);
        ctx.font = "30px Courier";
        function desenharGrafico() {
            //define o avanço horizontal
            x += 5;
            //gera um valor aleatório entre 0 e 100
            valor = parseInt(Math.random() * 100);
            //desenha uma linha até a posição gerada
            ctx.lineTo(x, altura-valor);
            ctx.stroke();
            //desenha um retangulo onde está sendo escrito o valor do gráfico
            ctx.fillStyle = "lime";
            ctx.fillRect(0, 0, largura, 30);
            //desenha o texto indicando o valor do gráfico, na posição x atual
            ctx.fillStyle = "red";
            ctx.fillText(valor, x, 30);
        }
        setInterval(desenharGrafico, 100);
    }
};