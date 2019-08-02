for i in *.js;
do
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i" > index-updated.js
   mocha index-updated.js 
   if [[ "${CIRCLE_NODE_INDEX}" == 0 ]]
   then
    echo "${CIRCLE_NODE_INDEX}" 
   fi

done
