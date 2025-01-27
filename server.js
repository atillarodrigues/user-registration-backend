import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient()



const app = express();
app.use(express.json());
app.use(cors())

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users);

});

app.post('/usuarios', async (req, res) => {
    try {
        const { email, age, name } = req.body;

        if (age < 18) {
            throw new Error("Apenas maiores de 18 anos podem se cadastrar.");
        }

        const user = await prisma.user.create({
            data: {
                email,
                age,
                name
            }
        });

        console.log(user);
        res.status(201).json(user);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: { id: req.params.id },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(200).json(user)
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: { id: req.params.id },

    })
    res.status(200).json({ mensage: "Usuário deletado com sucesso!" })
})
app.listen(3000);

