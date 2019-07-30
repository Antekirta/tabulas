import express from 'express'
import React from "react";

export const adminRoute = (req: express.Request, res: express.Response) => {
    res.render('admin')
}
