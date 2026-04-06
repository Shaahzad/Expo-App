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

// pagination
router.get("/", ProtectRoute, async (req, res) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const skip = (page - 1) * limit
        const books = await Book.find().sort({createdAt: -1})
        .skip(skip)
        .limit(limit)
        .populate("user", "username profileImage")

        const totalBooks = await Book.countDocuments()

        res.send({
            books,
            currentPage: page, 
            totalBooks,
            totalPages: Math.ceil(totalBooks / limit)
        })
    } catch (error) {
        console.log("Error in all get Book Route", error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

router.delete("/:id", ProtectRoute, async(req, res) => {
    try {
        const books = await Book.findById(req.params.id)
        if(!books) return res.status(404).json({message: "Book not found"})

        if(books.user.toStirng() !== req.user._id.toStirng())
            return res.status(401).json({message: "Unauthorized"})

        if(books.image && books.image.includes("cloudinary")){
            try {
                const publicId = books.image.split("/").pop().split(".")[0]
                await cloudinary.uploader.destroy(publicId)
            } catch (error) {
                console.log("Error deleting img from cloudinary", error)
            }
        }
        await books.deleteOne()

        res.json({message: "Book Deleted Successfully"})
    } catch (error) {
        console.log("Error In Deleting Route", error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

export default router