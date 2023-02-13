function alterStyle(cssFile, cssLinkIndex) {
    var linkprev = document.getElementsByTagName("link").item(cssLinkIndex);
    var linkgenerated = document.createElement("link");
    linkgenerated.setAttribute("rel", "stylesheet");
    linkgenerated.setAttribute("type", "text/css");
    linkgenerated.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(linkgenerated, linkprev);
}