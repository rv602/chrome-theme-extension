// tritanomaly

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

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.967, 0.033, 0,     0, 0,0,     0.733, 0.267, 0, 0,0,     0.183, 0.817, 0, 0,0,     0,     0,     1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#tritanomaly);-moz-filter:(#tritanomaly);-ms-filter:(#tritanomaly);-o-filter:(#tritanomaly);filter:(#tritanomaly);}'