import "../Css/Form.css";
export default function Form() {
    return (
        <div className="Form">
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
                    <div className="section1">
                        <label for="full name" >FULL NAME</label>
                        <input type="text" id="full name" className="inline" ></input>

                        <label for="Email Address" >EMAIL</label>
                        <input type="Email" id="Email Address" className="inline" ></input>
                    </div>

                    <div className="section2">
                        <label for="Subject" >SUBJECT</label>
                        <input type="text" id="Subject" className="block" ></input>
                        <label for="message" >Message</label>
                        <textarea id="message" className="block"></textarea>
                    </div>

                    <button className="submit">submit</button>
                </form>
            </div>
        </div>
    )
}