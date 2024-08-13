function Header(props){
    return(
        <>
        <h1>This is MyBlog Page</h1>
        <h2>Hello {props.name}</h2>   
        <MainSection></MainSection>
        <Footer></Footer>

        </>
    );
}

function MainSection(){
    return(
        <>
        <section>
            <article>
            <h4><u>About Me:</u></h4>
            <p>Hello Everyone, I am Pruthvi, A Software Developer from Lyros. I have an overall 5+ years of experience in working with MERN Stack. I have worked in various projects with multiple technologies and frameworks such as JS, React, AWS, Jira Ticketing tool, Jenkins and MongoDB. </p>
            </article>
            <article> 
                <aside>
                    <h3><u>Technical Skills:</u></h3>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>tailwindcss</li>
                    <li>BootStrap</li>
                    <li>MongoDB</li>
                </ul>
                </aside>
            </article>
           
        </section>
        </> 
    );
}

function Footer(){
    return(
        <>
        <h6>@Copyrights reserved to xzcorp</h6>
        </>
    )
}

export default Header;