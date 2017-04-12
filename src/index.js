import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import App from './App';
import './index.css';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const divStyle = {
  color: '#333',
  height: '20%'
};

const containerStyle = {
    height: '100%'
};

var TextBox = React.createClass({
    render: function() {
        var imgUrl = this.props.img;
        var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            color: '#333',
            height: '20%'
        };
        return (
            <div style={divStyle}>
                <a href={this.props.url} target="_blank">
                <h2 className="topic"><span>{this.props.title}</span></h2>
                <p className="topic">{this.props.description}</p>
                <p className="topic">{this.props.site_name}</p>
                </a>
            </div>

        )
    }
});

var TextData = React.createClass({
    loadTopicsData: function() {
        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&callback=",
            data: {
                q: "select * from json where url = 'http://api.news.goodfind.jp/v1/topics'",
                format : "json"
            },
            dataType: "json",
            cache: false,
            success: function(data) {
                console.log(data.query.results.json.json);
                this.setState({
                    data: data.query.results.json.json
                });

            }.bind(this)
        });
    },
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentWillMount: function() {
        this.loadTopicsData();
    },

    render: function() {
        var topicmap = this.state.data.map(function(topics) {
            return (
                <TextBox title={topics.title} key={topics.id} url={topics.url} img={topics.image_url} description={topics.description} site_name={topics.site_name} />
            );
        });

        return (
            <div style={containerStyle}>
              {topicmap}
            </div>
        );
    }
});


ReactDOM.render(
    <TextData />,
    document.getElementById('content'),
);
