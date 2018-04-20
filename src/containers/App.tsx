import * as React from 'react'
import Navigation from './NavigationFragment'
import NewsList from './NewsListFragment'

// const news: News[] = [News.getNews('', "Hello"), News.getNews('', "Duh"), News.getNews('', "Yahhh")]

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <NewsList />
      </div>  
    )
  }
}