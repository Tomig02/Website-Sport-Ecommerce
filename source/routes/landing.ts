import {Router} from 'express';

const mainRoute = Router();

mainRoute.get('/', (req, res) => {
    //TODO handle cookie

    res.render('base.pug', {content: 'content goes here'});
});

export default mainRoute;