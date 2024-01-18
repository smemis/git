var gulp = require('gulp');
var replace = require('gulp-replace');
var shortcodez = require('gulp-shortcodez');
var fs = require('fs');
var fse = require('fs-extra');
var through = require('through2');
var rimraf = require('rimraf');
var beautify = require('gulp-beautify');
var flatten = require('gulp-flatten');

const arg = (argList => {
	let arg = {}, a, opt, thisOpt, curOpt;
	for (a = 0; a < argList.length; a++) {
	  thisOpt = argList[a].trim();
	  opt = thisOpt.replace(/^\-+/, '');
	  if (opt === thisOpt) {
		// argument value
		if (curOpt) arg[curOpt] = opt;
		curOpt = null;
	  }
	  else {
		// argument name
		curOpt = opt;
		arg[curOpt] = true;
	  }
	}
	return arg;
})(process.argv);

var chks ="";

gulp.task('sc0',function(done){
    console.warn("sc0");
	console.warn(arg.themename);
	console.warn(arg.slug);
	console.warn(arg.sourcedir);

	return fse.move(arg.path+'/components/KraftPlugin/setup/', arg.path+'/setup/', err => {
		if(err) return console.error(err);

		fse.copySync(arg.basepath+'/templates/kraft-wp-blank/inc', arg.path+'/inc');

        console.warn("sc0 - done");

		done();
	});

});

/*
wpshortcode
acf
reactjs
*/
// Shortcodes & Widgets
gulp.task('sc1', function(done) {
	console.warn("sc1");

    fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-import.json', "");
    fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', "");

    fse.removeSync(arg.path+'/template-parts/widgets/*');		

    return gulp.src([arg.path+'/template-parts/shortcodes/*.php'])
        .pipe(shortcodez(arg))
        .pipe(replace('__x__', ''))
        .pipe(gulp.dest('.'));

        console.warn("sc1 - done");

    done();
});

// ACF
gulp.task('sc2', function(done) {
	console.warn("sc2");

    chks = ","+arg.chks+",";
	if(chks.indexOf("acf">0)){
		var fileContentx = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-import.json', "utf-8");

		var fileContenty = "[\n"+fileContentx+"\n]";
		fileContenty = fileContenty.replace('},\n' +
			']','}\n' +
			']');
		fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-import.json', fileContenty);

		var fileContentx2 = fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', "utf-8");
		var fileContenty2 = "if( function_exists('acf_add_local_field_group') ):\n"+fileContentx2+"\nendif;";
		fs.writeFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', fileContenty2);

        console.warn("sc2 - done");

		done();
	}
});

