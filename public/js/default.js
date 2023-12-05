
$(document)
    .on("keypress", ".inputnumber", function (e) {
        var c = e.keyCode || e.charCode;
        switch (c) {
            case 8:
            case 9:
            case 27:
            case 13:
                return;
            case 65:
                if (e.ctrlKey === true) return;
        }
        if (c < 48 || c > 57) e.preventDefault();
    })
    .on("keyup", ".inputnumber", function () {
        var inp = parseInt($(this).val().replace(/\./g, ''));
        if(isNaN(inp)) inp = 0;
        $(this).val(convertToRupiah(inp));
    });

$(document)
    .on("keypress", ".inputnumber-coma", function (e) {
        var c = e.keyCode || e.charCode;
        switch (c) {
            case 8:
            case 9:
            case 27:
            case 13:
                return;
            case 65:
                if (e.ctrlKey === true) return;
        }
        if (c < 48 || (c > 57 && c < 188) || c > 188) e.preventDefault();
    })
    .on("keyup", ".inputnumber", function () {
        var inp = parseInt($(this).val().replace(/\./g, ''));
        if(isNaN(inp)) inp = 0;
        $(this).val(convertToRupiah(inp));
    });

$(document)
    .on("keydown", ".numberonly", function () {
        return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'
    });

/* Reload table */
function reloadTable(id, reset = true) {
    var table = $(id).DataTable();
    table.cleanData;
    table.ajax.reload(null, reset);
}

/* Fungsi format Rupiah */
function convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("");
}

function convertToAngka(rupiah) {
    let val = parseInt(rupiah.replace(/,.*|[^0-9]/g, ""), 10);
    return isNaN(val) ? 0 : val;
}

$(document).on('show.bs.modal', function() {
    $('.is-invalid').trigger('change');
});
