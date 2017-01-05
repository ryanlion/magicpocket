import { HTTP } from 'meteor/http';
import {AppContext} from '../AppContext';
import {Stock} from "../../../both/models/stock.model";

export class Client {
    constructor(){}
    call_barchart(Stock: stock):any{
        let appContext:AppContext = new AppContext();
        debugger
        HTTP.call("GET", appContext.context[""],
            {data: {some: "json", stuff: 1}},
            function (error, result) {
                if (!error) {
                Session.set("twizzled", true);
                }
            });
    }
}