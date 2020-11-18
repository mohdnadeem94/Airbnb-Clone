import React,{useState} from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { Link, useHistory } from 'react-router-dom';

function Banner() {
    const [showSearch,setShowSearch] = useState(false)
    const history = useHistory()
    return (
        <div className='banner'>
            <div>{showSearch && <Search />}</div>
            <div className="banner_search">
                <Button variant='outlined' className="banner_searchButton" onClick={()=>setShowSearch(!showSearch)}>
                    {showSearch? 'Hide':'Search Dates'}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined' onClick={()=>history.push('/search')}>Explore Nearby </Button>
                
            </div>
        </div>
    )
}

export default Banner
