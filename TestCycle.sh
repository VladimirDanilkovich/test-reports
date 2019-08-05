for i in *.js;
do
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i" > index-updated.js
   mocha index-updated.js --retries 10
   echo "${CIRCLE_NODE_INDEX}" 
  

done
