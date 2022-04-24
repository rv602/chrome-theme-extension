# Chrome-theme-extension

<p>This is a chrome extension built using HTML, CSS and JavaScript as a part of the amFOSS stage-1 project titled - Chrome Extesnion. This extension comes with a theme inverter option which converts a light themed website to its dark theme and vice versa and can simulate the following types of colorblindnesses<p>
 
<ol>
  <li>Blue Cone Monochromacy / Achromatomaly</li>
  <li>Monochromacy / Achromatopsia</li>
  <li>Green-Weak / Deuteranomaly</li>
  <li>Green-Blind / Deuteranopia</li>
  <li>Red-Weak / Protanomaly</li>
  <li>Red-Blind / Protanopia</li>
  <li>Blue-Weak / Tritanomaly</li>
  <li>Blue-Blind / Tritanopia</li>
</ol>

<p>Upon refreshing the page and clicking on the extension, any previously selected color-blind filter before will be applied.</p>

<h1>How to load the extension and use it on your local machine</h1>

<ol>
 <li>Clone this repository on your device</li><br>
 <li>Launch chrome, click on the 3 dots on top right corner and go to more tools - extensions</li>
 <img width="866" alt="image" src="https://user-images.githubusercontent.com/92572013/164954649-2dc30715-583f-4e2e-a109-6966f53b330e.png">
 
 <br>
 <li>Then turn on developer mode</li>
 <img width="865" alt="image" src="https://user-images.githubusercontent.com/92572013/164954747-54ea69f2-1b88-4276-ab56-cd8c7174f063.png">

 <br>
 <li>Click on "load unpoacked" and select the folder of the chrome extension</li>
 <img width="865" alt="image" src="https://user-images.githubusercontent.com/92572013/164954819-582a972a-49bf-4b91-a772-328f9179ab78.png">
 
 <br>
 <li>On the chrome tab bar, click on extensions to pin it and then it is ready to use</li>
 <img width="868" alt="image" src="https://user-images.githubusercontent.com/92572013/164954918-4a1f292a-9c5a-473e-957f-94183a79cfef.png">
</ol>

<h1>Simulation images</h1>

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/92572013/164933738-6700942d-b100-4371-801a-68dd59db9070.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/92572013/164933803-70dc0f66-1dd5-4437-a425-ac94b82967e6.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/92572013/164934335-c426e72d-11b5-4ce1-bcf4-4ff24f9fdc34.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/92572013/164934336-f490bb01-2749-4d36-9b4f-b5f07800261e.png">


https://user-images.githubusercontent.com/92572013/164954216-28f2b179-d6d3-4c61-a502-dea157d98471.mov

# Why I couldn't deploy this extension on Chrome Web Store
<p>For beginning this project, I wanted to go through some tutorials on making the basic chrome extensions. I made a few basic extensions like hello world etc. then since it's structure was based on HTML,CSS and JS, I started using my own knowledge of the same to work further on the extension. But when I wanted to deploy my extension, I realised that my manifest.json file was built on version 2 and not version 3, as the tutorials I watched, the instructors made their extension based on manifest v2. I tried converting my whole code into the manifest v3 but unfortunately landed into many issues while doing the same. i even tried using a converter provided on Chrome's official blog but it didn't work quite well.</p>
<p></p>
