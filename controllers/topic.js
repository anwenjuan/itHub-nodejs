exports.showCreate = (req,res) => {
    res.render('topic/create.html')
}

exports.showTopic = (req,res) => {
    res.render('topic/show.html')
}
exports.handleCreate = (req,res) => {
    res.send(handleCreate)
}
exports.showEdit = (req,res) => {
    res.send(showEdit)
}
exports.handleEdit = (req,res) => {
    res.send(handleEdit)
}
exports.handleDelete = (req,res) => {
    res.send(handleDelete)
}

