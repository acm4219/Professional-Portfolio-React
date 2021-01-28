import React from "react";
import "../styles/jumbotron.css";
import "../styles/table.css"

function ContactInfo(){
    const style={
        background:{
            backgroundColor: "#99B898",
            width: "100%",
            height: "100%",
            position: "absolute"
        },
        img: {
            borderRadius: "10%"
        }
    }
    return(
        <div style={style.background}>
        <div className="container">
         <div className="card mt-3 p-4">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img className="w-100 p-3 h-100 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/Professional pic.JPG"} alt="professionalpic" style={style.img}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Contact Info</h5>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <th>Email:</th>
                                    <th>Phone Number:</th>
                                    <th>Github:</th>
                                    <th>Linkedin:</th>
                                    <th>Resume:</th>
                                </tr>
                                <tr>
                                    <td><a  href = "mailto: acm4219@gmail.com">acm4219@gmail.com</a></td>
                                    <td>(763)-614-8255</td>
                                    <td><a href="https://github.com/acm4219">acm4219</a></td>
                                    <td><a href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">LinkedIn Profile</a></td>
                                    <td ><a href="https://docs.google.com/document/d/1NAkbvXWE4RRzWK9Uq1Uqlz-iJCPX5mVleTTRK_GvrxY/export?format=pdf">Resume 2020</a></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    
                </div>
                <div className="pl-3">
                        <h5 className="card-title">Proficiencies</h5>
                        <hr/>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        Browser Based Technologies
                                    </th>
                                    <th className="m-2">Deployment</th>
                                    <th>Databases</th>
                                    <th>Server-Side Development</th>
                                    <th>Quality Assurance</th>
                                    <th>Internet Marketing</th>
                                </tr>
                                <tr>
                                    <td>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>JQuery</li>
                                            <li>Responsive Design</li>
                                            <li>Bootstrap</li>
                                            <li>Tailwind CSS</li>
                                            <li>Materialize CSS</li>
                                            <li>Handlebars</li>
                                            <li>Cookies</li>
                                            <li>Local Storage</li>
                                            <li>React</li>
                                        </ul>
                                    </td>
                                    <td className="mx-2">
                                        <ul>
                                            <li className="pr-2">Heroku</li>
                                            <li className="pr-2">Git</li>
                                        </ul>
                                    </td>
                                    <td className="mx-2">
                                        <ul> 
                                            <li className="pr-2">MySQL</li>
                                            <li className="pr-2">MongoDB</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                             <li>Express</li>
                                             <li>Security and Session Storage</li>
                                             <li>User Authentication</li>
                                             <li>MERN Stack</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Writing Tests</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Semantic HTML</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
        </div>
     </div>
    

    )
}

export default ContactInfo;