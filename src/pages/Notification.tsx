import './index.css'

const Notification = (message?: any ,type?:any) => {
    return(
        <div className={'notification-wrapper'}>
            <div className={type == 'error' ? 'notification-error' : 'notification-success'}>
                {message.message}
            </div>
        </div>
    )
}

export default Notification