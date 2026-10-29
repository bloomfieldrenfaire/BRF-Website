(function () {
    var info = document.getElementById('info');
    var zones = document.querySelectorAll('.brf-zone');
    var current = null;

    function show(zone) {
        if (current) { current.classList.remove('active'); }
        current = zone;
        zone.classList.add('active');

        info.innerHTML = '';
        var h = document.createElement('h2');
        h.textContent = zone.getAttribute('data-name');
        var p = document.createElement('p');
        p.textContent = zone.getAttribute('data-info');
        var a = document.createElement('a');
        a.href = zone.getAttribute('href');
        a.textContent = 'More about ' + zone.getAttribute('data-name');
        info.appendChild(h);
        info.appendChild(p);
        info.appendChild(a);
    }

    for (var i = 0; i < zones.length; i++) {
        zones[i].addEventListener('click', function (e) {
        e.preventDefault();      /* without JS, the link just works */
        show(this);
        });
    }
})();