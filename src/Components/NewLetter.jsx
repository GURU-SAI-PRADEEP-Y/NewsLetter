import React, { Component } from 'react'

export class NewLetter extends Component {
    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : "https://as1.ftcdn.net/v2/jpg/04/60/01/36/1000_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewLetter
