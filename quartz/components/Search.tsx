import { QuartzComponentConstructor } from "./types"
import style from "./styles/search.scss"
// @ts-ignore
import script from "./scripts/search.inline"

export default (() => {
  function Search() {
    return (
      <div class="search">
        <div id="search-icon">
          <p>Rechercher</p>
          <div></div>
          <svg
            tabIndex={0}
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search</title>
            <desc id="desc">Search</desc>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </div>
        <div id="search-container">
          <div id="search-space">
            <input
              autocomplete="off"
              id="search-bar"
              name="search"
              type="text"
              aria-label="Search for something"
              placeholder="Search for something"
            />
            <div id="results-container"></div>
          </div>
        </div>
      </div>
    )
  }

  Search.afterDOMLoaded = script
  Search.css = style

  return Search
}) satisfies QuartzComponentConstructor
