class Main {
    #jsList = [
        "../js/dao.js",
        "../js/controller.js",
        "../js/manager.js",
        "../js/transform-tool.js",
        "../js/import-html.js",
        // table
        "../js/recommend.js",
        "../js/product_style.js",
        "../js/product.js"
    ];
    #importJs(src) {
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', src);
        var head = document.getElementsByTagName("head")[0];
        head.prepend(s);
    }
    ImportCommonJs() {
        for(var js of this.#jsList) {
            this.#importJs(js);
        }
        return true;
    }
    constructor() {
        for(var js of this.#jsList) {
            this.#importJs(js);
        }
        return true;
    }
}

const main = new Main();