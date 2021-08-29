import React from 'react'
import NavbarAd from '../navbarAd/navbarAd'
import SidebarAd from '../sideBar/sidebarAd'
import AddProduit from './addProduit'

const ProductAd=()=> {
    
   
    
    return (
        <div>
           <NavbarAd/>
              
          <div className="row mt-5">
              <div className="col-md-2"><SidebarAd/></div>

            <div className="col-md-10 grid-margin stretch-card mt-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                  <h4 className="card-title ">Listes des produits</h4>
                 
                  </div>
                  
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Titre</th>
                          <th>image</th>
                          <th>categories</th>
                          <th>description</th>
                          <th>price</th>
                          <th>countInStock</th>
                        </tr>
                      </thead>
                     {/* {users.map((el,key)=>(
                          <tbody>
                          <tr>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td className="text-danger"> {el.role}<i className="ti-arrow-down"></i></td>
                            <td><label >{el.phone}</label></td>
                            <td><label className="badge badge-danger">supprimer</label></td>
                          </tr>
                        
                         
                        </tbody>
                     ))} */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
        </div>
    )
}
export default ProductAd