const usersDB = {
    users: require('../users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.bodt;
    if (!user || !pwd ) return res.status(400).json({ 'message': 'Username and password are required' });
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.status(409);
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newUser = { "username": user, "password": hashedPwd };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join('server', '..', 'users.json'), 
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { handleNewUser };