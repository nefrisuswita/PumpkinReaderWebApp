import * as React from 'react'
import Collapse from '@material-ui/core/Collapse'

import { Comment } from '../entities/Comment'

interface CommentState {
    expanded: boolean
}

interface CommentProps {
    comment: Comment
    level: number
}

export default class CommentItem extends React.Component<CommentProps, CommentState> {
    private color = [ '#00961b', '#166cff', '#960000' ]

    constructor(props: CommentProps) {
        super(props)

        this.state = { expanded: false }
    }

    render(): JSX.Element {
        return (
            <div key={this.props.comment.id} style={{ padding: '5px' }}>
                <div onClick={() => this.setState({ expanded: !this.state.expanded })}>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', color: this.color[this.props.level] }}>
                        <div style={{ padding: '5px', paddingLeft: '0px' }}>{this.props.comment.by}</div>
                        <div style={{ padding: '5px' }}>+{this.props.comment.comment.length} comments</div>
                        <div style={{ padding: '5px' }}>{this.props.comment.time}</div>
                    </div>    
                    <div dangerouslySetInnerHTML={{ __html: this.props.comment.text }} />
                </div>    
                <Collapse in={this.state.expanded}>
                    {this.props.comment.comment.map(childComment => {
                        return <CommentItem key={childComment.id} comment={childComment} level={this.props.level + 1} />
                    })}
                </Collapse>
            </div>
        )
    }
}
