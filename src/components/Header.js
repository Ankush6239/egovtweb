import React from 'react'
function Header(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="https://htmlbeans.com/html/egovt/images/logo.png"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">{props.Home}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">{props.F}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link mx-2" href="#">{props.Pricing}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">{props.Pri}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">{props.Pr}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">{props.P}</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">{props.P1}</a>
        </li>
        <li class="nav-item dropdown badge-border bg-light text-dark ms-5" >
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.eng}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">{props.eng}</a></li>
            <li><a class="dropdown-item" href="#">{props.fre}</a></li>
            <li><a class="dropdown-item" href="#">{props.ara}</a></li>
          </ul>
        </li>
        <li className="nav-item ms-4">
        <button type="button" class="btn btn-outline-primary">{props.Primary}</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Header;











