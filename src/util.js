const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://118.179.145.125:25565';

function categoryParse(item){
    var catName = item.replaceAll(" ", "+");
    catName = catName.replaceAll("'", "%27");
    catName = catName.replaceAll("\"", "%22");
    catName = catName.replaceAll("&", "%26");
    catName = catName.replaceAll(",", "%2C");
    catName = catName.replaceAll("-", "%2D");
    catName = catName.replaceAll(":", "%3A");
    catName = catName.replaceAll(";", "%3B");
    catName = catName.replaceAll("?", "%3F");

    return catName;
}

function reverseCategoryParse(item){
    var catName = item.replaceAll("+", " ");
    catName = catName.replaceAll("%27", "'");
    catName = catName.replaceAll("%22", "\"");
    catName = catName.replaceAll("%26", "&");
    catName = catName.replaceAll("%2C", ",");
    catName = catName.replaceAll("%2D", "-");
    catName = catName.replaceAll("%3A", ":");
    catName = catName.replaceAll("%3B", ";");
    catName = catName.replaceAll("%3F", "?");

    return catName;
}

export { serverUrl, categoryParse, reverseCategoryParse };