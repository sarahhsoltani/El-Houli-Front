import React,{useEffect} from 'react'
import NavbarAd from '../navbarAd/navbarAd'
import {Button} from "react-bootstrap"
import SidebarAd from '../sideBar/sidebarAd'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from "../../../redux/actions/users"
const UsersAd=()=> {
    
    const users = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getUsers())
           }, [dispatch])
        console.log("my data",users)
    return (
        <div>
            <NavbarAd/>
            
          <div className="row mt-5">
              <div className="col-md-2"><SidebarAd/></div>

            <div class="col-md-10 grid-margin stretch-card mt-3">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Listes Utilisateurs</h4>
                  
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Téléphone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                     {users.map((el,key)=>(
                          <tbody>
                          <tr>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td class="text-danger"> {el.role}<i class="ti-arrow-down"></i></td>
                            <td><label >{el.phone}</label></td>
                            <td><label class="badge badge-danger">supprimer</label></td>
                          </tr>
                        
                         
                        </tbody>
                     ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default UsersAd