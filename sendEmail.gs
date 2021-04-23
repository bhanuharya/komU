//function sendEmail() {
//var ss = SpreadsheetApp.getActiveSpreadsheet()
//var sheet1=ss.getSheetByName('Form Responses 1');



//var n=sheet1.getLastRow();
//for (var i = 2; i < n+1 ; i++ ) {
//var emailAddress = sheet1.getRange(i,2).getValue();
//var subject = sheet1.getRange(i,4).getValue();
//var message = sheet1.getRange(i,3).getValue();


//MailApp.sendEmail(emailAddress, subject, message);
//}
  
//}
    function ssForward() {

    // DEFINE YOUR MAIN SPREADSHEET
    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet1=ss.getSheetByName('Form Responses 1');

    // DEFINE THE DATA SHEET THAT RECIEVES THE SUBMISSIONS HERE
    // var dataSheet = ss.getSheetByName("data");

    // DEFINE THE TEMPLATE SHEET THAT HAS THE EMAIL TEMPLATE INSIDE OF IT
    var templetSheet = ss.getSheetByName("Template");

    //DEFINE THE CELLS THAT CONTAIN THE TEMPLATE TEXT FOR THE SUBJECT
    //var templateSubject = templetSheet.getRange(1, 2).getValue();

    //DEFINE THE CELLS THAT CONTAIN THE TEMPLATE TEXT FOR THE SUBJECT
    var templateBody = templetSheet.getRange(2, 2).getValue();

    //NOW RUN A FOR LOOP THAT GOES THROUGH EACH ENTRY IN EACH ROW (var i = the row in your spreadsheet )    
     
    for (var i = 2; i <= sheet1.getLastRow(); i++) {

        // ADD CURRENTLY VIEWED ENTRY TO VAR (var phone = the sheet in row i, column 3)
        // all 3 of these var work the same way    
        var emailAddress = sheet1.getRange(i,2).getValue();
        var subject = sheet1.getRange(i,3).getValue();
        var namadia = sheet1.getRange(i,11).getValue();
        var sapaankamu = sheet1.getRange(i,4).getValue();
        var sapaannya = sheet1.getRange(i,5).getValue();
        var message1 = sheet1.getRange(i,6).getValue();
        var message2 = sheet1.getRange(i,7).getValue();
        var message3 = sheet1.getRange(i,8).getValue();
        var message4 = sheet1.getRange(i,9).getValue();
        var message5 = sheet1.getRange(i,10).getValue();

        var status = sheet1.getRange(i, 12).getValue();

        // NOW USE THE templetSheet VAR DEFINED ABOVE AND REPLACE THE PLACEHOLDER TEXT WITH THE APPROPRIATE VARIABLE

        //REPLACE THE SUBJECT TEMPLATE TEXT <<phone>> WITH THE CONTENTS OF THE VAR 'phone' defined above.
        //var subject = templateSubject.replace("<<phone>>", phone);

        //REPLACE THE 'SUBJECT TEMPLATE' TEXT: <<location>> - WITH THE CONTENTS OF THE VAR 'location' defined above.
        var body = templateBody.replace("<<sapaanmu>>", sapaankamu);

        //REPLACE THE 'SUBJECT TEMPLATE' TEXT: <<phone>> - WITH THE CONTENTS OF THE VAR 'phone' defined above.
        body = body.replace("<<namatuju>>", namadia);
        
        body = body.replace("<<sapaannya>>", sapaannya);
        body = body.replace("<<sapaanmu1>>", sapaankamu);
        body = body.replace("<<sapaanmu2>>", sapaankamu);
        body = body.replace("<<sapaanmu3>>", sapaankamu);
        body = body.replace("<<sapaanmu4>>", sapaankamu);
        body = body.replace("<<posmengenai>>", message1);
        body = body.replace("<<negmengenai>>", message2);
        body = body.replace("<<perubahan>>", message3);
        body = body.replace("<<kamulakukan>>", message4);
        body = body.replace("<<pesanpositif>>", message5);

        // IF OUR STATUS CELL IS EMPTY
        if (status == "") {

            // SEND THE EMAIL FROM 'DESIRED@EMAIL.com', USE THE 'subject' VAR FOR THE SUBECT, AND THE VAR 'templateBody' FOR THE MESSAGES BODY
            GmailApp.sendEmail(emailAddress, subject, body);

            // MARK THE ROW AS COMPLETED
            sheet1.getRange(i, 12).setValue("Email Notification Sent");
        }
    }
}
