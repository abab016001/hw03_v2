class Manager {
    processQueryRecommend(paramMap) {
        return dao.queryRecommend(paramMap);
    }
    processProductStyle(paramMap) {
        return dao.queryProductStyle(paramMap);
    }
    processProduct(paramMap) {
        return dao.queryProduct(paramMap);
    }
}
const manager = new Manager();