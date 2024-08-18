class Dao {
    queryRecommend(paramMap) {
        const tableListMap = tb_recommend.list;
        return this.#resultList(paramMap, tableListMap);
    }
    queryProductStyle(paramMap) {
        const tableListMap = tb_product_style.list;
        return this.#resultList(paramMap, tableListMap);
    }
    queryProduct(paramMap) {
        const tableListMap = tb_product.list;
        return this.#resultList(paramMap, tableListMap);
    }
    // ---
    #resultList(paramMap, tableListMap){
        var _resultList = new Array();
        for (var tableMap of tableListMap) {
            if (!this.#isquery(paramMap, tableMap)) {
                continue;
            }
            _resultList.push(MapToJson(tableMap));
        }
        return _resultList;
    }
    #isquery(paramMap, tableMap) {
        for(var key of paramMap.keys()) {
            if (key != "" && tableMap.has(key)) {
                if (tableMap.get(key) != paramMap.get(key)) {
                    return false;
                }
            }
        }
        return true;
    }
}

const dao = new Dao();