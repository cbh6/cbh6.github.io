import React from 'react'
import './style.css'

const SocialLinks = () => {
  return (
    <div>
      <ul ontouchstart>
        <li>
          <div className="link">
            <a href="https://codepen.io/gabriellewee" />
            <a href="https://codepen.io/gabriellewee" target="_blank" />
            <a href="https://codepen.io/gabriellewee" target="_blank" />
            <a href="https://codepen.io/gabriellewee" target="_blank" />
            <div className="cube codepen">
              <div />
              <div />
              <div />
              <div />
              <div>
                <svg viewbox="0 0 85 85">
                  <path d="M82.5,29.1666667 L42.5,2.5 L2.5,29.1666667 L2.5,55.8922001 L42.5,82.5 L82.5,55.8922001 L82.5,29.1666667 Z M42.5,2.9120677 L42.5,29.1666667 L42.5,2.9120677 Z M42.5,55.8922001 L42.5,82.5 L42.5,55.8922001 Z M2.5,29.1666667 L2.5,55.8922001 L42.5,29.1666667 L82.5,55.8922001 L82.5,29.1666667 L42.5,55.8922001 L2.5,29.1666667 Z" />
                </svg>
              </div>
              <div>/gabriellewee</div>
            </div>
          </div>
        </li>
        <li>
          <div className="link">
            <a href="https://github.com/elletricity" target="_blank" />
            <a href="https://github.com/elletricity" target="_blank" />
            <a href="https://github.com/elletricity" target="_blank" />
            <a href="https://github.com/elletricity" target="_blank" />
            <div className="cube github">
              <div />
              <div />
              <div />
              <div />
              <div>
                <svg viewbox="0 0 85 85">
                  <path
                    className="fill"
                    d="M76.7 19c1.1-4.8 0.6-10.1-1.6-15 -0.7-1.7-2.3-2.9-4.2-3 -0.5-0.1-1.1-0.1-1.6-0.1 -4.6 0-10.7 1.6-15 5C50.4 5 46.4 4.6 42.5 4.6V4.4c-3.9 0-7.9 0.4-11.8 1.3 -4.3-3.4-10.4-5-15-5 -0.5 0-1.1 0-1.6 0.1 -1.9 0.1-3.5 1.3-4.2 3C7.7 8.7 7.2 14 8.3 18.8c-3.3 4.4-5 9.6-5 15.4 0 12.5 4.2 21.4 12.5 26.4 2.6 1.6 5.6 2.9 9 3.7 -0.6 1.7-0.9 3.7-0.9 6.1v11.2h0c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5l0-11c0-4.5 1.5-7.7 4.5-9.7 -1.5-0.1-3.2-0.3-5.2-0.8 -3.8-0.7-7-1.9-9.7-3.6C11.6 52.4 8.3 45.1 8.3 34.4c0-5.6 1.9-10.3 5.6-14.3 -1.7-4.4-1.4-9.6 0.6-14.3 0.4 0 0.8 0 1.2 0 4.9 0 10.8 2.2 13.5 5.5 4.5-1.2 9-1.8 13.3-1.8v0.1c4.3 0 8.8 0.6 13.3 1.8 2.7-3.3 8.6-5.5 13.5-5.5 0.4 0 0.8 0 1.2 0 2 4.7 2.3 9.9 0.6 14.3 3.7 4 5.6 8.7 5.6 14.3 0 10.7-3.3 18-10.2 22.2 -2.7 1.7-5.9 2.9-9.7 3.6 -2 0.5-3.7 0.7-5.2 0.8 3 2 4.5 5.2 4.5 9.7l0 11c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5h0V70.6c0-2.4-0.3-4.4-0.9-6.1 3.4-0.8 6.4-2.1 9-3.7 8.3-5 12.5-13.9 12.5-26.4C81.7 28.6 80 23.4 76.7 19z"
                  />
                </svg>
              </div>
              <div>/elletricity</div>
            </div>
          </div>
        </li>
      </ul>
      <svg className="clips" viewbox="0 0 0 0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clippath id="clip-right">
            <polygon id="right" points="48 0 48 96 0 48" />
          </clippath>
          <clippath id="clip-left">
            <polygon id="left" points="0 0 0 96 48 48" />
          </clippath>
          <clippath id="clip-bottom">
            <polygon id="bottom" points="96 48 0 48 48 0" />
          </clippath>
          <clippath id="clip-top">
            <polygon id="top" points="0 0 96 0 48 48" />
          </clippath>
        </defs>
      </svg>
    </div>
  )
}

export default SocialLinks
