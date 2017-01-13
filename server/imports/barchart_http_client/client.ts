import { HTTP } from 'meteor/http';
import {AppContext} from '../AppContext';
import {Stock} from "../../../both/models/stock.model";

export class BarChartClient {
    constructor(){}
    call_barchart(stock: Stock):any{
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
