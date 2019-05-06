import React from "react";
import Navbar from './Navabar.jsx';
import Avatar from '../assets/images/avatar.svg';

 const Index = () => {
    return (
        <div>
            <Navbar />
            <div className="body">
            <form>
                <div className="form-group">
                    <textarea rows="6" cols="200" className="text-field" placeholder="What's happening? Max. 280 characters."/>
                </div>
                <button type="submit" className="btn btn-primary tweet-btn">Tweet</button>
                <p className="chars"> 38 characters</p>
                <div className="tweets-container">
                   <p className="filter-by ml-0">Filter-by</p>
                   <button type="submit" className="btn btn-default tag-button">#Learntech</button>
                   <div className="tweets">
                   <img src={Avatar} alt="Avatar" className="avatar" />
                   <span className="tweet-body">
                   <span className="tweet-time">2 hours ago</span>
                    <h6 className="tweet-user">Maya Neria</h6>   
                    <p class="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                   </span>
                   </div>
                   <div className="tweets">
                   <img src={Avatar} alt="Avatar" className="avatar" />
                   <span className="tweet-body">
                   <span className="tweet-time">2 hours ago</span>
                    <h6 className="tweet-user">Maya Neria</h6>   
                    <p class="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                   </span>
                   </div>
                   <div className="tweets">
                   <img src={Avatar} alt="Avatar" className="avatar" />
                   <span className="tweet-body">
                   <span className="tweet-time">2 hours ago</span>
                    <h6 className="tweet-user">Maya Neria</h6>   
                    <p class="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                   </span>
                   </div>
                   <div className="tweets">
                   <img src={Avatar} alt="Avatar" className="avatar" />
                   <span className="tweet-body">
                   <span className="tweet-time">2 hours ago</span>
                    <h6 className="tweet-user">Maya Neria</h6>   
                    <p class="main-tweet">I love #regle so much - everyone should use it! #learntech</p>
                   </span>
                   </div>
                </div>
                
                </form>
            </div>
        </div>
        
    )
}

export default Index;


