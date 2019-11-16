import React, { useEffect, useState } from 'react'

import { ContentDiv, Articles } from './style'

const ServerResponse = ({ callAPI }) => {

    const [articlesSt, setArticlesSt] = useState({ isLoading: false, isLoaded: false, isError: false, entities: undefined });
    
    useEffect(() => {

        if(!articlesSt.isLoading && !articlesSt.isLoaded) {
            setArticlesSt({
                isLoading: true
            });
            fetch(callAPI)
                .then( res => {
                    if(res.status >= 400) {
                        console.error(res.statusText);
                        setArticlesSt({
                            isLoading: false, 
                            isLoaded: false, 
                            isError: true, 
                            entities: undefined
                        });
                    }
                    return res.json();
                })
                .then(response => {                    
                    setArticlesSt({
                        isLoading: false, 
                        isLoaded: true, 
                        isError: false, 
                        entities: response
                    });                    
                })
                .catch(error => { 
                    console.error(error);
                                       
                    setArticlesSt({
                        isLoading: false, 
                        isLoaded: false, 
                        isError: true, 
                        entities: undefined
                    })
                })
        }
    }, []);
    
    if(articlesSt.isError && !articlesSt.isLoaded) return null;
    if(articlesSt.isLoading) return <div>Loading...</div>
    
    return (
        <ContentDiv>
            <p>Articles</p>
            <Articles>
                <nav>
                    {
                        articlesSt.entities ? (
                            articlesSt.entities.map(art => <li key={art.id}>{art.title}</li>)
                        ) : null
                    }
                </nav>
            </Articles>
        </ContentDiv>
    )
}

export default ServerResponse;