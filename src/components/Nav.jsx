import React from 'react'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg data-bs-theme">
  <div class="container-fluid">
    <a class="navbar-First-Name" href="#">BLAKE</a>
    <a class="navbar-Last-Name" href="#">BUCHHOLZ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/BlakeBuchholz?tab=repositories">Projects</a>
        </li>
      </ul>
      <span class="navbar-Git">
        <a class="github-Link" href='https://github.com/BlakeBuchholz'>Github</a>
      </span>
    </div>
  </div>
</nav>
  )
}

export default Nav