import Swal from 'sweetalert2'
import styles from './messageHelper.module.scss'

export const showAlert = (options, navigate = '') => {
  const {
    icon = 'info',
    title = '',
    message = '',
    confirmButtonText = 'Cerrar',
    functionToExec = '',
    redirectUrl = '',
  } = options

  Swal.fire({
    icon: icon,
    title: title,
    text: message,
    confirmButtonText: confirmButtonText,
    allowOutsideClick: true,
    allowEscapeKey: true,
    customClass: {
      popup: styles.MessagePopupPopup,
      confirmButton: styles.MessageConfirmButton,
    },
    showClass: {
      popup: styles.MessagePopupAnimateShow,
    },
    hideClass: {
      popup: styles.MessagePopupAnimateHide,
    },
  }).then((result) => {
    if (result.isConfirmed && functionToExec) {
      functionToExec()
    }
    if (result.isConfirmed && redirectUrl && navigate) {
      navigate(redirectUrl)
    }
  })
}

export const showConfirm = (options, onConfirm, onCancel) => {
  const {
    icon = 'question',
    title = '',
    text = '',
    confirmButtonText = 'Confirmar',
    cancelButtonText = 'Cancelar',
  } = options

  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    customClass: {
      popup: styles.MessagePopupPopup,
      confirmButton: styles.MessageConfirmButton,
      cancelButton: styles.MessageCancelButton,
    },
    showClass: {
      popup: styles.MessagePopupAnimateShow,
    },
    hideClass: {
      popup: styles.MessagePopupAnimateHide,
    },
  }).then((result) => {
    if (result.isConfirmed && typeof onConfirm === 'function') {
      onConfirm()
    } else if (!result.isConfirmed && typeof onCancel === 'function') {
      onCancel()
    }
  })
}

export const showToast = (options) => {
  const {
    icon,
    title,
  } = options

  const toast = Swal.mixin({
    customClass: {
      popup: styles.MessageToast,
    },
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
      setTimeout(() => {
        toast.remove()
      }, 5000)
    },
    didRender: (toast) => {
      toast.style.top = '10rem'
    },
  })

  toast.fire({
    icon: icon,
    title: title,
  })
}