// Functions.php
gulp.task('sc3', function(done) {
	console.warn("sc3");

	var fileContent = fs.readFileSync(arg.path+'/functions.php', "utf-8");
	var fileContentTemp = "//START\n\n";

	var temp =[
		{
			"name" : "/* Pinegrow generated Image Sizes Begin */",
			"start" : "/* Pinegrow generated Image Sizes Begin */",
			"end" : "/* Pinegrow generated Image Sizes End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Image sizes}}"
		},
		{
			"name" : "/* Pinegrow generated Image Sizes Names Begin */",
			"start" : "/* Pinegrow generated Image Sizes Names Begin */",
			"end" : "/* Pinegrow generated Image Sizes Names End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Image Sizes Names}}"
		},
		{
			"name" : "/* Pinegrow generated Load Text Domain Begin */",
			"start" : "/* Pinegrow generated Load Text Domain Begin */",
			"end" : "/* Pinegrow generated Load Text Domain End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Load Text Domain}}"
		},
		{
			"name" : "/* Pinegrow generated Register Menus Begin */",
			"start" : "/* Pinegrow generated Register Menus Begin */",
			"end" : "/* Pinegrow generated Register Menus End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Register Menus}}"
		},
		{
			"name" : "register_nav_menus",
			"start" : "register_nav_menus(",
			"end" : ");",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{register_nav_menus}}"
		},
		{
			"name" : "/* Pinegrow generated Custom Post Types Begin */",
			"start" : "/* Pinegrow generated Custom Post Types Begin */",
			"end" : "/* Pinegrow generated Custom Post Types End */",
			"content" : " ",
			"file" : arg.path+"/setup/others/kraft-toolkit/public/partials/post-types/post-types.php",
			"template" : "{{Custom Post Types}}"
		},
		{
			"name" : "/* Pinegrow generated Register Sidebars Begin */",
			"start" : "/* Pinegrow generated Register Sidebars Begin */",
			"end" : "/* Pinegrow generated Register Sidebars End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme-sidebars.php",
			"template" : "{{Register Sidebars}}"
		},
		{
			"name" : "/* Pinegrow generated Taxonomies Begin */",
			"start" : "/* Pinegrow generated Taxonomies Begin */",
			"end" : "/* Pinegrow generated Taxonomies End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Taxonomies}}"
		},
		{
			"name" : "/* Pinegrow generated Customizer Controls Begin */",
			"start" : "/* Pinegrow generated Customizer Controls Begin */",
			"end" : "/* Pinegrow generated Customizer Controls End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme-options.php",
			"template" : "{{Customizer Controls}}"
		},
		{
			"name" : "/* Pinegrow generated Enqueue Scripts Begin */",
			"start" : "/* Pinegrow generated Enqueue Scripts Begin */",
			"end" : "/* Pinegrow generated Enqueue Scripts End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Enqueue Scripts}}"
		},
		{
			"name" : "/* Pinegrow generated Enqueue Styles Begin */",
			"start" : "/* Pinegrow generated Enqueue Styles Begin */",
			"end" : "/* Pinegrow generated Enqueue Styles End */",
			"content" : "",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Enqueue Styles}}"
		},
		{
			"name" : "/* Pinegrow generated Register Blocks Begin */",
			"start" : "/* Pinegrow generated Register Blocks Begin */",
			"end" : "/* Pinegrow generated Register Blocks End */",
			"content" : " ",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Register Blocks}}"
		},
		{
			"name" : "/* Pinegrow generated Register Blocks Category Begin */",
			"start" : "/* Pinegrow generated Register Blocks Category Begin */",
			"end" : "/* Pinegrow generated Register Blocks Category End */",
			"content" : " ",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Register Blocks Category}}"
		},
		{
			"name" : "/* Theme Supports */",
			"start" : "/* Theme Supports */",
			"end" : "/* Theme Supports */",
			"content" : " ",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{Theme Supports}}"
		},
		{
			"name" : "set_post_thumbnail_size",
			"start" : "set_post_thumbnail_size(",
			"end" : ");",
			"content" : " ",
			"file" : arg.path+"/inc/classes/class-kraft-theme.php",
			"template" : "{{set_post_thumbnail_size}}"
		}

	];

	for (var i = 0; i < temp.length; i++) {
		var a = temp[i]["start"];

		if(fileContent.indexOf(a)>=0){
			temp[i]["content"] = fileContent.split(temp[i]["start"])[1].split(temp[i]["end"])[0];

			fileContentTemp += "\n"+temp[i]["start"]+"\n";
			fileContentTemp += "\n"+temp[i]["content"]+"\n";
			fileContentTemp += "\n"+temp[i]["end"]+"\n";

			var fileContentX = fs.readFileSync(temp[i]["file"], "utf-8");
			var z = fileContentX.split(temp[i]["template"]);
			if(z.length>1){
				var c = z[0] + temp[i]["content"] + z[1];
				fs.writeFileSync(temp[i]["file"],c,"utf-8");
			}
		}

	}

	fileContentTemp += "\n\n//END\n";

	fs.writeFileSync(arg.path+'/temp.php', fileContentTemp);

	console.warn("sc3 - done");

	done();

});


function myIndexOf(myString, word) {
	var len = myString.length;
	var wordLen = word.length;
	for(var i = 0; i < len; i++) {
		var j = 0;
		for(j = 0; j < wordLen; j++) {
			if(myString[i+j] != word[j]) {
				break;
			}
		}
		if(j == wordLen) {
			return i;
		}
	}

	return -1;
}

