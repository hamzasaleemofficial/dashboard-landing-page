
import React, { Component } from 'react'
import "./cards.css";

 class Cards extends Component {
    render() {
        return (
            <div className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="above-heading">DESCRIPTION</div>
                    <h2 className="h2-heading">"EVERYTHING THAT CAN BE AUTOMATED WILL BE AUTOMATED"</h2>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">

                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/user_flows.png" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Complete User Flows</h4>
                            <p>Not just a set of tools, the package includes the most common use cases of user flows like User Management, Second Level Layout, and many more.</p>
                        </div>
                    </div>
                    

                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/plugins_support.png" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Support for Plugins</h4>
                            <p>The kit provides support for multiple third-party plugins right out of the box like Chart.js, Dropzone.js, Kanban Plugin and many more.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/source_files.png" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Source Files</h4>
                            <p>We've included the source Sketch and Figma files so you can get creative! We designed all components with Symbols in Sketch which allows you to change the main colors as you like.</p>
                        </div>
                    </div>
                   

                </div> 
            </div> 
        </div> 
    </div>
        )
    }
}
export default Cards;