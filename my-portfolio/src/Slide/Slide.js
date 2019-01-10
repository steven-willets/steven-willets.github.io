import React from 'react';

const slide = (props) => {
    return (
        <li tabindex="1" class="tile inactive">
            <img class="tile-thumbnail" src="images/plugin-thumbnail.png" alt="Events Plugin Builder" />
            <article class="tile-content">
                <div class="project-image project-content">
                    <img src="images/plugin.png" alt="Events Plugin Builder" />
                </div>
                <div class="project-info project-content">
                    <h3 class="project-title">Events Plugin Builder</h3>
                    <p class="project-date">2016</p>
                    <div class="project-desc">
                        <p>
                            This generates a plugin that enables any site to become a ticket selling website.
                        </p>
                        <p>
                            The builder provides various specificity options so that the user can tailor the results to match their needs.
                        </p>
                    </div>
                    <a class="tile-link btn" target="_blank" href="https://jsfiddle.net/steven_willets/m5vxyc9g/">View in JSFiddle</a>
                </div>
            </article>
        </li>    
    )
};

export default slide;