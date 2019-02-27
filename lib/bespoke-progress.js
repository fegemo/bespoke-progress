module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      slideNumber = document.createElement('aside'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressParent.appendChild(progressBar);
    progressBar.className = 'bespoke-progress-bar';
    slideNumber.className = 'bespoke-progress-number';
    deck.parent.appendChild(progressParent);
    deck.parent.appendChild(slideNumber);

    deck.on('activate', function(e) {
      var percentage = e.index * 100 / (deck.slides.length - 1),
        number = (e.index + 1) + '';
      progressBar.style[prop] = percentage + '%';
      slideNumber.innerHTML = number.padStart(2, '0');
    });
  };
};
