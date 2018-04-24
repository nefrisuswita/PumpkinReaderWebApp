export class Comment {
    id: number
    by: String
    comment: Comment[]
    text: String
    time: number

    constructor(id: number, by: String, comment: Comment[], text: String, time: number) {
        this.id = id
        this.by = by
        this.comment = comment
        this.text = text
        this.time = time
    }

    static getNews(id: number, by: String, comment: Comment[], text: String, time: number): Comment {
        return new Comment(id, by, comment, text, time)
    }

    static getNewsById(id: number): Comment {
        return new Comment(id, '', [], '', 0)
    }
}