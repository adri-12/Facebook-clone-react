import React from 'react';
import '../styles/login-style.scss';
import '../styles/helper-classes.scss';

const items = [
    { id: 1, name: 'English (US)', url:'#' },
    { id: 2, name: 'Română', url:'#' },
    { id: 3, name: 'Magyar', url:'#' },
    { id: 4, name: 'Italiano', url:'#' },
    { id: 5, name: 'Español (España)', url:'#' },
    { id: 6, name: 'Français (France)', url:'#' },
    { id: 7, name: 'Deutsch', url:'#' },
    { id: 8, name: 'Türkçe', url:'#' },
    { id: 9, name: 'Português (Brasil)', url:'#' },
    { id: 10, name: 'العربية', url:'#' },
    { id: 11, name: 'हिन्दी',url:'#' }
];

const elements = [
    { id: 1, name: 'Sign Up', url:'#' },
    { id: 2, name: 'Log In', url:'#' },
    { id: 3, name: 'Messenger', url:'#' },
    { id: 4, name: 'Facebook Lite', url:'#' },
    { id: 5, name: 'Watch', url:'#' },
    { id: 6, name: 'Places', url:'#' },
    { id: 7, name: 'Games', url:'#' },
    { id: 8, name: 'Marketplace', url:'#' },
    { id: 9, name: 'Meta Pay', url:'#' },
    { id: 10, name: 'Oculus', url:'#' },
    { id: 11, name: 'Portal', url:'#' },
    { id: 12, name: 'Instagram', url:'#' },
    { id: 13, name: 'Bulletin', url:'#' },
    { id: 14, name: 'Fundraisers', url:'#' },
    { id: 15, name: 'Services', url:'#' },
    { id: 16, name: 'Voting Information Center', url:'#' },
    { id: 17, name: 'Privacy Policy', url:'#' },
    { id: 18, name: 'Privacy Center', url:'#' },
    { id: 19, name: 'Groups', url:'#' },
    { id: 20, name: 'About', url:'#' },
    { id: 21, name: 'Create Ad', url:'#' },
    { id: 22, name: 'Create Page', url:'#' },
    { id: 23, name: 'Developers', url:'#' },
    { id: 24, name: 'Careers', url:'#' },
    { id: 25, name: 'Cookies', url:'#' },
    { id: 26, name: 'Ad choices', url:'#' },
    { id: 27, name: 'Terms', url:'#' },
    { id: 28, name: 'Help', url:'#' },
    { id: 29, name: 'Contact Uploading & Non-UsersSettings', url:'#' }
];

function login() {
  return (
    <div>
      <div className="default-container">
        <div className="container">
          <div className="fb-container">
            <div className="fb-logo">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt="Facebook"
              />
            </div>
            <h2>Connect with friends and the world around you on Facebook.</h2>
          </div>

          <div className="second-container">
            <div className="form-container">
              <form action="login" method="post">
                <div>
                  <div className="input-field">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email or phone number"
                      autofocus="1"
                    />
                  </div>
                  <div className="input-field">
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="btn-container pad-top">
                  <button value="1" name="login" type="submit">
                    <a href="#" className="white txt-dec bold">
                      Log In
                    </a>
                  </button>
                </div>
                <div className="forgot-pass">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="vertical-line"></div>
                <div className="pad-top">
                  <button type="submit" className="new-account">
                    <a href="#" className="white txt-dec bold">
                      Create new account
                    </a>
                  </button>
                </div>
              </form>
            </div>
            <div className="create-page">
              <a href="#">Create a Page</a> for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-container">
          <div className="page-footer">
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div id="content-separator"></div>
            <div className="page-footer-children">
              <ul className="btm-list">
                {elements.map((element) => (
                  <li key={element.id}>
                    <a href={element.url}>{element.name}</a>
                    {element.id === 26 && <i className="ad-image icons"></i>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright">
              <span> Meta © 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;

