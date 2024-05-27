import { useState } from "react";

const WorkExperiance = () => {
    const [currentCompany, setCurrentCompany] = useState('Tessrac');
    const companies = ['Tessrac', 'Inspiredge IT', 'Vensa'];
    // useEffect
    // console.log(currentCompany);
    return (
        <>
            <section className="work_experiance" id="experiance">
                <h2 className="section_heading" aria-hidden="true">
                    Where I've Worked
                </h2>
                <div className="experiance_box">
                    <div className="tab_list">
                        {companies.map((val, index) =>
                            <button
                                className={(currentCompany === val) ? 'active' : ''}
                                onClick={() => setCurrentCompany(val)}
                            >
                                <span>{val}</span>
                            </button>
                        )}

                    </div>
                    <div className="tab_content_box">
                        <div className={(currentCompany === 'Tessrac') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Tessrac</span></h3>
                            <p>June 2020 - Present <span className="addr">&nbsp;/&nbsp;/&nbsp; Visakhapatnam, IN.</span></p>
                            <div>
                                <ul>
                                    <li>** Transferred from InspiredgeIT Solutions</li>
                                    <li><b>Network & Monitoring Expertise:</b> Built real-time communication channels (bidirectional sockets),
                                        processed SNMP traps, and implemented an efficient Nagios event listener.</li>
                                    <li><b>Full-Stack Development:</b> Designed and implemented functionalities using OOP principles, utilized
                                        Apache Kafka for data streaming, and created a supporting database schema.</li>
                                    <li><b>Collaboration & Version Control:</b> Maintained a Git repository and collaborated effectively with the
                                        team throughout the development process.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany === 'Inspiredge IT') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Inspiredge IT</span></h3>
                            <p>Jan 2020 - June 2020 <span className="addr">&nbsp;/&nbsp;/&nbsp; Visakhapatnam, IN.</span></p>
                            <div>
                                <ul>
                                    <li>Transferred to Inspiredge’s sister company</li>
                                    <li><b>Automated Device Monitoring:</b> Built a system using email templates and regular expressions to
                                        generate real-time events for device health monitoring, enabling faster issue identification and
                                        resolution.</li>
                                    <li><b>Enhanced Monitoring System:</b> Integrated generated events into the existing monitoring system,
                                        offering a comprehensive view of device health.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany === 'Vensa') ? "tab_content" : "d-none"}>
                            <h3>Software Developer <span className="company">&nbsp; @ &nbsp;Vensa</span></h3>
                            <p>Aug 2017 - Jan 2020 <span className="addr">&nbsp;/&nbsp;/&nbsp; Visakhapatnam, IN.</span></p>
                            <div>
                                <ul>
                                    <li><b>Full-Stack Development:</b> Built diverse web applications (CMS, invoicing, inventory) using OOP and best
                                        practices. Collaborated with cross-functional teams to deliver user-friendly and scalable solutions.</li>
                                    <li><b>System Design & Maintainability:</b> Focused on code modularity, scalability, and maintainability while
                                        designing and developing systems, ensuring future adaptability.</li>
                                    <li><b>User-Centric Development:</b> Collaborated with designers and marketers to create web applications
                                        that address business needs and foster user engagement.</li>
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
