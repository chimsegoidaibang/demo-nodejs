const users = [
    {
        id: 1,
        name: 'Viper',
        age: 18,
    },
    {
        id: 2,
        name: 'Tain Hai',
        age: 28,
    },
    {
        id: 3,
        name: 'Tain Hai',
        age: 28,
    },
]

module.exports = {
    index: (request, response) => {
        response.render('users/index', {
            users: users,
        })
    },
    search: (request, response) => {
        const searchName = request.query.name
        const result = users.filter(
            (user) =>
                user.name
                    .toLocaleLowerCase()
                    .indexOf(searchName.toLocaleLowerCase()) !== -1
        )
        response.render('users/index', {
            users: result,
        })
    },
    create: (request, response) => {
        response.render('users/create')
    },
    handleCreate: (request, response) => {
        const data = request.body
        users.push(data)
        response.redirect('')
    },
    show: (request, response) => {
        console.log(request.params)
        const data = parseInt(request.params.id)

        const result = users.find((user) => user.id == data)

        response.render('users/show', {
            user: result,
        })
    },
}
