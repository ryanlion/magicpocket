export class AppContext{
    context:Map ;
    constructor(){
        var fs = Npm.require('fs');
        fs.readFile(process.env.PWD + '/both/data/barchart.json', 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }else{
                console.log('Parsing Data Started');
                this.context = JSON.parse(data);
            }
        });
    }
}