//ReactJS
gulp.task('sc4', done => {
	console.warn("sc4");

	if(chks.indexOf("orhard">0)){
	    fs.readdirSync(arg.path+'/template-parts/shortcodes', (err, files) => {
		if (err) {
			console.log(err+'---sc4');
			return;
		}

		files.forEach(file => {

			if(file.endsWith('.php')){

//////
//ReactJS için düzeltme

				var jsx2 = fse.readFileSync(arg.path+'/template-parts/widgets/reactjs/'+file.replace('.php','.js'), "utf-8");
				jsx2 = jsx2.replace('    return (\n' +
					'      <div>','    return (');
				jsx2 = jsx2.replace('      </div>\n' +
					'    );\n' +
					'  }\n' +
					'}\n' +
					'\n' +
					'export default','    );\n' +
					'  }\n' +
					'}\n' +
					'\n' +
					'export default');
				jsx2 = jsx2.replace('        <div />\n' +
					'    );\n' +
					'  }\n' +
					'}\n' +
					'\n' +
					'export default','    );\n' +
					'  }\n' +
					'}\n' +
					'\n' +
					'export default');
				fse.writeFileSync(arg.path+'/template-parts/widgets/reactjs/'+file.replace('.php','.js'),jsx2);


				var jsx22 = fse.readFileSync(arg.path+'/template-parts/widgets/reactjs/fn_'+file.replace('.php','.js'), "utf-8");
				jsx22 = jsx22.replace('= () => (\n' +
					'  <div>','= () => (\n');
				jsx22 = jsx22.replace('  </div>\n' +
					');\n' +
					'\n' +
					'export default',');\n' +
					'\n' +
					'export default');
				jsx22 = jsx22.replace('    <div />\n' +
					');\n' +
					'\n' +
					'export default',');\n' +
					'\n' +
					'export default');
				fse.writeFileSync(arg.path+'/template-parts/widgets/reactjs/fn_'+file.replace('.php','.js'),jsx22);


				fs.readFileSync(arg.path+'/template-parts/shortcodes/'+file, 'utf8', function (err,result) {
					if (err) {
						return console.log(err);
					}

					var tempx = change(result);
					var temp1 = tempx[1].split(',');

					var temp = "";

					for (var i = 0; i < temp1.length; i++) {
						if(temp1[i]!=''){
							var temp2 = temp1[i].split('-')[0];
							temp += "$"+temp2+" = esc_attr( $atts != null ? $atts['"+temp2+"'] : \"\");\n";
						}
					}

					var resultx = tempx[0] + "\n" + temp + "\n" + tempx[2];

					fs.writeFileSync(arg.path+'/template-parts/shortcodes/'+file,resultx,'utf8', function (err) {
						if (err) {
							return console.log(err);
						}
					});
					fs.writeFileSync(arg.path+'/setup/others/kraft-toolkit/public/partials/shortcodes/'+file,resultx,'utf8', function (err) {
						if (err) {
							return console.log(err);
						}
					});

				});
			}

		});
	});

	through.obj(function (file, enc, callback) {
		console.warn(1);
	});
	}
    console.warn("sc4 - done");

	done();
});


// For WP Plugin
gulp.task("sc5", done  =>{
	console.warn("sc5");

// Custom Field Plugine Taşıma - START
	var customFields = "<?php "+"\n";
	customFields += fs.readFileSync(arg.path+'/setup/shortcode-templates/acf/tpl/acf-php.php', "utf-8");
	fs.writeFileSync(arg.path+"/setup/others/kraft-toolkit/public/partials/custom-fields/fields.php",customFields,"utf-8");
// Custom Field Plugine Taşıma - END

// functions.php Değiştirme - START
	var functionsPHP = fs.readFileSync(arg.path+'/functions.php', "utf-8");
	fs.writeFileSync(arg.path+"/functions-temp.php",functionsPHP,"utf-8");
	var functionsPHP2 = fs.readFileSync(arg.path+'/setup/others/Theme/functions.php', "utf-8");
	fs.writeFileSync(arg.path+"/functions.php",functionsPHP2,"utf-8");
// functions.php Değiştirme - END

	fse.copySync(arg.path+'/template-parts/widgets',arg.path+'/setup/others/kraft-toolkit/public/partials/widgets');


// ShortCode, Widget Plugine Taşıma - END
    console.warn("sc5 - done");

	done();
});


