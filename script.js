function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }else{
        //change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  (function($) {
    jQuery.scrollSpeed = function(step, speed, easing){
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            view;

        if(window.navigator.msPointerEnabled) return false;

        $window.on('mousewheel DOMMouseScroll', function(e){
            if($('.js-aDialogOpened').length == 0){
                var deltaY = e.originalEvent.wheelDeltaY,
                    detail = e.originalEvent.detail;
                    scrollY = $document.height() > $window.height();
                    scroll = true;

                if(scrollY){
                    view = $window.height();
                    if (deltaY < 0 || detail > 0)
                        root = (root + view) >= $document.height() ? root : root += step;
                    if (deltaY > 0 || detail < 0)
                        root = root <= 0 ? 0 : root -= step;
                    $body.stop().animate({
                        scrollTop: root
                    }, speed, option, function() {
                        scroll = false;
                    });
                }

                return false;
            }

        }).on('scroll', function() {
            if (scrollY && !scroll) root = $window.scrollTop();
        }).on('resize', function() {
            if (scrollY && !scroll) view = $window.height();
        });       
    };

    jQuery.easing.default = function (x,t,b,c,d){
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

})(jQuery);

$.scrollSpeed(100, 1000); // cкорость прокрутки
function viewDiv(){
  document.getElementById("div1").style.display = "block";
};
/*var divVisible = false;

function toggleDiv() {
  if (divVisible) {
    document.getElementById("div1").style.display = "none"; // Hide the div
    divVisible = false;
  } else {
    document.getElementById("div1").style.display = "block"; // Show the div
    divVisible = true;
  }
}*/
var divVisible = false;

function toggleDiv(elementId) {
  var element = document.getElementById(elementId);
  
  if (divVisible) {
    element.style.display = "none"; // Скрыть элемент
    divVisible = false;
  } else {
    element.style.display = "block"; // Показать элемент
    divVisible = true;
  }
}
function showImage(index) {
  var modal = document.querySelector('.modal');
  var modalImage = document.querySelector('.modal-image');
  var thumbnails = document.querySelectorAll('.thumbnails img');

  modalImage.src = thumbnails[index].src;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
}
function startShake(element) {
  element.classList.add('shake');
}

function stopShake(element) {
  element.classList.remove('shake');
}


