const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://118.179.145.125:25565';

function categoryParse(item){
    var catName = item.replace(" ", "+");
    catName = catName.replace("'", "%27");
    catName = catName.replace("\"", "%22");
    catName = catName.replace("&", "%26");
    catName = catName.replace(",", "%2C");
    catName = catName.replace("-", "%2D");
    catName = catName.replace(":", "%3A");
    catName = catName.replace(";", "%3B");
    catName = catName.replace("?", "%3F");

    return catName;
}

function reverseCategoryParse(item){
    var catName = item.replace("+", " ");
    catName = catName.replace("%27", "'");
    catName = catName.replace("%22", "\"");
    catName = catName.replace("%26", "&");
    catName = catName.replace("%2C", ",");
    catName = catName.replace("%2D", "-");
    catName = catName.replace("%3A", ":");
    catName = catName.replace("%3B", ";");
    catName = catName.replace("%3F", "?");

    return catName;
}

export { serverUrl, categoryParse, reverseCategoryParse };