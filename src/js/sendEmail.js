/* SmtpJS.com - v3.0.0 */
// var Email = {
//     send: function(a) {
//         return new Promise(function(n, e) {
//             a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
//             var t = JSON.stringify(a);
//             Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
//         })
//     },
//     ajaxPost: function(e, n, t) {
//         var a = Email.createCORSRequest("POST", e);
//         a.setRequestHeader("Content-type", "form-control"), a.onload = function() {
//             var e = a.responseText;
//             null != t && t(e)
//         }, a.send(n)
//     },
//     ajax: function(e, n) {
//         var t = Email.createCORSRequest("GET", e);
//         t.onload = function() {
//             var e = t.responseText;
//             null != n && n(e)
//         }, t.send()
//     },
//     createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
// };





$('#form-submit').click(function() {
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == "") {
        alert('Invalid Name');
        return;
    }
    if (message == "") {
        alert('Message cannot be empty');
        return;
    }
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        alert('Invalid Email');
        return;
    }

    Email.send({
        SecureToken: "2d5fcb0b-9ccf-403a-8f76-a8aaf8531369",
        To: email,
        From: "spark.lb.br@gmail.com",
        Subject: "Message from " + name + " " + email,
        Body: "Every Thig is ok",
        callback: function done(message) { alert("sent") }

    }).then({



    });

}
// function sendMessage(userId, email, callback) {
//     // Using the js-base64 library for encoding:
//     // https://www.npmjs.com/package/js-base64
//     var base64EncodedEmail = Base64.encodeURI(email);
//     var request = gapi.client.gmail.users.messages.send({
//         'userId': userId,
//         'resource': {
//             'raw': base64EncodedEmail
//         }
//     });
//     request.execute(callback);