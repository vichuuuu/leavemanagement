import React from 'react'

function Navbar() {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-success ">
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          <a class="navbar-brand text-light" href="#">Leave Management</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-light" href="#">Dashboard</a>
              </li>

            </ul>

            <h6>admin panel</h6>
            <button class="btn btn-outline-light text-light" type="submit">Logout</button>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar