import { body } from "express-validator";

export const createConsultationValidator = () => {
    return [
        body('consultantId').isString().exists(), 
        body('consulteeId').isString().exists(), 
        body('mode').exists(), body('area').exists()
    ]
}

export const updateConsultationValidator = () => {
    return [
        body('consultantId').isString().optional(), 
        body('consulteeId').isString().optional(), 
        body('mode').optional(), 
        body('area').isIn(['AI', 'WEB', 'MOBILE']).optional(), 
        body('mode').isIn(['TEXT', 'IN_PERSON', 'VIDEO']).optional()
    ]
}

export const updateUserValidator = () => {
    return [
        body('name').isString().optional(), 
        body('isOpenToConsult').isBoolean().optional(), 
        body('areas').isIn(['AI', 'WEB', 'MOBILE']).optional()
    ]
}