# UIKIT + Node.js Template

An example of using UIKit Framework with Node.js on the Express framework.  

## Introduction
Example of simple sign in page and UIKit's autocomplete feature. The sign in page by default does NOT connect to a database, though you can edit the /.env file USE_DB=1 to enable the simple MySQL hookup example.  Note, that the database insert does not do any password encryption or duplicate insertion checks since it's just a quick and simple example.

I found that UIKit doesn't really have a good example of how to use their autocomplete so I hooked it up to Reddit's subreddit search to return back JSON for the search results.

## Getting Started
1. Just run npm install on project and start up application with 'sudo npm start'
2. Modify /.env environment file to desired settings. Set USE_DB=1 and DB_* settings if you want to hook it up to a MySQL database.  You must start up the MySQL on the server that you are running this on first.
3. Facebook Connect can be hooked up using your Facebook App ID at /public/javascripts/fb.js.  Look for "appId : ''" and enter your App ID there.

