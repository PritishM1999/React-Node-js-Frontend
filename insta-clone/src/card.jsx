import "./card.css";
import React from 'react'

import Moment from 'moment'; //To format date while rendering functional component
Moment.locale('en');

const Card = ({prop}) =>{
    return(
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        {/* <div className="card-header__name">{post.username}</div> */}
                        {/* <div className="card-header__place">{post.location}</div> */}
                        <div className="card-header__name">{prop.name}</div>
                        <div className="card-header__place">{prop.location}</div>
                    </div>
                    <span>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>

                <section className="card-image">

                    <div>
                        <img src={`http://localhost:8080/images/${prop.imagefile}`} alt="Myimage"></img>
                    </div>

                </section>


                        <section className="card-actions">
                            <span>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                            </span>
                            <span>
                                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                            </span>
                            <span>
                                {Moment(prop.date).format("DD-MMM-YYYY")}
                            </span>
                        </section>
                        <section className="likes">
                            {prop.likes} likes
                        </section>
                        <section className="description">
                            {prop.description}
                        </section>
                
            </section>
            
        </>
    )
}
export default Card;