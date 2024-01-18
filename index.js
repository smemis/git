'use strict';
const PLUGIN_NAME = 'gulp-shortcodez';
var gulp = require('gulp'),
    fs = require('fs'),
    fse = require('fs-extra'),
    nunjucks = require('nunjucks'),
    through = require('through2'),
    Vinyl = require('vinyl'),
    html2react = require('html-to-react-components'),
    PluginError = require('plugin-error');
const path = require("path");

var arg;
var chks;
var gulpShortcodez = function (argx) {

console.warn("gulpShortcodez");

    arg = argx;
    chks = ","+arg.chks+",";

    return through.obj(function (file, enc, callback) {
        var path = require('path');

        var filename = path.basename(file.path, '.php');
console.warn(filename);
        var isBuffer = false,
            inputString = null,
            result = null,
            outBuffer = null;
        if (file === null || file.isDirectory()) {
            this.push(file);
            return callback();
        }
        isBuffer = file.isBuffer();
        if (isBuffer) {
            inputString = new String(file.contents);


            var temp = getX(inputString).split(',');
            var temp2 = getY(inputString);

            result = myFunction4(inputString, filename,temp2);

            outBuffer = new Buffer(result);

            const aFile = new Vinyl({
                path: file.path,
                contents: outBuffer
            });

            callback(null, aFile);

            myFunction3(temp, filename);
            myFunction32(temp, filename);

            if(chks.indexOf("wpwidget">0)){
                creatorOne('wordpress', filename, file, temp, temp2, 'get_field( \'icon\', \'widget_\'.$widget_id )');
            }
            if(chks.indexOf("beaverbuilder">0)){
                creatorOne('beaver-builder', filename, file, temp, temp2, '$settings->icon');
            }
            if(chks.indexOf("elementor">0)){
                creatorOne('elementor', filename, file, temp, temp2, '$settings["icon"]');
            }
            if(chks.indexOf("siteorigin">0)){
                creatorOne('siteorigin-page-builder', filename, file, temp, temp2, '$icon');
            }
            if(chks.indexOf("wppagebuilder">0)){
                creatorOne('wp-page-builder', filename, file, temp, temp2, '$settings["icon"]');
            }
            if(chks.indexOf("divibuilder">0)){
                creatorOne('divi-builder', filename, file, temp, temp2, '$this->props[\'icon\']');
            }
            if(chks.indexOf("livecomposer">0)){
                creatorOne('live-composer', filename, file, temp, temp2, '$options[\'icon\']');
            }
            if(chks.indexOf("orchard">0)){
                console.warn("orchard1");

                creatorOne('orchard-core', filename, file, temp, temp2, '$options[\'icon\']');

                console.warn("orchard2");
            }
            if(chks.indexOf("themifybuilder">0)){
                creatorOne('themify-builder', filename, file, temp, temp2, '$args[\'icon\']');
            }


        } else {
            this.emit('error',
                new PluginError(PLUGIN_NAME,
                    'Only Buffer format is supported'));
            callback();
        }

        console.warn("gulpShortcodez end 1");

    });
    console.warn("gulpShortcodez end 2");

};



function creatorOne(pb, filename, file, temp, template, varz) {

    fse.copySync(arg.path+'/setup/shortcode-templates/widgets/' + pb + '/tpl', arg.path+'/template-parts/widgets/' + pb + '/' + filename + '');
    fse.copySync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/tpl.tpl',arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/'+filename+'.php');
    
    var xtemp = myFunction2('', temp, arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/tpl.tpl', template, varz, pb, filename);

    var filenamex = arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/' + filename + '.php';

    if(pb=="orchard-core"){
        filenamex = arg.path+'/template-parts/widgets/' + pb + '/' + filename + '.php';
        var orchard = xtemp.split("<<<split>>>");

        xtemp = orchard[0];

        //Widget
        fse.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/Widget-'+filename+'.liquid', orchard[1], function (err) {
            if (err) {
                console.warn(err);
            }
        });
        //Content
        fse.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/Content-'+filename+'.liquid', orchard[1], function (err) {
            if (err) {
                console.warn(err);
            }
        });

