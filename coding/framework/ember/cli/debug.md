
EmberApp is the main class Ember CLI uses to manage the Broccoli trees for your application. It is very tightly integrated with Broccoli and has a toTree() method you can use to get the entire tree for your application.

# faq


### styletree: unwatcheddir?
app/ 已经 watch

### /server/ watched?

serverWatch.js

## index.html ConfigReplace

index.html  rootURL ... 等信息依赖 config 替换

## addonPreprocessTree ?

了解下 addon 的  preprocessTree hook

# step

## build trees by ember-cli-build

- load addons

- public + /addon public

- app/index.html

- app/templates/** (and pop)  + addon templates/ app/  + vendor js

(contain template compiler )
preprocessTree, postprocessTree
packageApplicationJs()

- app/styles/ + addon styles  + vendor styles

(contain less compiler ...)
preprocessTree, postprocessTree

> question: vendor.css / app.css ?

express vendor.css not is empty

=> trees

broccoli-concat([], {outputFile: 'defaultPackager.distPaths.appCssFile'})

## builder tree


builder.build()

// addon hooks


# helper


project.findAddonByName()




