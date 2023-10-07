document.addEventListener('DOMContentLoaded', function() {
    var svgs = document.querySelectorAll('[id^="logoSVGmenuDrlent"]');

    svgs.forEach(function(svg, index) {
        svg.addEventListener('click', function() {
            var text = document.querySelectorAll('.MainApropos__menuDrlent')[index];

            if (text.classList.contains('open')) {
                text.classList.remove('open');
                svg.classList.remove('rotated'); /* enlever la classe rotated */
            } else {
                text.classList.add('open');
                svg.classList.add('rotated'); /* ajouter la classe rotated */
            }
        });
    });
});
