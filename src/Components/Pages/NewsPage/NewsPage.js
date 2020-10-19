import React, {Fragment} from 'react';
import './NewsPage.css';
import NewsSnippetCard from '../../Global/NewsSnippetCard/NewsSnippetCard';
import Banner from '../../../Components/Global/BannerComponent/Banner';


function NewsPage() {
     
        return (
            <Fragment>
            <Banner/>

                            <NewsSnippetCard/>
            
            
            </Fragment>
           
        );
    }


export default NewsPage;