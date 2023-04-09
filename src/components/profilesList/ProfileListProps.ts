import { ConstClassNames } from "../../constants/ConstClassNames"
import { ConstGeneric } from "../../constants/ConstGeneric"
import { ConstTitles } from "../../constants/ConstTitles"

export const deleteModalTitle = ConstTitles.DELETE_PROFILE_MODAL_TITLE
export const editModalTitle = ConstTitles.EDIT_PROFILE_MODAL_TITLE
export const saveProfileModalTitle = ConstTitles.EDIT_PROFILE_MODAL_TITLE

export const deleteModalContent = ConstGeneric.DELETE_MODAL_CONTENT


export const deleteModalButtons = (cancelAction: () => void, deleteAction: () => void) => {
    return [
        {
            id: ConstGeneric.CANCEL,
            text: ConstGeneric.CANCEL,
            cb: () => cancelAction(),
            className: ConstClassNames.CANCEL_BUTTON
        },
        {
            id: ConstGeneric.DELETE,
            text: ConstGeneric.DELETE,
            cb: () => deleteAction(),
            className: ConstClassNames.DELETE_BUTTON
        },
    ]
}
