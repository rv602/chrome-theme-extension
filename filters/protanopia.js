// protanopia

if (document.getElementById("styleID123456")) {
    stylingID = document.getElementById("styleID123456").remove();
    filterID = document.getElementById("filterID654321").remove();
}
stylingID = document.createElement('style');
stylingID.id = "styleID123456";
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.id = "filterID654321";
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filterID);

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.567, 0.433, 0,     0, 0,0.558, 0.442, 0,     0, 0,0,     0.242, 0.758, 0, 0,0,     0,     0,     1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';

stylingID.innerHTML = 'html{-webkit-filter:url(#protanopia);-moz-filter:(#protanopia);-ms-filter:(#protanopia);-o-filter:(#protanopia);filter:(#protanopia);}'