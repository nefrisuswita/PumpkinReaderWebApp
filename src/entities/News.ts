export class News {
    id: number
    title: String
    by: String
    commentId: number[]
    time: number
    url: String

    constructor(id: number, title: String, by: String, commentId: number[], time: number, url: String) {
        this.id = id
        this.title = title
        this.by = by
        this.commentId = commentId
        this.time = time
        this.url = url
    }

    static getNews(id: number, title: String, by: String, commentId: number[], time: number, url: String): News {
        return new News(id, title, by, commentId, time, url)
    }
}