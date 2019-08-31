import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../assets/scss/components/_scroll.scss'

export const content = <div align="center">
<p>
    <iframe 
    src="https://open.spotify.com/follow/1/?uri=spotify:artist:7KWo5lhqXiYmR8klsOGCOl&size=basic&theme=dark" 
    width="200" 
    height="25" 
    scrolling="no" 
    frameborder="0" 
    style = {{border:"none", overflow:"hidden"}}  
    allowtransparency="true">
    </iframe>
</p>
<p>
<iframe src="https://open.spotify.com/embed/track/2DGM7OKAHxKM7ySwR3mSf8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" align="justify"></iframe>
</p>
<p>
<iframe src="https://open.spotify.com/embed/track/1zoAUD5angHlzXKKFavYGx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</p>
<p>
<iframe src="https://open.spotify.com/embed/track/5U3cbtU6s1XCqgZyuZq5q1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</p>
<p>
<iframe src="https://open.spotify.com/embed/track/3m5eDPY8XBcejVEJIPVz7N" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</p>
{/* 
https://www.npmjs.com/package/react-horizontal-scrolling-menu */}

</div>