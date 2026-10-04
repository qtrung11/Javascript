interface NotificationModalProps extends React.PropsWithChildren {
  isOpen?: boolean,
  buttonConfirm?: React.ReactNode,
  buttonClose?: React.ReactNode,
  onClose?: () => void
}

function NotifcationModal({ 
  isOpen = false, 
  buttonConfirm, 
  buttonClose, 
  children, 
  onClose
}: NotificationModalProps) {
  return (
    <div className={`${isOpen ? 'flex' : 'hidden'} fixed  overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white border border-default rounded-base shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-heading">
                  Notification
                </h3>
                <button 
                  type="button" 
                  className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal"
                  onClick={onClose}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="space-y-4 md:space-y-6 py-4 md:py-6">
              {children}
            </div>
            <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
              {buttonConfirm}
              {buttonClose}
            </div>
        </div>
      </div>
    </div>
  )
}

export default NotifcationModal