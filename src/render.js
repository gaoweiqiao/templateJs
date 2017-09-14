/**
 * Created by patrick on 2017/9/14.
 */


(function(){
    var fs=require("fs");
    var context = fs.readFileSync("../data/data.json","utf-8");
    fs.readFile("../sass/test.scss",'utf-8',function(err,data){
        if(err){
            console.log("error");
        }else{
            var template = data;

            var styleContext = new Context(JSON.parse(context));
            var result = render(template,styleContext);
            console.log(result);
            fs.writeFile("../build/test.css",result,function(err,data){
                if(err){
                    console.log("error");
                }else {
                    console.log("success");
                }
            });
        }
    });

}());
