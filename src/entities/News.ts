export class News {
    constructor(public id: number, public title: String, public by: String, public commentId: number[], 
        public time: number, public score: number, public url: String) {
        this.id = id
        this.title = title
        this.by = by
        this.commentId = commentId
        this.time = time
        this.score = score
        this.url = url
    }

    static getNews(id: number, title: string, by: string, commentId: number[], time: number, score: number, 
        url: string): News {
        return new News(id, title, by, commentId, time, score, url)
    }
}