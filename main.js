// main.js
module.exports = class CenterTextPlugin extends window.obsidian.Plugin {
    onload() {
        console.log('Center Text Plugin loaded');

        this.registerMarkdownPostProcessor((element, context) => {
            const regex = /%%(.*?)%%/gs; // gs для многострочного текста
            element.innerHTML = element.innerHTML.replace(regex, (_, content) => {
                return `<div class="centered-text">${content}</div>`;
            });
        });
    }

    onunload() {
        console.log('Center Text Plugin unloaded');
    }
};
