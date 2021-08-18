import React from 'react'
import  { Link} from "react-router-dom"
import { NavLink } from 'reactstrap'
const SidebarAd=()=> {
    return (
        <div>
             <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <Link  to="/dashboard/home" class="nav-item navi">
            <a class="nav-link" href="index.html">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title"> <i class="fas fa-border-all"></i> Dashboard</span>
            </a>
          </Link>
          <Link to="/dashboard/users" class="nav-item navi">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title"> <i class="fas fa-users"></i> Utilisateurs</span>
              
            </a>
          
          </Link>
          <li class="nav-item navi">
            <Link to="/dashboard/products"  class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title"> <i class="fab fa-product-hunt"></i> Produits</span>
           
            </Link>
           
          </li>
          <li class="nav-item navi">
            <Link to="/dashboard/commandes"  class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title"> <i class="fas fa-copyright"></i> Commandes</span>
              <i class="menu-arrow"></i>
            </Link>
           
          </li>
          <Link to="/dashboard/settings"  class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title"><i class="fas fa-cogs"></i> Paramétres</span>
            
            </a>
            
          </Link>
        </ul>
      </nav>
        </div>
    )
}
export default SidebarAd