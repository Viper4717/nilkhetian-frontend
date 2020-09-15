const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://118.179.145.125:25565';

function categoryParse(item){
    const catName = item.replace(" ", "+");
    return catName;
}

function reverseCategoryParse(item){
    const catName = item.replace("+", " ");
    return catName;
}

export { serverUrl, categoryParse, reverseCategoryParse };