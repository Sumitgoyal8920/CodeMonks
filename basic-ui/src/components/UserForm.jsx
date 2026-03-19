import "../Css/UserForm.css";
export default function UserForm() {
    return (
        <div className="UserForm">
            <div className="leftInfo">
                <div className="leftInfoData">
                    <h2>Let's get in touch</h2>
                    <p>We’re open for any suggestion or just to have a chat.</p>
                    <div className="info">Address: EZ-507, 5th floor, SRS<br></br> Tower, Sector-31, 121003</div>
                    <div className="info">Phone: +91-9999131058<br></br>
                        +91-7503366400</div>
                    <div className="info">Email: crm@codemonks.in</div>
                    <div className="info">Website: codemonks.in</div>
                </div>
            </div>

            <div className="RightInfo">
                <form>
                   
                    <label   for="full name" >FULL NAME</label>
                      <label className="row-label"  for="Email Address" >EMAIL</label>
                    
                       
                    <div className="row">
                        <input type="text" id="full name" placeholder="Full Name"  ></input>
                      

                     
                        <input type="Email" id="Email Address" placeholder="Email"  ></input>
                    </div>
<label for="Subject" >SUBJECT</label>
                    <div className="row">
                        <input className="row" type="text" id="Subject"  placeholder="Subjects"></input></div>
<label for="message" >Message</label>
                    <div className="row">
                        
                        <textarea className="row" id="message" placeholder="Write Your Message..." ></textarea>
                        </div>


                    <button className="submit">submit</button>
                </form>
            </div>
        </div>
    )
}