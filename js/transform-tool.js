function JsonToMap(json) {
    json = json == null ? {} : json;
    return new Map(Object.entries(json));
}

function MapToJson(map) {
    var obj = Object.fromEntries(map); // map to obj
    var str = JSON.stringify(obj); // obj to string
    return JSON.parse(str); // string to json
}

function StringToJson(str) {
    return JSON.parse(str); // string to json
}

function ObjToJson(obj) {
    return JSON.stringify(obj);
}

function StringToMap(str) {
    var json = JSON.parse(str);
    return new Map(Object.entries(json));
}

function ToMap(input) {
    var none_map = new Map(Object.entries({}));
    if (input == null) {
        console.log("none0: ");
        return none_map;
    }
    if (typeof input === 'string' || input instanceof string) {
        try {
            var json = StringToJsonFormat(input);
            return StringToMap(json);
        } catch (error) {
            console.log("none1: " + error);
            return none_map;
        }
    } else if (typeof input === 'object' || input instanceof Object) {
        try {
            return JsonToMap(input);
        } catch (error) {
            console.log("none2" + error);
            return none_map;
        }
    }
    console.log("none3");
    return none_map;
}

function StringToJsonFormat(str) {
    var rtn = "";
    var _str = str;
    _str = _str.replace("{", "");
    _str = _str.replace("}", "");
    var array = _str.split(",");
    for (item of array) {
        var map = item.split(":");
        if (map[0].indexOf('"') != -1 && map[1].indexOf('"') != -1) {
            rtn += `${map[0]}:${map[1]},`;
        } else {
            var _0 = map[0].indexOf('"') != -1 ? 1 : 0;
            var _1 = map[1].indexOf('"') != -1 ? 1 : 0;
            if (_0 == 0 && _1 == 1) {
                rtn += `"${map[0]}":${map[1]},`;
            } else if (_0 == 1 && _1 == 0) {
                rtn += `${map[0]}:"${map[1]}",`;
            } else {
                rtn += `"${map[0]}":"${map[1]}",`;
            }
        }
    }
    rtn = rtn.substring(0, rtn.length - 1);
    rtn = `{${rtn}}`;
    console.log("rtn: " + rtn);
    return rtn;
}

function SelectorToInnerHtml(selector) {
    var element = document.querySelector(selector);
    return element.innerHTML;
}

function CreateElement(tagName, id, classList) {
    var element = document.createElement(tagName);
    if (id != null && id != "") {
        element.id = id;
    }
    if (classList != null && classList != "") {
        element.classList.add(classList);
    }

    return element;
}