//React JS Components
//        try{

        var jsx = html2react('<div data-component="'+filename+'">'+orchard[1]+'<div>',{out: arg.path+"\\components"});
        var fnjsx = html2react('<div data-component="fn_'+filename+'">'+orchard[1]+'<div>',{componentType: "stateless", moduleType: false, out: arg.path+"\\components"});
        fse.copySync(arg.basepath + '/components/' + filename + '.js',arg.path+'/template-parts/widgets/reactjs/'+filename+'.js');
        fse.copySync(arg.basepath + '/components/fn_' + filename + '.js',arg.path+'/template-parts/widgets/reactjs/fn_'+filename+'.js');

    }

    if(pb=='themify-builder'){
     filenamex = arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/modules/module-'+ filename +'.php';
    }
    fse.writeFileSync(filenamex, xtemp, function (err) {
        if (err) {
            console.warn(err);
        } else {
            fse.removeSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/tpl.tpl');

            if(pb=="orchard-core"){
                fse.removeSync(filenamex);
            }

        }
    });

    if(pb=="themify-builder") {

        fse.removeSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/'+ filename +'.php');

        var initfileContent = fs.readFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/init.php', 'utf8');

        initfileContent = initfileContent.split('{{SnakeCase}}').join(toSnakeCase(filename));
        initfileContent = initfileContent.split('{{TitleCase}}').join(toTitleCase(filename));

        fse.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/init.php', initfileContent, function (err) {
            if (err) {
                console.warn(err);
            }
        });

    }


}

var myFunction2 = function (stringz, temp, temp2, template, varz, pb, filename) {

    var result = "";

    var fileContent = fs.readFileSync(temp2, 'utf8');


    var env = nunjucks.configure(
        {
            tags: {
                blockStart: '<%',
                blockEnd: '%>',
                variableStart: '<$',
                variableEnd: '$>',
                commentStart: '<#',
                commentEnd: '#>'
            }
        }
    );


    var newtemp = convertTemp(temp);
    if (newtemp) {
        for (var i = 0; i < newtemp.length; i++) {
            var ilk = newtemp[i]["name"];
            var son = replace(varz, "icon", ilk, 100);
            template = replace(template, "$" + newtemp[i]["name"] + "-" + newtemp[i]["type"], son, 100);
            template = replace(template, "$" + newtemp[i]["name"], son, 100);
            template = replace(template, "$$", "$", 100);
        }
    }


    env = new nunjucks.Environment();
    env.opts.autoescape = false;
    env.addGlobal('name', filename);

    switch (pb) {
        case "beaver-builder":
            fs.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/includes/frontend.php', template, function (err) {
            });
            break;
        case "siteorigin-page-builder":
            fs.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/template/view.php', template, function (err) {
            });
            break;
        case "themify-builder":
            fs.writeFileSync(arg.path+'/template-parts/widgets/' + pb + '/' + filename + '/templates/template-'+ filename +'.php', template, function (err) {
            });
            break;
        default:
            break;
    }

    env.addGlobal('template', template);
    env.addGlobal('fields', temp);
    env.addGlobal('fields2', convertTemp(temp));
    env.addGlobal('fieldsfolder', 'widgets/' + pb + '/fields');
    env.addFilter('PascalCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toPascalCase(str);
    });
    env.addFilter('TitleCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toTitleCase(str);
    });
    env.addFilter('SnakeCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toSnakeCase(str);
    });
    env.addFilter('HeaderCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toHeaderCase(str);
    });
    env.addFilter('UpperCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCase(str);
    });
    env.addFilter('LowerCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toLowerCase(str);
    });
    env.addFilter('UpperCaseFirst', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCaseFirst(str);
    });
    env.addFilter('ParamCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toParamCase(str);
    });
    env.addFilter('ConstantCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toConstantCase(str);
    });
    env.addFilter('Replace', function (str, before, after, count, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return replace(str, before, after, count);
    });
    env.addFilter('MakeId', function (length) {
        if (!length) {
            return makeId(13);
        }
        return makeId(length);
    });
    env.addFilter('FieldRenderer', function (field, fieldsfolder, name) {
        return fieldRenderer(field, fieldsfolder, name);
        ;
    });

    var deneme = '';
    deneme = fileContent;
    deneme = env.renderString(deneme);

    var tempContent = replace(replace(deneme, "[[[", "{{{", 500), "]]]", "}}}", 500) + "\n";

    return stringz + tempContent + "\n" + result;
}

