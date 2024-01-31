$(function () {
	
var bizim = "";
var msg = "";

function myTrim(x) {
	return x.replace(/^\s+|\s+$/gm, '');
}
 
function xRemove(items){
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		if (item.attr('wp-call-function') != '') {
			item.removeAttr('wp-call-function');
			item.removeAttr('wp-call-function-echo');
			item.removeAttr('wp-call-function-set');
		}
		if(item.children){
			xRemove(item.children);
		}
	}
}


async function handleSelectGulpFolder(exportHTML){

	const { canceled, filePaths } = await dialog.showOpenDialog({
		properties: ['openDirectory']
	})

	if (canceled) {
		return "";
	} else {
		return filePaths[0];
	}

}

async function getDir() {
	const dirHandle = await window.showDirectoryPicker();

	// run code for dirHandle
}

function openFileDialog(openFolder) {
	crsaChooseFile(function (url) {
//			document.getElementById("denemezzzx").value=url;
		console.warn(1);
		console.warn(url);
		const {exec, fork, spawn} = require('child_process');
		console.warn(2);


//            _this.requireFileFromUrl(url);
	}, false, false, false, openFolder)
}

async function runSC(framework) {
	require('path');

	// const dirHandle = await window.showDirectoryPicker();
	// console.warn(dirHandle);
	// console.warn(dirHandle.entries());

	// const relativePaths = await dirHandle.resolve();
	
	// if (relativePath === null) {
	//   // Not inside directory handle
	// } else {
	//   // relativePath is an array of names, giving the relative path
	
	//   for (const name of relativePaths) {
	// 	// log each entry
	// 	console.log(name);
	//   }
	// }
	


	try {
		var frameBase = framework.getBaseUrl();
		var html = '<input type="text" id="denemezzzx"/><input type="button" onClick="openFileDialog(true);" value="seç" />';
		pinegrow.showAlert(html, 'Want to create ShortCodes?', 'Not now.', 'Yes, please!', null, function () {
		})


	//   const {
	// 	PurgeCSS
	//   } = require(crsaMakeFileFromUrl(frameBase + '/node_modules/purgecss/lib/purgecss.js'));
	//   const purgeCSSResult = await new PurgeCSS().purge({
	// 	content: htmlFiles,
	// 	extractors: [
	// 	  {
	// 		  extractor: TailwindExtractor,
	// 		  extensions: ['html']
	// 	  }
	//   ],
	// 	css: cssFiles,
	// 	fontFace: true,
	// 	keyframes: true,
	// 	variables: true
	//   });
	//   var cssString = purgeCSSResult[0].css;
	//   fs.writeFile(normalOutput, cssString, {
	// 	flag: 'w',
	// 	encoding: 'utf8'
	//   }, (err) => {
	// 	if (err) throw err;
	//   });
	} catch (e) {
	//   if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
	// 	console.log("Can't load purge!");
	//   else
		throw e;
	}
};
  


	$('body').one('pinegrow-ready', function (e, pinegrow) {

		async function openFileDialog(openFolder,selectedchks,uts) {
			console.warn(openFolder);
			console.warn(selectedchks);
			console.warn(selectedchks.join(','));
			
			console.warn(uts);
			var url = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.dir;//path
			var themename = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.name;
			var slug = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.slug;
			var sourcedir = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.source_dir;
			var baseurl = framework.getBaseUrl().replaceAll("file:///","").replaceAll("/","\\");

			if(uts){
				// var url = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.dir;//path
				// var themename = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.name;
				// var slug = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.slug;
				// var sourcedir = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.source_dir;
				// var baseurl = framework.getBaseUrl().replaceAll("file:///","");

				console.warn(11);
				console.warn(url);
	
				bizim = url;
				var projectFile = "";
	
				msg = projectFile+"<textarea style='width: 100%;height: 100px;'>cd "+framework.getBaseUrl().replaceAll("file:///","") + "\n"; 
				msg += "gulp sc --basepath "+ framework.getBaseUrl().replaceAll("file:///","") +" --path "+bizim.replace("file:///","")+" --chks "+ selectedchks +" --themename '"+ themename +"' --slug "+ slug +" --sourcedir "+ sourcedir +"</textarea>";
	
				pinegrow.showAlert(msg, 'Copy and Paste any shell window', '', 'Close', null, function () {});
	
				const child_process = require('child_process');
				if(process.env.PATH.split(';').indexOf(baseurl)>=0){
				}else{
					process.env.PATH += ";"+ baseurl;
				}
				//  process.env.PATH += ";"+ framework.getBaseUrl().replaceAll("file:///","").replaceAll("/","\\");

				 console.warn(process.env);
//				 var cmdd = 'gulp sc --basepath ' + framework.getBaseUrl().replaceAll("file:///","") + ' --path '+ url.replace("file:///","") + ' --chks "'+selectedchks.join(',') + '"' ;
				 var cmdd = 'gulp sc --basepath ' + framework.getBaseUrl().replaceAll("file:///","") + ' --path '+ url.replace("file:///","") + ' --chks "'+selectedchks.join(',') + '"' +' --themename "'+ themename +'" --slug "'+ slug +'" --sourcedir "'+ sourcedir +'"' ;
				 
				const islem = child_process.exec(cmdd, {
					cwd: framework.getBaseUrl().replaceAll("file:///",""),
					checkCWD: true,
					env: process.env
				},
				function (error, stdout, stderr) {
					if (error) throw error;
						console.log('stdout: ' + stdout);
						console.log('stderr: ' + stderr);		
				});
				console.warn(islem);
				
				islem.on('exit', function (code, signal) {
					console.log('İşlem tamamlandı. İşlem kodu:  ' + code);
				});
	
				console.warn(22);
			}else{
				crsaChooseFile(function (url) {
					console.warn(1111);
					console.warn(url);
	
					bizim = url;


					// // // // // var tempinfodir = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.dir;
					// // // // // //pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.dir=url;


					// // // // // var wpexportfirst1 = document.querySelectorAll(".wp-menu-theme-settings");
					// // // // // wpexportfirst1.forEach(element => {
					// // // // //   element.click();
					// // // // // });
					// // // // // var tempdir1 = document.querySelector("#pgapp > div.modal.aafade.in > div > div > div.modal-body > div > div > div > div > div:nth-child(2) > div > div.crsa-field.crsa-field-text.crsa-field-dir.pick-file > div.crsa-input.crsa-input-text.has-value > input");
					// // // // // console.warn("burası1");
					// // // // // console.warn(tempdir1.value);
					// // // // // tempdir1.value = url.replace("file:///","");				
					// // // // // console.warn(tempdir1.value);
					// // // // // console.warn("burası2");
					
					// // // // // document.querySelector("#pgapp > div.modal.aafade.in > div > div > div.modal-footer > button.btn.btn-primary.btn-sm.ok").click();
					// // // // // // var wpexportfirst2 = document.querySelector("#pgapp > div.modal.aafade.in > div > div > div.modal-footer > button.btn.btn-primary.btn-sm.ok");
					// // // // // // wpexportfirst2.forEach(element => {
					// // // // // //   element.click();
					// // // // // // });


					// // // // // pinegrow.showAlert("Please Wait 1 a Minute Then Click Button...", 'Please wait for Exporting All WordPress Files...Copy and Paste any shell window', '', 'Close', null, function () {

					// // // // // 	var wpexport = document.querySelectorAll(".wp-menu-export");
					// // // // // 	wpexport.forEach(element => {
					// // // // // 	  element.click();
					// // // // // 	});

						
					// // // // // 	pinegrow.showAlert("Please Wait 2 ...", 'Please wait for Exporting All WordPress Files...Copy and Paste any shell window', '', 'Close', null, function () {



							var projectFile = "";//fse.readFileSync(framework.getBaseUrl()+'/pinegrow.json', "utf-8");
		
							msg = projectFile+"<textarea style='width: 100%;height: 100px;'>cd "+framework.getBaseUrl().replaceAll("file:///","") + "\n"; 
							msg += "gulp sc --basepath "+ framework.getBaseUrl().replaceAll("file:///","") +" --path "+bizim.replace("file:///","")+" --chks "+ selectedchks +" --themename '"+ themename +"' --slug "+ slug +" --sourcedir "+ sourcedir +"</textarea>";
			
							pinegrow.showAlert(msg, 'Please wait 3for Exporting All WordPress Files...Copy and Paste any shell window', '', 'Close', null, function () {
		
		
								//const {exec, fork, spawn} = require('child_process');
								const child_process = require('child_process');
				
								// console.warn("process.env: ");
								// console.warn(process.env);
								// process.env.Path += ";"+ process.env.INIT_CWD+";zzzzz";
		
								if(process.env.PATH.split(';').indexOf(baseurl)>=0){
								}else{
									process.env.PATH += ";"+ baseurl;
								}
			//						process.env.PATH += ";"+ framework.getBaseUrl().replaceAll("file:///","").replaceAll("/","\\");
		
								//process.env.PATH += ";"+ framework.getBaseUrl().replaceAll("file:///","").replaceAll("/","\\")+"\\";
								//process.env.PATH += ":"+ framework.getBaseUrl().replaceAll("file:///","");
								//process.env.PATH += ":"+ framework.getBaseUrl().replaceAll("file:///","");
								//process.env.PATH += ";"+ framework.getBaseUrl().replaceAll("file:///","");
								//process.env.PATH += ";"+ framework.getBaseUrl().replaceAll("file:///","");
								console.warn(process.env);
								// console.warn(framework);		
								// console.warn(framework.getBaseUrl());		
								//file:///Users/semih/Desktop/2023/KraftPlugin
			//					var cmdd = 'gulp sc --basepath ' + framework.getBaseUrl().replaceAll("file:///","") + ' --path '+ url.replace("file:///","") + ' --chks "'+selectedchks.join(',') + '"' ;
								var cmdd = 'gulp sc --basepath ' + framework.getBaseUrl().replaceAll("file:///","") + ' --path '+ url.replace("file:///","") + ' --chks "'+selectedchks.join(',') + '"' +' --themename "'+ themename +'" --slug "'+ slug +'" --sourcedir "'+ sourcedir +'"';
		
								
								//var cmdd = 'gulp minify-css --path '+ url.replace("file:///","") + ' --chks '+selectedchks.join(',') ;
								//var cmdd = 'gulp minify-css';
				
								const islem = child_process.exec(cmdd, {
									//cwd: framework.getBaseUrl().replaceAll("file:///","").replaceAll("/","\\"),
									cwd: framework.getBaseUrl().replaceAll("file:///",""),
									//cwd: framework.getBaseUrl(),
									checkCWD: true,
									env: process.env
								},
								function (error, stdout, stderr) {
									if (error) throw error;
										console.log('stdout: ' + stdout);
										console.log('stderr: ' + stderr);		
								});
								console.warn(islem);
								
								islem.on('exit', function (code, signal) {
									console.log('İşlem tamamlandı. İşlem kodu:  ' + code);
								});
				
								console.warn(22);
								//_this.requireFileFromUrl(url); //neden yazılmış???
		
								// // // // // var wpexportfirst1 = document.querySelectorAll(".wp-menu-theme-settings");
								// // // // // wpexportfirst1.forEach(element => {
								// // // // //   element.click();
								// // // // // });
								// // // // // var tempdir1 = document.querySelector("#pgapp > div.modal.aafade.in > div > div > div.modal-body > div > div > div > div > div:nth-child(2) > div > div.crsa-field.crsa-field-text.crsa-field-dir.pick-file > div.crsa-input.crsa-input-text.has-value > input");
								// // // // // console.warn("burası1-2");
								// // // // // console.warn(tempdir1.value);
								// // // // // tempdir1.value = tempinfodir;				
								// // // // // console.warn("burası2-2");
								
								// // // // // document.querySelector("#pgapp > div.modal.aafade.in > div > div > div.modal-footer > button.btn.btn-primary.btn-sm.ok").click();
			
								
		
							});
	
	
	
					// // // // // 	});						

					// // // // // });








	

				}, false, false, false, openFolder)
			}


		}	


		let framework_id = 'krft';
		var framework = new PgFramework(framework_id, 'Kraft Plugin');
		framework.type = 'KraftPlugin';
		framework.allow_single_type = true;
		framework.info_badge = 'v1.0.3';
		framework.description = 'Plugin for Kraft Projects';
		framework.author = 'Kraft Themes';
		framework.author_link = 'https://kraftthemes.com';
		framework.ignore_css_files = [/main.css/, /normalize.css/];

	    framework.on_page_menu = function (page, items) {
			items.push({
		  		type: 'divider'
			});
			items.push({
			  type: 'header',
			  label: 'Kraft Plugin'
			});
			items.push({
		  		label: 'Create ShortCodes',
		  		action: function () {
					
					var path = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.dir;
					var themename = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.name;
					var slug = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.slug;
					var sourcedir = pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.source_dir;
					var baseurl = framework.getBaseUrl().replaceAll("file:///","");
//					var baseurl2 = process.env.PATH.split(';').indexOf('C:\\Program Files\\Git\\cmd');		
//baseurl2+'<br>'+process.env.PATH+'<br>
					pinegrow.showAlert('Theme Name : '+themename+'<br>Slug : '+slug+'<br>Source Dir : '+sourcedir+'<br>Path : '+path+'<br>BaseUrl : '+baseurl+'<br><input id="uts" type="checkbox" checked="checked" value="true"/> Use Theme Folder'+'<hr><input type="checkbox" checked="checked" class="cscchk" value="wpshortcode">WP Short Code<br/><input type="checkbox" checked="checked" class="cscchk" value="wpwidget">WP Widget<br/><input type="checkbox" checked="checked" class="cscchk" value="elementor">Elementor<br/><input type="checkbox" checked="checked" class="cscchk" value="wpbakery">WP Bakery<br/><input type="checkbox" checked="checked" class="cscchk" value="kingcomposer">King Composer<br/><input type="checkbox" checked="checked" class="cscchk" value="divibuilder">Divi Builder<br/><input type="checkbox" checked="checked" class="cscchk" value="sushortcode">Short Code Ultimate<br/><input type="checkbox" checked="checked" class="cscchk" value="siteorigin">Site Origin<br/><input type="checkbox" checked="checked" class="cscchk" value="beaverbuilder">Beaver Builder<br/><input type="checkbox" checked="checked" class="cscchk" value="livecomposer">Live Composer<br/><input type="checkbox" checked="checked" class="cscchk" value="themifybuilder">Themify Builder<br/><input type="checkbox" checked="checked" class="cscchk" value="wppagebuilder">WP Page Builder<br/><input type="checkbox" checked="checked" class="cscchk" value="gutenbergblock">Gutenberg Block<br/><input type="checkbox" checked="checked" class="cscchk" value="acf">ACF Block<br/><input type="checkbox" checked="checked" class="cscchk" value="orchard">Orchard Core<br/><input type="checkbox" checked="checked" class="cscchk" value="reactjs">React JS Component<br/><br><input type="button" onclick="document.querySelectorAll(\'.cscchk\').forEach(p => p.checked=true);" value="Select All"/><input type="button" onclick="document.querySelectorAll(\'.cscchk\').forEach(p => p.checked=false);" value="Deselect All"/>'+msg, 'Do you want to select a folder to create ShortCodes?', 'Not now.', 'Yes, please!', null, function () {
						//runSC(framework);
						var allchks = [];
						document.querySelectorAll(".cscchk").forEach(p => p.checked==true ? allchks.push(p.value): null);
						openFileDialog(true,allchks,document.querySelector("#uts").checked);
					})
		  		}
			});
			items.push({
			  type: 'divider'
			});
		};

		pinegrow.addFramework(framework);


		var url = crsaMakeFileFromUrl(framework.getBaseUrl());


		/** START TEMPLATES  */
		framework.addTemplateProjectFromResourceFolder('templates/kraft-html-blank', null, 600);
        var descriptions_wpblank = {
			'index.html' : 'The main WP template file. It is required in all themes. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>'
		}
		var images_wpblank = {
			'index.html' : 'wordpress.jpg'
		}
		var order_wpblank = ['index.html'];
		var ignore_files_wpblank = ['pinegrow', 'pinegrow.json', 'screenshots'];
		framework.addTemplateProjectFromResourceFolder('templates/kraft-wp-blank', null, 700, function(node, project) {
			if(node.name == 'lib.html' || node.name == 'settings.html') {
				node.required = true; //will be included in all projects
				node.tag = null;
				node.image = false;
			} else if(node.name == 'index.html') {
				node.required = true; //will be included in all projects
			} else if(ignore_files.indexOf(node.name) >= 0) {
				node.required = false;
				return false;
			}
			if(node.tag == 'page') {
				node.description = descriptions_wpblank[node.name] || "Description is missing!";
				node.image = project.root.url + '/screenshots' + '/' + images_wpblank[node.name];
				node.image_class = 'small';

				var idx = order_wpblank.indexOf(node.name);
				if(idx >= 0) node.order = idx;
			}
		});
        var descriptions = {
            'index.html' : 'The main template file. It is required in all themes. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            '404.html' : 'The 404 template is used when WordPress cannot find a post, page, or other content that matches the visitor’s request. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'archive-download.html' : 'Archive template for Easy Digital Downloads. <a href="http://www.starter.batsteek.fr/downloads/" class="external">Demo</a>',
            'archive-jetpack-portfolio.html' : 'Archive template for Jetpack Portfolio custom content type. <a href="https://en.support.wordpress.com/portfolios/" class="external">Read more...</a>',
            'archive-jetpack-testimonial.html' : 'Archive template for Jetpack Testimonial custom content type. <a href="https://en.support.wordpress.com/testimonials/" class="external">Read more...</a>',
            'archive.html' : 'The archive template is used when visitors request posts by category, author, or date. Note: this template will be overridden if more specific templates are present like category.php, author.php, and date.php. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'attachment.html' : 'The attachment template is used when viewing a single attachment like an image, pdf, or other media file. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'author.html' : 'The author page template is used whenever a visitor loads an author page. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'category.html' : 'The category template is used when visitors request posts by category. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'front-page.html' : 'The front page template is loaded if a static front page is specified under Admin > Settings > Reading. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'home.html' : 'The home page template is the front page by default. If you do not set WordPress to use a static front page, this template is used to show latest posts. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'page-nosidebar.html' : 'Custom Page template without the sidebar. <a href="http://www.starter.batsteek.fr/page-no-sidebar/" class="external">Demo</a>',
            'page-sidebarleft.html' : 'Custom Page template with the sidebar on the left. <a href="http://www.starter.batsteek.fr/page-with-sidebar-on-the-left/" class="external">Demo</a>',
            'search.html' : 'The search results template is used to display a visitor’s search results. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'single-download.html' : 'Single post template for Easy Digital Downloads. <a href="http://www.starter.batsteek.fr/downloads/download-07/" class="external">Demo</a>',
            'single-jetpack-portfolio.html' : 'Single post template for Jetpack Portfolio custom content type. <a href="https://en.support.wordpress.com/portfolios/" class="external">Read more...</a>',
            'single-jetpack-testimonial.html' : 'Single post template for Jetpack Testimonial custom content type. <a href="https://en.support.wordpress.com/testimonials/" class="external">Read more...</a>',
            'single.html' : 'The single post template is used when a visitor requests a single post. For this, and all other query templates, index.php is used if the query template is not present. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'tag.html' : 'The tag template is used when visitors request posts by tag. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'taxonomy-download_category.html' : 'Category template for Easy Digital Downloads. <a href="http://www.starter.batsteek.fr/downloads/category/pictures/" class="external">Demo</a>',
            'taxonomy-download_tag.html' : 'Tag template for Easy Digital Downloads. <a href="http://www.starter.batsteek.fr/downloads/tag/unsplash/" class="external">Demo</a>',
            'taxonomy.html' : 'The taxonomy term template is used when a visitor requests a term in a custom taxonomy. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'template-store.html' : 'Custom page template for Easy Digital Downloads. <a href="http://www.starter.batsteek.fr/edd-store/" class="external">Demo</a>',
            'woocommerce.html' : 'Specific page template for WooCommerce. <a href="https://docs.woothemes.com/document/third-party-custom-theme-compatibility/" class="external">Read more...</a>',
            'page.html' : 'The page template is used when visitors request individual pages, which are a built-in template. <a href="https://developer.wordpress.org/themes/basics/template-files/" class="external">Read more...</a>',
            'smallheader.html' : 'Page template used to define an alternate master page with a smaller header.',
            'sliderheader.html' : 'Page template used to define an alternate master page with a slider header.',
            'page-slider.html' : 'Custom Page template with a slider in the header. <b>IMPORTANT</b>: Create sliderheader.html template first. <a href="http://www.starter.batsteek.fr/page-with-slider/" class="external">Demo</a>',
            'taxonomy-jetpack-portfolio-tag.html' : 'Template used to display Jetpack Portfolio tags archive.',
            'taxonomy-jetpack-portfolio-type.html' : 'Template used to display Jetpack Portfolio Project Types archive.',
            'videoheader.html' : 'Alternate Master Page template with a HTML5 video header. Note: The video playback is not available from within Pinegrow.',
            'page-videoheader.html' : 'Custom Page template with a HTML5 video in the header. NOTE: The video playback is not available from within Pinegrow. <b>IMPORTANT</b>: Create videoheader.html template first. <a href="http://www.starter.batsteek.fr/page-html5-video-header/" class="external">Demo</a>',
            'bbpress.html' : 'Specific page template for bbPress. <a href="http://www.starter.batsteek.fr/forums/" class="external">Demo</a>'
        }  
        var images = {
            'index.html' : 'wordpress.jpg',
            '404.html' : 'wordpress.jpg',
            'archive-download.html' : 'edd.jpg',
            'archive-jetpack-portfolio.html' : 'jetpack.jpg',
            'archive-jetpack-testimonial.html' : 'jetpack.jpg',
            'archive.html' : 'wordpress.jpg',
            'attachment.html' : 'wordpress.jpg',
            'author.html' : 'wordpress.jpg',
            'category.html' : 'wordpress.jpg',
            'front-page.html' : 'wordpress.jpg',
            'home.html' : 'wordpress.jpg',
            'page-nosidebar.html' : 'pg.jpg',
            'page-sidebarleft.html' : 'pg.jpg',
            'search.html' : 'wordpress.jpg',
            'single-download.html' : 'edd.jpg',
            'single-jetpack-portfolio.html' : 'jetpack.jpg',
            'single-jetpack-testimonial.html' : 'jetpack.jpg',
            'single.html' : 'wordpress.jpg',
            'tag.html' : 'wordpress.jpg',
            'taxonomy-download_category.html' : 'edd.jpg',
            'taxonomy-download_tag.html' : 'edd.jpg',
            'taxonomy.html' : 'wordpress.jpg',
            'template-store.html' : 'edd.jpg',
            'woocommerce.html' : 'woocommerce.jpg',
            'bbpress.html' : 'bbPress.jpg',
            'page.html' : 'wordpress.jpg',
            'smallheader.html' : 'pg.jpg',
            'sliderheader.html' : 'pg.jpg',
            'taxonomy-jetpack-portfolio-tag.html' : 'jetpack.jpg',
            'taxonomy-jetpack-portfolio-type.html' : 'jetpack.jpg',
            'page-slider.html' : 'pg.jpg',
            'videoheader.html' : 'pg.jpg',
            'page-videoheader.html' : 'pg.jpg'
        }  
        var order = ['index.html', 'home.html', 'front-page.html', 'page.html', 'single.html', 'archive.html', 'tag.html', 'category.html', 'taxonomy.html', 'search.html', 'attachment.html', 'author.html', '404.html', 'single-jetpack-portfolio.html', 'single-jetpack-testimonial.html', 'archive-jetpack-portfolio.html', 'taxonomy-jetpack-portfolio-tag.html', 'taxonomy-jetpack-portfolio-type.html', 'archive-jetpack-testimonial.html', 'woocommerce.html', 'bbpress.html', 'single-download.html', 'taxonomy-download_category.html', 'taxonomy-download_tag.html', 'archive-download.html', 'template-store.html', 'smallheader.html', 'sliderheader.html', 'videoheader.html', 'page-nosidebar.html', 'page-sidebarleft.html', 'page-slider.html', 'page-videoheader.html'];  
        var ignore_files = ['pinegrow', 'pinegrow.json', 'screenshots'];  
		framework.addTemplateProjectFromResourceFolder('templates/theme', null, 500, function(node, project) {
			if(node.name == 'lib.html' || node.name == 'settings.html') {
				node.required = true; //will be included in all projects
				node.tag = null;
				node.image = false;
			} else if(node.name == 'index.html') {
				node.required = true; //will be included in all projects
			} else if(ignore_files.indexOf(node.name) >= 0) {
				node.required = false;
				return false;
			}
			if(node.tag == 'page') {
				node.description = descriptions[node.name] || "Description is missing!";
				node.image = project.root.url + '/screenshots' + '/' + images[node.name];
				node.image_class = 'small';

				var idx = order.indexOf(node.name);
				if(idx >= 0) node.order = idx;
			}
		});
		/** END TEMPLATES  */


		/** START LIBRARIES  */
		framework.on_get_page_libs = function (page, list) {

			var toc = [{
					name: 'Home',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/index.html')
				},
				{
					name: 'Headers',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/header-blocks.html')
				},
				{
					name: 'Hero blocks',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/hero-blocks.html')
				},
				{
					name: 'Call to action',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/cta-blocks.html')
				},
				{
					name: 'Features &amp; Services',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/features-services-blocks.html')
				},
				{
					name: 'Content',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/content-blocks.html')
				},
				{
					name: 'Blog posts',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/posts-blocks.html')
				},
				{
					name: 'Counters',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/counter-blocks.html')
				},
				{
					name: 'Pricing',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/pricing-tables.html')
				},
				{
					name: 'Team',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/team-people-blocks.html')
				},
				{
					name: 'Testimonials',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/testimonials-blocks.html')
				},
				{
					name: 'Partners',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/partners-blocks.html')
				},
				{
					name: 'Contacts',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/contact-blocks.html')
				},
				{
					name: 'Footers',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/footer-blocks.html')
				},
				{
					name: 'Columns',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/columns.html')
				},
				{
					name: 'Social',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/social-blocks.html')
				},
				{
					name: 'Elements',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/elements.html')
				},
				{
					name: 'Dividers',
					url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/dividers.html')
				},
				/*  {
				      name: 'Elements',
				      url: url + 'bs4/elements_v2.html'
				  },
				  {
				      name: 'Dividers',
				      url: url + 'bs4/dividers.html'
				  },*/
				{
					name: 'Bootstrap Icons',
					url: 'https://library.pinegrow.com/svg/bootstrap.html'
				},
				{
					name: 'Remix Icons',
					url: 'https://library.pinegrow.com/svg/remix.html'
				}
			];

			list.push({
				name: 'Kraft Blocks',
				//resources_dir: 'pagelib',
//				resources_dir: crsaMakeUrlFromFile(url + '/pagelibs/bs4'), 
				url: crsaMakeUrlFromFile(url + '/pagelibs/bs4/index.html'),
				selector: '.pg-lib-item',
				navigation_selector: '.pg-lib-navigation',
				no_spreading: true,
				framework: framework,
				removeClasses: ['pg-lib-item'],
				pages_toc: toc,
				direct: false,
				require_saved_page: true,
				no_drag_image: true,
				show_hover_menu: true,
				on_inserted: function (pgel) {
				}
			});

		}
		/** END LIBRARIES  */


		/** START THINGS  */
		//name
		//classStr
		//pgStr
		//dataStr
		function creator(name, selectorStr, pgStr, dataStr, opts) {
			var temp = new PgComponentType('krft.' + pgStr + '_def', name);
			temp.selector = selectorStr;
			temp.sections = {};
			temp.sections[pgStr + '_options'] = {};
			temp.sections[pgStr + '_options']['name'] = name + " options";
			temp.sections[pgStr + '_options']['fields'] = {};

			for (var i = 0; i < opts.length; i++) {
				optionCreator(temp.sections[pgStr + '_options']['fields'], opts[i], pgStr, dataStr);
			}

			framework.addComponentType(temp);
		}

		function creator2(name, selectorStr, pgStr, dataStr, opts) {
			var temp = new PgComponentType('krft.' + pgStr + '_def', name);

			var parentClass = selectorStr.replace('.', '').split('>');
			if (parentClass[1]) {
				temp.selector_new = function (pgel) {
					//					return (pgel.parent.hasClass(parentClass[1].replace('.','')) && pgel.parent.parent.hasClass(parentClass[0].replace('.','')));


					var xtemp;
					try {

						xtemp = pgel.parent.hasClass(parentClass[1].replace('.', '')) && pgel.parent.parent.hasClass(parentClass[0].replace('.', ''));

					} catch (error) {
						xtemp = '';
					}

					return xtemp;


				};
			} else {

				temp.selector_new = function (pgel) {


					//					console.warn('zzzzz ' + selectorStr);
					//					return (pgel.parents.hasClass(selectorStr.replace('.','')));
					//							return (pgel.parent.hasClass(selectorStr.replace('.','')) || pgel.parent.parent.hasClass(selectorStr.replace('.','')));


					var ytemp;
					try {

						ytemp = pgel.parent.hasClass(selectorStr.replace('.', '')) || pgel.parent.parent.hasClass(selectorStr.replace('.', ''));

					} catch (yerror) {
						ytemp = '';
					}

					return ytemp;
				}


			}
			temp.parent_selector = selectorStr;
			temp.sections = {};
			temp.sections[pgStr + '_options'] = {};
			temp.sections[pgStr + '_options']['name'] = name + " options";
			temp.sections[pgStr + '_options']['fields'] = {};

			for (var i = 0; i < opts.length; i++) {
				optionCreator(temp.sections[pgStr + '_options']['fields'], opts[i], pgStr, dataStr);
			}

			framework.addComponentType(temp);
		}

		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		function optionCreator(comp, opts, pgStr, dataStr) {

			//			console.warn(pgStr + "------------------------------------------------");
			//			console.warn(opts);
			comp[pgStr + "_" + opts[0]] = {};
			comp[pgStr + "_" + opts[0]]["type"] = opts[1];
			comp[pgStr + "_" + opts[0]]["name"] = opts[2];
			comp[pgStr + "_" + opts[0]]["action"] = opts[3];
			comp[pgStr + "_" + opts[0]]["value"] = opts[4];
			comp[pgStr + "_" + opts[0]]["placeholder"] = opts[5];
			comp[pgStr + "_" + opts[0]]["live_update"] = opts[6];
			comp[pgStr + "_" + opts[0]]["slider_def_unit"] = opts[7];
			comp[pgStr + "_" + opts[0]]["file_picker"] = opts[8];
			comp[pgStr + "_" + opts[0]]["file_picker_no_proxy"] = opts[9];
			if (opts[10] != "") {
				comp[pgStr + "_" + opts[0]]["show_if"] = pgStr + "_" + opts[10];
			}
			if (opts[18] != "") {
				comp[pgStr + "_" + opts[0]]["attribute"] = pgStr + "_" + opts[18];
			}
			if (opts[19]) {
				comp[pgStr + "_" + opts[0]]["empty_attribute"] = true;
			}

			comp[pgStr + "_" + opts[0]]["options"] = opts[13];
			comp[pgStr + "_" + opts[0]]["show_empty"] = opts[14];
			comp[pgStr + "_" + opts[0]]["multiple"] = opts[15];

			if (opts[1] == "button") {
				comp[pgStr + "_" + opts[0]]["func"] = function (obj, $el) {
					pgShowQuickImageBrowser($el);
				};
			}

			if (opts[16] != "") {
				dataStr = opts[16];
			}

			if (opts[3] == "custom") {
				if (opts[11] != '') {
					comp[pgStr + "_" + opts[0]]["get_value"] = function (pgel) {
						return generalGet2(pgel, dataStr, opts[0], opts[11], opts[12], opts[17], opts);
					};
					comp[pgStr + "_" + opts[0]]["set_value"] = function (pgel, value, values, oldValue, eventType) {
						return generalSet2(pgel, value, values, oldValue, eventType, dataStr, opts[0], opts[11], opts[12], opts[17], opts[1], opts);
					}
				} else {
					comp[pgStr + "_" + opts[0]]["get_value"] = function (pgel) {
						return generalGet(pgel, dataStr, opts[0], opts[12], opts[17], opts);
					};
					comp[pgStr + "_" + opts[0]]["set_value"] = function (pgel, value, values, oldValue, eventType) {
						return generalSet(pgel, value, values, oldValue, eventType, dataStr, opts[0], opts[12], opts[17], opts[1], opts);
					}
				}
			}

		}

		function IsJsonString(str) {
			try {
				JSON.parse(str);
			} catch (e) {
				return false;
			}
			return true;
		}

		function generalGet(pgel, dataname, attrname, valueisarray, attributeisvalue, opts) {

			// console.warn(dataname);
			// console.warn(attrname);
			// console.warn(attributeisvalue);
			if (pgel) {
				var attr = pgel.getAttr(dataname);
				// console.warn(attr);
				if (attr) {
					if (attributeisvalue) {
						return attr;
					}
					if (IsJsonString(attr)) {
						var obj = JSON.parse(attr);
						var xval = obj[attrname];
						if (valueisarray) {
							xval = JSON.stringify(obj[attrname]);
						}
						return xval;
					} else {
						return attr;
					}
				}
			}
			return null;
		}

		function generalGet2(pgel, dataname, attrname, parentel, valueisarray, attributeisvalue, opts) {
			if (pgel) {
				var attr = pgel.getAttr(dataname);
				if (attr) {
					if (attributeisvalue) {
						return attr;
					}
					if (IsJsonString(attr)) {
						var obj = JSON.parse(attr);
						if (obj[parentel]) {
							var xval = null;
							if (obj[parentel][attrname]) {
								xval = obj[parentel][attrname];
								if (valueisarray) {
									xval = JSON.stringify(obj[parentel][attrname]);
								}
							}
						}
						return xval;
					} else {
						return attr;
					}
				}
			}
			return null;
		}

		function generalSet(pgel, value, values, oldValue, eventType, dataname, attrname, valueisarray, attributeisvalue, type, opts) {
			//  console.warn(value + " - generalSet - value");
			//  console.warn(dataname + " - generalSet - dataname");
			if (pgel) {
				var attr = pgel.getAttr(dataname);
				//				console.warn(attr + " - attr");
				if (value) {
					if (attr) {
						if (attributeisvalue) {
							pgel.setAttr(dataname, value);
						} else {
							if (IsJsonString(attr)) {
								attr = attr.split('&quot;').join('"');
								var obj = JSON.parse(attr);
								switch (type) {
									case "text":
										obj[attrname] = value;
										break;
									case "checkbox":
										obj[attrname] = true;
										break;
									case "slider":
										if (opts[7] != "") {
											obj[attrname] = value;
											break;
										} else {
											obj[attrname] = parseInt(value);
											break;
										}
										default:
											obj[attrname] = value;
								}

								if (valueisarray) {
									obj[attrname] = JSON.parse(value);
								}
								attr = JSON.stringify(obj);
								pgel.setAttr(dataname, attr);
							} else {
								pgel.setAttr(dataname, value);
							}
						}
					} else {
						if (attributeisvalue) {
							pgel.setAttr(dataname, value);
						} else {
							if (valueisarray) {
								pgel.setAttr(dataname, '{"' + attrname + '":' + value + '}');
							} else {
								switch (type) {
									case "text":
										pgel.setAttr(dataname, '{"' + attrname + '":"' + value + '"}');
										break;
									case "checkbox":
										pgel.setAttr(dataname, '{"' + attrname + '":true}');
										break;
									case "slider":
										if (opts[7] != "") {
											pgel.setAttr(dataname, '{"' + attrname + '":"' + value + '"}');
											break;
										} else {
											pgel.setAttr(dataname, '{"' + attrname + '":' + parseInt(value) + '}');
											break;
										}
										default:
											pgel.setAttr(dataname, '{"' + attrname + '":"' + value + '"}');
								}
							}
						}
					}
				} else {
					if (attributeisvalue) {
						pgel.removeAttr(dataname);
					} else {
						if (attr) {
							if (IsJsonString(attr)) {
								//								console.warn("json");
								attr = attr.split('&quot;').join('"');
								var obj = JSON.parse(attr);
								delete obj[attrname];
								attr = JSON.stringify(obj);
								if (attr == "{}") {
									pgel.removeAttr(dataname);
								} else {
									pgel.setAttr(dataname, attr);
								}
							} else {
								pgel.removeAttr(dataname);
							}
						}
					}
				}
			}
			return value;
		}

		function generalSet2(pgel, value, values, oldValue, eventType, dataname, attrname, parentel, valueisarray, attributeisvalue, type, opts) {
			// console.warn(value + " - generalSet2 - value");
			// console.warn(dataname + " - generalSet2 - dataname");

			if (pgel) {
				var attr = pgel.getAttr(dataname);
				if (value) {
					if (attr) {
						if (attributeisvalue) {
							pgel.setAttr(dataname, value);
						} else {
							if (IsJsonString(attr)) {
								attr = attr.split('&quot;').join('"');
								var obj = JSON.parse(attr);
								if (!obj[parentel]) {
									obj[parentel] = {};
								}
								if (obj[parentel]) {

									switch (type) {
										case "text":
											obj[parentel][attrname] = value;
											break;
										case "checkbox":
											obj[parentel][attrname] = true;
											break;
										case "slider":
											if (opts[7] != "") {
												obj[parentel][attrname] = value;
												break;
											} else {
												obj[parentel][attrname] = parseInt(value);
												break;
											}
											default:
												obj[parentel][attrname] = value;
									}

									if (valueisarray) {
										obj[parentel][attrname] = JSON.parse(value);
									}
								}
								attr = JSON.stringify(obj);
								pgel.setAttr(dataname, attr);
							} else {
								pgel.setAttr(dataname, value);
							}
						}
					} else {
						if (attributeisvalue) {
							pgel.setAttr(dataname, value);
						} else {
							if (valueisarray) {
								pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":' + value + '}}');
							} else {

								switch (type) {
									case "text":
										pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":"' + value + '"}}');
										break;
									case "checkbox":
										pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":true}}');
										break;
									case "slider":
										if (opts[7] != "") {
											pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":"' + value + '"}}');
											break;
										} else {
											pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":' + parseInt(value) + '}}');
											break;
										}
										default:
											pgel.setAttr(dataname, '{"' + parentel + '":{"' + attrname + '":"' + value + '"}}');
								}

							}
						}
					}
				} else {
					if (attributeisvalue) {
						pgel.removeAttr(dataname);
					} else {
						if (attr) {
							if (IsJsonString(attr)) {
								attr = attr.split('&quot;').join('"');
								var obj = JSON.parse(attr);
								if (obj[parentel]) {
									delete obj[parentel][attrname];
								}
								if (JSON.stringify(obj[parentel]) == "{}") {
									delete obj[parentel];
								}
								attr = JSON.stringify(obj);
								if (attr == "{}") {
									pgel.removeAttr(dataname);
								} else {
									pgel.setAttr(dataname, attr);
								}
							} else {
								pgel.removeAttr(dataname);
							}
						}
					}
				}
			}
			return value;
		}


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var anijsattributeoptions = [
			["code", "text", "Code", "custom", "if: click, on:h1, do: pulse animated, to:h2", "if: click, on:h1, do: pulse animated, to:h2", false, "", false, false, "", "", false, null, true, false, "", true, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("AniJS", ".anijs", "anijs", "data-anijs", anijsattributeoptions);

		var animations = [
			{key: 'animate__backInDown',name: 'backInDown'},
			{key: 'animate__backInLeft',name: 'backInLeft'},
			{key: 'animate__backInRight',name: 'backInRight'},
			{key: 'animate__backInUp',name: 'backInUp'},
			{key: 'animate__backOutDown',name: 'backOutDown'},
			{key: 'animate__backOutLeft',name: 'backOutLeft'},
			{key: 'animate__backOutRight',name: 'backOutRight'},
			{key: 'animate__backOutUp',name: 'backOutUp'},
			{key: 'animate__bounce',name: 'bounce'},
			{key: 'animate__bounceIn',name: 'bounceIn'},
			{key: 'animate__bounceInDown',name: 'bounceInDown'},
			{key: 'animate__bounceInLeft',name: 'bounceInLeft'},
			{key: 'animate__bounceInRight',name: 'bounceInRight'},
			{key: 'animate__bounceInUp',name: 'bounceInUp'},
			{key: 'animate__bounceOut',name: 'bounceOut'},
			{key: 'animate__bounceOutDown',name: 'bounceOutDown'},
			{key: 'animate__bounceOutLeft',name: 'bounceOutLeft'},
			{key: 'animate__bounceOutRight',name: 'bounceOutRight'},
			{key: 'animate__bounceOutUp',name: 'bounceOutUp'},
			{key: 'animate__fadeIn',name: 'fadeIn'},
			{key: 'animate__fadeInBottomLeft',name: 'fadeInBottomLeft'},
			{key: 'animate__fadeInBottomRight',name: 'fadeInBottomRight'},
			{key: 'animate__fadeInDown',name: 'fadeInDown'},
			{key: 'animate__fadeInDownBig',name: 'fadeInDownBig'},
			{key: 'animate__fadeInLeft',name: 'fadeInLeft'},
			{key: 'animate__fadeInLeftBig',name: 'fadeInLeftBig'},
			{key: 'animate__fadeInRight',name: 'fadeInRight'},
			{key: 'animate__fadeInRightBig',name: 'fadeInRightBig'},
			{key: 'animate__fadeInTopLeft',name: 'fadeInTopLeft'},
			{key: 'animate__fadeInTopRight',name: 'fadeInTopRight'},
			{key: 'animate__fadeInUp',name: 'fadeInUp'},
			{key: 'animate__fadeInUpBig',name: 'fadeInUpBig'},
			{key: 'animate__fadeOut',name: 'fadeOut'},
			{key: 'animate__fadeOutBottomLeft',name: 'fadeOutBottomLeft'},
			{key: 'animate__fadeOutBottomRight',name: 'fadeOutBottomRight'},
			{key: 'animate__fadeOutDown',name: 'fadeOutDown'},
			{key: 'animate__fadeOutDownBig',name: 'fadeOutDownBig'},
			{key: 'animate__fadeOutLeft',name: 'fadeOutLeft'},
			{key: 'animate__fadeOutLeftBig',name: 'fadeOutLeftBig'},
			{key: 'animate__fadeOutRight',name: 'fadeOutRight'},
			{key: 'animate__fadeOutRightBig',name: 'fadeOutRightBig'},
			{key: 'animate__fadeOutTopLeft',name: 'fadeOutTopLeft'},
			{key: 'animate__fadeOutTopRight',name: 'fadeOutTopRight'},
			{key: 'animate__fadeOutUp',name: 'fadeOutUp'},
			{key: 'animate__fadeOutUpBig',name: 'fadeOutUpBig'},
			{key: 'animate__flash',name: 'flash'},
			{key: 'animate__flip',name: 'flip'},
			{key: 'animate__flipInX',name: 'flipInX'},
			{key: 'animate__flipInY',name: 'flipInY'},
			{key: 'animate__flipOutX',name: 'flipOutX'},
			{key: 'animate__flipOutY',name: 'flipOutY'},
			{key: 'animate__headShake',name: 'headShake'},
			{key: 'animate__heartBeat',name: 'heartBeat'},
			{key: 'animate__hinge',name: 'hinge'},
			{key: 'animate__jackInTheBox',name: 'jackInTheBox'},
			{key: 'animate__jello',name: 'jello'},
			{key: 'animate__lightSpeedInLeft',name: 'lightSpeedInLeft'},
			{key: 'animate__lightSpeedInRight',name: 'lightSpeedInRight'},
			{key: 'animate__lightSpeedOutLeft',name: 'lightSpeedOutLeft'},
			{key: 'animate__lightSpeedOutRight',name: 'lightSpeedOutRight'},
			{key: 'animate__pulse',name: 'pulse'},
			{key: 'animate__rollIn',name: 'rollIn'},
			{key: 'animate__rollOut',name: 'rollOut'},
			{key: 'animate__rotateIn',name: 'rotateIn'},
			{key: 'animate__rotateInDownLeft',name: 'rotateInDownLeft'},
			{key: 'animate__rotateInDownRight',name: 'rotateInDownRight'},
			{key: 'animate__rotateInUpLeft',name: 'rotateInUpLeft'},
			{key: 'animate__rotateInUpRight',name: 'rotateInUpRight'},
			{key: 'animate__rotateOut',name: 'rotateOut'},
			{key: 'animate__rotateOutDownLeft',name: 'rotateOutDownLeft'},
			{key: 'animate__rotateOutDownRight',name: 'rotateOutDownRight'},
			{key: 'animate__rotateOutUpLeft',name: 'rotateOutUpLeft'},
			{key: 'animate__rotateOutUpRight',name: 'rotateOutUpRight'},
			{key: 'animate__rubberBand',name: 'rubberBand'},
			{key: 'animate__shakeX',name: 'shakeX'},
			{key: 'animate__shakeY',name: 'shakeY'},
			{key: 'animate__slideInDown',name: 'slideInDown'},
			{key: 'animate__slideInLeft',name: 'slideInLeft'},
			{key: 'animate__slideInRight',name: 'slideInRight'},
			{key: 'animate__slideInUp',name: 'slideInUp'},
			{key: 'animate__slideOutDown',name: 'slideOutDown'},
			{key: 'animate__slideOutLeft',name: 'slideOutLeft'},
			{key: 'animate__slideOutRight',name: 'slideOutRight'},
			{key: 'animate__slideOutUp',name: 'slideOutUp'},
			{key: 'animate__swing',name: 'swing'},
			{key: 'animate__tada',name: 'tada'},
			{key: 'animate__wobble',name: 'wobble'},
			{key: 'animate__zoomIn',name: 'zoomIn'},
			{key: 'animate__zoomInDown',name: 'zoomInDown'},
			{key: 'animate__zoomInLeft',name: 'zoomInLeft'},
			{key: 'animate__zoomInRight',name: 'zoomInRight'},
			{key: 'animate__zoomInUp',name: 'zoomInUp'},
			{key: 'animate__zoomOut',name: 'zoomOut'},
			{key: 'animate__zoomOutDown',name: 'zoomOutDown'},
			{key: 'animate__zoomOutLeft',name: 'zoomOutLeft'},
			{key: 'animate__zoomOutRight',name: 'zoomOutRight'},
			{key: 'animate__zoomOutUp',name: 'zoomOutUp'}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var animatedattributeoptions = [
			["animation", "select", "Animation", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["offset", "slider", "Offset", "custom", "50%", "50%", false, "%", false, false, "", "", false, null, false, false, "", false, "", false],
			["delay", "text", "Delay", "custom", "1000", "1000", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["triggerOnce", "checkbox", "Trigger Once", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Animations - Animated", ".animate__animated", "animate__animated", "data-animated-options", animatedattributeoptions);

		var aoseffects = [{
				key: 'fade',
				name: 'fade'
			},
			{
				key: 'fade-up',
				name: 'fade-up'
			},
			{
				key: 'fade-down',
				name: 'fade-down'
			},
			{
				key: 'fade-left',
				name: 'fade-left'
			},
			{
				key: 'fade-right',
				name: 'fade-right'
			},
			{
				key: 'fade-up-right',
				name: 'fade-up-right'
			},
			{
				key: 'fade-up-left',
				name: 'fade-up-left'
			},
			{
				key: 'fade-down-right',
				name: 'fade-down-right'
			},
			{
				key: 'fade-down-left',
				name: 'fade-down-left'
			},
			{
				key: 'flip-up',
				name: 'flip-up'
			},
			{
				key: 'flip-down',
				name: 'flip-down'
			},
			{
				key: 'flip-left',
				name: 'flip-left'
			},
			{
				key: 'flip-right',
				name: 'flip-right'
			},
			{
				key: 'slide-up',
				name: 'slide-up'
			},
			{
				key: 'slide-down',
				name: 'slide-down'
			},
			{
				key: 'slide-left',
				name: 'slide-left'
			},
			{
				key: 'slide-right',
				name: 'slide-right'
			},
			{
				key: 'zoom-in',
				name: 'zoom-in'
			},
			{
				key: 'zoom-in-up',
				name: 'zoom-in-up'
			},
			{
				key: 'zoom-in-down',
				name: 'zoom-in-down'
			},
			{
				key: 'zoom-in-left',
				name: 'zoom-in-left'
			},
			{
				key: 'zoom-in-right',
				name: 'zoom-in-right'
			},
			{
				key: 'zoom-out',
				name: 'zoom-out'
			},
			{
				key: 'zoom-out-up',
				name: 'zoom-out-up'
			},
			{
				key: 'zoom-out-down',
				name: 'zoom-out-down'
			},
			{
				key: 'zoom-out-left',
				name: 'zoom-out-left'
			},
			{
				key: 'zoom-out-right',
				name: 'zoom-out-right'
			}
		];
		var aosanchorplacement = [{
				key: 'top-bottom',
				name: 'top-bottom'
			},
			{
				key: 'top-center',
				name: 'top-center'
			},
			{
				key: 'top-top',
				name: 'top-top'
			},
			{
				key: 'center-bottom',
				name: 'center-bottom'
			},
			{
				key: 'center-center',
				name: 'center-center'
			},
			{
				key: 'center-top',
				name: 'center-top'
			},
			{
				key: 'bottom-bottom',
				name: 'bottom-bottom'
			},
			{
				key: 'bottom-center',
				name: 'bottom-center'
			},
			{
				key: 'bottom-top',
				name: 'bottom-top'
			}
		];
		var aoseasing = [{
				key: 'linear',
				name: 'linear'
			},
			{
				key: 'ease',
				name: 'ease'
			},
			{
				key: 'ease-in',
				name: 'ease-in'
			},
			{
				key: 'ease-out',
				name: 'ease-out'
			},
			{
				key: 'ease-in-out',
				name: 'ease-in-out'
			},
			{
				key: 'ease-in-back',
				name: 'ease-in-back'
			},
			{
				key: 'ease-out-back',
				name: 'ease-out-back'
			},
			{
				key: 'ease-in-out-back',
				name: 'ease-in-out-back'
			},
			{
				key: 'ease-in-sine',
				name: 'ease-in-sine'
			},
			{
				key: 'ease-out-sine',
				name: 'ease-out-sine'
			},
			{
				key: 'ease-in-out-sine',
				name: 'ease-in-out-sine'
			},
			{
				key: 'ease-in-quad',
				name: 'ease-in-quad'
			},
			{
				key: 'ease-out-quad',
				name: 'ease-out-quad'
			},
			{
				key: 'ease-in-out-quad',
				name: 'ease-in-out-quad'
			},
			{
				key: 'ease-in-cubic',
				name: 'ease-in-cubic'
			},
			{
				key: 'ease-out-cubic',
				name: 'ease-out-cubic'
			},
			{
				key: 'ease-in-out-cubic',
				name: 'ease-in-out-cubic'
			},
			{
				key: 'ease-in-quart',
				name: 'ease-in-quart'
			},
			{
				key: 'ease-out-quart',
				name: 'ease-out-quart'
			},
			{
				key: 'ease-in-out-quart',
				name: 'ease-in-out-quart'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var aosattributeoptions = [
			["data-aos", "select", "Effect", "custom", "", "", false, "", false, false, "", "", false, aoseffects, true, false, "data-aos", true, "", false],
			["data-aos-offset", "slider", "Offset", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-aos-offset", true, "", false],
			["data-aos-duration", "slider", "Duration", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-aos-duration", true, "", false],
			["data-aos-easing", "select", "Easing", "custom", "", "", false, "", false, false, "", "", false, aoseasing, true, false, "data-aos-easing", true, "", false],
			["data-aos-delay", "slider", "Delay", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-aos-delay", true, "", false],
			["data-aos-anchor", "text", "Anchor", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-aos-anchor", true, "", false],
			["data-aos-anchor-placement", "select", "Anchor Placement", "custom", "", "", false, "", false, false, "", "", false, aosanchorplacement, true, false, "data-aos-anchor-placement", true, "", false],
			["data-aos-once", "checkbox", "Once", "custom", "true", "", false, "", false, false, "", "", false, null, false, false, "data-aos-once", true, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Animations - AOS", ".aos", "aos", "data-aos-options", aosattributeoptions);


		var offsets = [{
				key: '100',
				name: '100'
			},
			{
				key: '200',
				name: '200'
			},
			{
				key: '300',
				name: '300'
			},
			{
				key: '400',
				name: '400'
			},
			{
				key: '500',
				name: '500'
			},
			{
				key: '600',
				name: '600'
			},
			{
				key: '700',
				name: '700'
			},
			{
				key: '800',
				name: '800'
			},
			{
				key: '900',
				name: '900'
			},
			{
				key: '1000',
				name: '1000'
			},
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var wowattributeoptions = [
			["animation", "select", "Animation", "apply_class_multiple", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["offset", "text", "Offset", "custom", "10", "10", false, "%", false, false, "", "", false, offsets, true, false, "data-wow-offset", true, "", false],
			["delay", "text", "Delay", "custom", "5s", "5s", false, "", false, false, "", "", false, null, false, false, "data-wow-delay", true, "", false],
			["duration", "text", "Duration", "custom", "2s", "2s", false, "", false, false, "", "", false, null, false, false, "data-wow-duration", true, "", false],
			["iteration", "text", "Iteration", "custom", "", "infinite, 3", false, "", false, false, "", "", false, null, false, false, "data-wow-iteration", true, "", false],
			["mobile", "checkbox", "Disable On Mobile", "custom", "false", "", false, "", false, false, "", "", false, null, false, false, "data-wow-mobile", true, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Animations - Animated WOW", ".wow", "wow", "data-wow-options", wowattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var countdownattributeoptions = [
			["date", "text", "Date", "custom", "2032-04-23T18:25:43.511Z", "2032-04-23T18:25:43.511Z", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoStart", "checkbox", "Auto Start", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["text", "text", "Text", "custom", "%s days, %s hours, %s minutes, %s seconds", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fast", "checkbox", "Fast", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Count Down", ".countdown", "countdown", "data-countdown-options", countdownattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var counterupattributeoptions = [
			["time", "slider", "Time", "custom", "1000", "1000", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["delay", "slider", "Delay", "custom", "10", "10", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["offset", "slider", "Offset", "custom", "70", "70", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["beginAt", "slider", "Begin At", "custom", "100", "100", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Counter Up", ".counterup", "counterup", "data-counterup-options", counterupattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var easytabsattributeoptions = [
			["animate", "checkbox", "animate", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["animationSpeed", "slider", "animationSpeed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cache", "checkbox", "cache", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsedByDefault", "checkbox", "collapsedByDefault", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsedClass", "text", "collapsedClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsible", "checkbox", "collapsible", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["containerClass", "text", "containerClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cycle", "slider", "cycle", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["defaultTab", "text", "defaultTab", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelActiveClass", "text", "panelActiveClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelClass", "text", "panelClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelContext", "text", "panelContext", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabActiveClass", "text", "tabActiveClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabsClass", "text", "tabsClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabClass", "text", "tabClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabs", "text", "tabs", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionIn", "text", "transitionIn", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionInEasing", "text", "transitionInEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionOut", "text", "transitionOut", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionOutEasing", "text", "transitionOutEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionCollapse", "text", "transitionCollapse", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionCollapseEasing", "text", "transitionCollapseEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionUncollapse", "text", "transitionUncollapse", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionUncollapseEasing", "text", "transitionUncollapseEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["updateHash", "checkbox", "updateHash", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["uiTabs", "checkbox", "uiTabs", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["animate", "checkbox", "animate", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["animationSpeed", "slider", "animationSpeed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cache", "checkbox", "cache", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsedByDefault", "checkbox", "collapsedByDefault", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsedClass", "text", "collapsedClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["collapsible", "checkbox", "collapsible", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["containerClass", "text", "containerClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cycle", "slider", "cycle", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["defaultTab", "text", "defaultTab", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelActiveClass", "text", "panelActiveClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelClass", "text", "panelClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["panelContext", "text", "panelContext", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabActiveClass", "text", "tabActiveClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabsClass", "text", "tabsClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabClass", "text", "tabClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tabs", "text", "tabs", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionIn", "text", "transitionIn", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionInEasing", "text", "transitionInEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionOut", "text", "transitionOut", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionOutEasing", "text", "transitionOutEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionCollapse", "text", "transitionCollapse", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionCollapseEasing", "text", "transitionCollapseEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionUncollapse", "text", "transitionUncollapse", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionUncollapseEasing", "text", "transitionUncollapseEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["updateHash", "checkbox", "updateHash", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["uiTabs", "checkbox", "uiTabs", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Easy Tabs", ".easytabs", "easytabs", "data-easytabs-options", easytabsattributeoptions);


		var cheeffects = [{
				key: 'style1',
				name: 'style1'
			},
			{
				key: 'style2',
				name: 'style2'
			},
			{
				key: 'style3',
				name: 'style3'
			},
			{
				key: 'style4',
				name: 'style4'
			},
			{
				key: 'style5',
				name: 'style5'
			},
			{
				key: 'style6',
				name: 'style6'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var cheattributeoptions = [
			["effect", "select", "Effect", "apply_class", "", "", false, "", false, false, "", "", false, cheeffects, true, false, "", false, "", false],
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Effects - Caption Hover Effects", ".che", "che", "", cheattributeoptions);


		var heffects = [{
				key: 'h-back-pulse',
				name: 'back-pulse'
			},
			{
				key: 'h-backward',
				name: 'backward'
			},
			{
				key: 'h-bob',
				name: 'bob'
			},
			{
				key: 'h-border-fade',
				name: 'border-fade'
			},
			{
				key: 'h-bounce-in',
				name: 'bounce-in'
			},
			{
				key: 'h-bounce-out',
				name: 'bounce-out'
			},
			{
				key: 'h-bounce-to-bottom',
				name: 'bounce-to-bottom'
			},
			{
				key: 'h-bounce-to-left',
				name: 'bounce-to-left'
			},
			{
				key: 'h-bounce-to-right',
				name: 'bounce-to-right'
			},
			{
				key: 'h-bounce-to-top',
				name: 'bounce-to-top'
			},
			{
				key: 'h-box-shadow-inset',
				name: 'box-shadow-inset'
			},
			{
				key: 'h-box-shadow-outset',
				name: 'box-shadow-outset'
			},
			{
				key: 'h-bubble-bottom',
				name: 'bubble-bottom'
			},
			{
				key: 'h-bubble-float-bottom',
				name: 'bubble-float-bottom'
			},
			{
				key: 'h-bubble-float-left',
				name: 'bubble-float-left'
			},
			{
				key: 'h-bubble-float-right',
				name: 'bubble-float-right'
			},
			{
				key: 'h-bubble-float-top',
				name: 'bubble-float-top'
			},
			{
				key: 'h-bubble-left',
				name: 'bubble-left'
			},
			{
				key: 'h-bubble-right',
				name: 'bubble-right'
			},
			{
				key: 'h-bubble-top',
				name: 'bubble-top'
			},
			{
				key: 'h-buzz',
				name: 'buzz'
			},
			{
				key: 'h-buzz-out',
				name: 'buzz-out'
			},
			{
				key: 'h-curl-bottom-left',
				name: 'curl-bottom-left'
			},
			{
				key: 'h-curl-bottom-right',
				name: 'curl-bottom-right'
			},
			{
				key: 'h-curl-top-left',
				name: 'curl-top-left'
			},
			{
				key: 'h-curl-top-right',
				name: 'curl-top-right'
			},
			{
				key: 'h-fade',
				name: 'fade'
			},
			{
				key: 'h-float',
				name: 'float'
			},
			{
				key: 'h-float-shadow',
				name: 'float-shadow'
			},
			{
				key: 'h-forward',
				name: 'forward'
			},
			{
				key: 'h-glow',
				name: 'glow'
			},
			{
				key: 'h-grow',
				name: 'grow'
			},
			{
				key: 'h-grow-rotate',
				name: 'grow-rotate'
			},
			{
				key: 'h-grow-shadow',
				name: 'grow-shadow'
			},
			{
				key: 'h-hang',
				name: 'hang'
			},
			{
				key: 'h-hollow',
				name: 'hollow'
			},
			{
				key: 'h-icon',
				name: 'icon'
			},
			{
				key: 'h-icon-back',
				name: 'icon-back'
			},
			{
				key: 'h-icon-bob',
				name: 'icon-bob'
			},
			{
				key: 'h-icon-bounce',
				name: 'icon-bounce'
			},
			{
				key: 'h-icon-buzz',
				name: 'icon-buzz'
			},
			{
				key: 'h-icon-buzz-out',
				name: 'icon-buzz-out'
			},
			{
				key: 'h-icon-down',
				name: 'icon-down'
			},
			{
				key: 'h-icon-drop',
				name: 'icon-drop'
			},
			{
				key: 'h-icon-fade',
				name: 'icon-fade'
			},
			{
				key: 'h-icon-float',
				name: 'icon-float'
			},
			{
				key: 'h-icon-float-away',
				name: 'icon-float-away'
			},
			{
				key: 'h-icon-forward',
				name: 'icon-forward'
			},
			{
				key: 'h-icon-grow',
				name: 'icon-grow'
			},
			{
				key: 'h-icon-grow-rotate',
				name: 'icon-grow-rotate'
			},
			{
				key: 'h-icon-hang',
				name: 'icon-hang'
			},
			{
				key: 'h-icon-pop',
				name: 'icon-pop'
			},
			{
				key: 'h-icon-pulse',
				name: 'icon-pulse'
			},
			{
				key: 'h-icon-pulse-grow',
				name: 'icon-pulse-grow'
			},
			{
				key: 'h-icon-pulse-shrink',
				name: 'icon-pulse-shrink'
			},
			{
				key: 'h-icon-push',
				name: 'icon-push'
			},
			{
				key: 'h-icon-rotate',
				name: 'icon-rotate'
			},
			{
				key: 'h-icon-shrink',
				name: 'icon-shrink'
			},
			{
				key: 'h-icon-sink',
				name: 'icon-sink'
			},
			{
				key: 'h-icon-sink-away',
				name: 'icon-sink-away'
			},
			{
				key: 'h-icon-spin',
				name: 'icon-spin'
			},
			{
				key: 'h-icon-up',
				name: 'icon-up'
			},
			{
				key: 'h-icon-wobble-horizontal',
				name: 'icon-wobble-horizontal'
			},
			{
				key: 'h-icon-wobble-vertical',
				name: 'icon-wobble-vertical'
			},
			{
				key: 'h-outline-in',
				name: 'outline-in'
			},
			{
				key: 'h-outline-out',
				name: 'outline-out'
			},
			{
				key: 'h-overline-from-center',
				name: 'overline-from-center'
			},
			{
				key: 'h-overline-from-left',
				name: 'overline-from-left'
			},
			{
				key: 'h-overline-from-right',
				name: 'overline-from-right'
			},
			{
				key: 'h-overline-reveal',
				name: 'overline-reveal'
			},
			{
				key: 'h-pop',
				name: 'pop'
			},
			{
				key: 'h-pulse',
				name: 'pulse'
			},
			{
				key: 'h-pulse-grow',
				name: 'pulse-grow'
			},
			{
				key: 'h-pulse-shrink',
				name: 'pulse-shrink'
			},
			{
				key: 'h-push',
				name: 'push'
			},
			{
				key: 'h-radial-in',
				name: 'radial-in'
			},
			{
				key: 'h-radial-out',
				name: 'radial-out'
			},
			{
				key: 'h-rectangle-in',
				name: 'rectangle-in'
			},
			{
				key: 'h-rectangle-out',
				name: 'rectangle-out'
			},
			{
				key: 'h-reveal',
				name: 'reveal'
			},
			{
				key: 'h-ripple-in',
				name: 'ripple-in'
			},
			{
				key: 'h-ripple-out',
				name: 'ripple-out'
			},
			{
				key: 'h-rotate',
				name: 'rotate'
			},
			{
				key: 'h-round-corners',
				name: 'round-corners'
			},
			{
				key: 'h-shadow',
				name: 'shadow'
			},
			{
				key: 'h-shadow-radial',
				name: 'shadow-radial'
			},
			{
				key: 'h-shrink',
				name: 'shrink'
			},
			{
				key: 'h-shutter-in-horizontal',
				name: 'shutter-in-horizontal'
			},
			{
				key: 'h-shutter-in-vertical',
				name: 'shutter-in-vertical'
			},
			{
				key: 'h-shutter-out-horizontal',
				name: 'shutter-out-horizontal'
			},
			{
				key: 'h-shutter-out-vertical',
				name: 'shutter-out-vertical'
			},
			{
				key: 'h-sink',
				name: 'sink'
			},
			{
				key: 'h-skew',
				name: 'skew'
			},
			{
				key: 'h-skew-backward',
				name: 'skew-backward'
			},
			{
				key: 'h-skew-forward',
				name: 'skew-forward'
			},
			{
				key: 'h-sweep-to-bottom',
				name: 'sweep-to-bottom'
			},
			{
				key: 'h-sweep-to-left',
				name: 'sweep-to-left'
			},
			{
				key: 'h-sweep-to-right',
				name: 'sweep-to-right'
			},
			{
				key: 'h-sweep-to-top',
				name: 'sweep-to-top'
			},
			{
				key: 'h-trim',
				name: 'trim'
			},
			{
				key: 'h-underline-from-center',
				name: 'underline-from-center'
			},
			{
				key: 'h-underline-from-left',
				name: 'underline-from-left'
			},
			{
				key: 'h-underline-from-right',
				name: 'underline-from-right'
			},
			{
				key: 'h-underline-reveal',
				name: 'underline-reveal'
			},
			{
				key: 'h-wobble-bottom',
				name: 'wobble-bottom'
			},
			{
				key: 'h-wobble-horizontal',
				name: 'wobble-horizontal'
			},
			{
				key: 'h-wobble-skew',
				name: 'wobble-skew'
			},
			{
				key: 'h-wobble-to-bottom-right',
				name: 'wobble-to-bottom-right'
			},
			{
				key: 'h-wobble-to-top-right',
				name: 'wobble-to-top-right'
			},
			{
				key: 'h-wobble-top',
				name: 'wobble-top'
			},
			{
				key: 'h-wobble-vertical',
				name: 'wobble-vertical'
			},
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var hattributeoptions = [
			["effect", "select", "Effect", "apply_class", "", "", false, "", false, false, "", "", false, heffects, true, false, "", false, "", false],
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Effects - Hover.css", ".h", "h", "", hattributeoptions);


		var heieffects = [{
				key: 'effect-apollo',
				name: 'apollo'
			},
			{
				key: 'effect-bubba',
				name: 'bubba'
			},
			{
				key: 'effect-chico',
				name: 'chico'
			},
			{
				key: 'effect-dexter',
				name: 'dexter'
			},
			{
				key: 'effect-duke',
				name: 'duke'
			},
			{
				key: 'effect-goliath',
				name: 'goliath'
			},
			{
				key: 'effect-hera',
				name: 'hera'
			},
			{
				key: 'effect-honey',
				name: 'honey'
			},
			{
				key: 'effect-jazz',
				name: 'jazz'
			},
			{
				key: 'effect-julia',
				name: 'julia'
			},
			{
				key: 'effect-kira',
				name: 'kira'
			},
			{
				key: 'effect-layla',
				name: 'layla'
			},
			{
				key: 'effect-lexi',
				name: 'lexi'
			},
			{
				key: 'effect-lily',
				name: 'lily'
			},
			{
				key: 'effect-marley',
				name: 'marley'
			},
			{
				key: 'effect-milo',
				name: 'milo'
			},
			{
				key: 'effect-ming',
				name: 'ming'
			},
			{
				key: 'effect-moses',
				name: 'moses'
			},
			{
				key: 'effect-oscar',
				name: 'oscar'
			},
			{
				key: 'effect-phoebe',
				name: 'phoebe'
			},
			{
				key: 'effect-romeo',
				name: 'romeo'
			},
			{
				key: 'effect-roxy',
				name: 'roxy'
			},
			{
				key: 'effect-ruby',
				name: 'ruby'
			},
			{
				key: 'effect-sadie',
				name: 'sadie'
			},
			{
				key: 'effect-sarah',
				name: 'sarah'
			},
			{
				key: 'effect-selena',
				name: 'selena'
			},
			{
				key: 'effect-steve',
				name: 'steve'
			},
			{
				key: 'effect-terry',
				name: 'terry'
			},
			{
				key: 'effect-winston',
				name: 'winston'
			},
			{
				key: 'effect-zoe',
				name: 'zoe'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var heiattributeoptions = [
			["effect", "select", "Effect", "apply_class", "", "", false, "", false, false, "", "", false, heieffects, true, false, "", false, "", false],
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Effects - Hover Effect Ideas", ".hei", "hei", "", heiattributeoptions);


		var iheffects = [
			// {key: 'imghvr-blur', name: 'blur'},
			// {key: 'imghvr-fade', name: 'fade'},
			// {key: 'imghvr-flip-diag-1', name: 'flip-diag-1'},
			// {key: 'imghvr-flip-diag-2', name: 'flip-diag-2'},
			// {key: 'imghvr-flip-horiz', name: 'flip-horiz'},
			// {key: 'imghvr-flip-vert', name: 'flip-vert'},
			// {key: 'imghvr-fold-down', name: 'fold-down'},
			// {key: 'imghvr-fold-left', name: 'fold-left'},
			// {key: 'imghvr-fold-right', name: 'fold-right'},
			// {key: 'imghvr-fold-up', name: 'fold-up'},
			// {key: 'imghvr-hinge-down', name: 'hinge-down'},
			// {key: 'imghvr-hinge-left', name: 'hinge-left'},
			// {key: 'imghvr-hinge-right', name: 'hinge-right'},
			// {key: 'imghvr-hinge-up', name: 'hinge-up'},
			// {key: 'imghvr-push-down', name: 'push-down'},
			// {key: 'imghvr-push-left', name: 'push-left'},
			// {key: 'imghvr-push-right', name: 'push-right'},
			// {key: 'imghvr-push-up', name: 'push-up'},
			// {key: 'imghvr-reveal-down', name: 'reveal-down'},
			// {key: 'imghvr-reveal-left', name: 'reveal-left'},
			// {key: 'imghvr-reveal-right', name: 'reveal-right'},
			// {key: 'imghvr-reveal-up', name: 'reveal-up'},
			// {key: 'imghvr-shutter-in-horiz', name: 'shutter-in-horiz'},
			// {key: 'imghvr-shutter-in-out-diag-1', name: 'shutter-in-out-diag-1'},
			// {key: 'imghvr-shutter-in-out-diag-2', name: 'shutter-in-out-diag-2'},
			// {key: 'imghvr-shutter-in-out-horiz', name: 'shutter-in-out-horiz'},
			// {key: 'imghvr-shutter-in-out-vert', name: 'shutter-in-out-vert'},
			// {key: 'imghvr-shutter-in-vert', name: 'shutter-in-vert'},
			// {key: 'imghvr-shutter-out-diag-1', name: 'shutter-out-diag-1'},
			// {key: 'imghvr-shutter-out-diag-2', name: 'shutter-out-diag-2'},
			// {key: 'imghvr-shutter-out-horiz', name: 'shutter-out-horiz'},
			// {key: 'imghvr-shutter-out-vert', name: 'shutter-out-vert'},
			// {key: 'imghvr-slide-down', name: 'slide-down'},
			// {key: 'imghvr-slide-left', name: 'slide-left'},
			// {key: 'imghvr-slide-right', name: 'slide-right'},
			// {key: 'imghvr-slide-up', name: 'slide-up'},
			// {key: 'imghvr-zoom-in', name: 'zoom-in'},
			// {key: 'imghvr-zoom-out', name: 'zoom-out'},
			// {key: 'imghvr-zoom-out-down', name: 'zoom-out-down'},
			// {key: 'imghvr-zoom-out-flip-horiz', name: 'zoom-out-flip-horiz'},
			// {key: 'imghvr-zoom-out-flip-vert', name: 'zoom-out-flip-vert'},
			// {key: 'imghvr-zoom-out-left', name: 'zoom-out-left'},
			// {key: 'imghvr-zoom-out-right', name: 'zoom-out-right'},
			// {key: 'imghvr-zoom-out-up', name: 'zoom-out-up'}
			{
				key: 'imghvr-blinds-down',
				name: 'blinds-down'
			},
			{
				key: 'imghvr-blinds-horiz',
				name: 'blinds-horiz'
			},
			{
				key: 'imghvr-blinds-left',
				name: 'blinds-left'
			},
			{
				key: 'imghvr-blinds-right',
				name: 'blinds-right'
			},
			{
				key: 'imghvr-blinds-up',
				name: 'blinds-up'
			},
			{
				key: 'imghvr-blinds-vert',
				name: 'blinds-vert'
			},
			{
				key: 'imghvr-blocks-float-down',
				name: 'blocks-float-down'
			},
			{
				key: 'imghvr-blocks-float-left',
				name: 'blocks-float-left'
			},
			{
				key: 'imghvr-blocks-float-right',
				name: 'blocks-float-right'
			},
			{
				key: 'imghvr-blocks-float-up',
				name: 'blocks-float-up'
			},
			{
				key: 'imghvr-blocks-in',
				name: 'blocks-in'
			},
			{
				key: 'imghvr-blocks-out',
				name: 'blocks-out'
			},
			{
				key: 'imghvr-blocks-rotate-in-left',
				name: 'blocks-rotate-in-left'
			},
			{
				key: 'imghvr-blocks-rotate-in-right',
				name: 'blocks-rotate-in-right'
			},
			{
				key: 'imghvr-blocks-rotate-left',
				name: 'blocks-rotate-left'
			},
			{
				key: 'imghvr-blocks-rotate-right',
				name: 'blocks-rotate-right'
			},
			{
				key: 'imghvr-blocks-zoom-bottom-left',
				name: 'blocks-zoom-bottom-left'
			},
			{
				key: 'imghvr-blocks-zoom-bottom-right',
				name: 'blocks-zoom-bottom-right'
			},
			{
				key: 'imghvr-blocks-zoom-top-left',
				name: 'blocks-zoom-top-left'
			},
			{
				key: 'imghvr-blocks-zoom-top-right',
				name: 'blocks-zoom-top-right'
			},
			{
				key: 'imghvr-blur',
				name: 'blur'
			},
			{
				key: 'imghvr-book-open-down',
				name: 'book-open-down'
			},
			{
				key: 'imghvr-book-open-horiz',
				name: 'book-open-horiz'
			},
			{
				key: 'imghvr-book-open-left',
				name: 'book-open-left'
			},
			{
				key: 'imghvr-book-open-right',
				name: 'book-open-right'
			},
			{
				key: 'imghvr-book-open-up',
				name: 'book-open-up'
			},
			{
				key: 'imghvr-book-open-vert',
				name: 'book-open-vert'
			},
			{
				key: 'imghvr-border-reveal-bottom-left',
				name: 'border-reveal-bottom-left'
			},
			{
				key: 'imghvr-border-reveal-bottom-right',
				name: 'border-reveal-bottom-right'
			},
			{
				key: 'imghvr-border-reveal-cc-1',
				name: 'border-reveal-cc-1'
			},
			{
				key: 'imghvr-border-reveal-cc-2',
				name: 'border-reveal-cc-2'
			},
			{
				key: 'imghvr-border-reveal-cc-3',
				name: 'border-reveal-cc-3'
			},
			{
				key: 'imghvr-border-reveal-ccc-1',
				name: 'border-reveal-ccc-1'
			},
			{
				key: 'imghvr-border-reveal-ccc-2',
				name: 'border-reveal-ccc-2'
			},
			{
				key: 'imghvr-border-reveal-ccc-3',
				name: 'border-reveal-ccc-3'
			},
			{
				key: 'imghvr-border-reveal-corners-1',
				name: 'border-reveal-corners-1'
			},
			{
				key: 'imghvr-border-reveal-corners-2',
				name: 'border-reveal-corners-2'
			},
			{
				key: 'imghvr-border-reveal-horiz',
				name: 'border-reveal-horiz'
			},
			{
				key: 'imghvr-border-reveal-top-left',
				name: 'border-reveal-top-left'
			},
			{
				key: 'imghvr-border-reveal-top-right',
				name: 'border-reveal-top-right'
			},
			{
				key: 'imghvr-border-reveal-vert',
				name: 'border-reveal-vert'
			},
			{
				key: 'imghvr-bounce-in',
				name: 'bounce-in'
			},
			{
				key: 'imghvr-bounce-in-down',
				name: 'bounce-in-down'
			},
			{
				key: 'imghvr-bounce-in-left',
				name: 'bounce-in-left'
			},
			{
				key: 'imghvr-bounce-in-right',
				name: 'bounce-in-right'
			},
			{
				key: 'imghvr-bounce-in-up',
				name: 'bounce-in-up'
			},
			{
				key: 'imghvr-bounce-out',
				name: 'bounce-out'
			},
			{
				key: 'imghvr-bounce-out-down',
				name: 'bounce-out-down'
			},
			{
				key: 'imghvr-bounce-out-left',
				name: 'bounce-out-left'
			},
			{
				key: 'imghvr-bounce-out-right',
				name: 'bounce-out-right'
			},
			{
				key: 'imghvr-bounce-out-up',
				name: 'bounce-out-up'
			},
			{
				key: 'imghvr-center',
				name: 'center'
			},
			{
				key: 'imghvr-circle-bottom-left',
				name: 'circle-bottom-left'
			},
			{
				key: 'imghvr-circle-bottom-right',
				name: 'circle-bottom-right'
			},
			{
				key: 'imghvr-circle-down',
				name: 'circle-down'
			},
			{
				key: 'imghvr-circle-left',
				name: 'circle-left'
			},
			{
				key: 'imghvr-circle-right',
				name: 'circle-right'
			},
			{
				key: 'imghvr-circle-top-left',
				name: 'circle-top-left'
			},
			{
				key: 'imghvr-circle-top-right',
				name: 'circle-top-right'
			},
			{
				key: 'imghvr-circle-up',
				name: 'circle-up'
			},
			{
				key: 'imghvr-cube-down',
				name: 'cube-down'
			},
			{
				key: 'imghvr-cube-left',
				name: 'cube-left'
			},
			{
				key: 'imghvr-cube-right',
				name: 'cube-right'
			},
			{
				key: 'imghvr-cube-up',
				name: 'cube-up'
			},
			{
				key: 'imghvr-dive',
				name: 'dive'
			},
			{
				key: 'imghvr-dive-cc',
				name: 'dive-cc'
			},
			{
				key: 'imghvr-dive-ccc',
				name: 'dive-ccc'
			},
			{
				key: 'imghvr-fade',
				name: 'fade'
			},
			{
				key: 'imghvr-fade-in-down',
				name: 'fade-in-down'
			},
			{
				key: 'imghvr-fade-in-left',
				name: 'fade-in-left'
			},
			{
				key: 'imghvr-fade-in-right',
				name: 'fade-in-right'
			},
			{
				key: 'imghvr-fade-in-up',
				name: 'fade-in-up'
			},
			{
				key: 'imghvr-fall-away-cc',
				name: 'fall-away-cc'
			},
			{
				key: 'imghvr-fall-away-ccc',
				name: 'fall-away-ccc'
			},
			{
				key: 'imghvr-fall-away-horiz',
				name: 'fall-away-horiz'
			},
			{
				key: 'imghvr-fall-away-vert',
				name: 'fall-away-vert'
			},
			{
				key: 'imghvr-flip-diag-1',
				name: 'flip-diag-1'
			},
			{
				key: 'imghvr-flip-diag-2',
				name: 'flip-diag-2'
			},
			{
				key: 'imghvr-flip-horiz',
				name: 'flip-horiz'
			},
			{
				key: 'imghvr-flip-vert',
				name: 'flip-vert'
			},
			{
				key: 'imghvr-fold-down',
				name: 'fold-down'
			},
			{
				key: 'imghvr-fold-l',
				name: 'fold-l'
			},
			{
				key: 'imghvr-fold-right',
				name: 'fold-right'
			},
			{
				key: 'imghvr-fold-up',
				name: 'fold-up'
			},
			{
				key: 'imghvr-grad-bottom-left',
				name: 'grad-bottom-left'
			},
			{
				key: 'imghvr-grad-bottom-right',
				name: 'grad-bottom-right'
			},
			{
				key: 'imghvr-grad-down',
				name: 'grad-down'
			},
			{
				key: 'imghvr-grad-left',
				name: 'grad-left'
			},
			{
				key: 'imghvr-grad-radial-in',
				name: 'grad-radial-in'
			},
			{
				key: 'imghvr-grad-radial-out',
				name: 'grad-radial-out'
			},
			{
				key: 'imghvr-grad-right',
				name: 'grad-right'
			},
			{
				key: 'imghvr-grad-top-left',
				name: 'grad-top-left'
			},
			{
				key: 'imghvr-grad-top-right',
				name: 'grad-top-right'
			},
			{
				key: 'imghvr-grad-up',
				name: 'grad-up'
			},
			{
				key: 'imghvr-hinge-down',
				name: 'hinge-down'
			},
			{
				key: 'imghvr-hinge-left',
				name: 'hinge-left'
			},
			{
				key: 'imghvr-hinge-right',
				name: 'hinge-right'
			},
			{
				key: 'imghvr-hinge-up',
				name: 'hinge-up'
			},
			{
				key: 'imghvr-image-rotate-left',
				name: 'image-rotate-left'
			},
			{
				key: 'imghvr-image-rotate-right',
				name: 'image-rotate-right'
			},
			{
				key: 'imghvr-image-zoom-center',
				name: 'image-zoom-center'
			},
			{
				key: 'imghvr-image-zoom-out',
				name: 'image-zoom-out'
			},
			{
				key: 'imghvr-lightspeed-in-left',
				name: 'lightspeed-in-left'
			},
			{
				key: 'imghvr-lightspeed-in-right',
				name: 'lightspeed-in-right'
			},
			{
				key: 'imghvr-lightspeed-out-left',
				name: 'lightspeed-out-left'
			},
			{
				key: 'imghvr-lightspeed-out-right',
				name: 'lightspeed-out-right'
			},
			{
				key: 'imghvr-modal-hinge-down',
				name: 'modal-hinge-down'
			},
			{
				key: 'imghvr-modal-hinge-left',
				name: 'modal-hinge-left'
			},
			{
				key: 'imghvr-modal-hinge-right',
				name: 'modal-hinge-right'
			},
			{
				key: 'imghvr-modal-hinge-up',
				name: 'modal-hinge-up'
			},
			{
				key: 'imghvr-modal-slide-down',
				name: 'modal-slide-down'
			},
			{
				key: 'imghvr-modal-slide-left',
				name: 'modal-slide-left'
			},
			{
				key: 'imghvr-modal-slide-right',
				name: 'modal-slide-right'
			},
			{
				key: 'imghvr-modal-slide-up',
				name: 'modal-slide-up'
			},
			{
				key: 'imghvr-parallax-down',
				name: 'parallax-down'
			},
			{
				key: 'imghvr-parallax-left',
				name: 'parallax-left'
			},
			{
				key: 'imghvr-parallax-right',
				name: 'parallax-right'
			},
			{
				key: 'imghvr-parallax-up',
				name: 'parallax-up'
			},
			{
				key: 'imghvr-pivot-in-bottom-left',
				name: 'pivot-in-bottom-left'
			},
			{
				key: 'imghvr-pivot-in-bottom-right',
				name: 'pivot-in-bottom-right'
			},
			{
				key: 'imghvr-pivot-in-top-left',
				name: 'pivot-in-top-left'
			},
			{
				key: 'imghvr-pivot-in-top-right',
				name: 'pivot-in-top-right'
			},
			{
				key: 'imghvr-pivot-out-bottom-left',
				name: 'pivot-out-bottom-left'
			},
			{
				key: 'imghvr-pivot-out-bottom-right',
				name: 'pivot-out-bottom-right'
			},
			{
				key: 'imghvr-pivot-out-top-left',
				name: 'pivot-out-top-left'
			},
			{
				key: 'imghvr-pivot-out-top-right',
				name: 'pivot-out-top-right'
			},
			{
				key: 'imghvr-pixel-bottom-left',
				name: 'pixel-bottom-left'
			},
			{
				key: 'imghvr-pixel-bottom-right',
				name: 'pixel-bottom-right'
			},
			{
				key: 'imghvr-pixel-down',
				name: 'pixel-down'
			},
			{
				key: 'imghvr-pixel-left',
				name: 'pixel-left'
			},
			{
				key: 'imghvr-pixel-right',
				name: 'pixel-right'
			},
			{
				key: 'imghvr-pixel-top-left',
				name: 'pixel-top-left'
			},
			{
				key: 'imghvr-pixel-top-right',
				name: 'pixel-top-right'
			},
			{
				key: 'imghvr-pixel-up',
				name: 'pixel-up'
			},
			{
				key: 'imghvr-push-down',
				name: 'push-down'
			},
			{
				key: 'imghvr-push-left',
				name: 'push-left'
			},
			{
				key: 'imghvr-push-right',
				name: 'push-right'
			},
			{
				key: 'imghvr-push-up',
				name: 'push-up'
			},
			{
				key: 'imghvr-reveal-bottom-left',
				name: 'reveal-bottom-left'
			},
			{
				key: 'imghvr-reveal-bottom-right',
				name: 'reveal-bottom-right'
			},
			{
				key: 'imghvr-reveal-down',
				name: 'reveal-down'
			},
			{
				key: 'imghvr-reveal-left',
				name: 'reveal-left'
			},
			{
				key: 'imghvr-reveal-right',
				name: 'reveal-right'
			},
			{
				key: 'imghvr-reveal-top-left',
				name: 'reveal-top-left'
			},
			{
				key: 'imghvr-reveal-top-right',
				name: 'reveal-top-right'
			},
			{
				key: 'imghvr-reveal-up',
				name: 'reveal-up'
			},
			{
				key: 'imghvr-shift-bottom-left',
				name: 'shift-bottom-left'
			},
			{
				key: 'imghvr-shift-bottom-right',
				name: 'shift-bottom-right'
			},
			{
				key: 'imghvr-shift-top-left',
				name: 'shift-top-left'
			},
			{
				key: 'imghvr-shift-top-right',
				name: 'shift-top-right'
			},
			{
				key: 'imghvr-shutter-in-horiz',
				name: 'shutter-in-horiz'
			},
			{
				key: 'imghvr-shutter-in-out-diag-1',
				name: 'shutter-in-out-diag-1'
			},
			{
				key: 'imghvr-shutter-in-out-diag-2',
				name: 'shutter-in-out-diag-2'
			},
			{
				key: 'imghvr-shutter-in-out-horiz',
				name: 'shutter-in-out-horiz'
			},
			{
				key: 'imghvr-shutter-in-out-vert',
				name: 'shutter-in-out-vert'
			},
			{
				key: 'imghvr-shutter-in-vert',
				name: 'shutter-in-vert'
			},
			{
				key: 'imghvr-shutter-out-diag-1',
				name: 'shutter-out-diag-1'
			},
			{
				key: 'imghvr-shutter-out-diag-2',
				name: 'shutter-out-diag-2'
			},
			{
				key: 'imghvr-shutter-out-horiz',
				name: 'shutter-out-horiz'
			},
			{
				key: 'imghvr-shutter-out-vert',
				name: 'shutter-out-vert'
			},
			{
				key: 'imghvr-slide-bottom-left',
				name: 'slide-bottom-left'
			},
			{
				key: 'imghvr-slide-bottom-right',
				name: 'slide-bottom-right'
			},
			{
				key: 'imghvr-slide-down',
				name: 'slide-down'
			},
			{
				key: 'imghvr-slide-left',
				name: 'slide-left'
			},
			{
				key: 'imghvr-slide-right',
				name: 'slide-right'
			},
			{
				key: 'imghvr-slide-top-left',
				name: 'slide-top-left'
			},
			{
				key: 'imghvr-slide-top-right',
				name: 'slide-top-right'
			},
			{
				key: 'imghvr-slide-up',
				name: 'slide-up'
			},
			{
				key: 'imghvr-stack-bottom-left',
				name: 'stack-bottom-left'
			},
			{
				key: 'imghvr-stack-bottom-right',
				name: 'stack-bottom-right'
			},
			{
				key: 'imghvr-stack-down',
				name: 'stack-down'
			},
			{
				key: 'imghvr-stack-left',
				name: 'stack-left'
			},
			{
				key: 'imghvr-stack-right',
				name: 'stack-right'
			},
			{
				key: 'imghvr-stack-top-left',
				name: 'stack-top-left'
			},
			{
				key: 'imghvr-stack-top-right',
				name: 'stack-top-right'
			},
			{
				key: 'imghvr-stack-up',
				name: 'stack-up'
			},
			{
				key: 'imghvr-strip-horiz-bottom-left',
				name: 'strip-horiz-bottom-left'
			},
			{
				key: 'imghvr-strip-horiz-bottom-right',
				name: 'strip-horiz-bottom-right'
			},
			{
				key: 'imghvr-strip-horiz-down',
				name: 'strip-horiz-down'
			},
			{
				key: 'imghvr-strip-horiz-top-left',
				name: 'strip-horiz-top-left'
			},
			{
				key: 'imghvr-strip-horiz-top-right',
				name: 'strip-horiz-top-right'
			},
			{
				key: 'imghvr-strip-horiz-up',
				name: 'strip-horiz-up'
			},
			{
				key: 'imghvr-strip-shutter-down',
				name: 'strip-shutter-down'
			},
			{
				key: 'imghvr-strip-shutter-left',
				name: 'strip-shutter-left'
			},
			{
				key: 'imghvr-strip-shutter-right',
				name: 'strip-shutter-right'
			},
			{
				key: 'imghvr-strip-shutter-up',
				name: 'strip-shutter-up'
			},
			{
				key: 'imghvr-strip-vert-bottom-left',
				name: 'strip-vert-bottom-left'
			},
			{
				key: 'imghvr-strip-vert-bottom-right',
				name: 'strip-vert-bottom-right'
			},
			{
				key: 'imghvr-strip-vert-left',
				name: 'strip-vert-left'
			},
			{
				key: 'imghvr-strip-vert-right',
				name: 'strip-vert-right'
			},
			{
				key: 'imghvr-strip-vert-top-left',
				name: 'strip-vert-top-left'
			},
			{
				key: 'imghvr-strip-vert-top-right',
				name: 'strip-vert-top-right'
			},
			{
				key: 'imghvr-throw-in-down',
				name: 'throw-in-down'
			},
			{
				key: 'imghvr-throw-in-left',
				name: 'throw-in-left'
			},
			{
				key: 'imghvr-throw-in-right',
				name: 'throw-in-right'
			},
			{
				key: 'imghvr-throw-in-up',
				name: 'throw-in-up'
			},
			{
				key: 'imghvr-throw-out-down',
				name: 'throw-out-down'
			},
			{
				key: 'imghvr-throw-out-left',
				name: 'throw-out-left'
			},
			{
				key: 'imghvr-throw-out-right',
				name: 'throw-out-right'
			},
			{
				key: 'imghvr-throw-out-up',
				name: 'throw-out-up'
			},
			{
				key: 'imghvr-zoom-in',
				name: 'zoom-in'
			},
			{
				key: 'imghvr-zoom-out',
				name: 'zoom-out'
			},
			{
				key: 'imghvr-zoom-out-down',
				name: 'zoom-out-down'
			},
			{
				key: 'imghvr-zoom-out-flip-horiz',
				name: 'zoom-out-flip-horiz'
			},
			{
				key: 'imghvr-zoom-out-flip-vert',
				name: 'zoom-out-flip-vert'
			},
			{
				key: 'imghvr-zoom-out-left',
				name: 'zoom-out-left'
			},
			{
				key: 'imghvr-zoom-out-right',
				name: 'zoom-out-right'
			},
			{
				key: 'imghvr-zoom-out-up',
				name: 'zoom-out-up'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var ihattributeoptions = [
			["effect", "select", "Effect", "apply_class", "", "", false, "", false, false, "", "", false, iheffects, true, false, "", false, "", false],
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Effects - Image Hover", ".ih", "ih", "", ihattributeoptions);


		//		.ih .caption *
		//ih-fade-down ih-delay-sm 
		var ihceffects = [{
				key: 'ih-fade',
				name: 'fade'
			},
			{
				key: 'ih-fade-up',
				name: 'fade-up'
			},
			{
				key: 'ih-fade-down',
				name: 'fade-down'
			},
			{
				key: 'ih-fade-left',
				name: 'fade-left'
			},
			{
				key: 'ih-fade-right',
				name: 'fade-right'
			},
			{
				key: 'ih-fade-up-big',
				name: 'fade-up-big'
			},
			{
				key: 'ih-fade-down-big',
				name: 'fade-down-big'
			},
			{
				key: 'ih-fade-left-big',
				name: 'fade-left-big'
			},
			{
				key: 'ih-fade-right-big',
				name: 'fade-right-big'
			},
			{
				key: 'ih-zoom-in',
				name: 'zoom-in'
			},
			{
				key: 'ih-zoom-out',
				name: 'zoom-out'
			},
			{
				key: 'ih-flip-x',
				name: 'flip-x'
			},
			{
				key: 'ih-flip-y',
				name: 'flip-y'
			}
		];
		var ihcdelays = [{
				key: 'ih-delay-xs',
				name: 'Delay-xs'
			},
			{
				key: 'ih-delay-sm',
				name: 'Delay-sm'
			},
			{
				key: 'ih-delay-md',
				name: 'Delay-md'
			},
			{
				key: 'ih-delay-lg',
				name: 'Delay-lg'
			},
			{
				key: 'ih-delay-xl',
				name: 'Delay-xl'
			},
			{
				key: 'ih-delay-xxl',
				name: 'Delay-xxl'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var ihcattributeoptions = [
			["effect", "select", "Effect", "apply_class", "", "", false, "", false, false, "", "", false, ihceffects, true, false, "", false, "", false],
			["delay", "select", "Delay", "apply_class", "", "", false, "", false, false, "", "", false, ihcdelays, true, false, "", false, "", false],
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator2("Effects - Image Hover Utility", ".ih>.caption", "ihcaptionel", "", ihcattributeoptions);


		var tiltaxis = [{
				key: 'x',
				name: 'X'
			},
			{
				key: 'y',
				name: 'Y'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var tiltattributeoptions = [
			["maxTilt", "slider", "maxTilt", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["perspective", "slider", "perspective", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "easing", "custom", "cubic-bezier(.03,.98,.52,.99)", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["scale", "slider", "scale", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["speed", "slider", "speed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transition", "checkbox", "transition", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["disableAxis", "select", "disableAxis", "custom", "", "", false, "", false, false, "", "", false, tiltaxis, true, false, "", false, "", false],
			["reset", "checkbox", "reset", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["glare", "checkbox", "glare", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["maxGlare", "slider", "maxGlare", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tiltParallax", "checkbox", "Parallax Items", "apply_class", "tilt-parallax", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Effects - Tilt.js", ".tilt", "tilt", "data-tilt-options", tiltattributeoptions);
		var tiltparallaxitemattributeoptions = [
			["tiltParallaxItem", "checkbox", "Enable Item Parallax", "apply_class", "tilt-parallax-item", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator2("Effects - Tilt.js Parallax Item", ".tilt-parallax", "tiltparallax", "", tiltparallaxitemattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var googlemapattributeoptions = [
			["lat", "text", "Latitude", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "data-lat", true, "", false],
			["lng", "text", "Longitude", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "data-lng", true, "", false],
			["zoom", "slider", "Zoom", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["zoomControl", "checkbox", "Zoom Control", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["disableDoubleClickZoom", "checkbox", "Disable Double Click Zoom", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["mapTypeControl", "checkbox", "Map Type Control", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["scaleControl", "checkbox", "Scale Control", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["scrollwheel", "checkbox", "Scroll Wheel", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["streetViewControl", "checkbox", "Street View Control", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["draggable", "checkbox", "Draggable", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["overviewMapControl", "checkbox", "Overview Map Control", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Google Maps", ".google-map", "googlemap", "data-google-map-options", googlemapattributeoptions);


		var layoutModes = [{
				key: 'masonry',
				name: 'Masonry'
			},
			{
				key: 'fitRows',
				name: 'FitRows'
			},
			{
				key: 'certical',
				name: 'Vertical'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var isotopeattributeoptions = [
			["itemSelector", "text", "itemSelector", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["filters", "text", "Filters Class", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["layoutMode", "select", "layoutMode", "custom", "", "", false, "", false, false, "", "", false, layoutModes, true, false, "", false, "", false],
			["percentPosition", "checkbox", "percentPosition", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["masonry", "object", "masonry", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fitRows", "object", "fitRows", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["vertical", "object", "vertical", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["columnWidth", "text", "columnWidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["gutter", "slider", "gutter", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["stamp", "text", "stamp", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["originLeft", "checkbox", "originLeft", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["originTop", "checkbox", "originTop", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["filter", "text", "filter", "custom", "", "*", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["getSortData", "object", "getSortData", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["sortBy", "text", "sortBy", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["sortAscending", "checkbox", "sortAscending", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["stagger", "slider", "stagger", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["transitionDuration", "slider", "transitionDuration", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hiddenStyle", "object", "hiddenStyle", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["visibleStyle", "object", "visibleStyle", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["containerStyle", "text", "containerStyle", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["resize", "checkbox", "resize", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["initLayout", "checkbox", "initLayout", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cellsByRow", "object", "cellsByRow", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["columnWidth", "slider", "columnWidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["rowHeight", "slider", "rowHeight", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fitWidth", "checkbox", "fitWidth", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["horizontalOrder", "checkbox", "horizontalOrder", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Isotope Gallery", ".isotope", "isotope", "data-isotope-options", isotopeattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var lightgalleryattributeoptions = [
			["mode", "text", "mode", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cssEasing", "text", "cssEasing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "easing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["speed", "slider", "speed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["height", "text", "height", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["width", "text", "width", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["addClass", "text", "addClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["startClass", "text", "startClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["backdropDuration", "slider", "backdropDuration", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hideBarsDelay", "slider", "hideBarsDelay", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["useLeft", "checkbox", "useLeft", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closable", "checkbox", "closable", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loop", "checkbox", "loop", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["escKey", "checkbox", "escKey", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["keyPress", "checkbox", "keyPress", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["controls", "checkbox", "controls", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slideEndAnimatoin", "bolean", "slideEndAnimatoin", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hideControlOnEnd", "checkbox", "hideControlOnEnd", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["mousewheel", "checkbox", "mousewheel", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["getCaptionFromTitleOrAlt:", "checkbox", "getCaptionFromTitleOrAlt:", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["appendSubHtmlTo", "text", "appendSubHtmlTo", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["subHtmlSelectorRelative", "checkbox", "subHtmlSelectorRelative", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["preload", "slider", "preload", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["showAfterLoad", "checkbox", "showAfterLoad", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["selector", "text", "selector", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["selectWithin", "text", "selectWithin", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["nextHtml", "text", "nextHtml", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["prevHtml", "text", "prevHtml", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["index", "slider", "index", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["iframeMaxWidth", "text", "iframeMaxWidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["download", "checkbox", "download", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["counter", "checkbox", "counter", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["appendCounterTo", "text", "appendCounterTo", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["swipeThreshold", "slider", "swipeThreshold", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableDrag", "checkbox", "enableDrag", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableSwipe", "checkbox", "enableSwipe", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["dynamic", "checkbox", "dynamic", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["dynamicEl", "array", "dynamicEl", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["thumbnail", "checkbox", "thumbnail", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["animateThumb", "checkbox", "animateThumb", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["currentPagerPosition", "text", "currentPagerPosition", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["thumbWidth", "slider", "thumbWidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["thumbHeight", "text", "thumbHeight", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["thumbContHeight", "slider", "thumbContHeight", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["thumbMargin", "slider", "thumbMargin", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["exThumbImage", "text", "exThumbImage", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["showThumbByDefault", "checkbox", "showThumbByDefault", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["toogleThumb", "checkbox", "toogleThumb", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pullCaptionUp", "checkbox", "pullCaptionUp", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableThumbDrag", "checkbox", "enableThumbDrag", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableThumbSwipe", "checkbox", "enableThumbSwipe", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["swipeThreshold", "slider", "swipeThreshold", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loadYoutubeThumbnail", "checkbox", "loadYoutubeThumbnail", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["youtubeThumbSize", "slider", "youtubeThumbSize", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["loadVimeoThumbnail", "checkbox", "loadVimeoThumbnail", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["vimeoThumbSize", "text", "vimeoThumbSize", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loadDailymotionThumbnail", "checkbox", "loadDailymotionThumbnail", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplay", "checkbox", "autoplay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pause", "slider", "pause", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["progressBar", "checkbox", "progressBar", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fourceAutoplay", "checkbox", "fourceAutoplay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplayControls", "checkbox", "autoplayControls", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["appendAutoplayControlsTo", "text", "appendAutoplayControlsTo", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["videoMaxWidth", "text", "videoMaxWidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplayFirstVideo", "checkbox", "autoplayFirstVideo", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["youtubePlayerParams", "object", "youtubePlayerParams", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["vimeoPlayerParams", "object", "vimeoPlayerParams", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["dailymotionPlayerParams", "object", "dailymotionPlayerParams", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["vkPlayerParams", "object", "vkPlayerParams", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["videojs", "checkbox", "videojs", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["videojsOptions", "object", "videojsOptions", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fullScreen", "checkbox", "fullScreen", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pager", "checkbox", "pager", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["zoom", "checkbox", "zoom", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["scale", "slider", "scale", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableZoomAfter", "slider", "enableZoomAfter", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["actualSize", "checkbox", "actualSize", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hash", "checkbox", "hash", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["galleryId", "text", "galleryId", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["share", "checkbox", "share", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["facebook", "checkbox", "facebook", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["facebookDropdownText", "text", "facebookDropdownText", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["twitter", "checkbox", "twitter", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["twitterDropdownText", "text", "twitterDropdownText", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["googlePlus", "checkbox", "googlePlus", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["googlePlusDropdownText", "text", "googlePlusDropdownText", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pinterest", "checkbox", "pinterest", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pinterestDropdownText", "text", "pinterestDropdownText", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Light Gallery", ".light-gallery", "lightgallery", "data-light-gallery-options", lightgalleryattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var magnificpopupattributeoptions = [
			["type", "text", "type", "custom", "", "image", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["delegate", "text", "delegate", "custom", "", "a", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["disableOn", "text", "disableOn", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["key", "text", "key", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["midClick", "checkbox", "midClick", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["mainClass", "text", "mainClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["preloader", "checkbox", "preloader", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["focus", "text", "focus", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeOnContentClick", "checkbox", "closeOnContentClick", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeOnBgClick", "checkbox", "closeOnBgClick", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeBtnInside", "checkbox", "closeBtnInside", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["showCloseBtn", "checkbox", "showCloseBtn", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enableEscapeKey", "checkbox", "enableEscapeKey", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["modal", "checkbox", "modal", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["alignTop", "checkbox", "alignTop", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["index", "slider", "index", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fixedContentPos", "select", "fixedContentPos", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["fixedBgPos", "select", "fixedBgPos", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["overflowY", "select", "overflowY", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["removalDelay", "slider", "removalDelay", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeMarkup", "text", "closeMarkup", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["prependTo", "text", "prependTo", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoFocusLast", "checkbox", "autoFocusLast", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["gallery", "object", "gallery", "none", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enabled", "checkbox", "enabled", "custom", true, "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["preload", "text", "preload", "custom", "", "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["navigateByImgClick", "checkbox", "navigateByImgClick", "custom", true, "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["arrowMarkup", "text", "arrowMarkup", "custom", "", "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["tPrev", "text", "tPrev", "custom", "", "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["tNext", "text", "tNext", "custom", "", "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["tCounter", "text", "tCounter", "custom", "", "", false, "", false, false, "", "gallery", false, null, true, false, "", false, "", false],
			["zoom", "checkbox", "zoom", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enabled2", "checkbox", "enabled2", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["duration", "slider", "duration", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "easing", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["opener", "text", "opener", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Magnific Popup", ".magnific-popup", "magnificpopup", "data-magnific-popup-options", magnificpopupattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var owlcarouselattributeoptions = [
			["advanced", "checkbox", "Show Advanced", "element_attribute", "true", "", false, "", false, false, "", "", false, null, false, false, "", false, "advanced", true],
			["items", "slider", "Items", "custom", "", "3", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["margin", "slider", "Margin", "custom", "", "0", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["loop", "checkbox", "loop", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["center", "checkbox", "center", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["mouseDrag", "checkbox", "mouseDrag", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["touchDrag", "checkbox", "touchDrag", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["pullDrag", "checkbox", "pullDrag", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["freeDrag", "checkbox", "freeDrag", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["stagePadding", "slider", "stagePadding", "custom", "", "0", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["merge", "checkbox", "merge", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["mergeFit", "checkbox", "mergeFit", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["autoWidth", "checkbox", "autoWidth", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["startPosition", "slider", "startPosition", "custom", "", "0", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["URLhashListener", "checkbox", "URLhashListener", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["nav", "checkbox", "nav", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["navClass", "text", "navClass", "custom", "", "", false, "", false, false, "", "", true, null, false, false, "", false, "", false],
			["rewind", "checkbox", "rewind", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["navText", "text", "navText", "custom", "[&#x27;next&#x27;,&#x27;prev&#x27;]", "[&#x27;next&#x27;,&#x27;prev&#x27;]", false, "", false, false, "", "", true, null, false, false, "", false, "", false],
			["navElement", "text", "navElement", "custom", "", "div", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["slideBy", "slider", "slideBy", "custom", "", "1", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["slideTransition", "text", "slideTransition", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["dots", "checkbox", "dots", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["dotsEach", "checkbox", "dotsEach", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["dotsData", "checkbox", "dotsData", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["lazyLoad", "checkbox", "lazyLoad", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["lazyLoadEager", "slider", "lazyLoadEager", "custom", "", "0", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["autoplay", "checkbox", "autoplay", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["autoplayTimeout", "slider", "autoplayTimeout", "custom", "", "5000", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["autoplayHoverPause", "checkbox", "autoplayHoverPause", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["smartSpeed", "slider", "smartSpeed", "custom", "", "250", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["fluidSpeed", "checkbox", "fluidSpeed", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["autoplaySpeed", "slider", "autoplaySpeed", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["navSpeed", "slider", "navSpeed", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["dotsSpeed", "slider", "dotsSpeed", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["dragEndSpeed", "checkbox", "dragEndSpeed", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["callbacks", "checkbox", "callbacks", "custom", true, "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["responsive", "text", "responsive", "custom", "", "", false, "", false, false, "", "", true, null, false, false, "", false, "", false],
			["responsiveRefreshRate", "slider", "responsiveRefreshRate", "custom", "", "200", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["responsiveBaseElement", "text", "responsiveBaseElement", "custom", "", "window", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["video", "checkbox", "video", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["videoHeight", "slider", "videoHeight", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["videoWidth", "slider", "videoWidth", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["animateOut", "select", "animateOut", "custom", "", "", false, "", false, false, "", "", false, animations, false, false, "", false, "", false],
			["animateIn", "select", "animateIn", "custom", "", "", false, "", false, false, "", "", false, animations, false, false, "", false, "", false],
			["fallbackEasing", "text", "fallbackEasing", "custom", "", "swing", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["info", "text", "info", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["nestedItemSelector", "text", "nestedItemSelector", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["itemElement", "text", "itemElement", "custom", "", "div", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["stageElement", "text", "stageElement", "custom", "", "div", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["navContainer", "text", "navContainer", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["dotsContainer", "text", "dotsContainer", "custom", "", "", false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false],
			["checkVisible", "checkbox", "checkVisible", "custom", true, true, false, "", false, false, "advanced", "", false, null, false, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("OWL Carousel", ".owl-carousel", "owlcarousel", "data-owl-carousel-options", owlcarouselattributeoptions);


		var parallaxtypes = [{
				key: 'scroll',
				name: 'Scroll'
			},
			{
				key: 'scale',
				name: 'Scale'
			},
			{
				key: 'opacity',
				name: 'Opacity'
			},
			{
				key: 'scroll-opacity',
				name: 'Scroll-Opacity'
			},
			{
				key: 'scale-opacity',
				name: 'Scale-Opacity'
			}
		];
		var parallaxrepeats = [{
				key: 'repeat',
				name: 'repeat'
			},
			{
				key: 'repeat-x',
				name: 'repeat-x'
			},
			{
				key: 'repeat-y',
				name: 'repeat-y'
			},
			{
				key: 'no-repeat',
				name: 'no-repeat'
			},
			{
				key: 'space',
				name: 'space'
			},
			{
				key: 'round',
				name: 'round'
			},
			{
				key: 'initial',
				name: 'initial'
			},
			{
				key: 'inherit',
				name: 'inherit'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var parallaxattributeoptions = [
			["type", "select", "type", "custom", "scroll", "scroll", false, "", false, false, "", "", false, parallaxtypes, false, false, "", false, "", false],
			["speed", "slider", "speed", "custom", "0.5", "0.5", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["imgSrc", "text", "imgSrc", "custom", "", "", false, "", true, false, "", "", false, null, false, false, "", false, "", false],
			["getmore", "button", "Get More", "", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["imgElement", "text", "imgElement", "custom", ".jarallax-img", ".jarallax-img", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["imgSize", "text", "imgSize", "custom", "cover", "cover/contain", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["imgPosition", "text", "imgPosition", "custom", "50% 50%", "50% 50%", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["imgRepeat", "select", "imgRepeat", "custom", "no-repeat", "no-repeat", false, "", false, false, "", "", false, parallaxrepeats, false, false, "", false, "", false],
			["keepImg", "checkbox", "keepImg", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["elementInViewport", "text", "elementInViewport", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["zIndex", "slider", "zIndex", "custom", "-100", "-100", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["disableParallax", "text", "disableParallax", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["disableVideo", "text", "disableVideo", "custom", "", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["automaticResize", "checkbox", "automaticResize", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["videoSrc", "text", "videoSrc", "custom", "", "", false, "", true, false, "", "", false, null, false, false, "", false, "", false],
			["videoStartTime", "slider", "videoStartTime", "custom", "0", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["videoEndTime", "slider", "videoEndTime", "custom", "0", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["videoVolume", "slider", "videoVolume", "custom", "0", "", false, "", false, false, "", "", false, null, false, false, "", false, "", false],
			["videoPlayOnlyVisible", "checkbox", "videoPlayOnlyVisible", "custom", true, "", false, "", false, false, "", "", false, null, false, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Parallax", ".jarallax", "jarallax", "data-jarallax-options", parallaxattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var rellaxattributeoptions = [
			["speed", "slider", "speed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-rellax-speed", true, "", false],
			["center", "checkbox", "center", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "data-rellax-center", true, "", false],
			["wrapper", "text", "wrapper", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-rellax-wrapper", true, "", false],
			["relativetowrapper", "checkbox", "relativetowrapper", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "data-rellax-relativetowrapper", true, "", false],
			["round", "checkbox", "round", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "data-rellax-round", true, "", false],
			["vertical", "checkbox", "vertical", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "data-rellax-vertical", true, "", false],
			["horizontal", "checkbox", "horizontal", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "data-rellax-horizontal", true, "", false],
			["percentage", "slider", "percentage", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-rellax-percentage", true, "", false],
			["zindex", "slider", "zindex", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-rellax-zindex", true, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Rellax", ".rellax", "rellax", "data-rellax-options", rellaxattributeoptions);


		var plyrtypes = [{
				key: 'youtube',
				name: 'Youtube'
			},
			{
				key: 'vimeo',
				name: 'Vimeo'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var plyrattributeoptions = [
			["type", "select", "Type", "custom", true, "", false, "", false, false, "", "", false, plyrtypes, true, false, "data-type", true, "", false],
			["videoid", "text", "Video Id", "custom", true, "", false, "", false, false, "", "", false, null, true, true, "data-video-id", true, "", false],
			["enabled", "checkbox", "enabled", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["debug", "checkbox", "debug", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["controls", "text", "controls", "custom", "['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["i18n", "Object", "i18n", "custom", "See defaults.js", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loadSprite", "checkbox", "loadSprite", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["iconUrl", "text", "iconUrl", "custom", "null", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["iconPrefix", "text", "iconPrefix", "custom", "plyr", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["blankUrl", "text", "blankUrl", "custom", "https://cdn.plyr.io/static/blank.mp4", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplay", "checkbox", "autoplay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autopause", "checkbox", "autopause", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["seekTime", "slider", "seekTime", "custom", "10", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["volume", "slider", "volume", "custom", "1", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["muted", "checkbox", "muted", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["clickToPlay", "checkbox", "clickToPlay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["disableContextMenu", "checkbox", "disableContextMenu", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hideControls", "checkbox", "hideControls", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["keyboard", "Object", "keyboard", "custom", "{ focused: true, global: false }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["tooltips", "Object", "tooltips", "custom", "{ controls: false, seek: true }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["duration", "slider", "duration", "custom", "null", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["displayDuration", "checkbox", "displayDuration", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["toggleInvert", "checkbox", "toggleInvert", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["listeners", "Object", "listeners", "custom", "null", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["captions", "Object", "captions", "custom", "{ active: false, language: 'auto', update: false }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fullscreen", "Object", "fullscreen", "custom", "{ enabled: true, fallback: true, iosNative: false }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["ratio", "text", "ratio", "custom", "16:9", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["storage", "Object", "storage", "custom", "{ enabled: true, key: 'plyr' }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["speed", "Object", "speed", "custom", "{ selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["quality", "Object", "quality", "custom", "{ default: 'default', options: ['hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny', 'default'] }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loop", "Object", "loop", "custom", "{ active: false }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["ads", "Object", "ads", "custom", "{ enabled: false, publisherId: '' }", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Media Plyr", ".js-player", "plyr", "data-plyr", plyrattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var progressbarcircleattributeoptions = [
			["data", "text", "Data", "custom", "99", "99", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["strokeWidth", "text", "Stroke Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "Easing", "custom", "easeInOut", "easeInOut", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["duration", "text", "Duration", "custom", "1400", "1400", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["color", "text", "Color", "custom", "#f00", "#f00", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailColor", "text", "Trail Color", "custom", "#0f0", "#0f0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailWidth", "text", "Trail Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textcolor", "text", "Text Color", "custom", "#999", "#999", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textright", "text", "Text Right", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["texttop", "text", "Text Top", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textpadding", "text", "Text Padding", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textmargin", "text", "Text Margin", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Progress Bar Circle", ".progressbar-circle", "progressbarcircle", "data-progressbar-options", progressbarcircleattributeoptions);
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var progressbarsemicircleattributeoptions = [
			["data", "text", "Data", "custom", "99", "99", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["strokeWidth", "text", "Stroke Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "Easing", "custom", "easeInOut", "easeInOut", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["duration", "text", "Duration", "custom", "1400", "1400", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["color", "text", "Color", "custom", "#f00", "#f00", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailColor", "text", "Trail Color", "custom", "#0f0", "#0f0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailWidth", "text", "Trail Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textcolor", "text", "Text Color", "custom", "#999", "#999", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textright", "text", "Text Right", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["texttop", "text", "Text Top", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textpadding", "text", "Text Padding", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textmargin", "text", "Text Margin", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Progress Bar Semi Circle", ".progressbar-semicircle", "progressbarsemicircle", "data-progressbar-options", progressbarsemicircleattributeoptions);
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var progressbarlineattributeoptions = [
			["data", "text", "Data", "custom", "99", "99", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["strokeWidth", "text", "Stroke Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "Easing", "custom", "easeInOut", "easeInOut", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["duration", "text", "Duration", "custom", "1400", "1400", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["color", "text", "Color", "custom", "#f00", "#f00", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailColor", "text", "Trail Color", "custom", "#0f0", "#0f0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["trailWidth", "text", "Trail Width", "custom", "2", "2", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textcolor", "text", "Text Color", "custom", "#999", "#999", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textright", "text", "Text Right", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["texttop", "text", "Text Top", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textpadding", "text", "Text Padding", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["textmargin", "text", "Text Margin", "custom", "0", "0", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Progress Bar Line", ".progressbar-line", "progressbarline", "data-progressbar-options", progressbarlineattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var slicksliderattributeoptions = [
			["advanced", "checkbox", "Show Advanced", "element_attribute", "true", "", false, "", false, false, "", "", false, null, false, false, "", false, "advanced", true],
			["accessibility", "checkbox", "accessibility", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["adaptiveHeight", "checkbox", "adaptiveHeight", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplay", "checkbox", "autoplay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplaySpeed", "slider", "autoplaySpeed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["arrows", "checkbox", "arrows", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["asNavFor", "text", "asNavFor", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["appendArrows", "text", "appendArrows", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["appendDots", "text", "appendDots", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["prevArrow", "text", "prevArrow", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["nextArrow", "text", "nextArrow", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["centerMode", "checkbox", "centerMode", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["centerPadding", "text", "centerPadding", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["cssEase", "text", "cssEase", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["customPaging", "text", "customPaging", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["dots", "checkbox", "dots", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["dotsClass", "text", "dotsClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["draggable", "checkbox", "draggable", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fade", "checkbox", "fade", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["focusOnSelect", "checkbox", "focusOnSelect", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["easing", "text", "easing", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["edgeFriction", "slider", "edgeFriction", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["infinite", "checkbox", "infinite", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["initialSlide", "slider", "initialSlide", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["lazyLoad", "text", "lazyLoad", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["mobileFirst", "checkbox", "mobileFirst", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["pauseOnFocus", "checkbox", "pauseOnFocus", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pauseOnHover", "checkbox", "pauseOnHover", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["pauseOnDotsHover", "checkbox", "pauseOnDotsHover", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["respondTo", "text", "respondTo", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["responsive", "checkbox", "responsive", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["rows", "slider", "rows", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slide", "element", "slide", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesPerRow", "slider", "slidesPerRow", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slidesToShow", "slider", "slidesToShow", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesToScroll", "slider", "slidesToScroll", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["speed", "slider", "speed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["swipe", "checkbox", "swipe", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["swipeToSlide", "checkbox", "swipeToSlide", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["touchMove", "checkbox", "touchMove", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["touchThreshold", "slider", "touchThreshold", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["useCSS", "checkbox", "useCSS", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["useTransform", "checkbox", "useTransform", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["variableWidth", "checkbox", "variableWidth", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["vertical", "checkbox", "vertical", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["verticalSwiping", "checkbox", "verticalSwiping", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["rtl", "checkbox", "rtl", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["waitForAnimate", "checkbox", "waitForAnimate", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["zIndex", "slider", "zIndex", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Slick Slider", ".slick-slider", "slickslider", "data-slick-slider-options", slicksliderattributeoptions);


		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var swipersliderattributeoptions = [
			["advanced", "checkbox", "Show Advanced", "element_attribute", "true", "", false, "", false, false, "", "", false, null, false, false, "", false, "advanced", true],
			["init", "checkbox", "init", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["initialSlide", "slider", "initialSlide", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["direction", "text", "direction", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["speed", "slider", "speed", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["setWrapperSize", "checkbox", "setWrapperSize", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["virtualTranslate", "checkbox", "virtualTranslate", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["width", "slider", "width", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["height", "slider", "height", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["autoHeight", "checkbox", "autoHeight", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["roundLengths", "checkbox", "roundLengths", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["nested", "checkbox", "nested", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["uniqueNavElements", "checkbox", "uniqueNavElements", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["effect", "select", "effect", "custom", "", "", false, "", false, false, "", "", false, animations, true, false, "", false, "", false],
			["runCallbacksOnInit", "checkbox", "runCallbacksOnInit", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["watchOverflow", "checkbox", "watchOverflow", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["on", "checkbox", "on", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["spaceBetween", "slider", "spaceBetween", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesPerView", "slider", "slidesPerView", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesPerColumn", "slider", "slidesPerColumn", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesPerColumnFill", "text", "slidesPerColumnFill", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slidesPerGroup", "slider", "slidesPerGroup", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["centeredSlides", "checkbox", "centeredSlides", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["slidesOffsetBefore", "slider", "slidesOffsetBefore", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slidesOffsetAfter", "slider", "slidesOffsetAfter", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["normalizeSlideIndex", "checkbox", "normalizeSlideIndex", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["grabCursor", "checkbox", "grabCursor", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["touchEventsTarget", "text", "touchEventsTarget", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["touchRatio", "slider", "touchRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["touchAngle", "slider", "touchAngle", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["simulateTouch", "checkbox", "simulateTouch", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["shortSwipes", "checkbox", "shortSwipes", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["longSwipes", "checkbox", "longSwipes", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["longSwipesRatio", "slider", "longSwipesRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["longSwipesMs", "slider", "longSwipesMs", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["followFinger", "checkbox", "followFinger", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["allowTouchMove", "checkbox", "allowTouchMove", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["threshold", "slider", "threshold", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["touchMoveStopPropagation", "checkbox", "touchMoveStopPropagation", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["iOSEdgeSwipeDetection", "checkbox", "iOSEdgeSwipeDetection", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["iOSEdgeSwipeThreshold", "slider", "iOSEdgeSwipeThreshold", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["touchReleaseOnEdges", "checkbox", "touchReleaseOnEdges", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["passiveListeners", "checkbox", "passiveListeners", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["resistance", "checkbox", "resistance", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["resistanceRatio", "slider", "resistanceRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["preventInteractionOnTransition", "checkbox", "preventInteractionOnTransition", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["allowSlidePrev", "checkbox", "allowSlidePrev", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["allowSlideNext", "checkbox", "allowSlideNext", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["noSwiping", "checkbox", "noSwiping", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["noSwipingClass", "text", "noSwipingClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["noSwipingSelector", "text", "noSwipingSelector", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["swipeHandler", "text", "swipeHandler", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["preventClicks", "checkbox", "preventClicks", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["preventClicksPropagation", "checkbox", "preventClicksPropagation", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideToClickedSlide", "checkbox", "slideToClickedSlide", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeMode", "checkbox", "freeMode", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["freeModeMomentum", "checkbox", "freeModeMomentum", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeMomentumRatio", "slider", "freeModeMomentumRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeMomentumVelocityRatio", "slider", "freeModeMomentumVelocityRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeMomentumBounce", "checkbox", "freeModeMomentumBounce", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeMomentumBounceRatio", "slider", "freeModeMomentumBounceRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeMinimumVelocity", "slider", "freeModeMinimumVelocity", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["freeModeSticky", "checkbox", "freeModeSticky", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["watchSlidesProgress", "checkbox", "watchSlidesProgress", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["watchSlidesVisibility", "checkbox", "watchSlidesVisibility", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["preloadImages", "checkbox", "preloadImages", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["updateOnImagesReady", "checkbox", "updateOnImagesReady", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loop", "checkbox", "loop", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loopAdditionalSlides", "slider", "loopAdditionalSlides", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loopedSlides", "slider", "loopedSlides", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loopFillGroupWithBlank", "checkbox", "loopFillGroupWithBlank", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["breakpoints", "checkbox", "breakpoints", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["observer", "checkbox", "observer", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["observeParents", "checkbox", "observeParents", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["containerModifierClass", "text", "containerModifierClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideClass", "text", "slideClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideActiveClass", "text", "slideActiveClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideDuplicatedActiveClass", "text", "slideDuplicatedActiveClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideVisibleClass", "text", "slideVisibleClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideDuplicateClass", "text", "slideDuplicateClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideNextClass", "text", "slideNextClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideDuplicatedNextClass", "text", "slideDuplicatedNextClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slidePrevClass", "text", "slidePrevClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideDuplicatedPrevClass", "text", "slideDuplicatedPrevClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["wrapperClass", "text", "wrapperClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["navigation", "object", "navigation", 'none', "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["nextEl", "text", "nextEl", "custom", "", "", false, "", false, false, "", "navigation", false, null, true, false, "", false, "", false],
			["prevEl", "text", "prevEl", "custom", "", "", false, "", false, false, "", "navigation", false, null, true, false, "", false, "", false],
			["hideOnClick_p", "checkbox", "hideOnClick_p", "custom", "true", "", false, "", false, false, "", "navigation", false, null, true, false, "", false, "", false],
			["disabledClass", "text", "disabledClass", "custom", "", "", false, "", false, false, "", "navigation", false, null, true, false, "", false, "", false],
			["hiddenClass_p", "text", "hiddenClass_p", "custom", "", "", false, "", false, false, "", "navigation", false, null, true, false, "", false, "", false],
			["pagination", "object", "pagination", "none", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["el", "text", "el", "custom", "", "", false, "", false, false, "", "pagination", false, null, true, false, "", false, "", false],
			["type", "text", "type", "custom", "", "", false, "", false, false, "", "pagination", false, null, true, false, "", false, "", false],
			["bulletElement", "text", "bulletElement", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["dynamicBullets", "checkbox", "dynamicBullets", "custom", true, "", false, "", false, false, "", "pagination", false, null, true, false, "", false, "", false],
			["dynamicMainBullets", "slider", "dynamicMainBullets", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["hideOnClick", "checkbox", "hideOnClick", "custom", true, "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["clickable", "checkbox", "clickable", "custom", true, "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["progressbarOpposite", "checkbox", "progressbarOpposite", "custom", true, "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["renderBullet", "text", "renderBullet", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["renderFraction", "text", "renderFraction", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["renderProgressbar", "text", "renderProgressbar", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["renderCustom", "text", "renderCustom", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["bulletClass", "text", "bulletClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["bulletActiveClass", "text", "bulletActiveClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["modifierClass", "text", "modifierClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["currentClass", "text", "currentClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["totalClass", "text", "totalClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["hiddenClass", "text", "hiddenClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["progressbarFillClass", "text", "progressbarFillClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["clickableClass", "text", "clickableClass", "custom", "", "", false, "", false, false, "advanced", "pagination", false, null, true, false, "", false, "", false],
			["scrollbar", "checkbox", "scrollbar", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["el2", "text", "el2", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["hide", "checkbox", "hide", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["draggable", "checkbox", "draggable", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["snapOnRelease", "checkbox", "snapOnRelease", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["dragSize", "slider", "dragSize", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["lockClass", "text", "lockClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["dragClass", "text", "dragClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["autoplay", "checkbox", "autoplay", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["delay", "slider", "delay", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["stopOnLastSlide", "checkbox", "stopOnLastSlide", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["disableOnInteraction", "checkbox", "disableOnInteraction", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["reverseDirection", "checkbox", "reverseDirection", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["waitForTransition", "checkbox", "waitForTransition", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["lazy", "checkbox", "lazy", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["loadPrevNext", "checkbox", "loadPrevNext", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loadPrevNextAmount", "slider", "loadPrevNextAmount", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loadOnTransitionStart", "checkbox", "loadOnTransitionStart", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["elementClass", "text", "elementClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loadingClass", "text", "loadingClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["loadedClass", "text", "loadedClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["preloaderClass", "text", "preloaderClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["parallax", "checkbox", "parallax", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["fadeEffect", "checkbox", "fadeEffect", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["crossFade", "checkbox", "crossFade", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["coverflowEffect", "checkbox", "coverflowEffect", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideShadows", "checkbox", "slideShadows", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["rotate", "slider", "rotate", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["stretch", "slider", "stretch", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["depth", "slider", "depth", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["modifier", "slider", "modifier", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["flipEffect", "checkbox", "flipEffect", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideShadows", "checkbox", "slideShadows", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["limitRotation", "checkbox", "limitRotation", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["cubeEffect", "checkbox", "cubeEffect", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slideShadows", "checkbox", "slideShadows", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["shadow", "checkbox", "shadow", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["shadowOffset", "slider", "shadowOffset", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["shadowScale", "slider", "shadowScale", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["zoom", "checkbox", "zoom", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["maxRatio", "slider", "maxRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["minRatio", "slider", "minRatio", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["toggle", "checkbox", "toggle", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["containerClass", "text", "containerClass", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["zoomedSlideClass", "text", "zoomedSlideClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["keyboard", "checkbox", "keyboard", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["enabled", "checkbox", "enabled", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["onlyInViewport", "checkbox", "onlyInViewport", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["mousewheel", "checkbox", "mousewheel", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["forceToAxis", "checkbox", "forceToAxis", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["releaseOnEdges", "checkbox", "releaseOnEdges", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["invert", "checkbox", "invert", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["sensitivity", "slider", "sensitivity", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["eventsTarged", "text", "eventsTarged", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["virtual", "checkbox", "virtual", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["slides", "text", "slides", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["cache", "checkbox", "cache", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["renderSlide", "text", "renderSlide", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["renderExternal", "text", "renderExternal", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["hashNavigation", "checkbox", "hashNavigation", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["watchState", "checkbox", "watchState", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["replaceState", "checkbox", "replaceState", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["history", "checkbox", "history", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["replaceState", "checkbox", "replaceState", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["key", "text", "key", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["controller", "checkbox", "controller", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["control", "text", "control", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["inverse", "checkbox", "inverse", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["by", "text", "by", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["a11y", "checkbox", "a11y", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["enabled", "checkbox", "enabled", "custom", true, "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["prevSlideMessage", "text", "prevSlideMessage", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["nextSlideMessage", "text", "nextSlideMessage", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["firstSlideMessage", "text", "firstSlideMessage", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["lastSlideMessage", "text", "lastSlideMessage", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["paginationBulletMessage", "text", "paginationBulletMessage", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false],
			["notificationClass", "text", "notificationClass", "custom", "", "", false, "", false, false, "advanced", "", false, null, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Swiper Slider", ".swiper-slider", "swiperslider", "data-swiper-slider-options", swipersliderattributeoptions);


		var spinneroptions = [{
				key: 'rotating-plane',
				name: 'rotating-plane'
			},
			{
				key: 'rotating-plane',
				name: 'rotating-plane'
			},
			{
				key: 'wave',
				name: 'wave'
			},
			{
				key: 'wandering-cubes',
				name: 'wandering-cubes'
			},
			{
				key: 'spinner-pulse',
				name: 'spinner-pulse'
			},
			{
				key: 'three-bounce',
				name: 'three-bounce'
			},
			{
				key: 'cube-grid',
				name: 'cube-grid'
			}
		];
		var venoboxtypes = [{
				key: 'iframe',
				name: 'iframe'
			},
			{
				key: 'inline',
				name: 'inline'
			},
			{
				key: 'ajax',
				name: 'ajax'
			},
			{
				key: 'video',
				name: 'video'
			}
		];
		//0-optName, 1-type, 2-name, 3-action, 4-value, 5-placeholder, 6-live_update, 7-slider_def_unit, 8-file_picker, 9-file_picker_no_proxy, 10-show_if, 11-parent, 12-valueisarray, 13-options, 14-show_empty, 15-multiple, 16-customattribute, 17-attributeisvalue, 18-attribute, 19-emptyattribute
		var venoboxattributeoptions = [
			["vbtype", "select", "Type", "custom", "", "", false, "", false, false, "", "", false, venoboxtypes, true, false, "data-vbtype", true, "", false],
			["href", "text", "Link", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-href", true, "", false],
			["gall", "text", "Gallery", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-gall", true, "", false],
			["overlay", "text", "Overlay", "custom", "", "#ca294b rgba(95,164,255,0.8)", false, "", false, false, "", "", false, null, true, false, "data-overlay", true, "", false],
			["css", "text", "Custom CSS", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "data-css", true, "", false],
			["arrowsColor", "text", "arrowsColor", "custom", "#B6B6B6", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["autoplay", "chekbox", "autoplay", "custom", false, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["bgcolor", "text", "bgcolor", "custom", "#ffffff", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["border", "text", "border", "custom", "0px", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeBackground", "text", "closeBackground", "custom", "#161617", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["closeColor", "text", "closeColor", "custom", "#d2d2d2", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["framewidth", "text", "framewidth", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["frameheight", "text", "frameheight", "custom", "", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["infinigall", "checkbox", "infinigall", "custom", false, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["numeratio", "checkbox", "numeratio", "custom", false, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["numerationBackground", "text", "numerationBackground", "custom", "#161617", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["numerationColor", "text", "numerationColor", "custom", "#d2d2d2", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["numerationPosition", "text", "numerationPosition", "custom", "top", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["overlayClose", "checkbox", "overlayClose", "custom", true, "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["overlayColor", "text", "overlayColor", "custom", "rgba(255,255,255,0.85)", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["titleattr", "text", "titleattr", "custom", "title", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["titleBackground", "text", "titleBackground", "custom", "#161617", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["titleColor", "text", "titleColor", "custom", "#d2d2d2", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["titlePosition", "text", "titlePosition", "custom", "top", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["spinColor", "text", "spinColor", "custom", "#d2d2d2", "", false, "", false, false, "", "", false, null, true, false, "", false, "", false],
			["spinner", "select", "spinner", "custom", "double-bounce", "", false, "", false, false, "", "", false, spinneroptions, true, false, "", false, "", false]
		];
		//name, selectorStr, pgStr, dataStr, opts) 
		creator("Veno Box", ".venobox", "venobox", "data-venobox-options", venoboxattributeoptions);






		var things = new PgComponentType('krft.things', 'THINGS');
		things.selector = function ($el) {
			return true
		};
		things.display_name = 'tag';
		things.not_main_type = true;
		things.sections = {
			'krft.things': {
				name: 'THINGS',
				fields: {
					'krft.things.select': {
						type: 'select',
						show_empty: true,
						action: 'apply_class_multiple',
						name: 'Name',
						multiple: true,
						live_update: true,
						on_changed: function (pgel, prop, value, oldValue, fieldDef, $field, eventType, fieldList, CrsaPage){

							// console.warn("pgel");
							 console.warn(pgel);
							// console.warn("prop");
							// console.warn(prop);
							// console.warn("value");
							// console.warn(value);
							// console.warn("oldValue"); 
							// console.warn(oldValue); 
							// console.warn("fieldDef");
							// console.warn(fieldDef);
							// console.warn("field");
							// console.warn(field);
							// console.warn("eventType"); 
							// console.warn(eventType); 
							// console.warn("fieldList");
							// console.warn(fieldList);
							// console.warn("CrsaPage");
							// console.warn(CrsaPage);

							// var pgp = pgel.parent;
							// if (value) {
							// 	pgp.addClass('animated');
							// } else {
							// 	pgp.removeClass('animated');
							// }

							pgel.attrList.forEach(function(d){
								var dvalue = d.value;
								console.warn(d);
								console.warn(dvalue);
								d.value = dvalue;											
							});

							if(oldValue){
								var valuex = value ? value.split(",") : [];
								var oldValuex = oldValue.split(",");
								oldValuex.forEach(function (ov) {
									if(!valuex.includes(ov)){
										pgel.attrList.forEach(function(d){
											if(d.name.startsWith("data-"+ov)){
//												console.warn(d.name +" will remove");
//												pgel.attrList.remove(d);
												pgel.attrList = pgel.attrList.filter(function(item) {
													return item !== d
												})												
											}
										});
									}
								});
							}

							pinegrow.selectElement(pgel);

						},
						options: [
							{
								key: 'anijs',
								name: "AniJS"
							},
							{
								key: 'animate__animated',
								name: "Animations - Animated"
							},
							{
								key: 'wow',
								name: "Animations - Animated WOW"
							},
							{
								key: 'aos',
								name: "Animations - AOS"
							},
							{
								key: 'kenburns',
								name: "Animations - Kenburns"
							},
							{
								key: 'countdown',
								name: "Count Down"
							},
							{
								key: 'counterup',
								name: "Counter Up"
							},
							{
								key: 'easytabs',
								name: "Easy Tabs"
							},
							{
								key: 'che',
								name: "Effects - Caption Hover Effetcs"
							},
							{
								key: 'h',
								name: "Effects - Hover.css"
							},
							{
								key: 'hei',
								name: "Effects - Hover Effect Ideas"
							},
							{
								key: 'ih',
								name: "Effects - Image Hover"
							},
							{
								key: 'tilt',
								name: "Effects - Tilt.js"
							},
							{
								key: 'google-map',
								name: "Google Maps"
							},
							{
								key: 'isotope',
								name: "Isotope"
							},
							{
								key: 'light-gallery',
								name: "Light Gallery"
							},
							{
								key: 'magnific-popup',
								name: "Magnific Popup"
							},
							{
								key: 'js-player',
								name: "Media Plyr"
							},
							{
								key: 'owl-carousel',
								name: "OWL Carousel"
							},
							{
								key: 'jarallax',
								name: "Parallax"
							},
							{
								key: 'rellax',
								name: "Rellax"
							},
							{
								key: 'progressbar-circle',
								name: "ProgressBar Circle"
							},
							{
								key: 'progressbar-semicircle',
								name: "ProgressBar Semi Circle"
							},
							{
								key: 'progressbar-line',
								name: "ProgressBar Line"
							},
							{
								key: 'slick-slider',
								name: "Slick Slider"
							},
							{
								key: 'swiper-slider',
								name: "Swiper Slider"
							},
							{
								key: 'venobox',
								name: "VenoBox"
							}
						]
					},//<input id="open-project" type="file" webkitdirectory directory />
					'krft.things.checkbox': {
						type: 'checkbox',
						name: 'Convert to Shortcode',
						action: 'custom',
						value: '1',
						get_value: function (pgel) {
//							console.warn("get_value fired - " + value);
//							return pgel.getAttribute('data-wpsc') === 'wpsc' ? '1' : null;
							return pgel.parent.tagName == 'shortcode' ? '1' : null;
						},
						set_value: function (pgel, value) {

//							console.warn("set_value fired - " + value);
if(value==null){
	if(pgel.parent.tagName == 'shortcode'){
		var sc = pgel.parent;
		pgel.insertAfter(sc);
		sc.remove();


		pinegrow.showAlert('<p>We need to remove all variables first.</p>', 'Remove All Variables?', 'No', 'Yes', null, function () {
		
			if (pgel.attr('wp-call-function') != '') {
				pgel.removeAttr('wp-call-function');
				pgel.removeAttr('wp-call-function-echo');
				pgel.removeAttr('wp-call-function-set');
			}

			if(pgel.children){
				xRemove(pgel.children);
			}
			pinegrow.selectElement(pgel);
		});


	}
	return
}

							if(pgel.parent.tagName == 'shortcode' || pgel.tagName == 'shortcode' ) {
//								console.warn("code exit");
								return;
							}

							// if(pgel.attr('data-wpsc') == 'wpsc') {
							// 	console.warn("wpsc exit");
							// 	return;
							// }
//							console.warn("set_value fired - " + value);

							if(value) {
//								console.warn("ilk " + value);
//								pgel.attr('data-wpsc', 'wpsc');	
							} else {
//								console.warn("ikinci " + value);
//								if(pgel.attr('data-wpsc') == 'wpsc') {
//									pgel.removeAttr('data-wpsc');
//								}
							}


//							const d = new Date();
//							let time = d.getTime();
							
//							var strBefore1 = '<code data-time="'+time+'" class="shortcode" wp-template-part wp-template-part-slug="template-parts/shortcodes/icon_box" wp-template-part-content></code>';
							var strBefore1 = '<shortcode class="shortcode" wp-template-part wp-template-part-slug="template-parts/shortcodes/icon_box" wp-template-part-content></shortcode>';

							var strBefore2 = '<?php\n\
							function icon_box( $atts, $content = null ) {\n\
								ob_start();\n\
								extract(shortcode_atts(\n\
									array(\n\
										\'icon\' =\> \'\',\n\
										\'title\' =\> \'\',\n\
										\'description\' =\> \'\',\n\
										\'link\' =\> \'\',\n\
										\'target\' =\> \'\',\n\
										\'id\' =\> \'\',\n\
										\'class\' =\> \'\',\n\
										\'style\' =\> \'\',\n\
									),\n\
									$atts\n\
								));\n\
								?\>';
								
							var strAfter1 = '<?php\n\
							$render = ob_get_contents();\n\
							ob_end_clean();\n\
							return $render;\n\
							}\n\
							?>';

//console.warn(pgel);
//console.warn(pgel.get$DOMElement());
//var a = pgel.get$DOMElement();
//console.warn(a);
//console.warn(a.outerHTML);

//var pgel2 = pgCreate('<div class="pg-lib-help"> </div>');
//var content = section.findOne('.pg-lib-section-content');
//pgel2.insertBefore(pgel);

//console.warn(pgel);
//pgCreate(strBefore1).insertBefore(pgel);


// // var xcode = pgCreate(strBefore1);
// // console.warn(xcode);
// // xcode.insertBefore(pgel);

1670767607274
1670767607283

//crsaFuncs.insertBeforeOrAfter(xcode, pgel, false, false);
//crsaFuncs.insertBeforeOrAfter(pgel, xcode, false, false);

 
var xcode = pgCreate(strBefore1);
xcode.insertBefore(pgel);
//var xcode2 = xcode.insertBefore(pgel);

var xcodechild = pgCreate(strBefore2);
//xcodechild.insertBefore(pgel);
//xcode2.prepend(xcodechild);
xcode.prepend(xcodechild);

//var xcodechild = pgCreate(strBefore2);
//xcodechild.insertBefore(pgel);

xcode.append(pgel);

var xafter = pgCreate(strAfter1);
//xafter.insertAfter(pgel);
xcode.append(xafter);

//var pgel21 = pgCreate(strBefore);
//pgel21.insertBefore(pgel);


//crsaFuncs.insertBeforeOrAfter(selected$el, def, false, false);
//crsaFuncs.replaceElement(selected$el, def);

							if (value) {
//								pgel.setAttribute('data-toggle','tooltip');
//								pgel.setAttribute('data-placement', 'top');
							} else {
//								pgel.removeAttribute('data-toggle');
//								pgel.removeAttribute('data-placement');
							}
//var ilk = a.outerHTML;
//a.outerHTML = "<b>" + ilk + "</b>";


//						crsaFuncs.insertBeforeOrAfter(pgel.get$DOMElement(), pgel.get$DOMElement(), false, false);

//							return value;

pinegrow.selectElement(pgel.parent);


						}



					},
// 					'krft.things.image': {
// 						type: 'image',
// 						name: 'Create Shortcodes',
// 						file_picker: true,
// 						action: 'custom',
// 						get_value: function (pgel) {},
// 						set_value: function (pgel) {
// console.warn(pgel);							
// 						}
// 					},
					'krft.things.csc' : {
						'type' : 'button',
						'action': 'button',
						'name' : 'Create ShortCodes',
						'func' : function(pgel, $button) {
							pinegrow.showAlert('', 'Do you want to create ShortCodes?', 'Not now.', 'Yes, please!', null, function () {
								console.warn(pinegrow.getFrameworks()["wordpress.pinegrow"].current_theme_info.options.dir);
							})
						}
					}					
				}
			}
		};
		framework.addComponentType(things);


		/** END THINGS  */





		/** START WORDPRESS  */

		var attributeoptions = [{
				key: 'icon',
				name: 'icon'
			},
			{
				key: 'title',
				name: 'title'
			},
			{
				key: 'description',
				name: 'description'
			},
			{
				key: 'link',
				name: 'link'
			},
			{
				key: 'target',
				name: 'target'
			},
			{
				key: 'id',
				name: 'id'
			},
			{
				key: 'class',
				name: 'class'
			},
			{
				key: 'style',
				name: 'style'
			},
		];
		var shortcodestart = new PgComponentType('krft.shortcodestart', 'Shortcode START');
		shortcodestart.selector = '.shortcode';
		shortcodestart.parent_selector = 'body';
		shortcodestart.code = '\n<shortcode class="shortcode" wp-template-part wp-template-part-slug="template-parts/shortcodes/icon_box" wp-template-part-content>\n\n\
<?php\n\
function icon_box( $atts, $content = null ) {\n\
	ob_start();\n\
	extract(shortcode_atts(\n\
		array(\n\
			\'icon\' =\> \'\',\n\
			\'title\' =\> \'\',\n\
			\'description\' =\> \'\',\n\
			\'link\' =\> \'\',\n\
			\'target\' =\> \'\',\n\
			\'id\' =\> \'\',\n\
			\'class\' =\> \'\',\n\
			\'style\' =\> \'\',\n\
		),\n\
		$atts\n\
	));\n\
	?\>\n\n\
	</shortcode>';
		shortcodestart.tags = 'major';
		shortcodestart.sections = {
			'krft.shortcodestart': {
				name: 'SHORTCODE OPTIONS',
				fields: {
					'krft.shortcodestart.funcname': {
						type: 'text',
						action: 'custom',
						placeholder: 'icon_box',
						name: 'Name',
						get_value: function (obj) {
							return shortcodestart.getFuncName(obj);
						},
						set_value: function (obj, value, values, oldValue, eventType) {
							obj.attr('wp-template-part-slug', 'template-parts/shortcodes/' + value);
							var myString = obj.html();
							var myRegexp = /function .*(?=\()/g;
							var match = myRegexp.exec(myString);
							var xreturn = match ? match[1] : '';
							myString = myString.replace(myRegexp, "function " + value);
							obj.html(myString);
							return value;
						}
					},
					'krft.shortcodestart.attributes': {
						type: 'select',
						action: 'custom',
						multiple: true,
						can_add_items: true,
						options: attributeoptions,
						name: 'Attributes',
						get_value: function (pgel) {
							var x = pgel.html().split('array(');
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
						},
						set_value: function (pgel, value, values, oldValue, eventType) {
							console.warn(pgel.html());


//							var x = pgel.html().split('array(');
//							var x0 = x[0];
//							var x1 = x[1].split('),')[0];
//							var x2 = x[1].split('),')[1]

// Verilen string
var yourString = pgel.html();

// İlk 'array(' den öncekileri al
var x0 = yourString.substring(0, yourString.indexOf("array("));

// İlk 'array(' den sonraki ilk ), e kadar olanları al
var firstArrayContent = yourString.match(/array\([^)]*\)/)[0];

// İlk ), den sonraki kısmı al
var x2 = yourString.substring(yourString.indexOf("),") + 2);

// Sonuçları console'da görüntüle
//console.log("Before first array:", x0);
//console.log("First array content:", firstArrayContent);
//console.log("After first closing bracket:", x2);


							var xvalue = [];
							var yvalue = "";
							if (value != null) {
								xvalue = myTrim(value.toString()).replace(/\s/g, '').split(",");
								for (var i = 0; i < xvalue.length; i++) {
									yvalue = yvalue + "'" + xvalue[i] + "\' =\> \'\',";
								}
							}
							var lastChar = yvalue.slice(-1);
							if (lastChar == ',') {
								yvalue = yvalue.slice(0, -1);
							}
							var myString = x0 + "array(" + yvalue + ")," + x2;
							console.warn(myString);
							pgel.html(myString);
							return value;
						}
					}
				}
			}
		};

		shortcodestart.getFuncName = function (obj) {
			var zhtml = obj.html();
			var myString = obj.html();
			var myRegexp = /function (.*)(?=\()/g;
			var match = myRegexp.exec(myString);
			var xreturn = match ? match[1] : '';
			return xreturn;
		}

		var shortcodeend = new PgComponentType('krft.shortcodeend', 'Shortcode END');
		shortcodeend.selector = null;
		shortcodeend.parent_selector = null;
		shortcodeend.tags = 'major';
		shortcodeend.code = '\n<?php\n\
$render = ob_get_contents();\n\
ob_end_clean();\n\
return $render;\n\
}\n\
?>';


		var shortcodestartx = new PgComponentType('krft.shortcodestartx', 'Shortcode STARTx');
		shortcodestartx.selector = function(pgel) {
			if (['html', 'body', 'head', 'script','shortcode','SHORTCODE'].includes(pgel.tagName)) {
				return false;
			} else {
				return true;
			}
		};
		shortcodestartx.parent_selector = 'body';
		//shortcodestartx.tags = 'major';
		shortcodestartx.sections = {
			'krft.shortcodestartx': {
				name: 'SHORTCODE ATTRIBUTE',
				fields: {
					'krft.shortcodestartx.funcnamex': {
						type: 'select',
						action: 'custom',
						name: 'Attribute Name',
						show_empty: true,
						live_update: true,
						async_options_function: true,
						fill_list_on_open: true,
						options: function (pgel) {
							var xparent = pinegrow.selectedElements.getLastSelected();
							if (xparent.tagName == 'shortcode') {
								return [];
							}
							while (xparent.tagName != 'shortcode') {
								xparent = xparent.parent;
								if (xparent.tagName == 'body' || xparent.tagName == 'shortcode') {	
									break;
								}
							}
							if (xparent.tagName != 'shortcode') {
								return []; //attributeoptions;
							} else {
								var x = xparent.html().split('array(');
								var x0 = x[0];
								var x1 = x[1].split('),')[0];
								var xmatch = (x1.replace(/\s/g, '')).split(" ").join("").split("'").join("").split(",").join("").split("=>");
								var result = [];
								for (var i = 0; i < xmatch.length - 1; i++) {
									result.push({
										key: '$' + xmatch[i],
										name: '$' + xmatch[i]
									});
								}
								return result;
							}
						},
						get_value: function (pgel) {
							if (pgel.attr('wp-call-function') != '') {
								return pgel.attr('wp-call-function');
							}
							return '';
						},
						set_value: function (pgel, value, values, oldValue, eventType) {

							if (value) {
								pgel.attr('wp-call-function', value);
								pgel.attr('wp-call-function-echo','true');
								pgel.attr('wp-call-function-set','content');
							} else {
								if (pgel.attr('wp-call-function') != '') {
									pgel.removeAttr('wp-call-function');
									pgel.removeAttr('wp-call-function-echo');
									pgel.removeAttr('wp-call-function-set');
									}
							}
							return value;
						}
					}
				}
			}
		};


		framework.addComponentType(shortcodestart);
		framework.addComponentType(shortcodestartx);
		framework.addComponentType(shortcodeend);


		var libsection = new PgFrameworkLibSection("KraftPlugin_lib", "Kraft");
		libsection.setComponentTypes([shortcodestart, shortcodeend]);

		framework.addLibSection(libsection);

		/** END WORDPRESS  */





		/** START DESIGN SYSTEM  */
		var prefix = 'krft.';
		var num_columns = parseInt(pinegrow.getSetting('bootstrap-col-num', '12')) || 12;
		var sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
		var sizes_names = ["Extra Small", "Small", "Medium", "Large", "Extra Large", "Extra Extra Large"];
		var sizes_breakpoints = [0, 576, 768, 992, 1200, 1400];
		var sizes_view_sizes = [320, 640, 768, 1024, 1280];
		var sizes_icons = ['icon-Xs', 'icon-IPAD', 'icon-tableta-lezeca', 'icon-ikone100--copy_laptop', 'icon-Lg'];

		var size_for_all = sizes[0];

		var sizes_breakpoints_map = {};
		for (var i = 0; i < sizes.length; i++) {
			sizes_breakpoints_map[sizes[i]] = sizes_breakpoints[i];
		}

		var isColumn = function (pgel) {
			if (pgel.tagName == 'div') {
				if (pgel.parent && pgel.parent.isSelector('.row,.form-row') && !pgel.hasClass('row')) return true;
				if (pgel.getData(prefix + 'was-column')) return true;
			}
			if (pgel.tagName == 'label') return false;
			var cls = pgel.getAttr('class');
			if (cls) {
				if (cls.match(/(\s|^)col($|[\-\s])/i)) return true; //handle .col as well
			}
			return false;
		}

		var isContainer = function (pgel) {
			return pgel.hasClass('container') || pgel.hasClass('container-fluid')
		}

		var bs_options = {
			num_columns: num_columns,
			sizes: sizes,
			sizes_breakpoints: sizes_breakpoints,
			sizes_breakpoints_map: sizes_breakpoints_map,
			sizes_view_sizes: sizes_view_sizes,
			sizes_icons: sizes_icons,
			size_for_all: size_for_all,
			sizes_names: sizes_names,
			prefix: prefix,
			col_prefix_class: 'col',
			isColumn: isColumn,
			onClickOnColumnPoint: function () {
				var q = PgQuickProperties([def_all.sections[this.options.prefix + 'columns']], this.menu.pgel, this.$element, 'Column size &amp; order', 300);
			}
		}

		var gh = PgBootstrapHelpers(bs_options, framework, 4);


		var tt_values = [];
		tt_values.push({
			key: '-display-1',
			name: 'Display 1'
		});
		tt_values.push({
			key: '-display-2',
			name: 'Display 2'
		});
		tt_values.push({
			key: '-display-3',
			name: 'Display 3'
		});
		tt_values.push({
			key: '-display-4',
			name: 'Display 4'
		});
		tt_values.push({
			key: '-display-5',
			name: 'Display 5'
		});
		tt_values.push({
			key: '-display-6',
			name: 'Display 6'
		});
		tt_values.push({
			key: '-h1',
			name: 'H1'
		});
		tt_values.push({
			key: '-h2',
			name: 'H2'
		});
		tt_values.push({
			key: '-h3',
			name: 'H3'
		});
		tt_values.push({
			key: '-h4',
			name: 'H4'
		});
		tt_values.push({
			key: '-h5',
			name: 'H5'
		});
		tt_values.push({
			key: '-h6',
			name: 'H6'
		});
		tt_values.push({
			key: '-paragraph',
			name: 'Paragraph'
		});
		tt_values.push({
			key: '-paragraph-lead',
			name: 'Lead'
		});
		tt_values.push({
			key: '-paragraph-small',
			name: 'Small'
		});
		tt_values.push({
			key: '-del',
			name: 'Delete'
		});
		tt_values.push({
			key: '-italic',
			name: 'Italicized'
		});
		tt_values.push({
			key: '-bold',
			name: 'Bold'
		});
		tt_values.push({
			key: '-underline',
			name: 'Underline'
		});

		var font_values = [];
		for (var i = 1; i <= 2; i++) {
			font_values.push({
				key: '-' + i,
				name: i
			});
		}
		font_values.push({
			key: '-tt-display-1',
			name: 'TT Display 1'
		});
		font_values.push({
			key: '-tt-display-2',
			name: 'TT Display 2'
		});
		font_values.push({
			key: '-tt-display-3',
			name: 'TT Display 3'
		});
		font_values.push({
			key: '-tt-display-4',
			name: 'TT Display 4'
		});
		font_values.push({
			key: '-tt-display-5',
			name: 'TT Display 5'
		});
		font_values.push({
			key: '-tt-display-6',
			name: 'TT Display 6'
		});
		font_values.push({
			key: '-tt-h1',
			name: 'TT H1'
		});
		font_values.push({
			key: '-tt-h2',
			name: 'TT H2'
		});
		font_values.push({
			key: '-tt-h3',
			name: 'TT H3'
		});
		font_values.push({
			key: '-tt-h4',
			name: 'TT H4'
		});
		font_values.push({
			key: '-tt-h5',
			name: 'TT H5'
		});
		font_values.push({
			key: '-tt-h6',
			name: 'TT H6'
		});
		font_values.push({
			key: '-tt-paragraph',
			name: 'TT Paragraph'
		});
		font_values.push({
			key: '-tt-paragraph-lead',
			name: 'TT Lead'
		});
		font_values.push({
			key: '-tt-paragraph-small',
			name: 'TT Small'
		});
		font_values.push({
			key: '-tt-del',
			name: 'TT Delete'
		});
		font_values.push({
			key: '-tt-italic',
			name: 'TT Italicized'
		});
		font_values.push({
			key: '-tt-bold',
			name: 'TT Bold'
		});
		font_values.push({
			key: '-tt-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 10; i++) {
			font_values.push({
				key: '-c-' + i,
				name: 'FONT-FAMILY ' + i
			});
		}


		var size_values = [];
		size_values.push({
			key: '-display-1',
			name: 'Display 1'
		});
		size_values.push({
			key: '-display-2',
			name: 'Display 2'
		});
		size_values.push({
			key: '-display-3',
			name: 'Display 3'
		});
		size_values.push({
			key: '-display-4',
			name: 'Display 4'
		});
		size_values.push({
			key: '-display-5',
			name: 'Display 5'
		});
		size_values.push({
			key: '-display-6',
			name: 'Display 6'
		});
		size_values.push({
			key: '-h1',
			name: 'H1'
		});
		size_values.push({
			key: '-h2',
			name: 'H2'
		});
		size_values.push({
			key: '-h3',
			name: 'H3'
		});
		size_values.push({
			key: '-h4',
			name: 'H4'
		});
		size_values.push({
			key: '-h5',
			name: 'H5'
		});
		size_values.push({
			key: '-h6',
			name: 'H6'
		});
		size_values.push({
			key: '-paragraph',
			name: 'Paragraph'
		});
		size_values.push({
			key: '-paragraph-lead',
			name: 'Lead'
		});
		size_values.push({
			key: '-paragraph-small',
			name: 'Small'
		});
		size_values.push({
			key: '-del',
			name: 'Delete'
		});
		size_values.push({
			key: '-italic',
			name: 'Italicized'
		});
		size_values.push({
			key: '-bold',
			name: 'Bold'
		});
		size_values.push({
			key: '-underline',
			name: 'Underline'
		});
		for (var i = -5; i <= 20; i++) {
			size_values.push({
				key: '-' + i,
				name: i
			});
		}
		size_values.push({
			key: '-tt-display-1',
			name: 'TT Display 1'
		});
		size_values.push({
			key: '-tt-display-2',
			name: 'TT Display 2'
		});
		size_values.push({
			key: '-tt-display-3',
			name: 'TT Display 3'
		});
		size_values.push({
			key: '-tt-display-4',
			name: 'TT Display 4'
		});
		size_values.push({
			key: '-tt-display-5',
			name: 'TT Display 5'
		});
		size_values.push({
			key: '-tt-display-6',
			name: 'TT Display 6'
		});
		size_values.push({
			key: '-tt-h1',
			name: 'TT H1'
		});
		size_values.push({
			key: '-tt-h2',
			name: 'TT H2'
		});
		size_values.push({
			key: '-tt-h3',
			name: 'TT H3'
		});
		size_values.push({
			key: '-tt-h4',
			name: 'TT H4'
		});
		size_values.push({
			key: '-tt-h5',
			name: 'TT H5'
		});
		size_values.push({
			key: '-tt-h6',
			name: 'TT H6'
		});
		size_values.push({
			key: '-tt-paragraph',
			name: 'TT Paragraph'
		});
		size_values.push({
			key: '-tt-paragraph-lead',
			name: 'TT Lead'
		});
		size_values.push({
			key: '-tt-paragraph-small',
			name: 'TT Small'
		});
		size_values.push({
			key: '-tt-del',
			name: 'TT Delete'
		});
		size_values.push({
			key: '-tt-italic',
			name: 'TT Italicized'
		});
		size_values.push({
			key: '-tt-bold',
			name: 'TT Bold'
		});
		size_values.push({
			key: '-tt-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 10; i++) {
			size_values.push({
				key: '-c-' + i,
				name: 'FONT-SIZE ' + i
			});
		}


		var spacing_values = [];
		spacing_values.push({
			key: '-display-1',
			name: 'Display 1'
		});
		spacing_values.push({
			key: '-display-2',
			name: 'Display 2'
		});
		spacing_values.push({
			key: '-display-3',
			name: 'Display 3'
		});
		spacing_values.push({
			key: '-display-4',
			name: 'Display 4'
		});
		spacing_values.push({
			key: '-display-5',
			name: 'Display 5'
		});
		spacing_values.push({
			key: '-display-6',
			name: 'Display 6'
		});
		spacing_values.push({
			key: '-h1',
			name: 'H1'
		});
		spacing_values.push({
			key: '-h2',
			name: 'H2'
		});
		spacing_values.push({
			key: '-h3',
			name: 'H3'
		});
		spacing_values.push({
			key: '-h4',
			name: 'H4'
		});
		spacing_values.push({
			key: '-h5',
			name: 'H5'
		});
		spacing_values.push({
			key: '-h6',
			name: 'H6'
		});
		spacing_values.push({
			key: '-paragraph',
			name: 'Paragraph'
		});
		spacing_values.push({
			key: '-paragraph-lead',
			name: 'Lead'
		});
		spacing_values.push({
			key: '-paragraph-small',
			name: 'Small'
		});
		spacing_values.push({
			key: '-del',
			name: 'Delete'
		});
		spacing_values.push({
			key: '-italic',
			name: 'Italicized'
		});
		spacing_values.push({
			key: '-bold',
			name: 'Bold'
		});
		spacing_values.push({
			key: '-underline',
			name: 'Underline'
		});
		spacing_values.push({
			key: '-tighter',
			name: '---Tighter---'
		});
		spacing_values.push({
			key: '-tight',
			name: '---Tight---'
		});
		spacing_values.push({
			key: '-normal',
			name: '---Normal---'
		});
		spacing_values.push({
			key: '-wide',
			name: '---Wide---'
		});
		spacing_values.push({
			key: '-wider1',
			name: '---Wider 1---'
		});
		spacing_values.push({
			key: '-wider2',
			name: '---Wider 2---'
		});
		spacing_values.push({
			key: '-wider3',
			name: '---Wider 3---'
		});
		spacing_values.push({
			key: '-wider4',
			name: '---Wider 4---'
		});
		spacing_values.push({
			key: '-wider5',
			name: '---Wider 5---'
		});
		spacing_values.push({
			key: '-widerx',
			name: '---Wider X---'
		});
		spacing_values.push({
			key: '-wider2x',
			name: '---Wider 2X---'
		});
		spacing_values.push({
			key: '-tt-display-1',
			name: 'TT Display 1'
		});
		spacing_values.push({
			key: '-tt-display-2',
			name: 'TT Display 2'
		});
		spacing_values.push({
			key: '-tt-display-3',
			name: 'TT Display 3'
		});
		spacing_values.push({
			key: '-tt-display-4',
			name: 'TT Display 4'
		});
		spacing_values.push({
			key: '-tt-display-5',
			name: 'TT Display 5'
		});
		spacing_values.push({
			key: '-tt-display-6',
			name: 'TT Display 6'
		});
		spacing_values.push({
			key: '-tt-h1',
			name: 'TT H1'
		});
		spacing_values.push({
			key: '-tt-h2',
			name: 'TT H2'
		});
		spacing_values.push({
			key: '-tt-h3',
			name: 'TT H3'
		});
		spacing_values.push({
			key: '-tt-h4',
			name: 'TT H4'
		});
		spacing_values.push({
			key: '-tt-h5',
			name: 'TT H5'
		});
		spacing_values.push({
			key: '-tt-h6',
			name: 'TT H6'
		});
		spacing_values.push({
			key: '-tt-paragraph',
			name: 'TT Paragraph'
		});
		spacing_values.push({
			key: '-tt-paragraph-lead',
			name: 'TT Lead'
		});
		spacing_values.push({
			key: '-tt-paragraph-small',
			name: 'TT Small'
		});
		spacing_values.push({
			key: '-tt-del',
			name: 'TT Delete'
		});
		spacing_values.push({
			key: '-tt-italic',
			name: 'TT Italicized'
		});
		spacing_values.push({
			key: '-tt-bold',
			name: 'TT Bold'
		});
		spacing_values.push({
			key: '-tt-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 10; i++) {
			spacing_values.push({
				key: '-c-' + i,
				name: 'LETTER-SPACING ' + i
			});
		}

		var weight_values = [];
		for (var i = 1; i <= 9; i++) {
			weight_values.push({
				key: '-' + i + '00',
				name: i + '00'
			});
		}
		weight_values.push({
			key: '-thin',
			name: 'Thin'
		});
		weight_values.push({
			key: '-lighter',
			name: 'Lighter'
		});
		weight_values.push({
			key: '-extra-light',
			name: 'Extra Light'
		});
		weight_values.push({
			key: '-light',
			name: 'Light'
		});
		weight_values.push({
			key: '-normal',
			name: 'Normal'
		});
		weight_values.push({
			key: '-regular',
			name: 'Regular'
		});
		weight_values.push({
			key: '-medium',
			name: 'Medium'
		});
		weight_values.push({
			key: '-semi-bold',
			name: 'Semi Bold'
		});
		weight_values.push({
			key: '-bold',
			name: 'Bold'
		});
		weight_values.push({
			key: '-bolder',
			name: 'Bolder'
		});
		weight_values.push({
			key: '-extra-bold',
			name: 'Extra Bold'
		});
		weight_values.push({
			key: '-black',
			name: 'Black'
		});
		weight_values.push({
			key: '-tt-display-1',
			name: 'TT Display 1'
		});
		weight_values.push({
			key: '-tt-display-2',
			name: 'TT Display 2'
		});
		weight_values.push({
			key: '-tt-display-3',
			name: 'TT Display 3'
		});
		weight_values.push({
			key: '-tt-display-4',
			name: 'TT Display 4'
		});
		weight_values.push({
			key: '-tt-display-5',
			name: 'TT Display 5'
		});
		weight_values.push({
			key: '-tt-display-6',
			name: 'TT Display 6'
		});
		weight_values.push({
			key: '-tt-h1',
			name: 'TT H1'
		});
		weight_values.push({
			key: '-tt-h2',
			name: 'TT H2'
		});
		weight_values.push({
			key: '-tt-h3',
			name: 'TT H3'
		});
		weight_values.push({
			key: '-tt-h4',
			name: 'TT H4'
		});
		weight_values.push({
			key: '-tt-h5',
			name: 'TT H5'
		});
		weight_values.push({
			key: '-tt-h6',
			name: 'TT H6'
		});
		weight_values.push({
			key: '-tt-paragraph',
			name: 'TT Paragraph'
		});
		weight_values.push({
			key: '-tt-paragraph-lead',
			name: 'TT Lead'
		});
		weight_values.push({
			key: '-tt-paragraph-small',
			name: 'TT Small'
		});
		weight_values.push({
			key: '-tt-del',
			name: 'TT Delete'
		});
		weight_values.push({
			key: '-tt-italic',
			name: 'TT Italicized'
		});
		weight_values.push({
			key: '-tt-bold',
			name: 'TT Bold'
		});
		weight_values.push({
			key: '-tt-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 10; i++) {
			weight_values.push({
				key: '-c-' + i,
				name: 'FONT-WEIGHT ' + i
			});
		}

		var line_values = [];
		line_values.push({
			key: '-display-1',
			name: 'Display 1'
		});
		line_values.push({
			key: '-display-2',
			name: 'Display 2'
		});
		line_values.push({
			key: '-display-3',
			name: 'Display 3'
		});
		line_values.push({
			key: '-display-4',
			name: 'Display 4'
		});
		line_values.push({
			key: '-display-5',
			name: 'Display 5'
		});
		line_values.push({
			key: '-display-6',
			name: 'Display 6'
		});
		line_values.push({
			key: '-h1',
			name: 'H1'
		});
		line_values.push({
			key: '-h2',
			name: 'H2'
		});
		line_values.push({
			key: '-h3',
			name: 'H3'
		});
		line_values.push({
			key: '-h4',
			name: 'H4'
		});
		line_values.push({
			key: '-h5',
			name: 'H5'
		});
		line_values.push({
			key: '-h6',
			name: 'H6'
		});
		line_values.push({
			key: '-paragraph',
			name: 'Paragraph'
		});
		line_values.push({
			key: '-paragraph-lead',
			name: 'Lead'
		});
		line_values.push({
			key: '-paragraph-small',
			name: 'Small'
		});
		line_values.push({
			key: '-del',
			name: 'Delete'
		});
		line_values.push({
			key: '-italic',
			name: 'Italicized'
		});
		line_values.push({
			key: '-bold',
			name: 'Bold'
		});
		line_values.push({
			key: '-underline',
			name: 'Underline'
		});
		for (var i = -5; i <= 20; i++) {
			line_values.push({
				key: '-' + i,
				name: i
			});
		}
		line_values.push({
			key: '-tt-display-1',
			name: 'TT Display 1'
		});
		line_values.push({
			key: '-tt-display-2',
			name: 'TT Display 2'
		});
		line_values.push({
			key: '-tt-display-3',
			name: 'TT Display 3'
		});
		line_values.push({
			key: '-tt-display-4',
			name: 'TT Display 4'
		});
		line_values.push({
			key: '-tt-display-5',
			name: 'TT Display 5'
		});
		line_values.push({
			key: '-tt-display-6',
			name: 'TT Display 6'
		});
		line_values.push({
			key: '-tt-h1',
			name: 'TT H1'
		});
		line_values.push({
			key: '-tt-h2',
			name: 'TT H2'
		});
		line_values.push({
			key: '-tt-h3',
			name: 'TT H3'
		});
		line_values.push({
			key: '-tt-h4',
			name: 'TT H4'
		});
		line_values.push({
			key: '-tt-h5',
			name: 'TT H5'
		});
		line_values.push({
			key: '-tt-h6',
			name: 'TT H6'
		});
		line_values.push({
			key: '-tt-paragraph',
			name: 'TT Paragraph'
		});
		line_values.push({
			key: '-tt-paragraph-lead',
			name: 'TT Lead'
		});
		line_values.push({
			key: '-tt-paragraph-small',
			name: 'TT Small'
		});
		line_values.push({
			key: '-tt-del',
			name: 'TT Delete'
		});
		line_values.push({
			key: '-tt-italic',
			name: 'TT Italicized'
		});
		line_values.push({
			key: '-tt-bold',
			name: 'TT Bold'
		});
		line_values.push({
			key: '-tt-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 10; i++) {
			line_values.push({
				key: '-c-' + i,
				name: 'LINE-HEIGHT ' + i
			});
		}


		var socials = {
			"behance": "Behance",
			"blogger": "Blogger",
			"dribbble": "Dribbble",
			"dropbox": "Dropbox",
			"facebook": "Facebook",
			"flickr": "Flickr",
			"foursquare": "FourSquare",
			"googleplus": "Google Plus",
			"hackernews": "HackerNews",
			"instagram": "Instagram",
			"line": "Line",
			"linkedin": "LinkedIn",
			"medium": "Medium",
			"messenger": "Messenger",
			"pinterest": "Pinterest",
			"producthunt": "ProductHunt",
			"quora": "Quora",
			"reddit": "Reddit",
			"skype": "Skype",
			"slack": "Slack",
			"slideshare": "SlideShare",
			"snapchat": "SnapChat",
			"soundcloud": "Soundcloud",
			"stumbleupon": "StumbleUpon",
			"tumblr": "Tumblr",
			"twitter": "Twitter",
			"vimeo": "Vimeo",
			"vine": "Vine",
			"vk": "VK",
			"wechat": "WeChat",
			"weibo": "Weibo",
			"whatsapp": "WhatsApp",
			"wordpress": "Wordpress",
			"yahoo": "Yahoo",
			"yelp": "Yelp",
			"youtube": "Youtube"
		}
		var color_values = [];
		color_values.push({
			key: '-primary',
			name: 'Primary'
		});
		color_values.push({
			key: '-secondary',
			name: 'Secondary'
		});
		color_values.push({
			key: '-third',
			name: 'Third'
		});
		color_values.push({
			key: '-fourth',
			name: 'Fourth'
		});
		color_values.push({
			key: '-fifth',
			name: 'Fifth'
		});
		color_values.push({
			key: '-dark',
			name: 'Dark'
		});
		color_values.push({
			key: '-light',
			name: 'Light'
		});
		color_values.push({
			key: '-gray',
			name: 'Gray'
		});
		color_values.push({
			key: '-black',
			name: 'Black'
		});
		color_values.push({
			key: '-white',
			name: 'White'
		});
		color_values.push({
			key: '-success',
			name: 'Success'
		});
		color_values.push({
			key: '-danger',
			name: 'Danger'
		});
		color_values.push({
			key: '-warning',
			name: 'Warning'
		});
		color_values.push({
			key: '-info',
			name: 'Info'
		});
		color_values.push({
			key: '-body',
			name: 'Body'
		});
		color_values.push({
			key: '-muted',
			name: 'Muted'
		});
		color_values.push({
			key: '-black-50',
			name: 'Black 50'
		});
		color_values.push({
			key: '-white-50',
			name: 'White 50'
		});
		color_values.push({
			key: '-transparent',
			name: 'Transparent'
		});
		color_values.push({
			key: '-base',
			name: '---BASE COLOR---'
		});
		color_values.push({
			key: '-complement',
			name: 'complement'
		});
		color_values.push({
			key: '-complement-ryb',
			name: 'complement-ryb'
		});
		color_values.push({
			key: '-split-complement-1',
			name: 'split-complement-1'
		});
		color_values.push({
			key: '-split-complement-2',
			name: 'split-complement-2'
		});
		color_values.push({
			key: '-split-complement-1-ryb',
			name: 'split-complement-1-ryb'
		});
		color_values.push({
			key: '-split-complement-2-ryb',
			name: 'split-complement-2-ryb'
		});
		color_values.push({
			key: '-triadic-1',
			name: 'triadic-1'
		});
		color_values.push({
			key: '-triadic-2',
			name: 'triadic-2'
		});
		color_values.push({
			key: '-triadic-1-ryb',
			name: 'triadic-1-ryb'
		});
		color_values.push({
			key: '-triadic-2-ryb',
			name: 'triadic-2-ryb'
		});
		color_values.push({
			key: '-analogue-1',
			name: 'analogue-1'
		});
		color_values.push({
			key: '-analogue-2',
			name: 'analogue-2'
		});
		color_values.push({
			key: '-analogue-1-ryb',
			name: 'analogue-1-ryb'
		});
		color_values.push({
			key: '-analogue-2-ryb',
			name: 'analogue-2-ryb'
		});
		color_values.push({
			key: '-tetrad-1',
			name: 'tetrad-1'
		});
		color_values.push({
			key: '-tetrad-2',
			name: 'tetrad-2'
		});
		color_values.push({
			key: '-tetrad-3',
			name: 'tetrad-3'
		});
		color_values.push({
			key: '-tetrad-1-ryb',
			name: 'tetrad-1-ryb'
		});
		color_values.push({
			key: '-tetrad-2-ryb',
			name: 'tetrad-2-ryb'
		});
		color_values.push({
			key: '-tetrad-3-ryb',
			name: 'tetrad-3-ryb'
		});
		color_values.push({
			key: '-square-1',
			name: 'square-1'
		});
		color_values.push({
			key: '-square-2',
			name: 'square-2'
		});
		color_values.push({
			key: '-square-3',
			name: 'square-3'
		});
		color_values.push({
			key: '-square-1-ryb',
			name: 'square-1-ryb'
		});
		color_values.push({
			key: '-square-2-ryb',
			name: 'square-2-ryb'
		});
		color_values.push({
			key: '-square-3-ryb',
			name: 'square-3-ryb'
		});
		color_values.push({
			key: '-monochromatic-1',
			name: 'monochromatic-1'
		});
		color_values.push({
			key: '-monochromatic-2',
			name: 'monochromatic-2'
		});
		color_values.push({
			key: '-monochromatic-3',
			name: 'monochromatic-3'
		});
		color_values.push({
			key: '-monochromatic-4',
			name: 'monochromatic-4'
		});
		color_values.push({
			key: '-monochromatic-5',
			name: 'monochromatic-5'
		});
		color_values.push({
			key: '-monochromatic-6',
			name: 'monochromatic-6'
		});
		color_values.push({
			key: '-monochromatic-7',
			name: 'monochromatic-7'
		});
		color_values.push({
			key: '-tint-1',
			name: 'tint-1'
		});
		color_values.push({
			key: '-tint-2',
			name: 'tint-2'
		});
		color_values.push({
			key: '-tint-3',
			name: 'tint-3'
		});
		color_values.push({
			key: '-tint-4',
			name: 'tint-4'
		});
		color_values.push({
			key: '-tint-5',
			name: 'tint-5'
		});
		color_values.push({
			key: '-tint-6',
			name: 'tint-6'
		});
		color_values.push({
			key: '-tint-7',
			name: 'tint-7'
		});
		color_values.push({
			key: '-tint-8',
			name: 'tint-8'
		});
		color_values.push({
			key: '-tint-9',
			name: 'tint-9'
		});
		color_values.push({
			key: '-tint-10',
			name: 'tint-10'
		});
		color_values.push({
			key: '-shade-1',
			name: 'shade-1'
		});
		color_values.push({
			key: '-shade-2',
			name: 'shade-2'
		});
		color_values.push({
			key: '-shade-3',
			name: 'shade-3'
		});
		color_values.push({
			key: '-shade-4',
			name: 'shade-4'
		});
		color_values.push({
			key: '-shade-5',
			name: 'shade-5'
		});
		color_values.push({
			key: '-shade-6',
			name: 'shade-6'
		});
		color_values.push({
			key: '-shade-7',
			name: 'shade-7'
		});
		color_values.push({
			key: '-shade-8',
			name: 'shade-8'
		});
		color_values.push({
			key: '-shade-9',
			name: 'shade-9'
		});
		color_values.push({
			key: '-shade-10',
			name: 'shade-10'
		});
		color_values.push({
			key: '-display-1',
			name: 'TT Display 1'
		});
		color_values.push({
			key: '-display-2',
			name: 'TT Display 2'
		});
		color_values.push({
			key: '-display-3',
			name: 'TT Display 3'
		});
		color_values.push({
			key: '-display-4',
			name: 'TT Display 4'
		});
		color_values.push({
			key: '-display-5',
			name: 'TT Display 5'
		});
		color_values.push({
			key: '-display-6',
			name: 'TT Display 6'
		});
		color_values.push({
			key: '-h1',
			name: 'TT H1'
		});
		color_values.push({
			key: '-h2',
			name: 'TT H2'
		});
		color_values.push({
			key: '-h3',
			name: 'TT H3'
		});
		color_values.push({
			key: '-h4',
			name: 'TT H4'
		});
		color_values.push({
			key: '-h5',
			name: 'TT H5'
		});
		color_values.push({
			key: '-h6',
			name: 'TT H6'
		});
		color_values.push({
			key: '-paragraph',
			name: 'TT Paragraph'
		});
		color_values.push({
			key: '-paragraph-lead',
			name: 'TT Lead'
		});
		color_values.push({
			key: '-paragraph-small',
			name: 'TT Small'
		});
		color_values.push({
			key: '-del',
			name: 'TT Delete'
		});
		color_values.push({
			key: '-italic',
			name: 'TT Italicized'
		});
		color_values.push({
			key: '-bold',
			name: 'TT Bold'
		});
		color_values.push({
			key: '-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 107; i++) {
			color_values.push({
				key: '-gray-' + i,
				name: 'Gray ' + i
			});
		}
		for (var skey in socials) {
			var svalue = socials[skey];
			color_values.push({
				key: '-' + skey,
				name: svalue
			});
		}
		for (var i = 1; i <= 10; i++) {
			color_values.push({
				key: '-c-' + i,
				name: 'COLOR ' + i
			});
		}



		var bg_values = [];
		bg_values.push({
			key: '-primary',
			name: 'Primary'
		});
		bg_values.push({
			key: '-secondary',
			name: 'Secondary'
		});
		bg_values.push({
			key: '-third',
			name: 'Third'
		});
		bg_values.push({
			key: '-fourth',
			name: 'Fourth'
		});
		bg_values.push({
			key: '-fifth',
			name: 'Fifth'
		});
		bg_values.push({
			key: '-dark',
			name: 'Dark'
		});
		bg_values.push({
			key: '-light',
			name: 'Light'
		});
		bg_values.push({
			key: '-gray',
			name: 'Gray'
		});
		bg_values.push({
			key: '-black',
			name: 'Black'
		});
		bg_values.push({
			key: '-white',
			name: 'White'
		});
		bg_values.push({
			key: '-success',
			name: 'Success'
		});
		bg_values.push({
			key: '-danger',
			name: 'Danger'
		});
		bg_values.push({
			key: '-warning',
			name: 'Warning'
		});
		bg_values.push({
			key: '-info',
			name: 'Info'
		});
		bg_values.push({
			key: '-body',
			name: 'Body'
		});
		bg_values.push({
			key: '-muted',
			name: 'Muted'
		});
		bg_values.push({
			key: '-black-50',
			name: 'Black 50'
		});
		bg_values.push({
			key: '-white-50',
			name: 'White 50'
		});
		bg_values.push({
			key: '-transparent',
			name: 'Transparent'
		});
		bg_values.push({
			key: '-base',
			name: '---BASE COLOR---'
		});
		bg_values.push({
			key: '-complement',
			name: 'complement'
		});
		bg_values.push({
			key: '-complement-ryb',
			name: 'complement-ryb'
		});
		bg_values.push({
			key: '-split-complement-1',
			name: 'split-complement-1'
		});
		bg_values.push({
			key: '-split-complement-2',
			name: 'split-complement-2'
		});
		bg_values.push({
			key: '-split-complement-1-ryb',
			name: 'split-complement-1-ryb'
		});
		bg_values.push({
			key: '-split-complement-2-ryb',
			name: 'split-complement-2-ryb'
		});
		bg_values.push({
			key: '-triadic-1',
			name: 'triadic-1'
		});
		bg_values.push({
			key: '-triadic-2',
			name: 'triadic-2'
		});
		bg_values.push({
			key: '-triadic-1-ryb',
			name: 'triadic-1-ryb'
		});
		bg_values.push({
			key: '-triadic-2-ryb',
			name: 'triadic-2-ryb'
		});
		bg_values.push({
			key: '-analogue-1',
			name: 'analogue-1'
		});
		bg_values.push({
			key: '-analogue-2',
			name: 'analogue-2'
		});
		bg_values.push({
			key: '-analogue-1-ryb',
			name: 'analogue-1-ryb'
		});
		bg_values.push({
			key: '-analogue-2-ryb',
			name: 'analogue-2-ryb'
		});
		bg_values.push({
			key: '-tetrad-1',
			name: 'tetrad-1'
		});
		bg_values.push({
			key: '-tetrad-2',
			name: 'tetrad-2'
		});
		bg_values.push({
			key: '-tetrad-3',
			name: 'tetrad-3'
		});
		bg_values.push({
			key: '-tetrad-1-ryb',
			name: 'tetrad-1-ryb'
		});
		bg_values.push({
			key: '-tetrad-2-ryb',
			name: 'tetrad-2-ryb'
		});
		bg_values.push({
			key: '-tetrad-3-ryb',
			name: 'tetrad-3-ryb'
		});
		bg_values.push({
			key: '-square-1',
			name: 'square-1'
		});
		bg_values.push({
			key: '-square-2',
			name: 'square-2'
		});
		bg_values.push({
			key: '-square-3',
			name: 'square-3'
		});
		bg_values.push({
			key: '-square-1-ryb',
			name: 'square-1-ryb'
		});
		bg_values.push({
			key: '-square-2-ryb',
			name: 'square-2-ryb'
		});
		bg_values.push({
			key: '-square-3-ryb',
			name: 'square-3-ryb'
		});
		bg_values.push({
			key: '-monochromatic-1',
			name: 'monochromatic-1'
		});
		bg_values.push({
			key: '-monochromatic-2',
			name: 'monochromatic-2'
		});
		bg_values.push({
			key: '-monochromatic-3',
			name: 'monochromatic-3'
		});
		bg_values.push({
			key: '-monochromatic-4',
			name: 'monochromatic-4'
		});
		bg_values.push({
			key: '-monochromatic-5',
			name: 'monochromatic-5'
		});
		bg_values.push({
			key: '-monochromatic-6',
			name: 'monochromatic-6'
		});
		bg_values.push({
			key: '-monochromatic-7',
			name: 'monochromatic-7'
		});
		bg_values.push({
			key: '-tint-1',
			name: 'tint-1'
		});
		bg_values.push({
			key: '-tint-2',
			name: 'tint-2'
		});
		bg_values.push({
			key: '-tint-3',
			name: 'tint-3'
		});
		bg_values.push({
			key: '-tint-4',
			name: 'tint-4'
		});
		bg_values.push({
			key: '-tint-5',
			name: 'tint-5'
		});
		bg_values.push({
			key: '-tint-6',
			name: 'tint-6'
		});
		bg_values.push({
			key: '-tint-7',
			name: 'tint-7'
		});
		bg_values.push({
			key: '-tint-8',
			name: 'tint-8'
		});
		bg_values.push({
			key: '-tint-9',
			name: 'tint-9'
		});
		bg_values.push({
			key: '-tint-10',
			name: 'tint-10'
		});
		bg_values.push({
			key: '-shade-1',
			name: 'shade-1'
		});
		bg_values.push({
			key: '-shade-2',
			name: 'shade-2'
		});
		bg_values.push({
			key: '-shade-3',
			name: 'shade-3'
		});
		bg_values.push({
			key: '-shade-4',
			name: 'shade-4'
		});
		bg_values.push({
			key: '-shade-5',
			name: 'shade-5'
		});
		bg_values.push({
			key: '-shade-6',
			name: 'shade-6'
		});
		bg_values.push({
			key: '-shade-7',
			name: 'shade-7'
		});
		bg_values.push({
			key: '-shade-8',
			name: 'shade-8'
		});
		bg_values.push({
			key: '-shade-9',
			name: 'shade-9'
		});
		bg_values.push({
			key: '-shade-10',
			name: 'shade-10'
		});
		bg_values.push({
			key: '-display-1',
			name: 'TT Display 1'
		});
		bg_values.push({
			key: '-display-2',
			name: 'TT Display 2'
		});
		bg_values.push({
			key: '-display-3',
			name: 'TT Display 3'
		});
		bg_values.push({
			key: '-display-4',
			name: 'TT Display 4'
		});
		bg_values.push({
			key: '-display-5',
			name: 'TT Display 5'
		});
		bg_values.push({
			key: '-display-6',
			name: 'TT Display 6'
		});
		bg_values.push({
			key: '-h1',
			name: 'TT H1'
		});
		bg_values.push({
			key: '-h2',
			name: 'TT H2'
		});
		bg_values.push({
			key: '-h3',
			name: 'TT H3'
		});
		bg_values.push({
			key: '-h4',
			name: 'TT H4'
		});
		bg_values.push({
			key: '-h5',
			name: 'TT H5'
		});
		bg_values.push({
			key: '-h6',
			name: 'TT H6'
		});
		bg_values.push({
			key: '-paragraph',
			name: 'TT Paragraph'
		});
		bg_values.push({
			key: '-paragraph-lead',
			name: 'TT Lead'
		});
		bg_values.push({
			key: '-paragraph-small',
			name: 'TT Small'
		});
		bg_values.push({
			key: '-del',
			name: 'TT Delete'
		});
		bg_values.push({
			key: '-italic',
			name: 'TT Italicized'
		});
		bg_values.push({
			key: '-bold',
			name: 'TT Bold'
		});
		bg_values.push({
			key: '-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 107; i++) {
			bg_values.push({
				key: '-gray-' + i,
				name: 'Gray ' + i
			});
		}
		for (var skey in socials) {
			var svalue = socials[skey];
			bg_values.push({
				key: '-' + skey,
				name: svalue
			});
		}
		for (var i = 1; i <= 10; i++) {
			bg_values.push({
				key: '-c-' + i,
				name: 'BG-COLOR ' + i
			});
		}


		var overlay_values = [];
		overlay_values.push({
			key: '-primary',
			name: 'Primary'
		});
		overlay_values.push({
			key: '-secondary',
			name: 'Secondary'
		});
		overlay_values.push({
			key: '-third',
			name: 'Third'
		});
		overlay_values.push({
			key: '-fourth',
			name: 'Fourth'
		});
		overlay_values.push({
			key: '-fifth',
			name: 'Fifth'
		});
		overlay_values.push({
			key: '-dark',
			name: 'Dark'
		});
		overlay_values.push({
			key: '-light',
			name: 'Light'
		});
		overlay_values.push({
			key: '-gray',
			name: 'Gray'
		});
		overlay_values.push({
			key: '-black',
			name: 'Black'
		});
		overlay_values.push({
			key: '-white',
			name: 'White'
		});
		overlay_values.push({
			key: '-success',
			name: 'Success'
		});
		overlay_values.push({
			key: '-danger',
			name: 'Danger'
		});
		overlay_values.push({
			key: '-warning',
			name: 'Warning'
		});
		overlay_values.push({
			key: '-info',
			name: 'Info'
		});
		overlay_values.push({
			key: '-body',
			name: 'Body'
		});
		overlay_values.push({
			key: '-muted',
			name: 'Muted'
		});
		overlay_values.push({
			key: '-realblack',
			name: 'Real Black'
		});
		overlay_values.push({
			key: '-realwhite',
			name: 'Real White'
		});
		overlay_values.push({
			key: '-base',
			name: '---BASE COLOR---'
		});
		overlay_values.push({
			key: '-complement',
			name: 'complement'
		});
		overlay_values.push({
			key: '-complement-ryb',
			name: 'complement-ryb'
		});
		overlay_values.push({
			key: '-split-complement-1',
			name: 'split-complement-1'
		});
		overlay_values.push({
			key: '-split-complement-2',
			name: 'split-complement-2'
		});
		overlay_values.push({
			key: '-split-complement-1-ryb',
			name: 'split-complement-1-ryb'
		});
		overlay_values.push({
			key: '-split-complement-2-ryb',
			name: 'split-complement-2-ryb'
		});
		overlay_values.push({
			key: '-triadic-1',
			name: 'triadic-1'
		});
		overlay_values.push({
			key: '-triadic-2',
			name: 'triadic-2'
		});
		overlay_values.push({
			key: '-triadic-1-ryb',
			name: 'triadic-1-ryb'
		});
		overlay_values.push({
			key: '-triadic-2-ryb',
			name: 'triadic-2-ryb'
		});
		overlay_values.push({
			key: '-analogue-1',
			name: 'analogue-1'
		});
		overlay_values.push({
			key: '-analogue-2',
			name: 'analogue-2'
		});
		overlay_values.push({
			key: '-analogue-1-ryb',
			name: 'analogue-1-ryb'
		});
		overlay_values.push({
			key: '-analogue-2-ryb',
			name: 'analogue-2-ryb'
		});
		overlay_values.push({
			key: '-tetrad-1',
			name: 'tetrad-1'
		});
		overlay_values.push({
			key: '-tetrad-2',
			name: 'tetrad-2'
		});
		overlay_values.push({
			key: '-tetrad-3',
			name: 'tetrad-3'
		});
		overlay_values.push({
			key: '-tetrad-1-ryb',
			name: 'tetrad-1-ryb'
		});
		overlay_values.push({
			key: '-tetrad-2-ryb',
			name: 'tetrad-2-ryb'
		});
		overlay_values.push({
			key: '-tetrad-3-ryb',
			name: 'tetrad-3-ryb'
		});
		overlay_values.push({
			key: '-square-1',
			name: 'square-1'
		});
		overlay_values.push({
			key: '-square-2',
			name: 'square-2'
		});
		overlay_values.push({
			key: '-square-3',
			name: 'square-3'
		});
		overlay_values.push({
			key: '-square-1-ryb',
			name: 'square-1-ryb'
		});
		overlay_values.push({
			key: '-square-2-ryb',
			name: 'square-2-ryb'
		});
		overlay_values.push({
			key: '-square-3-ryb',
			name: 'square-3-ryb'
		});
		overlay_values.push({
			key: '-monochromatic-1',
			name: 'monochromatic-1'
		});
		overlay_values.push({
			key: '-monochromatic-2',
			name: 'monochromatic-2'
		});
		overlay_values.push({
			key: '-monochromatic-3',
			name: 'monochromatic-3'
		});
		overlay_values.push({
			key: '-monochromatic-4',
			name: 'monochromatic-4'
		});
		overlay_values.push({
			key: '-monochromatic-5',
			name: 'monochromatic-5'
		});
		overlay_values.push({
			key: '-monochromatic-6',
			name: 'monochromatic-6'
		});
		overlay_values.push({
			key: '-monochromatic-7',
			name: 'monochromatic-7'
		});
		overlay_values.push({
			key: '-tint-1',
			name: 'tint-1'
		});
		overlay_values.push({
			key: '-tint-2',
			name: 'tint-2'
		});
		overlay_values.push({
			key: '-tint-3',
			name: 'tint-3'
		});
		overlay_values.push({
			key: '-tint-4',
			name: 'tint-4'
		});
		overlay_values.push({
			key: '-tint-5',
			name: 'tint-5'
		});
		overlay_values.push({
			key: '-tint-6',
			name: 'tint-6'
		});
		overlay_values.push({
			key: '-tint-7',
			name: 'tint-7'
		});
		overlay_values.push({
			key: '-tint-8',
			name: 'tint-8'
		});
		overlay_values.push({
			key: '-tint-9',
			name: 'tint-9'
		});
		overlay_values.push({
			key: '-tint-10',
			name: 'tint-10'
		});
		overlay_values.push({
			key: '-shade-1',
			name: 'shade-1'
		});
		overlay_values.push({
			key: '-shade-2',
			name: 'shade-2'
		});
		overlay_values.push({
			key: '-shade-3',
			name: 'shade-3'
		});
		overlay_values.push({
			key: '-shade-4',
			name: 'shade-4'
		});
		overlay_values.push({
			key: '-shade-5',
			name: 'shade-5'
		});
		overlay_values.push({
			key: '-shade-6',
			name: 'shade-6'
		});
		overlay_values.push({
			key: '-shade-7',
			name: 'shade-7'
		});
		overlay_values.push({
			key: '-shade-8',
			name: 'shade-8'
		});
		overlay_values.push({
			key: '-shade-9',
			name: 'shade-9'
		});
		overlay_values.push({
			key: '-shade-10',
			name: 'shade-10'
		});
		overlay_values.push({
			key: '-display-1',
			name: 'TT Display 1'
		});
		overlay_values.push({
			key: '-display-2',
			name: 'TT Display 2'
		});
		overlay_values.push({
			key: '-display-3',
			name: 'TT Display 3'
		});
		overlay_values.push({
			key: '-display-4',
			name: 'TT Display 4'
		});
		overlay_values.push({
			key: '-display-5',
			name: 'TT Display 5'
		});
		overlay_values.push({
			key: '-display-6',
			name: 'TT Display 6'
		});
		overlay_values.push({
			key: '-h1',
			name: 'TT H1'
		});
		overlay_values.push({
			key: '-h2',
			name: 'TT H2'
		});
		overlay_values.push({
			key: '-h3',
			name: 'TT H3'
		});
		overlay_values.push({
			key: '-h4',
			name: 'TT H4'
		});
		overlay_values.push({
			key: '-h5',
			name: 'TT H5'
		});
		overlay_values.push({
			key: '-h6',
			name: 'TT H6'
		});
		overlay_values.push({
			key: '-paragraph',
			name: 'TT Paragraph'
		});
		overlay_values.push({
			key: '-paragraph-lead',
			name: 'TT Lead'
		});
		overlay_values.push({
			key: '-paragraph-small',
			name: 'TT Small'
		});
		overlay_values.push({
			key: '-del',
			name: 'TT Delete'
		});
		overlay_values.push({
			key: '-italic',
			name: 'TT Italicized'
		});
		overlay_values.push({
			key: '-bold',
			name: 'TT Bold'
		});
		overlay_values.push({
			key: '-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 107; i++) {
			overlay_values.push({
				key: '-gray-' + i,
				name: 'Gray ' + i
			});
		}
		for (var skey in socials) {
			var svalue = socials[skey];
			overlay_values.push({
				key: '-' + skey,
				name: svalue
			});
		}
		for (var i = 1; i <= 10; i++) {
			overlay_values.push({
				key: '-c-' + i,
				name: 'OVERLAY-COLOR ' + i
			});
		}


		var border_values = [];
		border_values.push({
			key: '-primary',
			name: 'Primary'
		});
		border_values.push({
			key: '-secondary',
			name: 'Secondary'
		});
		border_values.push({
			key: '-third',
			name: 'Third'
		});
		border_values.push({
			key: '-fourth',
			name: 'Fourth'
		});
		border_values.push({
			key: '-fifth',
			name: 'Fifth'
		});
		border_values.push({
			key: '-dark',
			name: 'Dark'
		});
		border_values.push({
			key: '-light',
			name: 'Light'
		});
		border_values.push({
			key: '-gray',
			name: 'Gray'
		});
		border_values.push({
			key: '-black',
			name: 'Black'
		});
		border_values.push({
			key: '-white',
			name: 'White'
		});
		border_values.push({
			key: '-success',
			name: 'Success'
		});
		border_values.push({
			key: '-danger',
			name: 'Danger'
		});
		border_values.push({
			key: '-warning',
			name: 'Warning'
		});
		border_values.push({
			key: '-info',
			name: 'Info'
		});
		border_values.push({
			key: '-body',
			name: 'Body'
		});
		border_values.push({
			key: '-muted',
			name: 'Muted'
		});
		border_values.push({
			key: '-black-50',
			name: 'Black 50'
		});
		border_values.push({
			key: '-white-50',
			name: 'White 50'
		});
		border_values.push({
			key: '-transparent',
			name: 'Transparent'
		});
		border_values.push({
			key: '-base',
			name: '---BASE COLOR---'
		});
		border_values.push({
			key: '-complement',
			name: 'complement'
		});
		border_values.push({
			key: '-complement-ryb',
			name: 'complement-ryb'
		});
		border_values.push({
			key: '-split-complement-1',
			name: 'split-complement-1'
		});
		border_values.push({
			key: '-split-complement-2',
			name: 'split-complement-2'
		});
		border_values.push({
			key: '-split-complement-1-ryb',
			name: 'split-complement-1-ryb'
		});
		border_values.push({
			key: '-split-complement-2-ryb',
			name: 'split-complement-2-ryb'
		});
		border_values.push({
			key: '-triadic-1',
			name: 'triadic-1'
		});
		border_values.push({
			key: '-triadic-2',
			name: 'triadic-2'
		});
		border_values.push({
			key: '-triadic-1-ryb',
			name: 'triadic-1-ryb'
		});
		border_values.push({
			key: '-triadic-2-ryb',
			name: 'triadic-2-ryb'
		});
		border_values.push({
			key: '-analogue-1',
			name: 'analogue-1'
		});
		border_values.push({
			key: '-analogue-2',
			name: 'analogue-2'
		});
		border_values.push({
			key: '-analogue-1-ryb',
			name: 'analogue-1-ryb'
		});
		border_values.push({
			key: '-analogue-2-ryb',
			name: 'analogue-2-ryb'
		});
		border_values.push({
			key: '-tetrad-1',
			name: 'tetrad-1'
		});
		border_values.push({
			key: '-tetrad-2',
			name: 'tetrad-2'
		});
		border_values.push({
			key: '-tetrad-3',
			name: 'tetrad-3'
		});
		border_values.push({
			key: '-tetrad-1-ryb',
			name: 'tetrad-1-ryb'
		});
		border_values.push({
			key: '-tetrad-2-ryb',
			name: 'tetrad-2-ryb'
		});
		border_values.push({
			key: '-tetrad-3-ryb',
			name: 'tetrad-3-ryb'
		});
		border_values.push({
			key: '-square-1',
			name: 'square-1'
		});
		border_values.push({
			key: '-square-2',
			name: 'square-2'
		});
		border_values.push({
			key: '-square-3',
			name: 'square-3'
		});
		border_values.push({
			key: '-square-1-ryb',
			name: 'square-1-ryb'
		});
		border_values.push({
			key: '-square-2-ryb',
			name: 'square-2-ryb'
		});
		border_values.push({
			key: '-square-3-ryb',
			name: 'square-3-ryb'
		});
		border_values.push({
			key: '-monochromatic-1',
			name: 'monochromatic-1'
		});
		border_values.push({
			key: '-monochromatic-2',
			name: 'monochromatic-2'
		});
		border_values.push({
			key: '-monochromatic-3',
			name: 'monochromatic-3'
		});
		border_values.push({
			key: '-monochromatic-4',
			name: 'monochromatic-4'
		});
		border_values.push({
			key: '-monochromatic-5',
			name: 'monochromatic-5'
		});
		border_values.push({
			key: '-monochromatic-6',
			name: 'monochromatic-6'
		});
		border_values.push({
			key: '-monochromatic-7',
			name: 'monochromatic-7'
		});
		border_values.push({
			key: '-tint-1',
			name: 'tint-1'
		});
		border_values.push({
			key: '-tint-2',
			name: 'tint-2'
		});
		border_values.push({
			key: '-tint-3',
			name: 'tint-3'
		});
		border_values.push({
			key: '-tint-4',
			name: 'tint-4'
		});
		border_values.push({
			key: '-tint-5',
			name: 'tint-5'
		});
		border_values.push({
			key: '-tint-6',
			name: 'tint-6'
		});
		border_values.push({
			key: '-tint-7',
			name: 'tint-7'
		});
		border_values.push({
			key: '-tint-8',
			name: 'tint-8'
		});
		border_values.push({
			key: '-tint-9',
			name: 'tint-9'
		});
		border_values.push({
			key: '-tint-10',
			name: 'tint-10'
		});
		border_values.push({
			key: '-shade-1',
			name: 'shade-1'
		});
		border_values.push({
			key: '-shade-2',
			name: 'shade-2'
		});
		border_values.push({
			key: '-shade-3',
			name: 'shade-3'
		});
		border_values.push({
			key: '-shade-4',
			name: 'shade-4'
		});
		border_values.push({
			key: '-shade-5',
			name: 'shade-5'
		});
		border_values.push({
			key: '-shade-6',
			name: 'shade-6'
		});
		border_values.push({
			key: '-shade-7',
			name: 'shade-7'
		});
		border_values.push({
			key: '-shade-8',
			name: 'shade-8'
		});
		border_values.push({
			key: '-shade-9',
			name: 'shade-9'
		});
		border_values.push({
			key: '-shade-10',
			name: 'shade-10'
		});
		border_values.push({
			key: '-display-1',
			name: 'TT Display 1'
		});
		border_values.push({
			key: '-display-2',
			name: 'TT Display 2'
		});
		border_values.push({
			key: '-display-3',
			name: 'TT Display 3'
		});
		border_values.push({
			key: '-display-4',
			name: 'TT Display 4'
		});
		border_values.push({
			key: '-display-5',
			name: 'TT Display 5'
		});
		border_values.push({
			key: '-display-6',
			name: 'TT Display 6'
		});
		border_values.push({
			key: '-h1',
			name: 'TT H1'
		});
		border_values.push({
			key: '-h2',
			name: 'TT H2'
		});
		border_values.push({
			key: '-h3',
			name: 'TT H3'
		});
		border_values.push({
			key: '-h4',
			name: 'TT H4'
		});
		border_values.push({
			key: '-h5',
			name: 'TT H5'
		});
		border_values.push({
			key: '-h6',
			name: 'TT H6'
		});
		border_values.push({
			key: '-paragraph',
			name: 'TT Paragraph'
		});
		border_values.push({
			key: '-paragraph-lead',
			name: 'TT Lead'
		});
		border_values.push({
			key: '-paragraph-small',
			name: 'TT Small'
		});
		border_values.push({
			key: '-del',
			name: 'TT Delete'
		});
		border_values.push({
			key: '-italic',
			name: 'TT Italicized'
		});
		border_values.push({
			key: '-bold',
			name: 'TT Bold'
		});
		border_values.push({
			key: '-underline',
			name: 'TT Underline'
		});
		for (var i = 1; i <= 107; i++) {
			border_values.push({
				key: '-gray-' + i,
				name: 'Gray ' + i
			});
		}
		for (var skey in socials) {
			var svalue = socials[skey];
			border_values.push({
				key: '-' + skey,
				name: svalue
			});
		}
		for (var i = 1; i <= 10; i++) {
			border_values.push({
				key: '-c-' + i,
				name: 'BORDER-COLOR ' + i
			});
		}

		var boxshadow_values = [];
		boxshadow_values.push({
			key: '-none',
			name: 'none'
		});
		boxshadow_values.push({
			key: '-sm',
			name: 'Small'
		});
		boxshadow_values.push({
			key: '',
			name: 'Regular'
		});
		boxshadow_values.push({
			key: '-lg',
			name: 'Large'
		});
		boxshadow_values.push({
			key: '-10',
			name: '10%'
		});
		boxshadow_values.push({
			key: '-20',
			name: '20%'
		});
		boxshadow_values.push({
			key: '-30',
			name: '30%'
		});
		boxshadow_values.push({
			key: '-40',
			name: '40%'
		});
		boxshadow_values.push({
			key: '-50',
			name: '50%'
		});
		boxshadow_values.push({
			key: '-60',
			name: '60%'
		});
		boxshadow_values.push({
			key: '-70',
			name: '70%'
		});
		boxshadow_values.push({
			key: '-80',
			name: '80%'
		});
		boxshadow_values.push({
			key: '-90',
			name: '90%'
		});
		boxshadow_values.push({
			key: '-100',
			name: '100%'
		});
		for (var i = 1; i <= 10; i++) {
			boxshadow_values.push({
				key: '-c-' + i,
				name: 'BOX-SHADOW ' + i
			});
		}

		var margin_values = [];
		var padding_values = [];
		//Return a function that will create the control
		var getGridControlFactory = function (control_id, rows) {
			//Returns function that creates the control
			return function () {
				//will keep helper functions and vars private

				//Create control, needs a unique id
				var c = new PgCustomPropertyControl(prefix + control_id);

				//Register subfields.
				c.onDefine = function () {

					//These fields will not be shown when just registered. This is neccessary to get values.
					for (var n = 0; n < rows.length; n++) {
						for (var m = 0; m < sizes.length; m++) {
							var field = prefix + rows[n].field_prefix + '.' + sizes[m];
							this.registerInputField(field, createFieldDef(rows[n], sizes[m]))
						}
					}
				}

				//Show control. Return the control $el.
				c.onShow = function () {
					var $table = $("<table/>", {
						class: 'grid-control columns-control seven-col-grid'
					});
					var html = '<td></td>';
					sizes.forEach(function (size) {
						html += '<td><label class="grid-control-size">' + size + '</label></td>';
					})
					var $row = $("<tr/>").html(html).appendTo($table);

					for (var n = 0; n < rows.length; n++) {
						$row = $("<tr/>", {
							class: ''
						}).appendTo($table);
						var $td = $("<td/>").html('<label>' + rows[n].name + '</label>').appendTo($row);

						for (var m = 0; m < sizes.length; m++) {
							$td = $("<td/>").appendTo($row);
							var field = prefix + rows[n].field_prefix + '.' + sizes[m];
							this.showInputField($td, field, createFieldDef(rows[n], sizes[m]));
						}
					}
					return $table;
				}

				//Called when control is recycled and new values are set
				c.onSetValues = function () {
					//Nothing to do in this case. PG will take care of updating sub fields with new values
				}

				//Helper functions and vars

				var createFieldDef = function (row, size) {
					var size_part = (size == size_for_all) ? '' : ('-' + size);
					var base = row.class_prefix + size_part;
					var span_select = {
						'type': 'select',
						'name': null,
						'action': 'apply_class',
						draggable_list: true,
						'show_empty': true,
						'options': [],
						'on_changed': function (pgel, prop, value) {
							pgel.setData(prefix + 'was-column', true);
							/*                            if(value) {
							                                if(!pgel.parent.hasClass('row')) {
							                                    pinegrow.showAlert('<p>Column must have a Row parent element.</p><p>Would you like to add a Row?</p>', 'Every Column needs a Row', 'No', 'Yes, add a Row', null, function() {
							                                        if(!pgel.isDeleted) {
							                                            var row = pgCreate('<div class="row"></div>');
							                                            row.insertBefore(pgel);
							                                            row.append(pgel);
							                                            pinegrow.showQuickMessage('Parent Row added.');
							                                        }
							                                    })
							                                }
							                            }*/
						}
					}
					row.values.forEach(function (d) {
						span_select.options.push({
							key: base + d.key,
							name: d.name
						});
					})
					return span_select;
				}

				//Return the control
				return c;
			};
		}

		//all section and field keys should be prefixed by prefix bs4.
		var addPrefixToSectionsAndFields = function (sections) {
			return gh.addPrefixToSectionsAndFields(sections);
		}




		// Margins & Paddings

		isSizeVisible = function (page_or_pv, size) {
			var pv = page_or_pv instanceof PgPageView ? page_or_pv : page_or_pv.activeView;
			//    return pv.deviceWidth >= options.sizes_breakpoints_map[size];
			return pv.deviceWidth >= sizes_breakpoints_map[size];
		}


		makeFieldLabelForSize = function (label, size) {
			return '<span class="sc-label">' + label + '</span><span class="sc-device-size">' + size + '</span>';
		}

		getDevicesControlFactory = function (control_id, title, func) {

			//Returns function that creates the control
			var forSize = function (f) {
				sizes.forEach(function (size) {
					f(size, size == size_for_all ? '' : '-' + size, prefix + control_id + '.' + size);
				})
			}

			return function () {
				//will keep helper functions and vars private

				//Create control, needs a unique id
				var c = new PgCustomPropertyControl(options.prefix + control_id);

				//Register subfields.
				c.onDefine = function () {

					//These fields will not be shown when just registered. This is neccessary to get values.
					forSize(function (size, size_token, field_key) {
						var field = func(size, size_token);
						c.registerInputField(field_key, field);
					})
				}

				//Show control. Return the control $el.
				c.onShow = function () {
					var $div = $("<div/>", {
						class: 'sc-device-control'
					});
					$('<div class="sc-device-control-title">' + title + '</div>').appendTo($div);
					forSize(function (size, size_token, field_key) {
						var field_def = func(size, size_token);
						var field = c.showInputField($div, field_key, field_def);
						field.$field.attr('data-device-size', size);
					})
					return $div;
				}

				//Called when control is recycled and new values are set
				c.onSetValues = function (values) {
					//return;
					var none_or_all = true;

					forSize(function (size, size_token, field_key) {
						var $field = c.get$Field(field_key);
						if (c.values[field_key]) {
							$field.addClass('sc-has-value');
							if (size != size_for_all) {
								none_or_all = false;
							}
						} else {
							$field.removeClass('sc-has-value');
						}
					})
					if (none_or_all) {
						c.$element.addClass('sc-none-or-all');
					} else {
						c.$element.removeClass('sc-none-or-all');
					}
				}

				//Return the control
				return c;
			};
		}



		var open_device_sections_map = {};

		ZonSectionWithDevicesControlsShown = function (secdef, uiSection) {

			// options.framework_prefix = 'bs' + version;
			// options.container_selector = '.container,.container-fluid';
			// options.grid_container_selector = 'row';
			// options.style = '';

			// var pgFrameworkHelpers = new PgFrameworkHelpers('Bootstrap', options, f, version, PgBSMenuPointColumnSize);

			////    var gh = pgFrameworkHelpers;

			//var setActive = function($li, )
			var active = {}
			var no_active = true;

			// options.sizes.forEach(function(size) {
			//     if(open_device_sections_map[secdef.section_key] && open_device_sections_map[secdef.section_key][size]) {
			//         active[size] = true;
			//     }
			// })
			sizes.forEach(function (size) {
				if (open_device_sections_map[secdef.section_key] && open_device_sections_map[secdef.section_key][size]) {
					active[size] = true;
				}
			})

			var fields = uiSection.$content.get(0).querySelectorAll('[data-device-size]');

			fields.forEach(function (field) {
				var size = field.getAttribute('data-device-size');
				if (!active[size]) {
					var has = field.classList.contains('sc-has-value');
					active[size] = has;
					no_active = no_active && !has;
				}
			})

			if (no_active) {
				active[options.size_for_all] = true;
			}

			fields.forEach(function (field) {
				var size = field.getAttribute('data-device-size');
				var display = field.getAttribute('data-device-display') || 'flex';

				if (active[size]) {
					pgShow(field, display);
				} else {
					pgHide(field);
				}
			})

			var html = '<ul class="sc-device-selector">';
			// options.sizes.forEach(function(size) {
			//     html += '<li data-size="' + size + '" class="' + (active[size] ? 'sc-active' : '') + '">' + size + '</li>';
			// })
			sizes.forEach(function (size) {
				html += '<li data-size="' + size + '" class="' + (active[size] ? 'sc-active' : '') + '">' + size + '</li>';
			})
			html += '</ul>';
			var $c = $(html);
			uiSection.$title.append($c);

			$c.on('click', 'li', function (e) {
				e.preventDefault();
				e.stopPropagation();

				var $li = $(this);
				var size = $li.attr('data-size');
				var a = $li.hasClass('sc-active');
				a = !a;

				active[size] = a;

				if (!a) {
					if ($c.find('li.sc-active').length == 1) {
						pinegrow.showQuickError('At least one device size must be active.');
						return;
					}
				}

				if (!open_device_sections_map[secdef.section_key]) {
					open_device_sections_map[secdef.section_key] = {};
				}

				open_device_sections_map[secdef.section_key][size] = a;

				var $fields = uiSection.$content.find('[data-device-size="' + size + '"]');
				$fields.each(function (i, field) {
					var display = field.getAttribute('data-device-display') || 'flex';

					if (a) {
						pg$Show($(field), display);
						$li.addClass('sc-active');
					} else {
						pg$Hide($(field));
						$li.removeClass('sc-active');
					}
				});
				updateLabels();
			})

			var updateVisibility = function () {
				var page = pinegrow.getSelectedPage();
				fields.forEach(function (field) {
					var size = field.getAttribute('data-device-size');
					// if(gh.isSizeVisible(page, size)) {
					//     field.classList.remove('sc-size-not-visible');
					// } else {
					//     field.classList.add('sc-size-not-visible');
					// }
					if (isSizeVisible(page, size)) {
						field.classList.remove('sc-size-not-visible');
					} else {
						field.classList.add('sc-size-not-visible');
					}
				})

				$c.children().each(function (i, li) {
					var size = li.getAttribute('data-size');
					// if(gh.isSizeVisible(page, size)) {
					//     li.classList.remove('sc-size-not-visible');
					// } else {
					//     li.classList.add('sc-size-not-visible');
					// }
					if (isSizeVisible(page, size)) {
						li.classList.remove('sc-size-not-visible');
					} else {
						li.classList.add('sc-size-not-visible');
					}
				})
			}

			var updateLabels = function () {
				var num_shown = 0;
				var all_shown = false;

				// options.sizes.forEach(function(size) {
				//     if(active[size]) {
				//         num_shown++;
				//         if(size == options.size_for_all) {
				//             all_shown = true;
				//         }
				//     }
				// })
				sizes.forEach(function (size) {
					if (active[size]) {
						num_shown++;
						if (size == size_for_all) {
							all_shown = true;
						}
					}
				})

				var $controls = uiSection.$content.find('.sc-device-control');

				if (num_shown > 1) {
					$controls.removeClass('sc-single-size');
				} else {
					$controls.addClass('sc-single-size');
				}
				if (all_shown) {
					$controls.addClass('sc-for-all-shown');
				} else {
					$controls.removeClass('sc-for-all-shown');
				}
			}

			updateVisibility();
			updateLabels();

		}

		var directions = ['', 'x', 'y', 't', 'e', 'b', 's'];
		//var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'8pt','16pt','24pt','32pt','40pt','48pt','56pt','64pt','72pt','80pt','88pt','96pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt'];
		//var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'8pt','16pt','24pt','32pt','40pt','48pt','56pt','64pt','72pt','80pt','88pt','96pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt', 'n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11','n8pt','n16pt','n24pt','n32pt','n40pt','n48pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt'];
		//var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'1pt','2pt','3pt','4pt','5pt','6pt','7pt','8pt','9pt','10pt','12pt','16pt','18pt','20pt','24pt','32pt','40pt','48pt','50pt','56pt','64pt','72pt','80pt','88pt','96pt','100pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt','240pt','250pt', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11','n8pt','n16pt','n24pt','n32pt','n40pt','n48pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt'];
		//var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'1pt','2pt','3pt','4pt','5pt','6pt','7pt','8pt','9pt','10pt','12pt','16pt','18pt','20pt','24pt','32pt','40pt','48pt','50pt','56pt','64pt','72pt','80pt','88pt','96pt','100pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt','240pt','250pt', 'n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n1pt','n2pt','n3pt','n4pt','n5pt','n6pt','n7pt','n8pt','n9pt','n10pt','n12pt','n16pt','n18pt','n20pt','n24pt','n32pt','n40pt','n48pt','n50pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n100pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt','n240pt','n250pt'];

		//var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'1pt','2pt','3pt','4pt','5pt','6pt','7pt','8pt','9pt','10pt','12pt','16pt','18pt','20pt','24pt','32pt','40pt','48pt','50pt','56pt','64pt','72pt','80pt','88pt','96pt','100pt','104pt','112pt','120pt','128pt','136pt','144pt','150pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt','240pt','250pt', 'n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n1pt','n2pt','n3pt','n4pt','n5pt','n6pt','n7pt','n8pt','n9pt','n10pt','n12pt','n16pt','n18pt','n20pt','n24pt','n32pt','n40pt','n48pt','n50pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n100pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n150pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt','n240pt','n250pt'];
		var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '1pt', '2pt', '3pt', '4pt', '5pt', '6pt', '7pt', '8pt', '9pt', '10pt', '12pt', '16pt', '18pt', '20pt', '24pt', '32pt', '40pt', '48pt', '50pt', '56pt', '64pt', '72pt', '80pt', '88pt', '96pt', '100pt', '104pt', '112pt', '120pt', '128pt', '136pt', '144pt', '150pt', '152pt', '160pt', '168pt', '176pt', '184pt', '192pt', '200pt', '240pt', '250pt', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n1pt', 'n2pt', 'n3pt', 'n4pt', 'n5pt', 'n6pt', 'n7pt', 'n8pt', 'n9pt', 'n10pt', 'n12pt', 'n16pt', 'n18pt', 'n20pt', 'n24pt', 'n32pt', 'n40pt', 'n48pt', 'n50pt', 'n56pt', 'n64pt', 'n72pt', 'n80pt', 'n88pt', 'n96pt', 'n100pt', 'n104pt', 'n112pt', 'n120pt', 'n128pt', 'n136pt', 'n144pt', 'n150pt', 'n152pt', 'n160pt', 'n168pt', 'n176pt', 'n184pt', 'n192pt', 'n200pt', 'n240pt', 'n250pt', 'c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7', 'c-8', 'c-9', 'c-10'];

		var spacing = 11;


		var marginPaddingObjs = {};
		var marginPaddingActiveBtn = {};

		var getNumFromMarginPaddingValue = function (value) {
			if (!value) return null;

			var arr = value.split('-');
			if (arr.length > 1) return arr[arr.length - 1];

			return '';
		}

		var getNewMarginPaddingValueFor = function (type, direction, size, field_key, values, valDirection) {
			return type + direction + (size != 'xs' ? '-' + size : '') + '-' + getNumFromMarginPaddingValue(values[field_key + valDirection]);
		}

		var updateAllMarginPaddingFields = function (pgel, type, size, field_key, values, skipDirection) {
			for (var i = 3; i < directions.length; i++) {
				pgel.removeClass(values[field_key + directions[i]]);

				if (directions[i] != skipDirection) {
					var field = marginPaddingObjs[size][type + directions[i]];

					var currValue = getNewMarginPaddingValueFor(type, directions[i], size, field_key, values, '');
					values[field_key + directions[i]] = currValue;
					field.setValue(currValue);
				}
			}
		}

		var getClassNameForMarginAndPadding = function (type, direction, size, num) {
			if (!num) return null;
			return type + direction + (size != 'xs' ? '-' + size : '') + '-' + num;
		}

		var setAllMarginPaddingValue = function (pgel, type, size, control_id, values, value) {

			var directions = ['', 'x', 'y', 't', 'e', 'b', 's'];
			//    var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'8pt','16pt','24pt','32pt','40pt','48pt','56pt','64pt','72pt','80pt','88pt','96pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt'];
			//    var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'8pt','16pt','24pt','32pt','40pt','48pt','56pt','64pt','72pt','80pt','88pt','96pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt', 'n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11','n8pt','n16pt','n24pt','n32pt','n40pt','n48pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt'];
			//	var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'1pt','2pt','3pt','4pt','5pt','6pt','7pt','8pt','9pt','10pt','12pt','16pt','18pt','20pt','24pt','32pt','40pt','48pt','50pt','56pt','64pt','72pt','80pt','88pt','96pt','100pt','104pt','112pt','120pt','128pt','136pt','144pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt','240pt','250pt', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11','n8pt','n16pt','n24pt','n32pt','n40pt','n48pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt'];

			//	var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,'1pt','2pt','3pt','4pt','5pt','6pt','7pt','8pt','9pt','10pt','12pt','16pt','18pt','20pt','24pt','32pt','40pt','48pt','50pt','56pt','64pt','72pt','80pt','88pt','96pt','100pt','104pt','112pt','120pt','128pt','136pt','144pt','150pt','152pt','160pt','168pt','176pt','184pt','192pt','200pt','240pt','250pt', 'n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n1pt','n2pt','n3pt','n4pt','n5pt','n6pt','n7pt','n8pt','n9pt','n10pt','n12pt','n16pt','n18pt','n20pt','n24pt','n32pt','n40pt','n48pt','n50pt','n56pt','n64pt','n72pt','n80pt','n88pt','n96pt','n100pt','n104pt','n112pt','n120pt','n128pt','n136pt','n144pt','n150pt','n152pt','n160pt','n168pt','n176pt','n184pt','n192pt','n200pt','n240pt','n250pt'];
			var spacingVal = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '1pt', '2pt', '3pt', '4pt', '5pt', '6pt', '7pt', '8pt', '9pt', '10pt', '12pt', '16pt', '18pt', '20pt', '24pt', '32pt', '40pt', '48pt', '50pt', '56pt', '64pt', '72pt', '80pt', '88pt', '96pt', '100pt', '104pt', '112pt', '120pt', '128pt', '136pt', '144pt', '150pt', '152pt', '160pt', '168pt', '176pt', '184pt', '192pt', '200pt', '240pt', '250pt', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n1pt', 'n2pt', 'n3pt', 'n4pt', 'n5pt', 'n6pt', 'n7pt', 'n8pt', 'n9pt', 'n10pt', 'n12pt', 'n16pt', 'n18pt', 'n20pt', 'n24pt', 'n32pt', 'n40pt', 'n48pt', 'n50pt', 'n56pt', 'n64pt', 'n72pt', 'n80pt', 'n88pt', 'n96pt', 'n100pt', 'n104pt', 'n112pt', 'n120pt', 'n128pt', 'n136pt', 'n144pt', 'n150pt', 'n152pt', 'n160pt', 'n168pt', 'n176pt', 'n184pt', 'n192pt', 'n200pt', 'n240pt', 'n250pt', 'c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7', 'c-8', 'c-9', 'c-10'];

			var spacing = 11;


			var elClass;
			var field_key = control_id + '.' + size + '.' + type;

			var col = pinegrow.getCollectionForElement(pgel);

			pinegrow.makeChanges(col, 'Set spacing', function () {

				col.forEachElement(function (pgel) {

					var allMarginPaddingUpdated = false;

					for (var i = 1; i < directions.length; i++) {
						for (var j = 0; j < spacingVal.length; j++) {
							currClass = getClassNameForMarginAndPadding(type, directions[i], size, spacingVal[j]);
							if (pgel.hasClass(currClass)) {
								pgel.removeClass(currClass);

								var newClass = type + (size != 'xs' ? '-' + size : '') + '-' + spacingVal[j];
								pgel.addClass(newClass);
								values[field_key] = newClass;

								updateAllMarginPaddingFields(pgel, type, size, field_key, values, directions[i]);

								allMarginPaddingUpdated = true;
								break;
							}
						}

						if (allMarginPaddingUpdated) break;
					}
				})
			})
		}

		var isAllValuesEqual = function (pgel, type, size, control_id, direction, value) {
			var numValue = getNumFromMarginPaddingValue(value);

			var directionClassFound = true;
			for (var i = 3; i < directions.length; i++) {
				if (directions[i] != direction) {
					var directionClass = type + directions[i] + (size != 'xs' ? '-' + size : '') + '-' + numValue;
					if (!pgel.hasClass(directionClass)) {
						directionClassFound = false;
						break;
					}
				}
			}

			return directionClassFound;
		}

		var toggleIconActivation = function (e, type, control) {
			var $target = $(e.target);
			var $icon = $target.closest('.change-all-icon');
			$icon.toggleClass('active');

			var isActive = $icon.hasClass('active');

			if (isActive) {
				var size = $icon.data('size');
				setAllMarginPaddingValue(control.obj, type, size, control.control_id, control.values);
			}
		}

		ZgetDevicesMarginAndPaddingControlFactory = function (control_id, func) {
			//Returns function that creates the control
			var types = ['m', 'p'];

			var forSize = function (f) {
				// options.sizes.forEach(function(size) {
				//     f(size, size == options.size_for_all ? '' : '-' + size, options.prefix + control_id + '.' + size);
				// })
				sizes.forEach(function (size) {
					f(size, size == size_for_all ? '' : '-' + size, prefix + control_id + '.' + size);
				})
			}

			return function () {
				//will keep helper functions and vars private
				var updateFieldsValues = function (size, size_token, field_key) {
					var types = ['p', 'm'];
					var directions = ['t', 'e', 's', 'b'];

					var getPureValue = function (type) {
						var type_field_key = field_key + '.' + type;
						var value_directions = ['', 'x', 'y'];
						var values = [];

						for (var i = 0; i < value_directions.length; i++) {
							var dir = value_directions[i]
							var value = c.values[type_field_key + dir];
							if (value) {
								var value_arr = value.split('-');

								values.push({
									direction: dir,
									value: value_arr[value_arr.length - 1]
								});
							}
						}

						if (values.length > 0) {
							return values;
						}
						return null;
					}

					var getNewValue = function (type, direction, value) {
						return type + direction + (size_token ? '-' + size_token : '') + '-' + value;
					}

					var isAllowedToOverwrite = function (value_direction, type_direction) {
						if (type_direction == '') {
							return true;
						} else if (type_direction == 'x') {
							if (['e', 's'].indexOf(value_direction) > -1) return true;
						} else if (type_direction == 'y') {
							if (['t', 'b'].indexOf(value_direction) > -1) return true;
						}

						return false;
					}

					for (var i = 0; i < types.length; i++) {
						var type = types[i];
						var values = getPureValue(type);
						var $activeBtn = marginPaddingActiveBtn[size][type];

						if (values && values.length > 0) {
							for (var k = 0; k < values.length; k++) {
								var value_obj = values[k];
								var pure_value = value_obj.value;
								var type_direction = value_obj.direction;

								for (var j = 0; j < directions.length; j++) {
									var direction = directions[j];
									if (!isAllowedToOverwrite(direction, type_direction)) continue;

									var type_dir_field_key = field_key + '.' + type + direction;

									if (!c.values[type_dir_field_key]) {
										var pgField = marginPaddingObjs[size][type + direction];
										var newValue = getNewValue(type, direction, pure_value);

										c.values[type_dir_field_key] = newValue;
										pgField.setValue(newValue);
									}
								}

								if (value_obj.direction == '') {
									$activeBtn.addClass('active');
									break;
								}
							}
						} else {
							$activeBtn.removeClass('active');
						}
					}
				}

				var hasValue = function (field_key) {
					var types = ['m', 'p'];
					var directions = ['t', 's', 'e', 'b'];

					for (let i = 0; i < types.length; i++) {
						var type = types[i];

						for (let j = 0; j < directions.length; j++) {
							var direction = directions[j];

							var full_field_key = field_key + '.' + type + direction;
							if (c.values[full_field_key]) return true;
						}
					}

					return false;
				}

				//Create control, needs a unique id
				var c = new PgCustomPropertyControl(options.prefix + control_id);

				//Register subfields.
				c.onDefine = function () {
					forSize(function (size, size_token, field_key) {
						for (var i = 0; i < types.length; i++) {
							for (var j = 0; j < directions.length; j++) {
								var field = func(size, types[i], directions[j], size_token);
								var full_field_key = field_key + '.' + types[i] + directions[j];
								c.registerInputField(full_field_key, field);
							}
						}
					});
				}

				//Show control. Return the control $el.
				c.onShow = function () {
					var $div = $('<div class="crsa-css-gui bs4-margin-and-padding"></div>');
					var _this = this;
					var type = '',
						direction = '';
					var field_def, field, full_field_key;

					forSize(function (size, size_token, field_key) {
						var $container = $('<div class="margin-and-padding-container text-center" data-device-size="' + size + '"></div>').appendTo($div);
						var $labelSize = $('<label/>', {
							'class': "size-label"
						}).html('<span class="sc-device-size">' + size + '</span>').appendTo($container);

						marginPaddingObjs[size] = {};
						marginPaddingActiveBtn[size] = {};

						// Margin top
						type = 'm';
						direction = 't';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($container, full_field_key, field_def);
						field.$field.addClass('crsa-field-margin-top crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						// Margin left
						direction = 's';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($container, full_field_key, field_def);
						field.$field.addClass('crsa-field-margin-left crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						var $marginBorder = $('<div class="margin-border"></div>').appendTo($container);

						var $marginIcon = $('<div class="change-all-margin-icon change-all-icon">\
                                            <i class="icon-same"></i>\
                                        </div>').appendTo($marginBorder);

						marginPaddingActiveBtn[size]['m'] = $marginIcon;
						$marginIcon.data('size', size);
						$marginIcon.on('click', function (e) {
							toggleIconActivation(e, 'm', _this);
						});

						var $paddingContainer = $('<div class="padding-container"></div>').appendTo($marginBorder);

						// Padding top
						type = 'p';
						direction = 't';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($paddingContainer, full_field_key, field_def);
						field.$field.addClass('crsa-field-padding-top crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						// Padding left
						direction = 's';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($paddingContainer, full_field_key, field_def);
						field.$field.addClass('crsa-field-padding-left crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						var $paddingIcon = $('<div class="padding-border">\
                        <div class="change-all-padding-icon change-all-icon"><i class="icon-same"></i></div>\
                    </div>').appendTo($paddingContainer).find('> .change-all-icon');

						marginPaddingActiveBtn[size]['p'] = $paddingIcon;
						$paddingIcon.data('size', size);
						$paddingIcon.on('click', function (e) {
							toggleIconActivation(e, 'p', _this);
						});

						// Padding right
						direction = 'e';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($paddingContainer, full_field_key, field_def);
						field.$field.addClass('crsa-field-padding-right crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						// Padding bottom
						direction = 'b';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($paddingContainer, full_field_key, field_def);
						field.$field.addClass('crsa-field-padding-bottom crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;

						// Margin right
						type = 'm';
						direction = 'e';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($container, full_field_key, field_def);
						field.$field.addClass('crsa-field-margin-right crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;


						// Margin bottom
						direction = 'b';
						field_def = func(size, type, direction, size_token);
						full_field_key = field_key + '.' + type + direction;
						field = c.showInputField($container, full_field_key, field_def);
						field.$field.addClass('crsa-field-margin-bottom crsa-small-input crsa-align-center-input crsa-inline-container');
						marginPaddingObjs[size][type + direction] = field;
					});

					return $div;
				}

				//Called when control is recycled and new values are set
				c.onSetValues = function (values) {
					//return;
					var none_or_all = true;

					forSize(function (size, size_token, field_key) {
						// Check padding and margin
						updateFieldsValues(size, size_token, field_key);

						var $field = c.$element.find('> [data-device-size="' + size + '"]');
						if (hasValue(field_key)) {
							$field.addClass('sc-has-value');
							if (size != options.size_for_all) {
								none_or_all = false;
							}
						} else {
							$field.removeClass('sc-has-value');
						}
					})
					if (none_or_all) {
						c.$element.addClass('sc-none-or-all');
					} else {
						c.$element.removeClass('sc-none-or-all');
					}
				}

				//Return the control
				return c;
			};
		}





		var rowGapMainObj = {
			directions: ['', 'x', 'y'],
			valuesCount: 10
		}
		var rowGapObjs = {};

	var getRowGapClassName = function(direction, size, value) {
        return 'g' + direction + size + '-' + value;
    }

    var getRowGapValueFor = function(className, direction, size) {
        if (className) {
            return className.replace('g' + direction + size + '-', '');
        }

        return null;
    }	

	ZgetDevicesRowGapControlFactory = function(control_id, func) {
			//Returns function that creates the control
			var directions = rowGapMainObj.directions;
			var rowGapValue = rowGapMainObj.valuesCount;
	
			var forSize = function(f) {
				// options.sizes.forEach(function(size) {
				// 	f(size, size == options.size_for_all ? '' : '-' + size, options.prefix + control_id + '.' + size);
				// })
				sizes.forEach(function(size) {
					f(size, size == size_for_all ? '' : '-' + size, prefix + control_id + '.' + size);
				})
			}
	
			var hasValue = function(pgel, size_token) {
				for (var i = 0; i < directions.length; i++) {
					var dir = directions[i];
	
					for (var j = 0; j <= rowGapValue; j++) {
						if ( pgel.hasClass( getRowGapClassName(dir, size_token, j) )) {
							return true;
						}
					}
				}
	
				return false;
			}
	
			return function() {
				//Create control, needs a unique id
				var c = new PgCustomPropertyControl(options.prefix + control_id);
	
				//Register subfields.
				c.onDefine = function () {
					forSize(function(size, size_token, field_key) {
						for (var j = 0; j < directions.length; j++) {
							var field = func(size, directions[j], size_token);
							var full_field_key = field_key + '.' + directions[j];
							c.registerInputField(full_field_key, field);
						}
					});
				}
	
				//Show control. Return the control $el.
				c.onShow = function () {
					var $div = $('<div class="bs5-row-gap sc-device-control sc-single-size"></div>');
					var $label = $('<div class="sc-device-control-title">Gap</div>').appendTo($div);
					var direction = '';
					var field_def, field, full_field_key;
	
					forSize(function(size, size_token, field_key) {
						var $container = $('<div class="row-gap-container" data-device-size="' + size + '"></div>').appendTo($div);
						var $labelSize = $('<label/>', { 'class': "size-label" }).html('<span class="sc-label">Gap</span><span class="sc-device-size">' + size + '</span>').appendTo($container);
	
	
						var $row = $('<div class="main-row-gap-container"></div>').appendTo($container);
						rowGapObjs[size] = {};
	
						var $fieldsContainer = $('<div class="row-gap-fields-container"></div>').appendTo($row);
	
						// x direction
						var $xCol = $('<div></div>').appendTo($fieldsContainer);
	
						direction = 'x';
						field_def = func(size, direction, size_token);
						full_field_key = field_key + '.' + direction;
						field = c.showInputField($xCol, full_field_key, field_def);
						field.$field.addClass('');
						rowGapObjs[size][direction] = field;
	
						// y direction
						var $yCol = $('<div></div>').appendTo($fieldsContainer);
	
						direction = 'y';
						field_def = func(size, direction, size_token);
						full_field_key = field_key + '.' + direction;
						field = c.showInputField($yCol, full_field_key, field_def);
						field.$field.addClass('');
						rowGapObjs[size][direction] = field;
					});
	
					return $div;
				}
	
				//Called when control is recycled and new values are set
				c.onSetValues = function(values) {
					//return;
					var none_or_all = true;
	
					forSize(function(size, size_token, field_key) {
						var $field = c.$element.find('> [data-device-size="' + size + '"]');
						if (hasValue(c.obj, size_token)) {
							$field.addClass('sc-has-value');
							if (size != options.size_for_all) {
								none_or_all = false;
							}
						} else {
							$field.removeClass('sc-has-value');
						}
					})
					if(none_or_all) {
						c.$element.addClass('sc-none-or-all');
					} else {
						c.$element.removeClass('sc-none-or-all');
					}
				}
	
				//Return the control
				return c;
			};
		}		
		ZgetGappingControl = function() {
			return ZgetDevicesRowGapControlFactory('row.gap', function(size, direction_token, size_token){
				var valuesCount = rowGapMainObj.valuesCount;
	
				var getAllOptions = function () {
					var optionsValue = [];
	
					for (var i = 0; i <= valuesCount; i++) {
						optionsValue.push({
							'key': getRowGapClassName(direction_token, size_token, i),
							'name': i,
							'num': i
						});
					}
	
					return optionsValue;
				}
	
				var field = {
					type : 'select',
					name : null,
					placeholder : direction_token,
					show_empty : true,
					options : getAllOptions,
					action : 'custom',
					async_options_function: true,
					more_prop: {
						size: size,
						direction: direction_token
					},
					get_value: function(pgel, fn, values, fv) {
						var optionsValue = fv.options();
						for (var i = 0; i < optionsValue.length; i++) {
							if (pgel.hasClass(optionsValue[i].key)) return optionsValue[i].key;
						}
	
						var size      = fv.more_prop.size,
							direction = fv.more_prop.direction;
	
						var size_token = size == options.size_for_all ? '' : '-' + size;
	
						for (var i = 0; i <= valuesCount; i++) {
							var className = getRowGapClassName('', size_token, i);
							if (pgel.hasClass(className)) {
								return getRowGapClassName(direction, size_token, i);
								break;
							}
						}
	
						return null;
					},
					set_value: function(pgel, value, values, oldValue, eventType, fdef) {
						var optionsValue = fdef.options();
	
						$.each(optionsValue, function (i, opt) {
							if (opt.key == value) return true;
							if (pgel.hasClass(opt.key)) {
								pgel.removeClass(opt.key);
							}
						});
	
						var size       = fdef.more_prop.size,
							direction  = fdef.more_prop.direction,
							opDirection = direction === 'x' ? 'y' : 'x';
	
						var size_token = size == options.size_for_all ? '' : '-' + size;
	
						var notAdded = true;
	
						// if two directions set
						for (var i = 0; i <= valuesCount; i++) {
							var mainClassName = getRowGapClassName('', size_token, i);
							if (pgel.hasClass(mainClassName)) {
								pgel.removeClass(mainClassName);
	
								// remove value from opposite side
								pgel.addClass( getRowGapClassName(opDirection, size_token, i) );
							}
						}
	
						// Check if the opposite direction has same value
						var currentValue = getRowGapValueFor(value, direction, size_token);
						var opDirClassName = getRowGapClassName(opDirection, size_token, currentValue);
	
						if (pgel.hasClass(opDirClassName)) {
							pgel.removeClass(opDirClassName);
							pgel.addClass(getRowGapClassName('', size_token, currentValue));
							notAdded = false
						}
	
						if (notAdded) {
							pgel.addClass(value);
						}
	
						return value;
					}
				}
	
				return field;
			});
		}





		ZgetSpacingControl = function () {
			return ZgetDevicesMarginAndPaddingControlFactory('margin.padding', function (size, type, direction_token, size_token) {
				var base = type + direction_token + size_token + '-';
				// var optionsValue = [{ 'key' : base + 'auto', 'name' : 'Auto' }];
				// for (var i = 0; i <= spacing; i++) {
				//     optionsValue.push({ 'key' : base + i, 'name' : i, num: i });
				// }
				var optionsValue = [];
				for (var i = 0; i < spacingVal.length; i++) {
					optionsValue.push({
						'key': base + spacingVal[i],
						'name': spacingVal[i]
					});
				}

				var field = {
					type: 'select',
					name: null,
					placeholder: direction_token,
					show_empty: true,
					options: optionsValue,
					action: 'custom',
					draggable_list: true,
					more_prop: {
						size: size,
						type: type,
						direction: direction_token
					},
					get_value: function (pgel, fn, values, fv) {


						var optionsValue = fv.options;
						for (var i = 0; i < optionsValue.length; i++) {
							if (pgel.hasClass(optionsValue[i].key)) return optionsValue[i].key;
						}

						var size = fv.more_prop.size,
							type = fv.more_prop.type,
							direction = fv.more_prop.direction;

						if (direction && direction != 'x' && direction != 'y') {
							//                    var field_key = options.prefix + 'margin.padding.' + size + '.' + type;
							var field_key = prefix + 'margin.padding.' + size + '.' + type;
							if (values[field_key]) {
								var currValue = getNewMarginPaddingValueFor(type, direction, size, field_key, values, '');
								values[field_key + direction] = currValue;
								return currValue
							}

							if (direction == 'e' || direction == 's') {
								if (values[field_key + 'x']) {
									var currValue = getNewMarginPaddingValueFor(type, direction, size, field_key, values, 'x');
									values[field_key + direction] = currValue;
									return currValue;
								}
							} else if (direction == 't' || direction == 'b') {
								if (values[field_key + 'y']) {
									var currValue = getNewMarginPaddingValueFor(type, direction, size, field_key, values, 'y');
									values[field_key + direction] = currValue;
									return currValue;
								}
							}
						}

						return '';
					},
					set_value: function (pgel, value, values, oldValue, eventType, fdef) {

						$.each(optionsValue, function (i, opt) {
							if (opt.key == value) return true;
							if (pgel.hasClass(opt.key)) {
								pgel.removeClass(opt.key);
							}
						});

						//pgel.removeClass(oldValue);

						var size = fdef.more_prop.size,
							type = fdef.more_prop.type,
							direction = fdef.more_prop.direction;

						var control_id = options.prefix + 'margin.padding.';

						var $icon = marginPaddingActiveBtn[size][type];
						var isActive = $icon.hasClass('active');
						if (isActive || isAllValuesEqual(pgel, type, size, control_id, direction, value)) {
							var field_key = control_id + size + '.' + type;
							var currClass = getClassNameForMarginAndPadding(type, '', size, getNumFromMarginPaddingValue(oldValue));
							var newClass = getClassNameForMarginAndPadding(type, '', size, getNumFromMarginPaddingValue(value));
							pgel.removeClass(currClass);

							for (var i = 3; i < directions.length; i++) {
								var colNum;
								if (directions[i] == direction) {
									colNum = getNumFromMarginPaddingValue(oldValue);
								} else {
									colNum = getNumFromMarginPaddingValue(value);
								}

								var directionClass = type + directions[i] + (size != 'xs' ? '-' + size : '') + '-' + colNum;
								pgel.removeClass(directionClass);
							}

							pgel.addClass(newClass);
							values[field_key] = newClass;

							updateAllMarginPaddingFields(pgel, type, size, field_key, values, direction);
						} else {
							var field_key = control_id + size + '.' + type
							var oldClass = values[field_key];

							values[field_key] = '';
							pgel.removeClass(oldClass);

							for (var i = 3; i < directions.length; i++) {
								if (directions[i] != direction) {
									pgel.addClass(values[field_key + directions[i]]);
								}
							}
							pgel.addClass(value);
						}

						return value;
					}
				}

				return field;
			})
		}
		// Margin & Paddings End


		var columns_section_def = {
			name: "DESIGN SYSTEM",
			fields: {
				fontcolor: {
					type: 'custom',
					name: 'designsystem',
					action: 'none',
					control: getGridControlFactory('designsystem', [{
							field_prefix: 'tt',
							class_prefix: 'tt',
							values: tt_values,
							name: 'Theme Typography'
						},
						{
							field_prefix: 'font',
							class_prefix: 'font',
							values: font_values,
							name: 'Font Family'
						},
						{
							field_prefix: 'fs',
							class_prefix: 'fs',
							values: size_values,
							name: 'Font Size'
						},
						{
							field_prefix: 'fw',
							class_prefix: 'fw',
							values: weight_values,
							name: 'Font Weight'
						},
						{
							field_prefix: 'lh',
							class_prefix: 'lh',
							values: line_values,
							name: 'Line Height'
						},
						{
							field_prefix: 'letter-spacing',
							class_prefix: 'letter-spacing',
							values: spacing_values,
							name: 'Letter Spacing'
						},
						{
							field_prefix: 'text',
							class_prefix: 'text',
							values: color_values,
							name: 'Color'
						},
						{
							field_prefix: 'bg',
							class_prefix: 'bg',
							values: bg_values,
							name: 'Background Color'
						},
						{
							field_prefix: 'border',
							class_prefix: 'border',
							values: border_values,
							name: 'Border Color'
						},
						{
							field_prefix: 'overlay',
							class_prefix: 'overlay',
							values: overlay_values,
							name: 'Overlay Color'
						},
						{
							field_prefix: 'shadow',
							class_prefix: 'shadow',
							values: boxshadow_values,
							name: 'Box Shadow'
						}
					])
				},
			}
		};


		var def_all = new PgComponentType(prefix + 'all', 'All elements', {
			selector: function (pgel) {
				return true
			},
			name: 'Div',
			display_name: 'tag',
			priority: 2001,
			sections: addPrefixToSectionsAndFields({
				columns: columns_section_def,
				spacing: {
					name: "Spacing",
					on_section_shown: ZonSectionWithDevicesControlsShown,
					fields: {
						rowgap: {
                            type: 'custom',
                            name: 'layout_control',
                            action: 'none',
                            control: ZgetGappingControl()
                        },						
						margin_control: {
							type: 'custom',
							name: 'layout_control',
							action: 'none',
							control: ZgetSpacingControl()
						},
						divmx: {
							type: 'custom',
							name: 'MarginX',
							action: 'none',
							control: getDevicesControlFactory('marginx', 'MarginX', function (size, size_token) {
								var base = 'mx' + size_token + '-';
								var field = {
									'type': 'select',
									'name': makeFieldLabelForSize('MarginX', size),
									'action': 'apply_class',
									'show_empty': true,
									'options': [{
											'key': base + 'auto',
											'name': 'Auto'
										},
										{
											'key': base + '0',
											'name': '0'
										},
										{
											'key': base + '1',
											'name': '1'
										},
										{
											'key': base + '2',
											'name': '2'
										},
										{
											'key': base + '3',
											'name': '3'
										},
										{
											'key': base + '4',
											'name': '4'
										},
										{
											'key': base + '5',
											'name': '5'
										},
										{
											'key': base + '6',
											'name': '6'
										},
										{
											'key': base + '7',
											'name': '7'
										},
										{
											'key': base + '8',
											'name': '8'
										},
										{
											'key': base + '9',
											'name': '9'
										},
										{
											'key': base + '10',
											'name': '10'
										},
										{
											'key': base + '11',
											'name': '11'
										},
										{
											'key': base + '1pt',
											'name': '1pt'
										},
										{
											'key': base + '2pt',
											'name': '2pt'
										},
										{
											'key': base + '3pt',
											'name': '3pt'
										},
										{
											'key': base + '4pt',
											'name': '4pt'
										},
										{
											'key': base + '5pt',
											'name': '5pt'
										},
										{
											'key': base + '6pt',
											'name': '6pt'
										},
										{
											'key': base + '7pt',
											'name': '7pt'
										},
										{
											'key': base + '8pt',
											'name': '8pt'
										},
										{
											'key': base + '9pt',
											'name': '9pt'
										},
										{
											'key': base + '10pt',
											'name': '10pt'
										},
										{
											'key': base + '12pt',
											'name': '12pt'
										},
										{
											'key': base + '16pt',
											'name': '16pt'
										},
										{
											'key': base + '18pt',
											'name': '18pt'
										},
										{
											'key': base + '20pt',
											'name': '20pt'
										},
										{
											'key': base + '24pt',
											'name': '24pt'
										},
										{
											'key': base + '32pt',
											'name': '32pt'
										},
										{
											'key': base + '40pt',
											'name': '40pt'
										},
										{
											'key': base + '48pt',
											'name': '48pt'
										},
										{
											'key': base + '50pt',
											'name': '50pt'
										},
										{
											'key': base + '56pt',
											'name': '56pt'
										},
										{
											'key': base + '64pt',
											'name': '64pt'
										},
										{
											'key': base + '72pt',
											'name': '72pt'
										},
										{
											'key': base + '80pt',
											'name': '80pt'
										},
										{
											'key': base + '88pt',
											'name': '88pt'
										},
										{
											'key': base + '96pt',
											'name': '96pt'
										},
										{
											'key': base + '100pt',
											'name': '100pt'
										},
										{
											'key': base + '104pt',
											'name': '104pt'
										},
										{
											'key': base + '112pt',
											'name': '112pt'
										},
										{
											'key': base + '120pt',
											'name': '120pt'
										},
										{
											'key': base + '128pt',
											'name': '128pt'
										},
										{
											'key': base + '136pt',
											'name': '136pt'
										},
										{
											'key': base + '144pt',
											'name': '144pt'
										},
										{
											'key': base + '150pt',
											'name': '150pt'
										},
										{
											'key': base + '152pt',
											'name': '152pt'
										},
										{
											'key': base + '160pt',
											'name': '160pt'
										},
										{
											'key': base + '168pt',
											'name': '168pt'
										},
										{
											'key': base + '176pt',
											'name': '176pt'
										},
										{
											'key': base + '184pt',
											'name': '184pt'
										},
										{
											'key': base + '192pt',
											'name': '192pt'
										},
										{
											'key': base + '200pt',
											'name': '200pt'
										},
										{
											'key': base + '240pt',
											'name': '240pt'
										},
										{
											'key': base + '250pt',
											'name': '250pt'
										},
										{
											'key': base + 'n1',
											'name': 'n1'
										},
										{
											'key': base + 'n2',
											'name': 'n2'
										},
										{
											'key': base + 'n3',
											'name': 'n3'
										},
										{
											'key': base + 'n4',
											'name': 'n4'
										},
										{
											'key': base + 'n5',
											'name': 'n5'
										},
										{
											'key': base + 'n6',
											'name': 'n6'
										},
										{
											'key': base + 'n7',
											'name': 'n7'
										},
										{
											'key': base + 'n8',
											'name': 'n8'
										},
										{
											'key': base + 'n9',
											'name': 'n9'
										},
										{
											'key': base + 'n10',
											'name': 'n10'
										},
										{
											'key': base + 'n11',
											'name': 'n11'
										},
										{
											'key': base + 'n1pt',
											'name': 'n1pt'
										},
										{
											'key': base + 'n2pt',
											'name': 'n2pt'
										},
										{
											'key': base + 'n3pt',
											'name': 'n3pt'
										},
										{
											'key': base + 'n4pt',
											'name': 'n4pt'
										},
										{
											'key': base + 'n5pt',
											'name': 'n5pt'
										},
										{
											'key': base + 'n6pt',
											'name': 'n6pt'
										},
										{
											'key': base + 'n7pt',
											'name': 'n7pt'
										},
										{
											'key': base + 'n8pt',
											'name': 'n8pt'
										},
										{
											'key': base + 'n9pt',
											'name': 'n9pt'
										},
										{
											'key': base + 'n10pt',
											'name': 'n10pt'
										},
										{
											'key': base + 'n12pt',
											'name': 'n12pt'
										},
										{
											'key': base + 'n16pt',
											'name': 'n16pt'
										},
										{
											'key': base + 'n18pt',
											'name': 'n18pt'
										},
										{
											'key': base + 'n20pt',
											'name': 'n20pt'
										},
										{
											'key': base + 'n24pt',
											'name': 'n24pt'
										},
										{
											'key': base + 'n32pt',
											'name': 'n32pt'
										},
										{
											'key': base + 'n40pt',
											'name': 'n40pt'
										},
										{
											'key': base + 'n48pt',
											'name': 'n48pt'
										},
										{
											'key': base + 'n50pt',
											'name': 'n50pt'
										},
										{
											'key': base + 'n56pt',
											'name': 'n56pt'
										},
										{
											'key': base + 'n64pt',
											'name': 'n64pt'
										},
										{
											'key': base + 'n72pt',
											'name': 'n72pt'
										},
										{
											'key': base + 'n80pt',
											'name': 'n80pt'
										},
										{
											'key': base + 'n88pt',
											'name': 'n88pt'
										},
										{
											'key': base + 'n96pt',
											'name': 'n96pt'
										},
										{
											'key': base + 'n100pt',
											'name': 'n100pt'
										},
										{
											'key': base + 'n104pt',
											'name': 'n104pt'
										},
										{
											'key': base + 'n112pt',
											'name': 'n112pt'
										},
										{
											'key': base + 'n120pt',
											'name': 'n120pt'
										},
										{
											'key': base + 'n128pt',
											'name': 'n128pt'
										},
										{
											'key': base + 'n136pt',
											'name': 'n136pt'
										},
										{
											'key': base + 'n144pt',
											'name': 'n144pt'
										},
										{
											'key': base + 'n150pt',
											'name': 'n150pt'
										},
										{
											'key': base + 'n152pt',
											'name': 'n152pt'
										},
										{
											'key': base + 'n160pt',
											'name': 'n160pt'
										},
										{
											'key': base + 'n168pt',
											'name': 'n168pt'
										},
										{
											'key': base + 'n176pt',
											'name': 'n176pt'
										},
										{
											'key': base + 'n184pt',
											'name': 'n184pt'
										},
										{
											'key': base + 'n192pt',
											'name': 'n192pt'
										},
										{
											'key': base + 'n200pt',
											'name': 'n200pt'
										},
										{
											'key': base + 'n240pt',
											'name': 'n240pt'
										},
										{
											'key': base + 'n250pt',
											'name': 'n250pt'
										},
										{
											'key': base + 'c-1',
											'name': 'c-1'
										},
										{
											'key': base + 'c-2',
											'name': 'c-2'
										},
										{
											'key': base + 'c-3',
											'name': 'c-3'
										},
										{
											'key': base + 'c-4',
											'name': 'c-4'
										},
										{
											'key': base + 'c-5',
											'name': 'c-5'
										},
										{
											'key': base + 'c-6',
											'name': 'c-6'
										},
										{
											'key': base + 'c-7',
											'name': 'c-7'
										},
										{
											'key': base + 'c-8',
											'name': 'c-8'
										},
										{
											'key': base + 'c-9',
											'name': 'c-9'
										},
										{
											'key': base + 'c-10',
											'name': 'c-10'
										}
									]
								}
								return field;
							})
						},
						divmy: {
							type: 'custom',
							name: 'MarginY',
							action: 'none',
							control: getDevicesControlFactory('marginy', 'MarginY', function (size, size_token) {
								var base = 'my' + size_token + '-';
								var field = {
									'type': 'select',
									'name': makeFieldLabelForSize('MarginY', size),
									'action': 'apply_class',
									'show_empty': true,
									'options': [{
											'key': base + 'auto',
											'name': 'Auto'
										},
										{
											'key': base + '0',
											'name': '0'
										},
										{
											'key': base + '1',
											'name': '1'
										},
										{
											'key': base + '2',
											'name': '2'
										},
										{
											'key': base + '3',
											'name': '3'
										},
										{
											'key': base + '4',
											'name': '4'
										},
										{
											'key': base + '5',
											'name': '5'
										},
										{
											'key': base + '6',
											'name': '6'
										},
										{
											'key': base + '7',
											'name': '7'
										},
										{
											'key': base + '8',
											'name': '8'
										},
										{
											'key': base + '9',
											'name': '9'
										},
										{
											'key': base + '10',
											'name': '10'
										},
										{
											'key': base + '11',
											'name': '11'
										},
										{
											'key': base + '1pt',
											'name': '1pt'
										},
										{
											'key': base + '2pt',
											'name': '2pt'
										},
										{
											'key': base + '3pt',
											'name': '3pt'
										},
										{
											'key': base + '4pt',
											'name': '4pt'
										},
										{
											'key': base + '5pt',
											'name': '5pt'
										},
										{
											'key': base + '6pt',
											'name': '6pt'
										},
										{
											'key': base + '7pt',
											'name': '7pt'
										},
										{
											'key': base + '8pt',
											'name': '8pt'
										},
										{
											'key': base + '9pt',
											'name': '9pt'
										},
										{
											'key': base + '10pt',
											'name': '10pt'
										},
										{
											'key': base + '12pt',
											'name': '12pt'
										},
										{
											'key': base + '16pt',
											'name': '16pt'
										},
										{
											'key': base + '18pt',
											'name': '18pt'
										},
										{
											'key': base + '20pt',
											'name': '20pt'
										},
										{
											'key': base + '24pt',
											'name': '24pt'
										},
										{
											'key': base + '32pt',
											'name': '32pt'
										},
										{
											'key': base + '40pt',
											'name': '40pt'
										},
										{
											'key': base + '48pt',
											'name': '48pt'
										},
										{
											'key': base + '50pt',
											'name': '50pt'
										},
										{
											'key': base + '56pt',
											'name': '56pt'
										},
										{
											'key': base + '64pt',
											'name': '64pt'
										},
										{
											'key': base + '72pt',
											'name': '72pt'
										},
										{
											'key': base + '80pt',
											'name': '80pt'
										},
										{
											'key': base + '88pt',
											'name': '88pt'
										},
										{
											'key': base + '96pt',
											'name': '96pt'
										},
										{
											'key': base + '100pt',
											'name': '100pt'
										},
										{
											'key': base + '104pt',
											'name': '104pt'
										},
										{
											'key': base + '112pt',
											'name': '112pt'
										},
										{
											'key': base + '120pt',
											'name': '120pt'
										},
										{
											'key': base + '128pt',
											'name': '128pt'
										},
										{
											'key': base + '136pt',
											'name': '136pt'
										},
										{
											'key': base + '144pt',
											'name': '144pt'
										},
										{
											'key': base + '150pt',
											'name': '150pt'
										},
										{
											'key': base + '152pt',
											'name': '152pt'
										},
										{
											'key': base + '160pt',
											'name': '160pt'
										},
										{
											'key': base + '168pt',
											'name': '168pt'
										},
										{
											'key': base + '176pt',
											'name': '176pt'
										},
										{
											'key': base + '184pt',
											'name': '184pt'
										},
										{
											'key': base + '192pt',
											'name': '192pt'
										},
										{
											'key': base + '200pt',
											'name': '200pt'
										},
										{
											'key': base + '240pt',
											'name': '240pt'
										},
										{
											'key': base + '250pt',
											'name': '250pt'
										},
										{
											'key': base + 'n1',
											'name': 'n1'
										},
										{
											'key': base + 'n2',
											'name': 'n2'
										},
										{
											'key': base + 'n3',
											'name': 'n3'
										},
										{
											'key': base + 'n4',
											'name': 'n4'
										},
										{
											'key': base + 'n5',
											'name': 'n5'
										},
										{
											'key': base + 'n6',
											'name': 'n6'
										},
										{
											'key': base + 'n7',
											'name': 'n7'
										},
										{
											'key': base + 'n8',
											'name': 'n8'
										},
										{
											'key': base + 'n9',
											'name': 'n9'
										},
										{
											'key': base + 'n10',
											'name': 'n10'
										},
										{
											'key': base + 'n11',
											'name': 'n11'
										},
										{
											'key': base + 'n1pt',
											'name': 'n1pt'
										},
										{
											'key': base + 'n2pt',
											'name': 'n2pt'
										},
										{
											'key': base + 'n3pt',
											'name': 'n3pt'
										},
										{
											'key': base + 'n4pt',
											'name': 'n4pt'
										},
										{
											'key': base + 'n5pt',
											'name': 'n5pt'
										},
										{
											'key': base + 'n6pt',
											'name': 'n6pt'
										},
										{
											'key': base + 'n7pt',
											'name': 'n7pt'
										},
										{
											'key': base + 'n8pt',
											'name': 'n8pt'
										},
										{
											'key': base + 'n9pt',
											'name': 'n9pt'
										},
										{
											'key': base + 'n10pt',
											'name': 'n10pt'
										},
										{
											'key': base + 'n12pt',
											'name': 'n12pt'
										},
										{
											'key': base + 'n16pt',
											'name': 'n16pt'
										},
										{
											'key': base + 'n18pt',
											'name': 'n18pt'
										},
										{
											'key': base + 'n20pt',
											'name': 'n20pt'
										},
										{
											'key': base + 'n24pt',
											'name': 'n24pt'
										},
										{
											'key': base + 'n32pt',
											'name': 'n32pt'
										},
										{
											'key': base + 'n40pt',
											'name': 'n40pt'
										},
										{
											'key': base + 'n48pt',
											'name': 'n48pt'
										},
										{
											'key': base + 'n50pt',
											'name': 'n50pt'
										},
										{
											'key': base + 'n56pt',
											'name': 'n56pt'
										},
										{
											'key': base + 'n64pt',
											'name': 'n64pt'
										},
										{
											'key': base + 'n72pt',
											'name': 'n72pt'
										},
										{
											'key': base + 'n80pt',
											'name': 'n80pt'
										},
										{
											'key': base + 'n88pt',
											'name': 'n88pt'
										},
										{
											'key': base + 'n96pt',
											'name': 'n96pt'
										},
										{
											'key': base + 'n100pt',
											'name': 'n100pt'
										},
										{
											'key': base + 'n104pt',
											'name': 'n104pt'
										},
										{
											'key': base + 'n112pt',
											'name': 'n112pt'
										},
										{
											'key': base + 'n120pt',
											'name': 'n120pt'
										},
										{
											'key': base + 'n128pt',
											'name': 'n128pt'
										},
										{
											'key': base + 'n136pt',
											'name': 'n136pt'
										},
										{
											'key': base + 'n144pt',
											'name': 'n144pt'
										},
										{
											'key': base + 'n150pt',
											'name': 'n150pt'
										},
										{
											'key': base + 'n152pt',
											'name': 'n152pt'
										},
										{
											'key': base + 'n160pt',
											'name': 'n160pt'
										},
										{
											'key': base + 'n168pt',
											'name': 'n168pt'
										},
										{
											'key': base + 'n176pt',
											'name': 'n176pt'
										},
										{
											'key': base + 'n184pt',
											'name': 'n184pt'
										},
										{
											'key': base + 'n192pt',
											'name': 'n192pt'
										},
										{
											'key': base + 'n200pt',
											'name': 'n200pt'
										},
										{
											'key': base + 'n240pt',
											'name': 'n240pt'
										},
										{
											'key': base + 'n250pt',
											'name': 'n250pt'
										},
										{
											'key': base + 'c-1',
											'name': 'c-1'
										},
										{
											'key': base + 'c-2',
											'name': 'c-2'
										},
										{
											'key': base + 'c-3',
											'name': 'c-3'
										},
										{
											'key': base + 'c-4',
											'name': 'c-4'
										},
										{
											'key': base + 'c-5',
											'name': 'c-5'
										},
										{
											'key': base + 'c-6',
											'name': 'c-6'
										},
										{
											'key': base + 'c-7',
											'name': 'c-7'
										},
										{
											'key': base + 'c-8',
											'name': 'c-8'
										},
										{
											'key': base + 'c-9',
											'name': 'c-9'
										},
										{
											'key': base + 'c-10',
											'name': 'c-10'
										}
									]
								}
								return field;
							})
						},
						divpx: {
							type: 'custom',
							name: 'PaddingX',
							action: 'none',
							control: getDevicesControlFactory('paddingx', 'PaddingX', function (size, size_token) {
								var base = 'px' + size_token + '-';
								var field = {
									'type': 'select',
									'name': makeFieldLabelForSize('PaddingX', size),
									'action': 'apply_class',
									'show_empty': true,
									'options': [{
											'key': base + 'auto',
											'name': 'Auto'
										},
										{
											'key': base + '0',
											'name': '0'
										},
										{
											'key': base + '1',
											'name': '1'
										},
										{
											'key': base + '2',
											'name': '2'
										},
										{
											'key': base + '3',
											'name': '3'
										},
										{
											'key': base + '4',
											'name': '4'
										},
										{
											'key': base + '5',
											'name': '5'
										},
										{
											'key': base + '6',
											'name': '6'
										},
										{
											'key': base + '7',
											'name': '7'
										},
										{
											'key': base + '8',
											'name': '8'
										},
										{
											'key': base + '9',
											'name': '9'
										},
										{
											'key': base + '10',
											'name': '10'
										},
										{
											'key': base + '11',
											'name': '11'
										},
										{
											'key': base + '1pt',
											'name': '1pt'
										},
										{
											'key': base + '2pt',
											'name': '2pt'
										},
										{
											'key': base + '3pt',
											'name': '3pt'
										},
										{
											'key': base + '4pt',
											'name': '4pt'
										},
										{
											'key': base + '5pt',
											'name': '5pt'
										},
										{
											'key': base + '6pt',
											'name': '6pt'
										},
										{
											'key': base + '7pt',
											'name': '7pt'
										},
										{
											'key': base + '8pt',
											'name': '8pt'
										},
										{
											'key': base + '9pt',
											'name': '9pt'
										},
										{
											'key': base + '10pt',
											'name': '10pt'
										},
										{
											'key': base + '12pt',
											'name': '12pt'
										},
										{
											'key': base + '16pt',
											'name': '16pt'
										},
										{
											'key': base + '18pt',
											'name': '18pt'
										},
										{
											'key': base + '20pt',
											'name': '20pt'
										},
										{
											'key': base + '24pt',
											'name': '24pt'
										},
										{
											'key': base + '32pt',
											'name': '32pt'
										},
										{
											'key': base + '40pt',
											'name': '40pt'
										},
										{
											'key': base + '48pt',
											'name': '48pt'
										},
										{
											'key': base + '50pt',
											'name': '50pt'
										},
										{
											'key': base + '56pt',
											'name': '56pt'
										},
										{
											'key': base + '64pt',
											'name': '64pt'
										},
										{
											'key': base + '72pt',
											'name': '72pt'
										},
										{
											'key': base + '80pt',
											'name': '80pt'
										},
										{
											'key': base + '88pt',
											'name': '88pt'
										},
										{
											'key': base + '96pt',
											'name': '96pt'
										},
										{
											'key': base + '100pt',
											'name': '100pt'
										},
										{
											'key': base + '104pt',
											'name': '104pt'
										},
										{
											'key': base + '112pt',
											'name': '112pt'
										},
										{
											'key': base + '120pt',
											'name': '120pt'
										},
										{
											'key': base + '128pt',
											'name': '128pt'
										},
										{
											'key': base + '136pt',
											'name': '136pt'
										},
										{
											'key': base + '144pt',
											'name': '144pt'
										},
										{
											'key': base + '150pt',
											'name': '150pt'
										},
										{
											'key': base + '152pt',
											'name': '152pt'
										},
										{
											'key': base + '160pt',
											'name': '160pt'
										},
										{
											'key': base + '168pt',
											'name': '168pt'
										},
										{
											'key': base + '176pt',
											'name': '176pt'
										},
										{
											'key': base + '184pt',
											'name': '184pt'
										},
										{
											'key': base + '192pt',
											'name': '192pt'
										},
										{
											'key': base + '200pt',
											'name': '200pt'
										},
										{
											'key': base + '240pt',
											'name': '240pt'
										},
										{
											'key': base + '250pt',
											'name': '250pt'
										},
										{
											'key': base + 'n1',
											'name': 'n1'
										},
										{
											'key': base + 'n2',
											'name': 'n2'
										},
										{
											'key': base + 'n3',
											'name': 'n3'
										},
										{
											'key': base + 'n4',
											'name': 'n4'
										},
										{
											'key': base + 'n5',
											'name': 'n5'
										},
										{
											'key': base + 'n6',
											'name': 'n6'
										},
										{
											'key': base + 'n7',
											'name': 'n7'
										},
										{
											'key': base + 'n8',
											'name': 'n8'
										},
										{
											'key': base + 'n9',
											'name': 'n9'
										},
										{
											'key': base + 'n10',
											'name': 'n10'
										},
										{
											'key': base + 'n11',
											'name': 'n11'
										},
										{
											'key': base + 'n1pt',
											'name': 'n1pt'
										},
										{
											'key': base + 'n2pt',
											'name': 'n2pt'
										},
										{
											'key': base + 'n3pt',
											'name': 'n3pt'
										},
										{
											'key': base + 'n4pt',
											'name': 'n4pt'
										},
										{
											'key': base + 'n5pt',
											'name': 'n5pt'
										},
										{
											'key': base + 'n6pt',
											'name': 'n6pt'
										},
										{
											'key': base + 'n7pt',
											'name': 'n7pt'
										},
										{
											'key': base + 'n8pt',
											'name': 'n8pt'
										},
										{
											'key': base + 'n9pt',
											'name': 'n9pt'
										},
										{
											'key': base + 'n10pt',
											'name': 'n10pt'
										},
										{
											'key': base + 'n12pt',
											'name': 'n12pt'
										},
										{
											'key': base + 'n16pt',
											'name': 'n16pt'
										},
										{
											'key': base + 'n18pt',
											'name': 'n18pt'
										},
										{
											'key': base + 'n20pt',
											'name': 'n20pt'
										},
										{
											'key': base + 'n24pt',
											'name': 'n24pt'
										},
										{
											'key': base + 'n32pt',
											'name': 'n32pt'
										},
										{
											'key': base + 'n40pt',
											'name': 'n40pt'
										},
										{
											'key': base + 'n48pt',
											'name': 'n48pt'
										},
										{
											'key': base + 'n50pt',
											'name': 'n50pt'
										},
										{
											'key': base + 'n56pt',
											'name': 'n56pt'
										},
										{
											'key': base + 'n64pt',
											'name': 'n64pt'
										},
										{
											'key': base + 'n72pt',
											'name': 'n72pt'
										},
										{
											'key': base + 'n80pt',
											'name': 'n80pt'
										},
										{
											'key': base + 'n88pt',
											'name': 'n88pt'
										},
										{
											'key': base + 'n96pt',
											'name': 'n96pt'
										},
										{
											'key': base + 'n100pt',
											'name': 'n100pt'
										},
										{
											'key': base + 'n104pt',
											'name': 'n104pt'
										},
										{
											'key': base + 'n112pt',
											'name': 'n112pt'
										},
										{
											'key': base + 'n120pt',
											'name': 'n120pt'
										},
										{
											'key': base + 'n128pt',
											'name': 'n128pt'
										},
										{
											'key': base + 'n136pt',
											'name': 'n136pt'
										},
										{
											'key': base + 'n144pt',
											'name': 'n144pt'
										},
										{
											'key': base + 'n150pt',
											'name': 'n150pt'
										},
										{
											'key': base + 'n152pt',
											'name': 'n152pt'
										},
										{
											'key': base + 'n160pt',
											'name': 'n160pt'
										},
										{
											'key': base + 'n168pt',
											'name': 'n168pt'
										},
										{
											'key': base + 'n176pt',
											'name': 'n176pt'
										},
										{
											'key': base + 'n184pt',
											'name': 'n184pt'
										},
										{
											'key': base + 'n192pt',
											'name': 'n192pt'
										},
										{
											'key': base + 'n200pt',
											'name': 'n200pt'
										},
										{
											'key': base + 'n240pt',
											'name': 'n240pt'
										},
										{
											'key': base + 'n250pt',
											'name': 'n250pt'
										},
										{
											'key': base + 'c-1',
											'name': 'c-1'
										},
										{
											'key': base + 'c-2',
											'name': 'c-2'
										},
										{
											'key': base + 'c-3',
											'name': 'c-3'
										},
										{
											'key': base + 'c-4',
											'name': 'c-4'
										},
										{
											'key': base + 'c-5',
											'name': 'c-5'
										},
										{
											'key': base + 'c-6',
											'name': 'c-6'
										},
										{
											'key': base + 'c-7',
											'name': 'c-7'
										},
										{
											'key': base + 'c-8',
											'name': 'c-8'
										},
										{
											'key': base + 'c-9',
											'name': 'c-9'
										},
										{
											'key': base + 'c-10',
											'name': 'c-10'
										}
									]
								}
								return field;
							})
						},
						divpy: {
							type: 'custom',
							name: 'PaddingY',
							action: 'none',
							control: getDevicesControlFactory('paddingy', 'PaddingY', function (size, size_token) {
								var base = 'py' + size_token + '-';
								var field = {
									'type': 'select',
									'name': makeFieldLabelForSize('PaddingY', size),
									'action': 'apply_class',
									'show_empty': true,
									'options': [{
											'key': base + 'auto',
											'name': 'Auto'
										},
										{
											'key': base + '0',
											'name': '0'
										},
										{
											'key': base + '1',
											'name': '1'
										},
										{
											'key': base + '2',
											'name': '2'
										},
										{
											'key': base + '3',
											'name': '3'
										},
										{
											'key': base + '4',
											'name': '4'
										},
										{
											'key': base + '5',
											'name': '5'
										},
										{
											'key': base + '6',
											'name': '6'
										},
										{
											'key': base + '7',
											'name': '7'
										},
										{
											'key': base + '8',
											'name': '8'
										},
										{
											'key': base + '9',
											'name': '9'
										},
										{
											'key': base + '10',
											'name': '10'
										},
										{
											'key': base + '11',
											'name': '11'
										},
										{
											'key': base + '1pt',
											'name': '1pt'
										},
										{
											'key': base + '2pt',
											'name': '2pt'
										},
										{
											'key': base + '3pt',
											'name': '3pt'
										},
										{
											'key': base + '4pt',
											'name': '4pt'
										},
										{
											'key': base + '5pt',
											'name': '5pt'
										},
										{
											'key': base + '6pt',
											'name': '6pt'
										},
										{
											'key': base + '7pt',
											'name': '7pt'
										},
										{
											'key': base + '8pt',
											'name': '8pt'
										},
										{
											'key': base + '9pt',
											'name': '9pt'
										},
										{
											'key': base + '10pt',
											'name': '10pt'
										},
										{
											'key': base + '12pt',
											'name': '12pt'
										},
										{
											'key': base + '16pt',
											'name': '16pt'
										},
										{
											'key': base + '18pt',
											'name': '18pt'
										},
										{
											'key': base + '20pt',
											'name': '20pt'
										},
										{
											'key': base + '24pt',
											'name': '24pt'
										},
										{
											'key': base + '32pt',
											'name': '32pt'
										},
										{
											'key': base + '40pt',
											'name': '40pt'
										},
										{
											'key': base + '48pt',
											'name': '48pt'
										},
										{
											'key': base + '50pt',
											'name': '50pt'
										},
										{
											'key': base + '56pt',
											'name': '56pt'
										},
										{
											'key': base + '64pt',
											'name': '64pt'
										},
										{
											'key': base + '72pt',
											'name': '72pt'
										},
										{
											'key': base + '80pt',
											'name': '80pt'
										},
										{
											'key': base + '88pt',
											'name': '88pt'
										},
										{
											'key': base + '96pt',
											'name': '96pt'
										},
										{
											'key': base + '100pt',
											'name': '100pt'
										},
										{
											'key': base + '104pt',
											'name': '104pt'
										},
										{
											'key': base + '112pt',
											'name': '112pt'
										},
										{
											'key': base + '120pt',
											'name': '120pt'
										},
										{
											'key': base + '128pt',
											'name': '128pt'
										},
										{
											'key': base + '136pt',
											'name': '136pt'
										},
										{
											'key': base + '144pt',
											'name': '144pt'
										},
										{
											'key': base + '150pt',
											'name': '150pt'
										},
										{
											'key': base + '152pt',
											'name': '152pt'
										},
										{
											'key': base + '160pt',
											'name': '160pt'
										},
										{
											'key': base + '168pt',
											'name': '168pt'
										},
										{
											'key': base + '176pt',
											'name': '176pt'
										},
										{
											'key': base + '184pt',
											'name': '184pt'
										},
										{
											'key': base + '192pt',
											'name': '192pt'
										},
										{
											'key': base + '200pt',
											'name': '200pt'
										},
										{
											'key': base + '240pt',
											'name': '240pt'
										},
										{
											'key': base + '250pt',
											'name': '250pt'
										},
										{
											'key': base + 'n1',
											'name': 'n1'
										},
										{
											'key': base + 'n2',
											'name': 'n2'
										},
										{
											'key': base + 'n3',
											'name': 'n3'
										},
										{
											'key': base + 'n4',
											'name': 'n4'
										},
										{
											'key': base + 'n5',
											'name': 'n5'
										},
										{
											'key': base + 'n6',
											'name': 'n6'
										},
										{
											'key': base + 'n7',
											'name': 'n7'
										},
										{
											'key': base + 'n8',
											'name': 'n8'
										},
										{
											'key': base + 'n9',
											'name': 'n9'
										},
										{
											'key': base + 'n10',
											'name': 'n10'
										},
										{
											'key': base + 'n11',
											'name': 'n11'
										},
										{
											'key': base + 'n1pt',
											'name': 'n1pt'
										},
										{
											'key': base + 'n2pt',
											'name': 'n2pt'
										},
										{
											'key': base + 'n3pt',
											'name': 'n3pt'
										},
										{
											'key': base + 'n4pt',
											'name': 'n4pt'
										},
										{
											'key': base + 'n5pt',
											'name': 'n5pt'
										},
										{
											'key': base + 'n6pt',
											'name': 'n6pt'
										},
										{
											'key': base + 'n7pt',
											'name': 'n7pt'
										},
										{
											'key': base + 'n8pt',
											'name': 'n8pt'
										},
										{
											'key': base + 'n9pt',
											'name': 'n9pt'
										},
										{
											'key': base + 'n10pt',
											'name': 'n10pt'
										},
										{
											'key': base + 'n12pt',
											'name': 'n12pt'
										},
										{
											'key': base + 'n16pt',
											'name': 'n16pt'
										},
										{
											'key': base + 'n18pt',
											'name': 'n18pt'
										},
										{
											'key': base + 'n20pt',
											'name': 'n20pt'
										},
										{
											'key': base + 'n24pt',
											'name': 'n24pt'
										},
										{
											'key': base + 'n32pt',
											'name': 'n32pt'
										},
										{
											'key': base + 'n40pt',
											'name': 'n40pt'
										},
										{
											'key': base + 'n48pt',
											'name': 'n48pt'
										},
										{
											'key': base + 'n50pt',
											'name': 'n50pt'
										},
										{
											'key': base + 'n56pt',
											'name': 'n56pt'
										},
										{
											'key': base + 'n64pt',
											'name': 'n64pt'
										},
										{
											'key': base + 'n72pt',
											'name': 'n72pt'
										},
										{
											'key': base + 'n80pt',
											'name': 'n80pt'
										},
										{
											'key': base + 'n88pt',
											'name': 'n88pt'
										},
										{
											'key': base + 'n96pt',
											'name': 'n96pt'
										},
										{
											'key': base + 'n100pt',
											'name': 'n100pt'
										},
										{
											'key': base + 'n104pt',
											'name': 'n104pt'
										},
										{
											'key': base + 'n112pt',
											'name': 'n112pt'
										},
										{
											'key': base + 'n120pt',
											'name': 'n120pt'
										},
										{
											'key': base + 'n128pt',
											'name': 'n128pt'
										},
										{
											'key': base + 'n136pt',
											'name': 'n136pt'
										},
										{
											'key': base + 'n144pt',
											'name': 'n144pt'
										},
										{
											'key': base + 'n150pt',
											'name': 'n150pt'
										},
										{
											'key': base + 'n152pt',
											'name': 'n152pt'
										},
										{
											'key': base + 'n160pt',
											'name': 'n160pt'
										},
										{
											'key': base + 'n168pt',
											'name': 'n168pt'
										},
										{
											'key': base + 'n176pt',
											'name': 'n176pt'
										},
										{
											'key': base + 'n184pt',
											'name': 'n184pt'
										},
										{
											'key': base + 'n192pt',
											'name': 'n192pt'
										},
										{
											'key': base + 'n200pt',
											'name': 'n200pt'
										},
										{
											'key': base + 'n240pt',
											'name': 'n240pt'
										},
										{
											'key': base + 'n250pt',
											'name': 'n250pt'
										},
										{
											'key': base + 'c-1',
											'name': 'c-1'
										},
										{
											'key': base + 'c-2',
											'name': 'c-2'
										},
										{
											'key': base + 'c-3',
											'name': 'c-3'
										},
										{
											'key': base + 'c-4',
											'name': 'c-4'
										},
										{
											'key': base + 'c-5',
											'name': 'c-5'
										},
										{
											'key': base + 'c-6',
											'name': 'c-6'
										},
										{
											'key': base + 'c-7',
											'name': 'c-7'
										},
										{
											'key': base + 'c-8',
											'name': 'c-8'
										},
										{
											'key': base + 'c-9',
											'name': 'c-9'
										},
										{
											'key': base + 'c-10',
											'name': 'c-10'
										}
									]
								}
								return field;
							})
						},
					}
				},
			})
		})
		framework.addComponentType(def_all);

		/** END DESIGN SYSTEM  */





		/** START COMPONENTS */

		// SHORT CODE BLOCKS

		var fs = require('fs');
		var path = require('path');
		var source_relative = 'code/';
		var type_prefix = 'pg.KraftPlugin';
		var source_cache = {};
		var source_base = framework.getResourceUrl(source_relative);

		var pgbGetSourceFileUrl = function (fn) {
			return source_base + fn;
		}

		var pgbGetSourceNode = function (fn) {

			if (!(fn in source_cache)) {
				source_cache[fn] = pinegrow.getSourceNodeOfUrl(pgbGetSourceFileUrl(fn), true);
			}
			return source_cache[fn];
		}
		var components_map = {};
		var combined_css = '';
		var combined_css_file_included = {};

		var getComponent = function (type) {
			return components_map[type_prefix + '.' + type];
		}

		var pgbAddSection = function (key, name, list) {
			var section = new PgFrameworkLibSection(type_prefix + '.' + key, name);
			section.setComponentTypes(list);
			framework.addLibSection(section);
		}

		framework.pgbCreateComponent = function (source_url, selector, name, transform_code) {

			var clist = [];
			var sourceNode = pgbGetSourceNode(source_url);

			var list = sourceNode.find(selector);

			for (var i = 0; i < list.length; i++) {
				var pgel = list[i];
				var suff = list.length > 1 ? '-' + (i + 1) : '';
				var x = selector.replace('#', '');
				var key = x.replace('.', '') + suff;
				//            var key = selector.replace('.', '') + suff;
				var type = type_prefix + '.' + key;
				var c = new PgComponentType(type, name + suff);
				c.selector = selector;

				if (list.length > 1) {
					c.selector += suff;
					pgel.addClass(c.selector.replace('.', ''));
				}
				c.parent_selector = 'body';
				c.sections = {};

				if (transform_code) transform_code(pgel, c, i);

				c.code = pgel.toStringOriginal(true);
				c.preview_image = c.type.replace('.wp.', '.') + '.png';
				c.button_image = c.preview_image;

				c.tags = 'block';

				var bck_el = pgel.findOne('.background-image-holder');
				if (bck_el) {
					addBackgroundControl(c, '.background-image-holder');
				}

				framework.addComponentType(c);

				clist.push(c);

				components_map[c.type] = c;
			}

			processCSSFile2(source_url.replace('.html', '.css'));


			return clist;
		}

		var processCSSFile2 = function (dir, name) {
			var css_file = framework.getResourceFile(source_relative + '/css/' + name);
			if (!(css_file in combined_css_file_included)) {
				try {
					var css = fs.readFileSync(css_file, {
						encoding: 'utf8'
					});
					combined_css += css;
					combined_css_file_included[css_file] = true;
				} catch (err) {}
			}
		}

		var addTo = function (list, new_list) {
			for (var i = 0; i < new_list.length; i++) {
				list.push(new_list[i]);
			}
		}

		var sccomps = [];

		function addShortCodeComponent(name, selector, opt, yn) {
			addTo(
				sccomps,
				framework.pgbCreateComponent(
					'index.html',
					selector,
					name,
					function (pgel, c) {}
				)
			);
		}

		addShortCodeComponent("Icon 1", ".xi1", "", false);
		addShortCodeComponent("Icon 2", ".xi2", "", false);
		addShortCodeComponent("Icon 3", ".xi3", "", false);
		addShortCodeComponent("Icon 4", ".xi4", "", false);
		addShortCodeComponent("Icon 5", ".xi5", "", false);
		addShortCodeComponent("Icon 6", ".xi6", "", false);
		addShortCodeComponent("Icon 7", ".xi7", "", false);
		addShortCodeComponent("Icon 8", ".xi8", "", false);
		addShortCodeComponent("Icon 9", ".xi9", "", false);
		addShortCodeComponent("Icon 10", ".xi10", "", false);
		addShortCodeComponent("Icon 11", ".xi11", "", false);
		addShortCodeComponent("Icon 12", ".xi12", "", false);
		addShortCodeComponent("Icon 13", ".xi13", "", false);
		addShortCodeComponent("Icon 14", ".xi14", "", false);

		addShortCodeComponent("Progressbar Circle", ".xpb1", "progressbar-options", true);
		addShortCodeComponent("Progressbar Semi Circle", ".xpb2", "progressbar-options", true);
		addShortCodeComponent("Progressbar Line", ".xpb3", "progressbar-options", true);

		addShortCodeComponent("CounterUp", ".xcu1", "counterup-options", true);

		addShortCodeComponent("Count Down", ".xcd1", "countdown-options", true);
		addShortCodeComponent("Count Down 2", ".xcd2", "countdown-options", true);
		addShortCodeComponent("Count Down 3", ".xcd3", "countdown-options", true);

		addShortCodeComponent("Parallax 1", ".xp1", "jarallax-options", true);
		addShortCodeComponent("Parallax 2", ".xp2", "jarallax-options", true);
		addShortCodeComponent("Parallax 3", ".xp3", "jarallax-options", true);
		addShortCodeComponent("Parallax 4", ".xp4", "jarallax-options", true);
		addShortCodeComponent("Parallax 5", ".xp5", "jarallax-options", true);
		addShortCodeComponent("Parallax 6", ".xp6", "jarallax-options", true);

		addShortCodeComponent("Google Maps", ".xgm1", "googlemaps-options", true);

		addShortCodeComponent("Media Youtube", ".xjp1", "plyr", true);
		addShortCodeComponent("Media Youtube 2", ".xjp2", "plyr", true);
		addShortCodeComponent("Media Local", ".xjp3", "plyr", true);
		addShortCodeComponent("Media Sound", ".xjp4", "plyr", true);

		addShortCodeComponent("Slider - Slick Slider", "#xss1", "slick-options", true);
		addShortCodeComponent("Slider - Swiper Slider", "#xsc1", "swiper-options", true);
		addShortCodeComponent("Slider - OWL Carousel", "#xowl1", "owlcarousel-options", true);

		addShortCodeComponent("Preloader", ".xpl1", "preloader-options", true);

		addShortCodeComponent("Animated", ".xa1", "animation-options", true);

		addShortCodeComponent("Gallery - Light Gallery", ".xlg1", "lightgallery-options", true);

		addShortCodeComponent("Gallery - Magnific Popup", ".xmp1", "magnificpopup-options", true);

		addShortCodeComponent("Gallery - Isotope", "#xisotope1", "isotope-options", true);

		addShortCodeComponent("Easy Tabs", ".xet1", "easytabs-options", true);

		pgbAddSection('xshortcode', 'ShortCode Blocks', sccomps);


		// SHORT CODE BLOCKS END

		/** END COMPONENTS */





		/** START RESOURCES */

		var toLocalPath = function (p) {
			return p.replace(/\//g, path.sep);
		}

		//add resources
		var res_files = [
			'css',
			'fonts',
			'img',
			'js',
			'setup',
			'css/aos.css',
			'css/che.css',
			'css/cle.css',
			'css/h.css',
			'css/hei.css',
			'css/ih.css',
			'css/slick.css',
			'css/lightgallery.min.css',
			'css/lg-transitions.min.css',
			'css/lg-fb-comment-box.min.css',
			'css/lhe.css',
			'css/owl.carousel.min.css',
			'css/owl.theme.default.min.css',
			'css/swiper.min.css',
			'css/jarallax.css',
			'css/plyr.css',
			'css/animate.min.css',
			'css/magnific-popup.css',
			'css/jquery.smartmenus.bootstrap.css',
			'css/venobox.css',
			'js/jquery.min.js',
			'js/anijs-min.js',
			'js/anijs-helper-dom-min.js',
			'js/anijs-helper-scrollreveal-min.js',
			'js/aos.js',
			'js/slick.min.js',
			'js/owl.carousel.min.js',
			'js/lightbox.min.js',
			'js/isotope.pkgd.min.js',
			'js/swiper.min.js',
			'js/jarallax.min.js',
			'js/jarallax-video.min.js',
			'js/jarallax-element.min.js',
			'js/rellax.js',
			'js/plyr.js',
			'js/jquery.lazyLoadGoogleMaps.js',
			'js/jquery.waypoints.min.js',
			'js/jquery.counterup.min.js',
			'js/countdown.min.js',
			'js/progressbar.min.js',
			'js/jquery.scrollUp.min.js',
			'js/jquery.smooth-scroll.min.js',
			'js/jquery.easing.js',
			'js/jquery.fitvids.js',
			'js/jquery.magnific-popup.min.js',
			'js/imagesloaded.pkgd.min.js',
			'js/lightgallery-all.min.js',
			'js/jquery.easytabs.min.js',
			'js/jquery.smartmenus.min.js',
			'js/jquery.smartmenus.helper.js',
			'js/tilt.jquery.js',
			'js/wow.min.js',
			'js/venobox.min.js',
			'js/scripts.js',
			'js/custom.js',
		];

		framework.customResourceNamespace = null;

		for (var i = 0; i < res_files.length; i++) {
			var file = framework.getResourceFile(res_files[i]);
			var r = new PgComponentTypeResource(file);
			r.relative_url = res_files[i];
			r.source = toLocalPath(file);
			r.footer = res_files[i].indexOf('.js') >= 0;
			framework.resources.add(r);
		}
		framework.resources.description = "CSS and JS files needed for KRAFT THINGS.";


		/** END RESOURCES */





		/** START PINEGROW STUFFS  */

		//uncomment the line below for debugging - opens devtools on Pinegrow Launch
		//require('nw.gui').Window.get().showDevTools();

		//The code below adds a control to target all text contained within a <p> tag.
		//note that we don't prefix the id, section ids and field ids because we'll do that with the .addPrefix function below.
		var paragraph_options = new PgComponentType('paragraph_options', '', {
			selector: 'p',
			sections: {
				p_options: {
					name: '<p> Options',
					default_open: false,
					fields: {
						p_caps: {
							type: 'checkbox',
							name: 'Make paragraphs all caps?',
							action: 'apply_class',
							value: 'pge-caps'
						}
					}
				}
			}
		});

		//prefixes component id, fields, and sections names
		paragraph_options.addPrefix(framework_id);

		//adds component to framework
		framework.addComponentType(paragraph_options);

		//The code below adds an article box component to the "Library" panel. It also adds four controls - a checkbox, a select dropdown, a file picker, and a text box all using 'apply_class', for that component to the "Properties" panel. 
		var article_box = new PgComponentType('article-box', 'Article Box', {
			selector: '.pge-article-box',
			code: `<article class="pge-article-box">
            <img src="' + pinegrow.getPlaceholderImage() + '" alt="">
            <div class="pge-article-body">
            <h3 class="pge-article-title">Title</h3>
            <p class="pge-article-meta">Written by <a href="#" class="author">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>
            <p class="pge-article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button>Read More</button>
            </div>
        </article>`,
			sections: {
				checkbox_options: {
					name: 'Article Options',
					default_open: true,
					fields: {
						title_dropcap: {
							type: 'checkbox',
							name: 'Add dropcap to title?',
							action: 'apply_class',
							value: 'pge-dropcap'
						},
					}
				},
				select_options: {
					name: 'Meta options',
					fefault_open: true,
					fields: {
						meta_style: {
							type: 'select',
							name: 'Select meta style',
							action: 'apply_class',
							show_empty: true,
							options: [{
									key: 'pge-meta-grey',
									name: 'Greyed'
								},
								{
									key: 'pge-meta-underlined',
									name: 'Underlined'
								},
								{
									key: 'pge-meta-highlight',
									name: 'Author highlight'
								}
							]
						},
					}
				},
				file_options: {
					name: 'Article Image Options',
					default_open: false,
					fields: {
						picture_options: {
							type: 'image',
							file_picker: true,
							name: 'Article image',
							action: 'custom',
							value: 1,
							get_value: function (pgel) {
								return pgel.findOne('img').getAttribute('src') || null;
							},
							set_value: function (pgel, value) {
								pgel.findOne('img').setAttribute('src', value);
								return value;
							}
						},
						alt_options: {
							type: 'text',
							live_update: false,
							name: 'Image alt text',
							action: 'custom',
							value: 1,
							get_value: function (pgel) {
								return pgel.findOne('img').getAttribute('alt') || null;
							},
							set_value: function (pgel, value) {
								pgel.findOne('img').setAttribute('alt', value);
								return value;
							}
						}
					}
				}
			}
		});
		article_box.addPrefix(framework_id);
		framework.addComponentType(article_box);

		//Create an instance of a button maker for our toggle colors
		var bm = new PgToggleButtonMaker();

		//Create a toggle control with two custom button color controls and utilizing 'element_attribute'
		var animated_toggle = new PgComponentType('animated-toggle', 'Toggle', {
			selector: '.toggle-wrapper',
			code: `<div class="toggle-wrapper" unchecked-color="red" checked-color="green">
                <div class="pge-toggle">
                    <input id="pge-toggle" type="checkbox"/>
                    <label class="toggle-item" for="pge-toggle"></label>
                </div>
            </div>`,
			sections: {
				toggle_options: {
					name: 'Toggle Options',
					default_open: true,
					fields: {
						toggle_unchecked_color: {
							type: 'select',
							name: 'Unchecked color?',
							action: 'element_attribute',
							attribute: 'unchecked-color',
							toggle_buttons: true,
							options: [{
									key: 'red',
									name: 'Red',
									html: bm.makeColor('#f00')
								},
								{
									key: 'green',
									name: 'Green',
									html: bm.makeColor('#0f0')
								},
								{
									key: 'blue',
									name: 'Blue',
									html: bm.makeColor('#00f')
								}
							]
						},
						toggle_checked_color: {
							type: 'select',
							name: 'Checked color?',
							action: 'element_attribute',
							attribute: 'checked-color',
							toggle_buttons: true,
							options: [{
									key: 'red',
									name: 'Red',
									html: bm.makeColor('#f00')
								},
								{
									key: 'green',
									name: 'Green',
									html: bm.makeColor('#0f0')
								},
								{
									key: 'blue',
									name: 'Blue',
									html: bm.makeColor('#00f')
								}
							]
						}
					}
				}
			}
		});
		animated_toggle.addPrefix(framework_id);
		framework.addComponentType(animated_toggle);

		//This code creates the "PG Example Elements" section in the "Library" panel. It then populates that panel with the two components created above.
		var pge_article_section = new PgFrameworkLibSection('article-section', 'PG Example Elements');
		pge_article_section.setComponentTypes([article_box, animated_toggle]);
		framework.addLibSection(pge_article_section);

		/** END PINEGROW STUFFS  */
	});





});