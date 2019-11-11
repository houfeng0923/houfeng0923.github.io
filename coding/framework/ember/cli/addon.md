

 Ember CLI’s addon system provides a way to create reusable units of code, share components and styling, extend the build tooling, and more

EmberApp /EmberAddon

# is lib a addon ?

ember-cli  project isEmberAddon()

pkg: keywords has `ember-addon` .  //   'broccoli-asset-rev'


# cli addon flow

[addon hooks](https://ember-cli.com/api/classes/Addon.html)

## treeForPublic


## contentFor

ember-cli-inline-content // use config ?
{
  contentFor: () => {}
}
[kaliber5/ember-bootstrap](https://github.com/kaliber5/ember-bootstrap/blob/master/index.js#L274)

## included

in building  process

use app.import for mp3 files ?


## includedCommands



## addonPostprocessTree()

ember-auto-import (webpack)

## blueprints

[blueprint hooks](https://ember-cli.com/extending/#blueprint-hooks)

[示例]: [pixelhandler/ember-cli-es5-shim](https://github.com/pixelhandler/ember-cli-es5-shim)

### Broccoli Tree Modification

preBuild postBuild

## in-repo-addon

http://slides.com/trabus/in-repo-addons#/

[Leveraging In-Repo Addons In Your Ember App](https://tenbit.co/blog/leveraging-inrepo-addons-in-your-ember-app/)


## some tips

addon /public/**  --> /dist/<addon name>/**

addon import / treeForPublic will be overwrited by app public

> https://github.com/san650/ember-addon-examples/blob/master/addon-01-public-folder/README.md


## libs

for upgrade

- ember-cli-update
- ember-cli-rename
- ember-cli-mv
- ember-watson



https://emberobserver.com/