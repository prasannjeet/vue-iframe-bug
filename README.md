# Minimum Working Example for iFrame Bug   
Vue 2 seems to have a bug where the back button works erratically.
This is a minimal working example to reproduce it.

#Steps to reproduce the bug
1. Note that localhost:8080 is the only port where this will work, as links are hardcoded.
2. Open the page in a browser `(localhost:8080)`
3. Click on `Go To iFrame`. Here you will see a main page with iFrame titled `Page 1`.
4. Now inside the iFrame, click on `Click me for further navigation`.
5. Now, click on `iFrame2`. Here you will see a page with iFrame titled `Page 2`.
6. Now, if you click on `Back` button in the browser, the other iFrame from  point `3` goes back in the background.
7. This can be checked, if one goes back to the original iFrame, by clicking on the button `iFrame1`.