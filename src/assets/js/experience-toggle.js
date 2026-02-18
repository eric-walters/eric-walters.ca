/* Experience descriptions — collapse to first sentence */
(function () {
  var section = document.getElementById('experience');
  if (!section) return;

  var locale = section.getAttribute('data-locale') || 'en';

  var strings = {
    en: { more: 'Read more \u2193', less: 'Show less \u2191' },
    fr: { more: 'Lire la suite \u2193', less: 'R\u00e9duire \u2191' },
    de: { more: 'Mehr lesen \u2193', less: 'Weniger \u2191' }
  };

  var t = strings[locale] || strings.en;

  section.querySelectorAll('.exp-description').forEach(function (wrap) {
    var p = wrap.querySelector('.timeline-desc');
    if (!p) return;

    var full = p.textContent;
    // Split on first ". " to get the first sentence
    var idx = full.indexOf('. ');
    if (idx === -1) return; // Only one sentence — nothing to collapse

    var first = full.substring(0, idx + 1);
    var rest = full.substring(idx + 2).trim();
    if (!rest) return;

    // Rewrite the paragraph as the summary sentence only
    p.textContent = first;

    var detail = document.createElement('div');
    detail.className = 'exp-detail';
    detail.hidden = true;
    var detailP = document.createElement('p');
    detailP.className = 'timeline-desc';
    detailP.textContent = rest;
    detail.appendChild(detailP);

    var toggle = document.createElement('button');
    toggle.className = 'exp-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = t.more;

    toggle.addEventListener('click', function () {
      var expanding = detail.hidden;
      detail.hidden = !expanding;
      toggle.setAttribute('aria-expanded', String(expanding));
      toggle.textContent = expanding ? t.less : t.more;
    });

    wrap.appendChild(detail);
    wrap.appendChild(toggle);
  });
})();
