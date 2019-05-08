import React, { Component } from "react";
import Navbar from "./Navabar.jsx";
import Avatar from "../assets/images/avatar.svg";
import tweetActions from "../actions/tweet.actions";
import { fetchTweets } from "../actions/fetchtweets.actions";
import { fetchHashTags } from "../actions/fetchHashTag.actions";
import { connect } from "react-redux";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      value: 280,
      disabled: false,
      text_value: "",
      hashTag: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchTweets } = this.props;
    fetchTweets();
  }

  hashtag_to_link (body){
    var myRegexp = /(#\w+)/g
    var newStr = body.replace(myRegexp, `<a ${onclick = (e) => this.handleHashtagClick(e)} href="/home">$1</a>`);
    return {__html: newStr}
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
    const { dispatch, history } = this.props;
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    const data = { body: this.state.text_value };
    console.log(data);
    dispatch(tweetActions.tweet(data, history));
  };

  handleHashtagClick  = e => {
    e.preventDefault()
    const { fetchTweets } = this.props;
    fetchTweets(e.target.innerHTML.substring(1));
  }
  render() {
    const {
      tweets: { data, loading }
    } = this.props;
    return (
      <div>
        <Navbar />
        <div className="body">
          <form onSubmit={this.handleSubmit}>
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
            >
              Tweet
            </button>
            <p className="chars"> {this.state.value} characters.</p>
          </form>
          {}
        <div className="tweets-container">
          <p className="filter-by ml-0">Filter-by</p>
          <button type="submit" className="btn btn-default tag-button">
            #Learntech
          </button>
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map(tweet => {
              return (
                <div className="tweets" key={tweet.created_at}>
                  <img src={Avatar} alt="Avatar" className="avatar" />
                  <span className="tweet-body">
                    <span className="tweet-time">
                      {tweet.created_at.toString()}
                    </span>
                    <h6 className="tweet-user">{tweet.created_by}</h6>
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
  { fetchTweets,fetchHashTags }
)(Index);
