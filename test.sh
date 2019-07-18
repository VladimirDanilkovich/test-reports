for i in *.js;
do
   echo"$i"
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i".js > index-updated.js   
   mocha index-updated.js 
done
