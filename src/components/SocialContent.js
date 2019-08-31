import React from 'react'

export const content = <div>
    <h2 className="major">Social Media Links</h2>
          
          <ul className="icons">
            <li><a href="https://linkedin.com/in/christinaxli/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/christinali/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="http://github.com/christinaxinli/" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          
          {/* the below doesn't show up in localhost but does when deployed */}
          <p></p>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
          <div class="elfsight-app-fa339d9f-7e1c-41ce-ab40-d4210714960d"></div>
      


          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
</div>