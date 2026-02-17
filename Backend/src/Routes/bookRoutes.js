import express from "express"
import cloudinary from "../lib/cloudinary.js"
import Book from "../models/Book.js"
import ProtectRoute from "../middleware/auth.middleware.js"
const router = express.Router()

router.post("/", ProtectRoute, async (req, res) => {
    try {
        const {title, caption, image, rating} = req.body

        if (!image || !title || !caption || !rating) {
            return res.status(400).json({message: "Please provide all fields"})
        }

        const uploadResponse = await cloudinary.uploader.upload(image)
        const imageUrl = uploadResponse.secure_url

        const newBook = new Book({
            title,
            caption,
            image: imageUrl,
            rating,
            user: req.user._id
        })

        await newBook.save()

        res.status(201).json(newBook)

    } catch (error) {
        console.log("error creating book", error)
        res.status(500).json({message: error.message})
    }
})

export default router