var myFunction3 = function (temp, filename) {

    var functionsPHPContent = fs.readFileSync(arg.path+'/functions.php', 'utf8');

    var fileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/tpl.json', 'utf8');
    var fileContent2 = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-import.json', 'utf8');
    var env = new nunjucks.Environment();
    env.opts.autoescape = false;
    env.addGlobal('name', filename);
    env.addGlobal('fields', temp);
    env.addGlobal('fields2', convertTemp(temp));
    env.addGlobal('fieldsfolder', 'acf/fields');
    env.addFilter('PascalCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toPascalCase(str);
    });
    env.addFilter('TitleCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toTitleCase(str);
    });
    env.addFilter('SnakeCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toSnakeCase(str);
    });
    env.addFilter('HeaderCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toHeaderCase(str);
    });
    env.addFilter('UpperCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCase(str);
    });
    env.addFilter('LowerCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toLowerCase(str);
    });
    env.addFilter('UpperCaseFirst', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCaseFirst(str);
    });
    env.addFilter('ParamCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toParamCase(str);
    });
    env.addFilter('ConstantCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toConstantCase(str);
    });
    env.addFilter('Replace', function (str, before, after, count, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return replace(str, before, after, count);
    });
    env.addFilter('MakeId', function (length) {
        if (!length) {
            return makeId(13);
        }
        return makeId(length);
    });
    env.addFilter('FieldRenderer', function (field, fieldsfolder, name) {
        return fieldRenderer(field, fieldsfolder, name);
        ;
    });

    env.addFilter('CheckPostType', function (name,functionsPHPContent) {
        return checkPostType(name,functionsPHPContent);
        ;
    });

    env.addFilter('eval', function(value, filterExpression) {
        if(checkPostType(value,functionsPHPContent)){
            return env.renderString(filterExpression,
                {
                    name: value
                }
            );
        }else{
            return "";
        }
    });

    var tempContent = env.renderString(fileContent);

    fileContent2 += tempContent;
    var fileContent3 = fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-import.json', fileContent2);

}
var myFunction32 = function (temp, filename) {

//    ShortCode Fields to ACF Fields import PHP
    var functionsPHPContent = fs.readFileSync(arg.path+'/functions.php', 'utf8');

    var fileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/tpl2.json', 'utf8');
    var fileContent2 = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', 'utf8');
    var env = new nunjucks.Environment();
    env.opts.autoescape = false;
    env.addGlobal('name', filename);
    env.addGlobal('fields', temp);
    env.addGlobal('fields2', convertTemp(temp));
    env.addGlobal('fieldsfolder', 'acf/fields2');
    env.addFilter('PascalCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toPascalCase(str);
    });
    env.addFilter('TitleCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toTitleCase(str);
    });
    env.addFilter('SnakeCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toSnakeCase(str);
    });
    env.addFilter('HeaderCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toHeaderCase(str);
    });
    env.addFilter('UpperCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCase(str);
    });
    env.addFilter('LowerCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toLowerCase(str);
    });
    env.addFilter('UpperCaseFirst', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCaseFirst(str);
    });
    env.addFilter('ParamCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toParamCase(str);
    });
    env.addFilter('ConstantCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toConstantCase(str);
    });
    env.addFilter('Replace', function (str, before, after, count, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return replace(str, before, after, count);
    });
    env.addFilter('MakeId', function (length) {
        if (!length) {
            return makeId(13);
        }
        return makeId(length);
    });
    env.addFilter('FieldRenderer', function (field, fieldsfolder, name) {
        return fieldRenderer(field, fieldsfolder, name);
        ;
    });
    env.addFilter('CheckPostType', function (name,functionsPHPContent) {
        return checkPostType(name,functionsPHPContent);
        ;
    });

    env.addFilter('eval', function(value, filterExpression) {
        if(checkPostType(value,functionsPHPContent)){
            return env.renderString(filterExpression,
                {
                    name: value
                }
            );
        }else{
            return "";
        }
    });

    var tempContent = env.renderString(fileContent);

    fileContent2 += tempContent;
    var fileContent3 = fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', fileContent2);

}

