import {Component} from 'react'
import HistoryEl from './Components/History/history'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchText: '', historyList: initialHistoryList}

  onChangeText = event => {
    console.log(event.target.value)
    this.setState({searchText: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filterData = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterData})
  }

  render() {
    const {searchText, historyList} = this.state
    const searchList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchText.toLowerCase()),
    )
    const listLength = historyList.length
    const text = listLength === 0
    /*
    let text
    if (listLength === 0) {
      text = <p className="nothing-para">There is no history to show</p>
    } else {
      text = searchList.map(each => (
        <HistoryEl
          key={each.id}
          deleteItem={this.deleteItem}
          historyDetails={each}
        />
      ))
    }
    */

    /*
    const searchList.map(each => (
        <HistoryEl
          key={each.id}
          deleteItem={this.deleteItem}
          historyDetails={each}
        />
      ))
    */

    return (
      <div className="bg-container">
        <div className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-app"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="logo-search"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input-el"
              onChange={this.onChangeText}
            />
          </div>
        </div>

        <div className="item-container">
          <ul className="list-container">
            {text && (
              <p className="nothing-para">There is no history to show</p>
            )}
            {!text &&
              searchList.map(each => (
                <HistoryEl
                  key={each.id}
                  deleteItem={this.deleteItem}
                  historyDetails={each}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App

// There is no history to show
// There is no history to show
