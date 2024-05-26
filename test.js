$(function () {
    let Html = mw.html;

    let qid = mw.config.get("wbEntityId");
    if (qid === null) {
        return;
    }

    let oql = `
[out:json][timeout:25];
nwr["wikidata"="${qid}"];
out body geom qt;`;

    $("[data-wb-sitelinks-group='special']").after(Html.element("div", {
        "class": "overpass-x-wikibase-sitelinkgroupview",
        style: "border: 1px solid #c8ccd1; float: left; margin: 0 2em 2em 0; padding-bottom: 0.6em; width: 30em;"
    }, new Html.Raw(Html.element("div", {
        "class": "wikibase-sitelinkgroupview-heading-section",
    }, new Html.Raw(Html.element("div", {
        "class": "wikibase-sitelinkgroupview-heading-container",
    }, new Html.Raw(Html.element("h3", {
        id: "sitelinks-openstreetmap",
        "class": "wb-sitelinks-heading",
        dir: "auto",
   1     style: "display: inline; float: none; font-weight: normal; padding-left: 0.5em; width: auto;"
    }, "OpenStreetMap") + Html.element("span", {
        "class": "wikibase-toolbar-container",
        style: "display: inline; padding-left: 0.5em; position: static; width: auto;"
    }, new Html.Raw(Html.element("span", {
        "class": "wikibase-toolbar-item wikibase-toolbar",
    }, new Html.Raw(Html.element("span", {
        "class": "wikibase-toolbar-item wikibase-toolbar-button",
    }, new Html.Raw(Html.element("a", {
        "href": `http://overpass-turbo.eu/?q=${btoa(oql)}&R`
    }, "open in overpass turbo"))))))))))) + Html.element("iframe", {
        src: `https://overpass-turbo.eu/map.html?Q=${encodeURIComponent(oql)}`,
        importance: "low",
        width: "100%",
        style: "height: 30em; border: none;",
        loading: "lazy"
    }))));
});