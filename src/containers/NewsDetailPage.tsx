import * as React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List/List'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Paper from 'material-ui/Paper'

import { ReducerState } from '../reducers'
import { fetchNewsDetailAndComments, fetchComments } from '../actions'
import { News } from '../entities/News'
import { Comment } from '../entities/Comment'
import CommentItem from './Comment'

interface PropsType {
    id: number
}

interface NewsDetailState {
    id: number, 
    news: News,
    comment: Comment[],
    fetchNewsDetailAndComments: typeof fetchNewsDetailAndComments, 
    fetchComments: typeof fetchComments

}

class NewsDetailFragment extends React.Component<NewsDetailState, {}> {
    componentWillMount() {
        if (!this.props.news || this.props.news.id != this.props.id) {
            this.props.fetchNewsDetailAndComments(this.props.id)
        } else {
            this.props.fetchComments(this.props.news)
        }
    }

    render() {
        if (!this.props.news) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div style={{ padding: '20px', width: '60%', margin: '0 auto' }}>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{ padding: '5px', paddingLeft: '0px' }}>{this.props.news.score}</div>
                        <div style={{ padding: '5px' }}>{this.props.news.by}</div>
                        <div style={{ padding: '5px' }}>{this.props.news.time}</div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: 'xx-large', fontWeight: 'bold' }}>{this.props.news.title}</div>    
                <div style={{ color: '#e09153' }}>{this.props.comment.length} comments</div>
                <div style={{ fontSize: 'large', fontWeight: 'bold', paddingTop: '50px', paddingBottom: '10px' }}>Comments</div> 
                <Divider style={{ backgroundColor: '#ef6c02' }}/>   
                <List>
                    {this.props.comment.map(comment => {
                        let open = false
                        return <CommentItem key={comment.id} comment={comment} level={0} />
                    })}
                </List>    
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        news: state.newsDetail.news,
        comment: state.newsDetail.comment
    }
}

export default connect(mapStateToProps, { fetchNewsDetailAndComments, fetchComments })(NewsDetailFragment)