import express from 'express';
import { getCommand, handleTelegramUpdate } from '../service/webhook_first_set';
import { processEvent } from '../hotmart/ProcessEventHotmart';
import {
    handler,
    handler_new_member,
    handler_room_bot,
} from '../controller/index';

const router = express.Router();

router.get('/', async (req: any, res: any) => {
    console.log('POST req');
    console.log(req);
    console.log('TOKEN');
    console.log(req?.params);
    console.log('POST req.body');
    console.log(req?.body);

    res.send("OK-hotmart")
})


router.post('/v1/:token', async (req: any, res: any) => {
    console.log('TOKEN');
    console.log(req?.params);
    console.log('POST req.body');
    console.log(req?.body);
    const state = handleTelegramUpdate(req.body);

});



router.post('/webhook', async (req: any, res: any) => {
    console.log('TOKEN');
    console.log(req?.params);
    console.log('POST req.body');
    console.log(req?.body);
    await processEvent(req.body)

    res.send("OK-hotmart-POST")
})



export default router;















const TOKEN_BOT_ERLES = 'XXX724900211535:BBAAHRMzpdnr3QToLjo4_A6uiwD7kt9LZJVfY'
router.post('/v2/:token', async (req: any, res: any) => {
    console.log('FLOW');
    console.log(handleTelegramUpdate(req.body))
    console.log('TOKEN');
    console.log(req?.params);
    console.log('POST req.body');
    console.log(req?.body);

    if (req?.params?.token === TOKEN_BOT_ERLES) {
        console.log("CUSTOM")
        getCommand(req.body, TOKEN_BOT_ERLES)
        res.send("OK")
    }


    else if (req.body?.message?.text && req.body?.message?.chat?.id > 0) {
        try {
            res.send(await handler(req));
        } catch (error) {
            console.log('handler', error);
        }
    } else if (
        req?.body?.message?.chat?.id == -1002154396530 &&
        req?.body?.message?.text
    ) {
        try {
            res.send(await handler_room_bot(req));
        } catch (error) {
            console.log('handler_room_bot', error);
        }
    } else if (req.body?.message?.new_chat_member) {
        try {
            res.send(await handler_new_member(req));
        } catch (error) {
            console.log('handler_new_member', error);
        }
    } else {
        res.send('Hello Post');
    }
});