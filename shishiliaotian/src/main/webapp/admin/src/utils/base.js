const base = {
    get() {
        return {
            url : "http://localhost:8080/shishiliaotian/",
            name: "shishiliaotian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shishiliaotian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "交流论坛"
        } 
    }
}
export default base
