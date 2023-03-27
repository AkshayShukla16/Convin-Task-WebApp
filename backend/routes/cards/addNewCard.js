import mongoose from 'mongoose'

import { card_schema } from "../../schemas/card_schema.js"

const CardSchema = new mongoose.model("Card", card_schema);

const addNewCard = async (req, res) => {
    const { cardFormValues } = req.body;

    try {
        const Card = await CardSchema.findOne({ cardName: cardFormValues.cardName })
        if (Card) {
            if (Card.cardName === cardFormValues.cardName) {
                return res.send({
                    message: "Card Name Already Exist",
                    error: true,
                })
            }
        } else {
            const Card = new CardSchema({
                bucket_id: cardFormValues.Bucket_id,
                cardName: cardFormValues.CardName,
                link: cardFormValues.Link,
                linkType: cardFormValues.LinkType,
            })
            await Card.save()
            return res.send({
                message: "New Card Created Succesfully",
                error: false,
            })
        }
    } catch (error) {
        console.log(error)
    }

    // const bucketList = await BucketList.findOne({ _id: cardFormValues.Bucket_id })
    // BucketList.findByIdAndUpdate(
    //     { _id: cardFormValues.Bucket_id },
    //     {
    //         $set: {
    //             cards: [...bucketList.cards, cardFormValues]
    //         }
    //     },
    //     (err, list) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             if (list) {
    //                 return res.send({
    //                     message: "Card Added Successfully",
    //                 })
    //             }
    //         }
    //     }
    // )

}

export default addNewCard;