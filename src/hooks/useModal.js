import React, {useState} from 'react'

const useModal = (show = false) => {

    const [isOpen, setIsOpen] = useState(show)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    return [isOpen, openModal, closeModal]

} 

export default useModal;