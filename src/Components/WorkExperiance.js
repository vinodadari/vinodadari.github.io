import { useState } from "react";

const WorkExperiance = () => {
    const [currentCompany, setCurrentCompany ] = useState('Tessrac');
    const companies = ['Tessrac', 'Inspiredge IT', 'Vensa'];
    // useEffect
    // console.log(currentCompany);
    return (
        <>
            <section className="work_experiance">
                <h2 className="section_heading" aria-hidden="true">
                    Where I've Worked
                </h2>
                <div className="experiance_box">
                    <div className="tab_list">
                        {companies.map((val, index) =>
                            <button
                                className={(currentCompany == val) ? 'active' : ''}
                                onClick={()=>setCurrentCompany(val)}
                            >
                                <span>{val}</span>
                            </button>
                        )}

                    </div>
                    <div className="tab_content_box">
                        <div className={(currentCompany == 'Tessrac') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Tessrac</span></h3>
                            <p>June 2020 - Present</p>
                            <div>
                                <ul>
                                    <li>Hands-on experience in Python, React JS, sockets, Kafka, SNMP, Nagios, Redis, and MySQLi.</li>
                                    <li>Implemented SNMPwalk core functionality to do snmpwalk on and network devices.</li>
                                    <li>Experience in Implementing windows exe installer using python.</li>
                                    <li>Developed two-way socket communication.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany == 'Inspiredge IT') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Inspiredge IT</span></h3>
                            <p>Jan 2020 - June 2020</p>
                            <div>
                                <ul>
                                    <li>** I transferred to Inspiredge's sister company TESSRAC.</li>
                                    <li>Hands-on experience in Python, sockets, Kafka, SNMP, Nagios, Redis, and MySQLi.</li>
                                    <li>Developed two-way socket communication(many to many).</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany == 'Vensa') ? "tab_content" : "d-none"}>
                            <h3>Software Developer <span className="company">&nbsp; @ &nbsp;Vensa</span></h3>
                            <p>Aug 2017 - Jan 2020</p>
                            <div>
                                <ul>
                                    <li>Experienced in developing CMS web applications, Invoice Management systems, Inventory Managers, E-Commerce, Business Promotion, and some other websites.</li>
                                    <li>I have a good hang of Shopify and WordPress as well.</li>
                                    <li>Deploying the application to Virtual Private Servers CI/CD using Git.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WorkExperiance;
