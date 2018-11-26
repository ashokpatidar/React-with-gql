import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () => (
     <Query query={gql`
                {
                    allCourses {
                        id,
                        title
                        author,
                        url
                    }
                }
                `}>
                    {({loading, error, data}) => {
                        if(loading) return <p>Loading...</p>;

                        if (error) return <p>Error :(</p>;

                        return data.allCourses.map(({id, title, author, url}) => (
                            <div key={id} className="card" style={{'width': '100%', 'marginTop': '10px', 'backgroundColor':'white'}}>
                                {/* <p> 🚀 {author} ===>>> {title}</p> */}
                                <div className="card-body">
                                    <h5 className='card-title'>{title}</h5>
                                    <div className='card-author'>{author}</div>
                                    {/* <h6 className='card-text'>{author}</h6> */}
                                    <a href={url} className='card-link'>More Deatils Info ...</a>
                                </div>
                            </div>
                        ));
                    }}
                </Query>
)

 export default Courses;

