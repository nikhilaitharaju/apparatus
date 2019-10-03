//<![CDATA[
try {sessionCamRecorder.initialise({"A":false,"B":7,"C":"","D":true,"E":[{"AF":"search","AG":0,"AH":0}],"G":false,"H":"n55imw1ullgstt0mmxw3i1zn","I":true,"J":"//custom page names for /tutors-problems/ & /sitemap/schools paths\nfunction customPageName(pagename) {\n    if (!window.sessioncamConfiguration)\n        window.sessioncamConfiguration = new Object();\n    sessioncamConfiguration.SessionCamPath = '' ;\n    sessioncamConfiguration.SessionCamPageName = pagename;\n}\n\nvar tutorProblems = document.location.pathname.match('tutors-problems');\nvar sitemapSchools = document.location.pathname.match('sitemap/schools');\nvar departments = document.location.pathname.match('departments');\nvar courses = document.location.pathname.match('courses');\n\nif (tutorProblems){\n    customPageName(location.pathname.replace(/(^\\/tutors-problems\\/).*/, '$1'));\n}else if (sitemapSchools && departments){\n    customPageName(location.pathname.replace(/^\\/(sitemap\\/schools\\/).*(departments).*/, '$1$2'));\n} else if (sitemapSchools && courses){\n    customPageName(location.pathname.replace(/^\\/(sitemap\\/schools\\/).*(courses).*/, '$1$2'));\n} else if (sitemapSchools && (!courses && !departments)){\n    customPageName(location.pathname.replace(/(^\\/sitemap\\/schools\\/).*/, '$1'));\n} else{\n\n}\n\ntry {\n        sessionCamJQuery(\"[type='search']\").attr(\"sessioncam-name\", \"search\");\n} catch (error) {\n}","K":null,"L":0,"M":false,"N":"","O":"macOS","P":"","Q":"Apple Macintosh","R":"Desktop/Laptop","S":"635fadf0-e700-43aa-a0bb-f9df3029cda4","T":637057220220000000,"U":"4923b232-7da9-4da0-8d84-0240be5b71e2","AA":"3f8f2012-a915-e911-a991-f9509ff7cb07","AB":"b7dc1855-8cb7-e911-a993-b78ba019c6c7","AC":null,"AE":1,"AS":true,"AT":250,"AV":1,"AW":"","AX":false,"AY":true,"AZ":0,"BD":null,"BI":null,"BJ":null,"BL":1,"BN":0,"BO":"","BP":3,"BQ":0,"BR":"","BT":false,"BU":"0","BV":false});} catch(e) {sessionCamRecorder.log('init failed (' + e + ')');}
//]]>