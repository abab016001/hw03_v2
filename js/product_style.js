class ProductStyle {
    #package(_pkno, _style_cd, _name, _chi_name) {        
        var json = {
            "pkno":_pkno, "style_cd":_style_cd, "name":_name, "chi_name":_chi_name
        }
        return new Map(Object.entries(json));
    }
    list = [
        this.#package("1", "00", "Celluloid Combi", "賽璐珞鈦金屬混合鏡框"),
        this.#package("2", "01", "SUNGLASSES", "賽璐珞鈦金屬混合鏡框"),
        this.#package("3", "02", "FUNCTIONAL", "賽璐珞鈦金屬混合鏡框")
    ];
}
const tb_product_style = new ProductStyle();
