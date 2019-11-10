import React from 'react';
import {id as pluginId} from './manifest';

class RtlUiPlugin {
    initialize(registry, store) {
        // Get HTML head element 
        let head = document.getElementsByTagName('HEAD')[0];
        let styleSheetsUrls = [
            `../../static/plugins/${pluginId}/assets/css/bootstrap-rtl.min.css`,
            `../../static/plugins/${pluginId}/assets/css/iransans.css`
        ];

        styleSheetsUrls.map(url => {
            // Create new link Element 
            let link = document.createElement('link');
    
            // set the attributes for link element  
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
    
            // Append link element to HTML head 
            head.appendChild(link);
        });
        document.body.dir = "rtl";
    }
}

window.registerPlugin('com.mattermost.webapp-rtl-ui', new RtlUiPlugin());