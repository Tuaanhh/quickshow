import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from 'mongoose';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const port = 3000;
await connectDB()

// phan mem trung gian
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// api Router
app.get('/', (req, res) => res.send('server is live !'))
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));