$(document).ready(function () {


    let view_badge = $('#badgeCuponsAtivos');
    badgeCuponsAtivos();


    function badgeCuponsAtivos() {
        $.ajax({
            url: 'ajax/numCartoesAtivos.php',
            type: 'POST',
            data: {
                id_loja: '1',
            },
            success: function (data) {
                view_badge.html(data);
            },
            beforeSend: function () {
                view_badge.html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>');
            }
        });
        console.log("badgeCuponsAtivos Carregado!")
    }

    let view_clientes_fidelizados = $('#painel_clientes_fidelizados');
    clientesFidelizados();
    setInterval(clientesFidelizados, 10000);

    function clientesFidelizados() {
        $.ajax({
            url: 'ajax/numClientesFidelizados.php',
            type: 'POST',
            data: {
                id_loja: '1',
            },
            success: function (data) {
                view_clientes_fidelizados.html(data);
                view_clientes_fidelizados.addClass('h2');
            },
            beforeSend: function () {
                view_clientes_fidelizados.removeClass('h2');
                view_clientes_fidelizados.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
            }
        });
        console.log("clientesFidelizados Carregado!")
    }

    let view_cupons_completados = $('#painel_cupons_completados');
    cuponsCompletados();
    setInterval(cuponsCompletados, 10000);

    function cuponsCompletados() {
        $.ajax({
            url: 'ajax/numCopunsCompletados.php',
            type: 'POST',
            data: {
                id_loja: '1',
            },
            success: function (data) {
                view_cupons_completados.html(data);
                view_cupons_completados.addClass('h2');
            },
            beforeSend: function () {
                view_cupons_completados.removeClass('h2');
                view_cupons_completados.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
            }
        });
    }

    $('#btnSalvarCupom').click(function () {

        let btnSalvarCupom = $('#btnSalvarCupom');
        btnSalvarCupom.removeClass('btn-success');
        btnSalvarCupom.addClass('btn-secondary');
        btnSalvarCupom.attr('disabled', true);
        btnSalvarCupom.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...');

    });



});