import { body } from "express-validator"
import prisma from "../db.mjs"

export const createConsultation = async (req, res) => {
    if (req.body.consulteeId !== req.user.id) {
        res.status(400)
        res.json({message: "you cant request consultation for another user"})
    }

    const consultant = await prisma.user.findUnique({
        where: {
            id: req.body.consultantId
        }
    })

    const consultee = await prisma.user.findUnique({
        where: {
            id: req.body.consulteeId
        }
    })

    if (!consultant.isOpenToConsult) {
        res.status(400)
        res.json({message: "user not open for consultation"})
        return 
    }  

    const consultation = await prisma.consultation.create({
        data: {
            area: req.body.area,
            mode: req.body.mode,
            consultee: { connect: { id: req.body.consulteeId } },
            consultant: { connect: { id: req.body.consultantId } }
        }
    })

    res.json({data: consultation})
}