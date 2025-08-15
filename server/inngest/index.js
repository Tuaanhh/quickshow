import { Inngest } from "inngest";
import User from "../models/User.js";
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// created
const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async({ event })=>{
        const {id, frist_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_addresses,
            name:frist_name + '' + last_name,
            image: image_url
        }
        await User.create(userData)
    }
)
// delete
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async({ event })=>{
        const {id} = event.data
        await User.findByIdAndDelete(id)
    }
)
// updation
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async({ event })=>{
        const {id, frist_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_addresses,
            name:frist_name + '' + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id,userData)
    }
)

// Tạo một mảng trống nơi chúng ta sẽ xuất các hàm Inngest trong tương lai
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];