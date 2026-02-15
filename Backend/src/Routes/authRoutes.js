import express from "express"


const router = express.Router()

router.post("/register", (req, res) => {
    const { email, username, password } = req.body

    try {
        if (!email || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password Should be at least 6 Characters Long" })
        }

        if (username.length < 3) {
            return res.status(400).json({ message: "Username Should be at least 3 Characters Long" })
        }

    } catch (error) {

    }
})

router.post("/login", (req, res) => {
    res.send("login")
})

export default router