gulp.task('sc6', done => {
	console.warn("sc6");
	console.warn(chks);
	if(chks.indexOf("orchard">0)){
		console.warn("sc6orchard"+arg.path+'\\template-parts\\widgets\\orchard-core');

		var ContentTypes = "";
		var ContentTypeBagParts = "";
		var ContentTypeBagPartsAll = "";
		var ContentParts = "";
		var Templates = "";
		console.warn(1);
		fse.readdir(arg.path+'/template-parts/widgets/orchard-core', (err, files) => {
			console.warn(2);
			console.warn(files);
			if (err) {
				return console.log(err);
			}	

			files.forEach(file => {

			console.warn("1-"+file);				
			var filex = file.replace(".php","");
			var filex2 = replace2(filex,"_"," ",5);

			if(file.endsWith('.php')){
				fse.readFile(arg.path+'/template-parts/widgets/orchard-core/'+file, 'utf8', function (err,result) {
					if (err) {
						return console.log(file+'-------------hata-'+err);
					}
					console.warn("2-"+file);

					ContentTypes += "        {\n" +
						"          \"Name\": \""+toPascalCase(filex)+"\",\n" +
						"          \"DisplayName\": \""+toTitleCase(filex2)+"\",\n" +
						"          \"Settings\": {\n" +
						"            \"ContentTypeSettings\": {\n" +
						"              \"Creatable\": true,\n" +
						"              \"Draftable\": true,\n" +
						"              \"Versionable\": true,\n" +
						"              \"Listable\": true,\n" +
						"              \"Securable\": true,\n" +
						"              \"Stereotype\":  \"Widget\"\n" +
						"            }\n" +
						"          },\n" +
						"          \"ContentTypePartDefinitionRecords\": [\n" +
						"            {\n" +
						"              \"PartName\": \""+toPascalCase(filex)+"\",\n" +
						"              \"Name\": \""+toPascalCase(filex)+"\",\n" +
						"              \"Settings\": {\n" +
						"                \"ContentTypePartSettings\": {\n" +
						"                  \"Position\": \"2\"\n" +
						"                }\n" +
						"              }\n" +
						"            },\n" +
						"            {\n" +
						"              \"PartName\": \"HtmlBodyPart\",\n" +
						"              \"Name\": \"HtmlBodyPart\",\n" +
						"              \"Settings\": {\n" +
						"                \"ContentTypePartSettings\": {\n" +
						"                  \"Position\": \"1\"\n" +
						"                }\n" +
						"              }\n" +
						"            },\n" +
						"            {\n" +
						"              \"PartName\": \"TitlePart\",\n" +
						"              \"Name\": \"TitlePart\",\n" +
						"              \"Settings\": {\n" +
						"                \"ContentTypePartSettings\": {\n" +
						"                  \"Position\": \"0\"\n" +
						"                }\n" +
						"              }\n" +
						"            }\n" +
						"          ]\n" +
						"        },";

					ContentTypeBagParts += "{\n" +
						"              \"PartName\": \"BagPart\",\n" +
						"              \"Name\": \""+ toPascalCase(filex)+"\",\n" +
						"              \"Settings\": {\n" +
						"                \"ContentTypePartSettings\": {\n" +
						"                  \"DisplayName\": \""+toTitleCase(filex2)+"\",\n" +
						"                  \"Description\": \"Provides a collection behavior for your content item.\",\n" +
						"                  \"Position\": \"3\"\n" +
						"                },\n" +
						"                \"BagPartSettings\": {\n" +
						"                  \"ContainedContentTypes\": [\n" +
						"                    \""+toPascalCase(filex)+"\"\n" +
						"                  ]\n" +
						"                }\n" +
						"              }\n" +
						"            },";

					ContentTypeBagPartsAll += "                    \""+toPascalCase(filex)+"\",\n";


					ContentParts += result +",";

					Templates += "\"Content__"+toPascalCase(filex)+"\": {\n" +
						"\t\t\t\t\t\"Description\": \""+toTitleCase(filex2)+" Template\",\n" +
						"\t\t\t\t\t\"Content\": \"[file:text('Snippets/Content-"+filex+".liquid')]\"\n" +
						"\t\t\t\t},\n" +
						"\t\t\t\t\"Widget__"+toPascalCase(filex)+"\": {\n" +
						"\t\t\t\t\t\"Description\": \""+toTitleCase(filex2)+" Widget\",\n" +
						"\t\t\t\t\t\"Content\": \"[file:text('Snippets/Widget-"+filex+".liquid')]\"\n" +
						"\t\t\t\t}"+",";
				});
			}




		});


		


		var ThemeRecipe = "";
		fse.readFile(arg.path+'/setup/shortcode-templates/widgets/orchard-core/recipe-temp.json', 'utf8', function (err,result) {
			if (err) {
				return console.log('-----------------readFileSync------------'+err);
			}
			console.warn("3-");				

            ThemeRecipe = result.replace("{{ ContentTypes }}",ContentTypes)
			.replace("{{ ContentTypeBagParts }}",ContentTypeBagParts.substring(0,ContentTypeBagParts.length-1))
			.replace("{{ ContentTypeBagPartsAll }}",ContentTypeBagPartsAll.substring(0,ContentTypeBagPartsAll.length-1))
			.replace("{{ ContentParts }}",ContentParts)
			.replace("{{ThemeName}}",arg.themename)
			.replace("{{ThemeName}}",arg.themename)
			.replace("{{Slug}}",arg.slug)
			.replace("{{ThemeNameUC}}",toPascalCase(arg.themename))
			.replace("{{ThemeNameUC}}",toPascalCase(arg.themename))
			.replace("{{ Templates }}",Templates.substring(0,Templates.length-1));

    	    fse.writeFile(arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme-recipe.json',ThemeRecipe,'utf8', function (err) {
				if (err) {
					return console.log('---------------writeFileSync-----------------'+err);
				}
				console.warn("4-1");				

                fse.copySync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme-recipe.json', arg.path+'/setup/others/OrchardCore/theme.recipe.json');

				console.warn("4-2");

				var manifestPath = arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/Manifest.cs';
				var manifestContent = fse.readFileSync(manifestPath, 'utf8');
				var newContent = manifestContent.replace(/{{ThemeName}}/g, arg.themename);
				var themePath = arg.path+'/setup/others/OrchardCore/theme';
				fse.mkdirSync(themePath);
				fse.outputFile(arg.path+'/setup/others/OrchardCore/theme/Manifest.cs',newContent);

				var projPath = arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/TheAgencyTheme.csproj';
				var projContent = fse.readFileSync(projPath, 'utf8');
				var projnewContent = projContent.replace(/{{ThemeName}}/g, arg.themename);
				fse.outputFile(arg.path+'/setup/others/OrchardCore/theme/'+ toPascalCase(arg.themename)+'.proj',projnewContent);

				var rPath = arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/ResourceManifestOptionsConfiguration.cs';
				var rContent = fse.readFileSync(rPath, 'utf8');
				var rnewContent = rContent.replace(/{{ThemeName}}/g, toPascalCase(arg.themename));
				fse.outputFile(arg.path+'/setup/others/OrchardCore/theme/ResourceManifestOptionsConfiguration.cs',rnewContent);

				var sPath = arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/Startup.cs';
				var sContent = fse.readFileSync(sPath, 'utf8');
				var snewContent = sContent.replace(/{{ThemeName}}/g, toPascalCase(arg.themename));
				fse.outputFile(arg.path+'/setup/others/OrchardCore/theme/Startup.cs',snewContent);

				var pPath = arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/package.json';
				var pContent = fse.readFileSync(pPath, 'utf8');
				var pnewContent = pContent.replace(/{{ThemeName}}/g, toLowerCase(toPascalCase(arg.themename)));
				fse.outputFile(arg.path+'/setup/others/OrchardCore/theme/package.json',pnewContent);


				/*
				var tmanifest = ""
				var tproj = ""

				fse.readFileSync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/Manifest.cs', 'utf8', function (err,result1) {
					if (err) {
						return console.log('-----------------readFileSync------------'+err);
					}
					tmanifest = result1.replace('{{ThemeName}}',arg.themename);
					console.log("mkdir1");
					fse.mkdirSync(arg.path+'/setup/others/OrchardCore/theme');
					console.log("mkdir2");
						
					fse.writeFileSync(arg.path+'/setup/others/OrchardCore/theme/Manifest.cs',tmanifest,'utf8', function (err) {
						if (err) {
							return console.log('---------------writeManifest.csFileSync-----------------'+err);
						}

						console.warn("4-1--Manifest.cs");
		
						fse.readFileSync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/theme/TheAgencyTheme.csproj', 'utf8', function (err,result2) {
							if (err) {
								return console.log('-----------------readFileSync------------'+err);
							}
							tproj = result2.replace('{{ThemeName}}',arg.themename);
							fse.writeFileSync(arg.path+'/setup/others/OrchardCore/theme/'+ toPascalCase(arg.themename)+'.proj',tproj,'utf8', function (err) {
								if (err) {
									return console.log('---------------writeTheAgencyTheme.csprojSync-----------------'+err);
								}
								console.warn("4-1--TheAgencyTheme.csproj");
							});			
						});
						
					});			
				});
				*/
				console.warn("4-2-2");


			});

    	    fse.writeFile(arg.path+'/setup/others/OrchardCore/themesetup.recipe.json',ThemeRecipe.replace('"issetuprecipe": true','"issetuprecipe": false'),'utf8', function (err) {
				if (err) {
					return console.log('---------------writethemesetup.recipe.jsonFileSync-----------------'+err);
				}
				console.warn("4-1--themesetup.recipe.json");
			});


		});


		});
	}
    console.warn("sc6 - done");

	done();
});


