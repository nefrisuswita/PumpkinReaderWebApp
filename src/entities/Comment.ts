export class Comment {
    constructor(public id: number, public by: string, public comment: Comment[], public text: string, 
        public time: number) {
        this.id = id
        this.by = by
        this.comment = comment
        this.text = text
        this.time = time
    }

    static getNews(id: number, by: string, comment: Comment[], text: string, time: number): Comment {
        return new Comment(id, by, comment, text, time)
    }

    static getNewsById(id: number): Comment {
        return new Comment(id, '', [], '', 0)
    }
}