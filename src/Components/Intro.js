const Intro = (props) => {
    return (
        <>
            <section className="introduction" id={props.id}>
                    <span>
                        <div className="highlight ">
                            <h1>Hi, my name is</h1>
                        </div>
                        <div className="big_heading">
                            <h2>Vinodh Kumar Adari.</h2>
                        </div>
                        <div className="big_heading">
                            <h3>I build things for the web.</h3>
                        </div>
                        <div className="description">
                            <p>
                                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="https://tessrac.com/" rel="noreferrer" target="_blank" className="highlight_link">Tessrac</a>
                            </p>
                        </div>
                    </span>
                </section>
        </>
    )
}
export default Intro;
