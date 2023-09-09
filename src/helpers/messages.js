
import Swal from 'sweetalert2';

const alertSwal = (icon,title,text) =>{
    Swal.fire({
        icon,
        title,
        text
      })
}

export default alertSwal;