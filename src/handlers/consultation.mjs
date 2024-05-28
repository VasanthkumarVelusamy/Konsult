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
            consultant: { connect: { id: req.body.consultantId } },
            startAt: new Date(req.body.startAt),
            endAt: new Date(req.body.endAt)
        }
    })

    res.json({data: consultation})
}

export const updateConsultation = async (req, res) => {

    const existingConsultation = await prisma.consultation.findUnique ({
        where: {
            id: req.params.id
        }
    })

    if (existingConsultation.status === "ENDED") {
        res.json({message: "you cant modify ended consultation"})
        return 
    }

    const consulation = await prisma.consultation.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })

    if (consulation.consulteeId !== req.user.id) {
        res.json({message: "you cant modify someones consultation"})
        return 
    }

    res.json({data: consulation})
}

export const getConsultation = async (req, res) => {
    const consulation = await prisma.consultation.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.json({data: consulation})
}

export const getUserConsultations = async (req, res) => {
    const givenConsultation = await prisma.consultation.findMany({
        where: {
            consultantId: req.user.id
        }
    })

    const receivedConsultation = await prisma.consultation.findMany({
        where: {
            consulteeId: req.user.id
        }
    })

    res.json({data: {givenConsultation, receivedConsultation}})
}

export const getConsultations = async (req, res) => {
    const consulations = await prisma.consultation.findMany()
    res.json({data: consulations})
}