# ember resolver  

作用：A resolver works based on a set of rules, which reflects how Ember apps are structured.
执行时机： compile


1.  module prefix  
	config/environment 
	app/routes/popup -> erebor/routes/popup

2.  statement 
	 route:popup   分解

The resolver is a fairly straightforward abstraction that **helps you resolve modules**, agnostic from all the various **module loading systems**. If you get to know how it works it can be a great new tool in your arsenal.

more info:  https://dockyard.com/blog/2016/09/14/understanding-ember-s-resolver 



