class Product {
    #package(_pkno, _style_cd, _name, _price, _alt) {        
        var json = {
            "pkno":_pkno, 
            "style_cd":_style_cd, 
            "name":_name, 
            "price":`NTD${new Number(_price).toLocaleString()}`, 
            "alt":_alt, 
            "src":`/img/${_alt}.png`
        }
        return new Map(Object.entries(json));
    }
    list = [
        this.#package("1","00","BJ41600S",3490,"product-1"),
        this.#package("2","00","BJ41600S",3490,"product-2"),
        this.#package("3","00","BJ41600S",3490,"product-3"),
        this.#package("4","00","BJ41600S",3490,"product-4"),
        this.#package("5","00","BJ41600S",3490,"product-5"),
        this.#package("6","00","BJ41600S",3490,"product-6"),
        this.#package("7","00","BJ41600S",3490,"product-1"),
        this.#package("8","00","BJ41600S",3490,"product-2"),
        this.#package("9","00","BJ41600S",3490,"product-3"),
        this.#package("10","00","BJ41600S",3490,"product-4"),
        this.#package("11","00","BJ41600S",3490,"product-5"),
        this.#package("12","00","BJ41600S",3490,"product-6"),
        this.#package("13","01","BJ41600S",3490,"product-7"),
        this.#package("14","01","BJ41600S",3490,"product-8"),
        this.#package("15","01","BJ41600S",3490,"product-9"),
        this.#package("16","01","BJ41600S",3490,"product-10"),
        this.#package("17","01","BJ41600S",3490,"product-11"),
        this.#package("18","01","BJ41600S",3490,"product-12")
    ];
}
const tb_product = new Product();
