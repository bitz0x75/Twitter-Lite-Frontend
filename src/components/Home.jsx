import React, { Component } from "react";
import Navbar from './Navabar.jsx';
import Avatar from '../assets/images/avatar.svg';
import tweetActions from '../actions/tweet.actions';
import { connect } from 'react-redux';

class Index extends Component {
    constructor (props){
        super(props)
        this.state = {
            value: 280,
            disabled: false,
            text_value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: 280-event.target.value.length, text_value: event.target.value})
        if (this.state.value <= 0){
            this.setState({disabled: true})
        }else{
            this.setState({disabled: false})
        }

    }

    handleSubmit = e => {
        const { dispatch, history } = this.props;
        if (!e.target.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();
        const data = {body: this.state.text_value};
        dispatch(tweetActions.tweet(data, history))
    }



    render(){
        return (
            <div>
                <Navbar />
                <div className="body">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea rows="6" cols="200" className="text-field" 
                            placeholder="What's happening? Max. 280 characters." 
                            onChange={this.handleChange.bind(this)}
                            value = {this.state.text_value} 
                            name = "body" />
                    </div>
                    <button type="submit" className="btn btn-primary tweet-btn" disabled={this.state.disabled}>Tweet</button>
                    <p className="chars"> {this.state.value} characters.</p>
                    </form>
                    <div className="tweets-container">
                    <p className="filter-by ml-0">Filter-by</p>
                    <button type="submit" className="btn btn-default tag-button">#Learntech</button>
                    <div className="tweets">
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <span className="tweet-body">
                    <span className="tweet-time">2 hours ago</span>
                        <h6 className="tweet-user">Maya Neria</h6>   
                        <p className="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                    </span>
                    </div>
                    <div className="tweets">
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <span className="tweet-body">
                    <span className="tweet-time">2 hours ago</span>
                        <h6 className="tweet-user">Maya Neria</h6>   
                        <p className="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                    </span>
                    </div>
                    <div className="tweets">
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <span className="tweet-body">
                    <span className="tweet-time">2 hours ago</span>
                        <h6 className="tweet-user">Maya Neria</h6>   
                        <p className="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                    </span>
                    </div>
                    <div className="tweets">
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <span className="tweet-body">
                    <span className="tweet-time">2 hours ago</span>
                        <h6 className="tweet-user">Maya Neria</h6>   
                        <p className="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                    </span>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    tweetReducer: state.tweetReducer
})

export default connect(mapStateToProps)(Index);


