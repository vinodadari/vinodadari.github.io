import ResumePdf from '../assets/VinodhResume.pdf';

const NavBar = () => {
    return (
        <>
            <header className="navigation_bar">
                <nav>
                    <div className="logo">
                        <a href="#top">V</a>
                    </div>
                    <ul>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experiance">Experiance</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href={ResumePdf} rel="noreferrer noopener" className="highlight_link" target="_blank">Resume</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;
