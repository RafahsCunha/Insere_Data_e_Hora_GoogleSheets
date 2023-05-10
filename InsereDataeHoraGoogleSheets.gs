function onEdit() {
  var guiaAtiva = SpreadsheetApp.getActive().getSheetName();

  // Referencia a aba da planilha
  if (guiaAtiva == "Controle Troca de Credencial") {
    var guia = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Controle Troca de Credencial");

    // Referencia linha e coluna
    var linha = guia.getActiveCell().getRow();
    var coluna = guia.getActiveCell().getColumn();

    if (coluna == 1) {//verifica coluna
      if (linha > 1) {
        var datacelula = guia.getRange(linha, 3).getValue();
        var produto = guia.getRange(linha, 1).getValue()

        if (produto != "" && datacelula == "") {

          var hora = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "hh:mm:ss a");
          var data = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy");

          guia.getRange(linha, 2).setValue(data);
          guia.getRange(linha, 3).setValue(hora);

        }

        if (produto == "") {
          guia.getRange(linha, 2).setValue("");
          guia.getRange(linha, 3).setValue("");

        }
      }
    }
  }
}