import { Request, Response } from "express";
import createUser from "./services/CreateUsers";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email:'flavio@flavio.com',
        password: '123456',
        techs: [
            'Node.js',
            'React',
            {title: 'Javascript', experience: 100}
        ],
    })

    return response.json(user);
}