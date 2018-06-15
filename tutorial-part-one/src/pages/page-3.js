import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
    <div>
        <h1>Pros/Cons</h1>
        <ul>
            <h2>Pros</h2>
            <h2>1. Speed</h2>
            <li>"No database queries to run, no templating and no processing whatsoever on every request"</li>
            <li>Doesn't need to access a DB, just plain HTML pages</li>
            <h2>2. Version Control for Content</h2>
            <li>Content is stored in flat files and treated like a component</li>
            <h2>3. Security</h2>
            <li>Their simplicity means they are less at risk</li>
            <h2>4. Less Hassle with the Server</h2>
            <li>"The end result is a collection of HTML files that can be served anywhere, scaled and migrated as needed regardless of the server-side technologies"</li>
            <li>"The site generation process... can be done from an environment that you control locally and not necessarily on the web server that will run the site"</li>
            <h2>5. Traffic Surges</h2>
            <li>Static sites are better at handling traffic surges</li>
            <li>"serving static HTML pages consumes a very small amount of server resources"</li>
        </ul>

        <ul>
            <h2>Cons</h2>
            <li>No real-time content</li>
            <li>No user input</li>
            <li>No admin UI</li>

        </ul>
        <div>
            <h1>Resources</h1>
            <Link to="https://davidwalsh.name/introduction-static-site-generators">David Walsh Blog</Link>
        </div>
        <div>
            <button><Link to="/counter/">Counter</Link></button>
        </div>
        <div>
            <button><Link to="/">Go back to the homepage</Link></button>
        </div>

    </div>
)

export default ThirdPage