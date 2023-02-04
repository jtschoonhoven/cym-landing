import React from 'react';

interface Props {
  title?: React.ReactElement;
}

/**
 * An embedded Mailchimp email signup form.
 */
const EmailSignup: React.FC<Props> = ({ title }) => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://show.us13.list-manage.com/subscribe/post?u=dcef62d2baadac35b443af1c9&amp;id=44ba8a8363&amp;f_id=0088e1e2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        style={{ margin: 0, padding: 0 }}
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          {title ? <>{title}</> : <h2 color="black">Subscribe for email updates</h2>}
          <div className="mc-field-group">
            {/* <label htmlFor="mce-EMAIL">Email</label> */}
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="your.email@domain.com"
              required
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" style={{ backgroundColor: 'inherit' }}></span>
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_dcef62d2baadac35b443af1c9_44ba8a8363" tabIndex={-1} value="" />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailSignup;