//orchard2
gulp.task('sc7', done => {
	console.warn("sc7");

	if(chks.indexOf("orchard">0)){

        var LandingPage = "";
		console.warn("sc7-1");

    	fs.readdir(arg.path+'/template-parts/widgets/orchard-core', (err, files) => {
			console.warn("sc7-2");

            if (err) {
                console.log(err);
                return;
            }

            files.forEach(file => {
                if(file.endsWith('.php')) {
					console.warn("sc7-3");

                    var filex = file.replace(".php", "");
                    var filex2 = replace2(filex, "_", " ", 5);
                    var a = fs.readFileSync(arg.path+'/template-parts/widgets/orchard-core/' + filex + '/Content-' + filex + '.liquid', 'utf8');
					console.warn("sc7-4");

                    LandingPage += "{% if Model.ContentItem.Content." + toPascalCase(filex) + ".ContentItems.size > 0 %}\n" +
                        "<!-- " + toTitleCase(filex2) + " -->\n" +
                        a + "\n" +
                        "{% endif %}" + "\n\n";
                }
            });
			console.warn("sc7-5");

            fs.writeFile(arg.path+'/setup/shortcode-templates/widgets/orchard-core/landingpage.liquid',LandingPage,'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
				console.warn("sc7-6");
            });



        });

	}
    console.warn("sc7 - done");

	done();
});

