import {useParams,Outlet} from 'react-router-dom'

export function EditProductPage(){
    
    return(
        <div>
            <h1>Texto EditProduct</h1>
            <Outlet/>
        </div>
    )
  }

export function EditProduct(){
    const {id} = useParams()
    return(
        <div>
            <h1>id: {id}</h1>
        </div>
    )
}