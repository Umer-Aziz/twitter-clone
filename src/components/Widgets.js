import React from 'react'
import "../Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
        <div className="widgets">
        <div className="widgets_input">
         <SearchIcon className="widgets_searcIcon"/>
         <input placeholder="Search Twitter" type="text"/>
        </div>
        <div className="widgets_widgetsContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"858551177860055040"} />
            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
         <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
        </div>
    )
}

export default Widgets
