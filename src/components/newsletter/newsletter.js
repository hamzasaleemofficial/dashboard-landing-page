import React, { Component } from 'react'
import "./newsletter.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
 class Newsletter extends Component {
    render() {
        return (
            <>
            <div className="form">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <div className="above-heading">NEWSLETTER</div>
                        <h2>Stay Updated With The Latest News To Get More Qualified Leads</h2>

                        
                        <form id="newsletterForm" data-toggle="validator" data-focus="false">
                            <div className="form-group">
                                <input type="email" className="form-control-input" id="nemail" required/>
                                <label className="label-control" for="nemail">Email</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group checkbox">
                                <input type="checkbox" id="nterms" value="Agreed-to-Terms" required/>I've read and agree to Tivo's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">SUBSCRIBE</button>
                            </div>
                            <div className="form-message">
                                <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                        </form>
                        

                    </div> 
                </div>  
            </div> 
            
        </div> 
    </div>
     <div className="row">
     <div className="col-lg-12">
         <div className="icon-container fa-stack-2x">
             <span className="fa-stack">
                 <a href="#your-link">
                     
                     <FacebookIcon  className="fas fa-circle fa-stack-2x" className="fab  fa-stack-1x"></FacebookIcon>

                 </a>
             </span>
             <span className="fa-stack">
                 <a href="#your-link">
                   
                     <TwitterIcon  className="fas fa-circle -stack-2x " className="fab  fa-stack-1x"></TwitterIcon>
                 </a>
             </span>
             <span className="fa-stack">
                 <a href="#your-link">
                     
                     <PinterestIcon  className="fas fa-circle fa-stack-2x" className="fab  fa-stack-1x" ></PinterestIcon>
                 </a>
             </span>
             <span className="fa-stack">
                 <a href="#your-link">
                   
                     <InstagramIcon  className="fas fa-circle fa-stack-2x" className=" fab fa-stack-1x" ></InstagramIcon>
                 </a>
             </span>
             <span className="fa-stack">
                 <a href="#your-link">
                     
                     <LinkedInIcon  className="fas fa-circle fa-stack-2x" className="fab  fa-stack-1x"></LinkedInIcon>
                 </a>
             </span>
         </div>  
     </div>  
 </div>
 </>
        )
    }
}
export default Newsletter;