var myFunction4 = function (stringz, filename,template) {

    var temp = getX(stringz).split(',');

    var env = new nunjucks.Environment();
    env.opts.autoescape = false;

    env.addGlobal('template', lastTwo(template, temp, 'get_field( \'icon\', \'widget_\'.$widget_id )'));
    env.addGlobal('name', filename);
    env.addGlobal('fields', temp);
    env.addGlobal('fields2', convertTemp(temp));

    env.addFilter('PascalCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toPascalCase(str);
    });
    env.addFilter('TitleCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toTitleCase(str);
    });
    env.addFilter('SnakeCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toSnakeCase(str);
    });
    env.addFilter('HeaderCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toHeaderCase(str);
    });
    env.addFilter('UpperCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCase(str);
    });
    env.addFilter('LowerCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toLowerCase(str);
    });
    env.addFilter('UpperCaseFirst', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCaseFirst(str);
    });
    env.addFilter('ParamCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toParamCase(str);
    });
    env.addFilter('ConstantCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toConstantCase(str);
    });
    env.addFilter('Replace', function (str, before, after, count, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return replace(str, before, after, count);
    });
    env.addFilter('MakeId', function (length) {
        if (!length) {
            return makeId(13);
        }
        return makeId(length);
    });
    env.addFilter('FieldRenderer', function (field, fieldsfolder, name) {
        return fieldRenderer(field, fieldsfolder, name);
        ;
    });

    /*
    wpshortcode
    acf
    reactjs
*/
    var tempContent2 = stringz;

    if(chks.indexOf("gutenbergblock">0)){
        var gutenbergFileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/shortcodes/gutenberg/tpl/tpl.tpl', 'utf8');
        env.addGlobal('fieldsfolder', 'shortcodes/gutenberg/fields');
        var gutenbergtempContent = env.renderString(gutenbergFileContent);
        tempContent2 += gutenbergtempContent;
    }


    if(chks.indexOf("wpbakery">0)){
        var wpbakeryFileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/shortcodes/wp-bakery/tpl/tpl.tpl', 'utf8');
        env.addGlobal('fieldsfolder', 'shortcodes/wp-bakery/fields');
        var wpbakerytempContent = env.renderString(wpbakeryFileContent);
        tempContent2 += wpbakerytempContent;
    }


    if(chks.indexOf("kingcomposer">0)){
        var kingcomposerFileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/shortcodes/king-composer/tpl/tpl.tpl', 'utf8');
        env.addGlobal('fieldsfolder', 'shortcodes/king-composer/fields');
        var kingcomposertempContent = env.renderString(kingcomposerFileContent);
        tempContent2 += kingcomposertempContent;
    }


    if(chks.indexOf("sushortcode">0)){
        var shortcodesultimateFileContent = fs.readFileSync(arg.path+'/setup/shortcode-templates/shortcodes/shortcodes-ultimate/tpl/tpl.tpl', 'utf8');
        env.addGlobal('fieldsfolder', 'shortcodes/shortcodes-ultimate/fields');
        var shortcodesultimatetempContent = env.renderString(shortcodesultimateFileContent);
        tempContent2 += shortcodesultimatetempContent;
    }


    tempContent2 = lastOne(tempContent2, temp);


    return tempContent2;

}
function lastOne(content, temp) {

    var newtemp = convertTemp(temp);
    if (newtemp) {

        for (var i = 0; i < newtemp.length; i++) {

            var ilk = newtemp[i]["name"];
            var son = replace("$icon", "icon", ilk, 100);
            content = replace(content, "$" + newtemp[i]["name"] + "-" + newtemp[i]["type"], son, 100);
            content = replace(content, "$" + newtemp[i]["name"], son, 100);
            content = replace(content, "$$", "$", 100);
        }
    }

    return content;

}
function lastTwo(content, temp, varz) {

    var newtemp = convertTemp(temp);
    if (newtemp) {
        for (var i = 0; i < newtemp.length; i++) {
            var ilk = newtemp[i]["name"];
            var son = replace(varz, "icon", ilk, 100);
            content = replace(content, "$" + newtemp[i]["name"] + "-" + newtemp[i]["type"], son, 100);
            content = replace(content, "$" + newtemp[i]["name"], son, 100);
            content = replace(content, "$$", "$", 100);
        }
    }

    return content;

}


