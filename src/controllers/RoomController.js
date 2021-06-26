module.exports = {
    create(req,res){
        let roomId = 101456

        res.redirect(`/room/${roomId}`)
    }
}