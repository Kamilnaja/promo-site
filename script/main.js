$(document).ready(function () {
    $('.trigger').on("click", function () {
        swal({
            //todo move html to separate file
            title: '',
            type: '',
            html:
            '<div class="modal-mobile">' +
            '<div class="container-fluid"> ' +
              '<div class="row modal-mobile__header"> ' +
                '<div class="col-md-12"> ' +
                  '<div class="modal-mobile_button__wrapper"> ' +
                    '<button class="button modal-mobile__button"> Login </button>' +
                    '<button class="button modal-mobile__button"> Vernetzung </button>' +
                  '</div>' +
                '</div> ' +
              '</div>' +
            '</div>' +
            '<div class="container"> ' +
              '<div class="row"> ' +
                '<div class="col-md-4"> ' +
                  '<img src="img/iphone.png" class="img-responsive modal-mobile--img center-on-small" alt="phone">' +
                '</div>' +
              '<div class="col-md-6">' +
            '<div class="container--infobox">' +
            '<h2 class="container__header center-on-small">App client Connect</h2>' +
            ' <p class="container__paragraph">Mit der client Ärztebesucherplanung und vielen weiteren Funktionen!</p> ' +
            '<p class="container__paragraph">Jetzt client Connect kostenlos herunterladen!</p>'+
                '<div class="modal-mobile_button__wrapper"> ' +
            '<button class="button modal-mobile__button"> iOS </button>' +
            '<button class="button modal-mobile__button"> Android </button>' +
            '</div>' +
           '</div>' +
          '</div>' +
         '</div>' +
        '</div>' +
       '</div>',
            width: 1000,
            padding: 0,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            background: 'url(img/background.jpg)'
        })
    });
}());

