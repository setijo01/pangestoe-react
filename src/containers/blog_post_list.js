import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as contentful from 'contentful'


export default class BlogPosts extends Component{
    state = {
        posts: []
    }
    client = contentful.createClient({
        space: 'w2bsg537649g',
        accessToken: '790c1b73871ab3dae9fd4988f0ec37fd458d807a4b291c9212017358ee847e4c'
    })
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }
    fetchPosts = () => this.client.getEntries()
    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }

    render() {

        return (
            <div id='blog-section' className='section-outer-block container-fluid d-flex flex-fill justify-content-center align-items-stretch'>
                <div className=' container section-inner-block-2nth d-flex flex-column align-items-center'>
                    <div className='header-title'>
                        <div className='upper-border container'/>
                    <div className='text-align-center'>
                        <h1>Blog Posts</h1>
                    </div>
                    <div className='bottom-border container'/>
                    <div className='blog-posts'></div>
                    </div>
                </div>
            </div>
        );
    }
}