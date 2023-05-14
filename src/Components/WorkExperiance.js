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
                                className={(currentCompany === val) ? 'active' : ''}
                                onClick={()=>setCurrentCompany(val)}
                            >
                                <span>{val}</span>
                            </button>
                        )}

                    </div>
                    <div className="tab_content_box">
                        <div className={(currentCompany === 'Tessrac') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Tessrac</span></h3>
                            <p>June 2020 - Present</p>
                            <div>
                                <ul>
                                    <li>** I transferred to Inspiredge’s subsidiary company</li>
                                    <li>Successfully implemented bidirectional socket communication using Python.</li>
                                    <li>Designed a system to listen to SNMP traps and convert them for further processing.</li>
                                    <li>Implemented Nagios event listener to receive and handle events efficiently.</li>
                                    <li>Collaborated with the team effectively and followed Object-Oriented Programming (OOP) principles during software development.</li>
                                    <li>Used Apache Kafka and designed the necessary DB schema to support the project's functionalities. Maintained a Git repository to ensure code version control and efficient collaboration.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany === 'Inspiredge IT') ? "tab_content" : "d-none"}>
                            <h3>Software Engineer <span className="company">&nbsp; @ &nbsp;Inspiredge IT</span></h3>
                            <p>Jan 2020 - June 2020</p>
                            <div>
                                <ul>
                                    <li>Created a system for monitoring the health of devices by generating events based on the contents of email templates.</li>
                                    <li>Used regular expressions (regex) to extract relevant information from email messages, such as error codes, device names, and timestamps.</li>
                                    <li>Processed email data in real-time, allowing for quick identification and resolution of device issues.</li>
                                    <li>Integrated the generated events into the larger monitoring system, providing a comprehensive view of device health and enabling proactive maintenance and troubleshooting.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={(currentCompany === 'Vensa') ? "tab_content" : "d-none"}>
                            <h3>Software Developer <span className="company">&nbsp; @ &nbsp;Vensa</span></h3>
                            <p>Aug 2017 - Jan 2020</p>
                            <div>
                                <ul>
                                    <li>Developed various web applications, including CMS systems, invoice management systems, and inventory managers, using object-oriented programming (OOP) principles and best practices in software development.</li>
                                    <li>Collaborated with cross-functional teams, including designers, developers, and marketers, to create web applications that met business needs and provided a positive user experience.</li>
                                    <li>Designed and developed systems with a focus on scalability, maintainability, and usability, using system design principles that ensured code modularity and flexibility for future enhancements. Additionally, collaborated with marketing teams to develop strategies for promoting web applications and increasing user engagement.</li>
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
