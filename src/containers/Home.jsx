import React, { Component } from "react";
import Navbar  from "../components/Navbar.jsx";
import Avatar from "../assets/images/avatar.svg";
import tweetActions from "../actions/tweet.actions";
import { fetchTweets } from "../actions/fetchtweets.actions";
import { connect } from "react-redux";

import uuid from 'uuid'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 280,
      disabled: false,
      text_value: "",
      hashTag: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchTweets } = this.props;
    fetchTweets();
  }

  handleChange(event) {
    this.setState({
      value: 280 - event.target.value.length,
      text_value: event.target.value
    });
    if (this.state.value <= 0) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  handleSubmit = e => {
    const { tweet, history } = this.props;
    const {text_value} = this.state;
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    const data = { body: text_value };
    tweet(data, history);
  };

  hashtag_to_link  = body => {
    var myRegexp = /(#\w+)/g
    var newStr = body.replace(myRegexp, `<span class="tag-link"${onclick = this.handleHashtagClick} data-hashKey=$1>$1</span>`);
    return {__html: newStr}
  }

  handleHashtagClick  = e => {
    e.preventDefault();
    e.stopPropagation();
    let targetValue = e.target.getAttribute('data-hashKey');
    if (!targetValue) {
      return;
    }
    targetValue = targetValue.substring(1);
    const { fetchTweets } = this.props;
    fetchTweets(targetValue);
    this.setState({hashTag: targetValue});
  }

  clearFilters = (e) => {
    const {fetchTweets} = this.props;
    this.setState({hashTag: null}, () => {
      fetchTweets();
    });
  }

  renderClearFilters() {
    const spanStyle  = {
      cursor: 'pointer',
      margin: '-22px',
      color: '#9E1919',
      fontSize: "20px"

    }
    return (
      <span onClick={this.clearFilters} className="closebox" style={spanStyle}>X</span>
    );
  }

  render() {
    const {
      tweets: { data, loading }
    } = this.props;
    const {hashTag} = this.state;
    return (
      <div>
        <Navbar />
        <div className="body">
          <form>
            <div className="form-group">
              <textarea
                rows="6"
                cols="200"
                className="text-field"
                placeholder="What's happening? Max. 280 characters."
                onChange={this.handleChange.bind(this)}
                value={this.state.text_value}
                name="body"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary tweet-btn"
              disabled={this.state.disabled}
              onClick={this.handleSubmit}
            >
              Tweet
            </button>
            <p className="chars"> {this.state.value} characters.</p>
          </form>
          {}
        <div className="tweets-container">
          <p className="filter-by ml-0">Filter-by</p>
          {hashTag ?
          <div>
            <button type="submit" className="btn btn-default tag-button">
            #{hashTag}
            </button>
            {this.renderClearFilters()}
          </div>:
           ''}
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map(tweet => {
              return (
                <div className="tweets" key={uuid(tweet.created_by)}>
                  <img src={Avatar} alt="Avatar" className="avatar" />
                  <span className="tweet-body">
                    <span className="tweet-time">
                      {tweet.created_at.toString()}
                    </span>
                    <h6 className="tweet-user">{tweet.curr_user}</h6>
                    <p className="main-tweet" dangerouslySetInnerHTML = {this.hashtag_to_link(tweet.body)}></p>
                  </span>
                </div>
              );
            })
          )}
        </div>
        {}
        </div>
      </div>
    );
  }
}

Index.defaultProps = {
  tweets: {
    data: []
  }
};

const mapStateToProps = state => ({
  tweetReducer: state.tweetReducer,
  tweets: state.fetchTweetsReducer
});

export default connect(
  mapStateToProps,
  { fetchTweets,tweet:  tweetActions.tweet }
)(Index);