//Orchard Layout
gulp.task('sc8', function(done) {
	console.warn("sc8");

	if(chks.indexOf("orchard">0)){
		console.warn("sc8-1");

        // var header = fs.readFileSync(arg.path+'/header.php', "utf-8");
        // var footer = fs.readFileSync(arg.path+'/footer.php', "utf-8");
		// console.warn("sc8-2");

        // var cshtml = header+"\n@await RenderBodyAsync()\n"+footer;
        // var liquid = header+"\n{% render_body %}\n"+footer;

        // fs.writeFileSync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.cshtml', cshtml);
        // fs.writeFileSync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.liquid', liquid);

		var str = fs.readFileSync(arg.sourcedir+'/OC.html', "utf-8");

		let start1 = str.indexOf("<!--OCLayout Start-->");
		let start2 = str.indexOf("<!--OCLayout End-->");
		let newStr1 = str.substring(0,start1);
		let newStr2 = str.substring(start2+19);

        var liquid = newStr1+"\n{% render_body %}\n"+newStr2;

        fs.writeFileSync(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.liquid', liquid);

		console.warn("sc8-3");

	}

	console.warn("sc8 - done");

	done();

});




function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

function change(o){

var splitter1 = /extract\(shortcode_atts\(\s*?array\(/;
var splitter2 = /\),\s*?\$atts\s*?\)\);/;

var temp1 = o.split(splitter1);
	var temp2 = temp1[1].split(splitter2);
	var temp = xreplace(temp2[0],' ','',500);
	temp = xreplace(temp,'\t','',500);
	temp = xreplace(temp,'\n','',500);
	temp = xreplace(temp,'=>','',500);
	temp = xreplace(temp,"'","",500);

	var tempx = [
		temp1[0],
		temp,
		temp2[1]
	]

	return tempx;
}

function xreplace(str, sSearch, sReplace, n) {
	for (var times = 0, index = 0; times < n && index != -1; times++) {
		index = str.indexOf(sSearch, index + 1);
	}
	return str.split(sSearch).join(sReplace);
}
// Text Operations Start
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
//	console.warn(str);
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

function replace2(str, sSearch, sReplace, n) {

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
// Text Operations End

// OrchardCore Taşıma Start

gulp.task('sc9',function(done){
	console.warn("sc91");

    fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/landingpage.liquid', arg.path+'/setup/others/OrchardCore/landingpage.liquid');
    fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.cshtml', arg.path+'/setup/others/OrchardCore/layout.cshtml');
    fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.liquid', arg.path+'/setup/others/OrchardCore/layout.liquid');

	fse.copy(arg.path+'/setup/others/kraft-toolkit/public/partials/widgets/orchard-core',arg.path+'/setup/others/OrchardCore', function (err) {
		if (err) {
			return console.log(err);
		}
		
		fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/landingpage.liquid', arg.path+'/setup/others/OrchardCore/landingpage.liquid');
		fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.cshtml', arg.path+'/setup/others/OrchardCore/layout.cshtml');
		fse.copy(arg.path+'/setup/shortcode-templates/widgets/orchard-core/layout.liquid', arg.path+'/setup/others/OrchardCore/layout.liquid');

        fse.remove(arg.path+'/setup/others/OrchardCore/fields');		
		fse.remove(arg.path+'/setup/others/OrchardCore/tpl');		
		fse.remove(arg.path+'/setup/others/OrchardCore/tpl.json');		
		fse.remove(arg.path+'/setup/others/OrchardCore/tpl2.json');			
	
		rimraf(arg.path+'/setup/others/OrchardCore/**/*.tpl', function () { console.log('.tpl done'); });
		rimraf(arg.path+'/setup/others/OrchardCore/**/*.php', function () { console.log('.php done'); });
				
/*
Recipes > Snippets
Views
wwwroot
*/
			gulp.src([arg.path+'/setup/others/OrchardCore/**/*.liquid'])
			.pipe(beautify.html({indent_size: 4}))
			.pipe(gulp.dest(function(file) {
				return file.base;
			}));

			gulp.src([arg.path+'/setup/others/OrchardCore/**/*.json'])
			.pipe(beautify.js({indent_size: 4}))
			.pipe(gulp.dest(function(file) {
				return file.base;
			}));

			gulp.src([arg.path+'/setup/others/OrchardCore/**/*.liquid','!'+arg.path+'/setup/others/OrchardCore/**/layout.liquid'], {nodir: true})
			.pipe(flatten())
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Recipes/Snippets/', {nodir: true}));

			gulp.src([arg.path+'/setup/others/OrchardCore/theme.recipe.json'])
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Recipes/'));
			gulp.src([arg.path+'/setup/others/OrchardCore/themesetup.recipe.json'])
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Recipes/'));

			gulp.src([arg.path+'/setup/others/OrchardCore/landingpage.liquid'])
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Views/'));

			gulp.src([arg.path+'/setup/others/OrchardCore/layout.cshtml'])
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Views/'));

			gulp.src([arg.path+'/setup/others/OrchardCore/layout.liquid'])
			.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/Views/'));

			fs.copyFile(arg.sourcedir+'/screenshot.png', arg.sourcedir+'/theme.png', function (err) {
				if (err) throw err;

				gulp.src([arg.sourcedir+'/theme.png'])
				.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/wwwroot/'));

				gulp.src([arg.sourcedir+'/assets/**/*'])
				.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/wwwroot/assets/'));
	
				gulp.src([arg.sourcedir+'/OC.html'])
				.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/wwwroot/'));

				gulp.src([arg.path+'/setup/others/OrchardCore/theme/**/*'])
				.pipe(gulp.dest(arg.path+'/setup/others/OrchardCoreTheme/'));

var last = arg.path+'/setup/others/'+toPascalCase(arg.themename);

				gulp.src([arg.path+'/setup/others/OrchardCoreTheme/**/*'])
				.pipe(gulp.dest(last));

				console.log('Dosya adı değiştirildi!');
			});



	});

	console.warn("sc9 - done");

	done();
});
// OrchardCore Taşıma End

gulp.task('sc', gulp.series('sc0', 'sc1', 'sc2', 'sc3', 'sc4', 'sc5', 'sc6', 'sc7', 'sc8', 'sc9'),function(){return;});
