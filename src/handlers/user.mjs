import prisma from "../db.mjs";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.mjs";

export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: await hashPassword(req.body.password),
            isOpenToConsult: req.body.isOpenToConsult
        }
    })

    const token = createJWT(user)
    res.json({token})
}

export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.body.id
        }
    })

    if (!comparePassword(req.body.password, user.password)) {
        req.status(401)
        req.json({message: "not authorized"})
        return
    }

    const jwt = createJWT(user)
    res.json({jwt})
}