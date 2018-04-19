export class News {
    url: String
    title: String
    id: number

    constructor(url: String, title: String, id: number) {
        this.url = url
        this.title = title
        this.id = id
    }

    static getNews(url: String, title: String, id: number): News {
        return new News(url, title, id)
    }
}