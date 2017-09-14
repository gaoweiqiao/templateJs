/**
 * Created by patrick on 2017/9/14.
 */
function render(template,context){
    var regex = /\$([a-zA-Z0-9_]+)/g;
    var fragments = [];
    var index = 0;
    var match;
    while(match = regex.exec(template)){
        var fragment = template.slice(index,match.index);
        var key = match[1];
        index = match.index + match[0].length;
        fragments.push(fragment);
        var value = context[key];
        if(undefined != value){
            fragments.push(value);
        }else {
            fragments.push("0");
        }

    }
    fragments.push(template.slice(index,template.length));
    return fragments.join("");
}
function Context(obj){
    var numberPattern = /^(\-?\d+(?:\.\d+)?)px$/;
    function design2rem(px){
        return px / 100 +"rem";
    }
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            var value = obj[key];
            var match;
            if(match = numberPattern.exec(value)){
                this[key] = design2rem(match[1]);
            }else{
                this[key] = value;
            }
        }
    }
}