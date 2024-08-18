class Recommend {
    #package(_pkno, _user, _feedback, _date, _alt) {        
        var json = {
            "pkno":_pkno, "user":_user, "feedback":_feedback, "date":_date, "alt":_alt, "src":`/img/${_alt}.png`
        }
        return new Map(Object.entries(json));
    }
    list = [
        this.#package("1", "Jessy", "眼鏡品質優良，下次還會想來這邊購買！", "2021/06/20", "home-section5-1"),
        this.#package("2", "凱倫", "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！", "2021/04/18", "home-section5-2"),
        this.#package("3", "悠悠", "謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！", "2020/12/25", "home-section5-3"),
        this.#package("4", "Kyuan", "服務很好，品質沒有任何問題，非常喜歡。", "2020/10/31", "home-section5-4")
    ];
}
const tb_recommend = new Recommend();
