$(function() {
  // Post Toggle View
  $('#post-comment').hide();
  $('#btn-toggle-comment').click(e => {
    e.preventDefault();
    alert("Lo sentimos aun no tenemos contamos con esta opcion")
    //$('#post-comment').slideToggle();
  });
  
  // Like Button Request
  $('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId)
    $.post('/images/' + imgId + '/like')
      .done(data => {
      console.log('back:', data)
        $('.likes-count').text(data.likes);
        //$("#btn-like").removeClass('btn-succes').addClass('btn-warning');
        $("#btn-like").prop('disabled', true)
        $(".p-like").text('Te gusta!');
       // $("#btn-like").append("<span class="spinner-border likes-count">{{image.likes}}</span>");
        //$("#fa-times").find('i').removeClass('fa-times').addClass('fa-check');
        //$("#btn-like").append('<span> Hoola!</span>');
      });
          /* $this.removeClass('btn-succes').addClass('btn-primary');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('<span> Hoola!</span>'); */
       
  });

  // Delete Button Request
  $('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Estas seguro de eliminar la publicacion?');
    if (response) {
     
      let imgId = $(this).data('id');
      $.ajax({
        url: '/images/' + imgId,
        type: 'DELETE'
      })
        .done(function(result) {
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('<span> exitosa!</span>');
        });
    }
  });
});



var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

var btnAbrirPopup = document.getElementById('btn-abrir-popup1'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

var btnAbrirPopup = document.getElementById('btn-abrir-popup2'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});


btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
