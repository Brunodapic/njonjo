export default (err, req, res, next) => {
    console.error(err)

    if (err?.code) {
        res.status(err.code).json(err);
    } else {
        res.sendStatus(500);
    }
}