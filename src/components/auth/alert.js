import React from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import { Alert } from 'reactstrap';


const AlertMsg = () =>{
    const dispatch = useDispatch()

    const alerts = useSelector((state) => state.alertReducer)
    console.log("alert",alerts)
return(
 <div>
 {alerts !== null &&
  alerts.length > 0 &&

  alerts.map(alert => (
    <Alert key={alert.id} color={alert.alertType}>
      {alert.msg}
      {console.log(alert.msg)}
    </Alert>
  )
  )}
 </div>
)
}

export default AlertMsg;