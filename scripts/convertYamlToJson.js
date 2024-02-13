const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const yamlFile = fs.readFileSync('app/utilities/articlemeta.yaml', 'utf8');
const jsonData = yaml.load(yamlFile);

newData = jsonData.map(article => {
    const slugstring = article.title.toLowerCase().replace(/\s+/g, '-')
    const permlink = "/articles/" + slugstring;
    const headerSrc = findHeaderImg(slugstring);
    return { ...article, permlink: permlink, headerSrc: headerSrc };
})

fs.writeFileSync('app/utilities/articleMeta.json', JSON.stringify(newData));

function findHeaderImg(imageName) {
    const direcotry = "public/headers";
    // for the script to run, direcotry needs to specify "public"
    const files = fs.readdirSync(direcotry)
    const regex = new RegExp(`${imageName}\.(png|jpe?g|svg)$`);
    let headerImg = "/headers/general-header.png";
    // for CSS to load, "public/" should be omitted

    files.forEach(file => {
        if (regex.test(file)) {
            headerImg = path.join("/headers", file)
        }
    })

    return headerImg;
}