var fieldRenderer = function (field, fieldsfolder, name) {

    var types = {
        "cb": "checkbox",
        "cp": "color_picker",
        "dt": "date_time_picker",
        "i": "image",
        "n": "number",
        "s": "select",
        "ta": "text_area",
        "t": "text",
        "tf": "truefalse",
        "u": "url",
        "e": "wysiwyg_editor"
    }

    var fieldTemplate = "";
    try {
        fieldTemplate = fs.readFileSync(arg.path+'/setup/shortcode-templates/' + fieldsfolder + '/' + types[field["type"]] + '.tpl', 'utf8');
    } catch (e) {
        try {
            fieldTemplate = fs.readFileSync(arg.path+'/setup/shortcode-templates/' + fieldsfolder + '/' + types["t"] + '.tpl', 'utf8');
        } catch (e) {
            fieldTemplate = " ";
        }
    }

    var env = new nunjucks.Environment();
    env.opts.autoescape = false;
    env.addGlobal('name', name);
    env.addGlobal('field', field["name"]);
    env.addGlobal('field2', field);
    env.addFilter('PascalCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toPascalCase(str);
    });
    env.addFilter('TitleCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toTitleCase(str);
    });
    env.addFilter('SnakeCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toSnakeCase(str);
    });
    env.addFilter('HeaderCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toHeaderCase(str);
    });
    env.addFilter('UpperCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCase(str);
    });
    env.addFilter('LowerCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toLowerCase(str);
    });
    env.addFilter('UpperCaseFirst', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toUpperCaseFirst(str);
    });
    env.addFilter('ParamCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toParamCase(str);
    });
    env.addFilter('ConstantCase', function (str, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return toConstantCase(str);
    });
    env.addFilter('Replace', function (str, before, after, count, defName) {
        if (!str) {
            return (defName || 'John Doe').toUpperCase();
        }
        return replace(str, before, after, count);
    });
    env.addFilter('MakeId', function (length) {
        if (!length) {
            return makeId(13);
        }
        return makeId(length);
    });

    var tempField = env.renderString(fieldTemplate);

    return tempField;

}

var checkPostType = function(name,functionsPHPContent){
    functionsPHPContent = functionsPHPContent.split(' ').join('');
    var findx = functionsPHPContent.split("register_post_type('"+name+"'");
    return findx.length>1?true:false;
}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}

//=> "TestString"
function toPascalCase(string) {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w*)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}

//=> "A Simple Test"
function toTitleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

//=> "test_string"
function toSnakeCase(str) {
    return str && str.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('_');
}

//=> "TEST_STRING"
function toConstantCase(str) {
    return toUpperCase(toSnakeCase(str));
}

//=> "Test-String"
function toHeaderCase(str) {
    return str && str.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('-');
}

//=> "test-string"
function toParamCase(str) {
    return toLowerCase(toHeaderCase(str));
}

//=> "Test"
function toUpperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//=> "test string"
function toLowerCase(str) {
    return str.toLowerCase();
}

//=> "TEST STRING"
function toUpperCase(str) {
    return str.toUpperCase();
}

function replace(str, sSearch, sReplace, n) {

    for (var times = 0, index = 0; times < n && index != -1; times++) {
        index = str.indexOf(sSearch, index + 1);
    }
    return str.split(sSearch).join(sReplace);

}

function toCapitalCase(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}



function convertTemp(temp) {

    var convertedTemp = [];

    for (var i = 0; i < temp.length; i++) {
        var x = temp[i].split("-");
        convertedTemp.push({
            "name": x[0],
            "type": x[1] ? x[1] : "t"
        });
    }

    return convertedTemp;
}

function getX(pgel) {
    var x = pgel.split('array(');
    var x0 = x[0];
    var x1 = x[1].split('),')[0];
    var xmatch = myTrim((x1.replace(/\s/g, '')).split(" ").join("").split("'").join("").split(",").join("").split("=>").join(","));
    var lastChar = xmatch.slice(-1);
    if (lastChar == ',') {
        xmatch = xmatch.slice(0, -1);
    }
    xmatch = xmatch.replace(/,\s*$/, "");
    var xreturn = xmatch ? xmatch : '';
    return xreturn;
}

function getY(pgel) {
    var splitter1 = /\$atts\s*?\)\);\s*?\?>/;
    var splitter2 = /\<\?php\s*?\$render = /;

    var x = pgel.split(splitter1);

    var x0 = x[0];
    var x1 = x[1].split(splitter2)[0];

    return x1;
}


String.prototype.$1elements = function (vregex) {
    var elm = [];
    var str = this;
    if ((vregex == "") || (this == "")) return null;
    var re = new RegExp(vregex, "");
    var vmm = re.exec(str);
    if ((vmm == null) || (vmm.length < 2)) return null;
    do {
        var vmm = re.exec(str);

        var lstin = (vmm != null) ? str.indexOf(vmm[0]) + vmm[0].length : 0;
        str = str.substring(lstin, str.length);
        if (vmm != null) elm.push(vmm[1]);
    } while (vmm != null);
    return elm;
}

function test(str, sSearch, sReplace, n) {
    for (var times = 0, index = 0; times < n && index != -1; times++) {
        index = str.indexOf(sSearch, index + 1);
    }
    return str.substr(0, index) + sReplace + str.substr(sSearch.length + index);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = gulpShortcodez;