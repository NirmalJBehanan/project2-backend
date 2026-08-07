import express from "express"
const app =express()
let users = [
    {
        id: 1,
        name: "nirmal",
        email: "nirmal@gmail.com",
        password: "12345"
    }
    ,
    {
        id: 2,
        name: "nimitha",
        email: "nirmal@gmail.com",
        password: "12345"
    }
]
export const getUser = (req,res) => {
    res.json({
         success:true,
         data:users
    })
}

export const getUserById = (req, res) => {
    console.log(req.params);
    const id = Number(req.params.id)
    const user = users.find((user) =>
        (user.id === id))

    if (!user) {
        return res.status(404).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        data: user
    })
}

export const addUser =(req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body
    const newuser = {
        id: users.length + 1,
        name,
        email,
        password
    }
    users.push(newuser)
    res.status(200).json({
        success: true,
        data: users
    })
}


export const updateUser =(req, res) => {
    console.log(req.params)
    const id = Number(req.params.id)
    console.log(typeof id)
    const edituser = users.find((user) => (user.id === id))
    if (!edituser) {
        return res.status(404).json({
            success: false
        })
    }

    const { name, email, password } = req.body
    edituser.name = name,
        edituser.email = email,
        edituser.password = password

    res.status(200).json({
        success: true,
        data: users
    })

}



export const deleteUser =(req, res) => {
    console.log(req.params)
    const id = Number(req.params.id)
    console.log(typeof id)
    let idfinduser = users.find((user) => (user.id === id))
    if (!idfinduser) {
        return res.status(404).json({
            success: false
        })
    }
    let deleteuser = users.filter((user) => (user.id !== id))
    users=deleteuser
    res.status(200).json({
        success: true,
        data: users
    })

}