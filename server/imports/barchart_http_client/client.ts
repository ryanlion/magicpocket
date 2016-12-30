import { HTTP } from 'meteor/http';
import {AppContext} from '../AppContext';

export class Client {
    constructor(){}
    call_barchart():any{
        let appContext:AppContext = new AppContext();
        HTTP.call("GET", appContext.,
            {data: {some: "json", stuff: 1}},
            function (error, result) {
                if (!error) {
                Session.set("twizzled", true);
                }
            });
    }
}