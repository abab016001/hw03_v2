class Controller {
    processQueryRecommend(paramObj) {
        var paramMap = ToMap(paramObj);
        var resultList = manager.processQueryRecommend(paramMap);
        return resultList;
    }
    processProductStyle(paramObj) {
        var paramMap = ToMap(paramObj);
        var resultList = manager.processProductStyle(paramMap);
        return resultList;
    }
    processProduct(paramObj) {
        var paramMap = ToMap(paramObj);
        var resultList = manager.processProduct(paramMap);
        return resultList;
    }
}

const controller = new Controller();

function test(txt) {
    alert(txt);
}