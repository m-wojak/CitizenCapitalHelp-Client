<template>
  <header class="navbar navbar-expand-md navbar-dark bg-dark">
  <nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">

    <div class="collapse navbar-collapse" id="bdNavbar">
      <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
        <li class="nav-item col-6 col-md-auto">
          <a title="CitizenCapitalHelp" class="nav-link p-2 active" aria-current="true" href="/"><img src="./assets/CitizenCapital_32.png"> </a>
        </li>        
        <li class="nav-item col-6 col-md-auto">
          <a title="CitizenCapitalWiki" class="nav-link p-2" href="https://citizencapital.notion.site/" target="_blank" rel="noopener">Wiki</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a title="AMA_Recordings_1" class="nav-link p-2" href="https://soundcloud.com/citizen-capital">AMA_Recordings_1</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a title="AMA_Recordings_2" class="nav-link p-2" href="https://open.spotify.com/show/5Y95NwFYfk8zPYPHtKjEHA">AMA_Recordings_2</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a title="Taskboard" class="nav-link p-2" href="https://citizencapital.notion.site/1a6831e9abaa473598b572733f4a704a?v=599b7647af1b4af7a09da0a6e040c621"  target="_blank" rel="noopener">Public_Taskboard</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a title="Events_Calendar" class="nav-link p-2" href="https://calendar.google.com/calendar/u/3?cid=Y3JobWoyYW9jZDVrYXBrdWpjcGRiMGprNThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank" rel="noopener">Events_Calendar</a>
        </li>
      </ul>

      <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
        <li class="nav-item col-6 col-md-auto">
          <button type="button" class="badge bg-secondary">
          <router-link to="/add" class="nav-link" style="color:white">Add New Help Section</router-link>
        </button>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://github.com/Neo-Tokyo-Citizens/data_science_twitter" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
            <small class="d-md-none ms-2">GitHub</small>
          </a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://twitter.com/CitCapFund" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg>
            <small class="d-md-none ms-2">Twitter</small>
          </a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://discord.com/invite/ZpY7FyP29B" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"><title>Discord</title>
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
            <small class="d-md-none ms-2">Discord</small>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<div class="container">
  <router-view></router-view>
</div>

<footer class="bd-footer py-5 mt-5 bg-light">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="CitizenCapitalHelp">
          <img src="./assets/CitizenCapital_32.png"><span class="fs-5">Citizen Capital Help</span>
        </a>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2">Designed and built by the Citizen Capital team with the help of our contributors.</li>
          <li class="mb-2">Code licensed <a class="text-decoration-none link-dark" href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>.</li>
          <li class="mb-2">Currently v0.1.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a class="link-dark" href="/">Home</a></li>
          <li class="mb-2"><a class="link-dark" href="https://citizencapital.notion.site/">CitizenCapitalDao</a></li>
          <li class="mb-2"><a class="link-dark" href="https://discord.com/channels/959614664386424884/963137221341360198">Announcements</a></li>
          <li class="mb-2"><a class="link-dark" href="https://discord.com/channels/959614664386424884/959869945745903687">Official-Links</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Recordings</h5>
        <ul class="list-unstyled">
          <li title="AMA_Recordings_1" class="mb-2"><a class="link-dark" href="https://soundcloud.com/citizen-capital">AMA_Recordings_1</a></li>
          <li title="AMA_Recordings_2" class="mb-2"><a class="link-dark" href="https://open.spotify.com/show/5Y95NwFYfk8zPYPHtKjEHA">AMA_Recordings_2</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Taskboard</h5>
        <ul class="list-unstyled">
          <li title="Public_Taskboard" class="mb-2"><a class="link-dark" href="https://citizencapital.notion.site/1a6831e9abaa473598b572733f4a704a?v=599b7647af1b4af7a09da0a6e040c621">Public_Taskboard</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Calendar</h5>
        <ul class="list-unstyled">
          <li title="Events_Calendar" class="mb-2"><a class="link-dark" href="https://calendar.google.com/calendar/u/3?cid=Y3JobWoyYW9jZDVrYXBrdWpjcGRiMGprNThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">CitCap_Events_Calendar</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>
