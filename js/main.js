class Main {
    #jsList = [
        "dao.js",
        "controller.js",
        "manager.js",
        "transform-tool.js",
        "import-html.js",
        // table
        "_recommend.js",
        "_product_style.js",
        "_product.js"
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