


## fzf

### git

```
# git lsf
lsf = !git log --pretty=format:\"%h %ad %an: %s\" --topo-order --date=short | fzf | awk '{print $1}' | pbcopy

# git coa

coa=!f() { if [ $1 ] ; then git checkout $1 ; else git checkout $(git branch  | fzf); fi }; f

```

### kp
```
kp() {
### PROCESS
# mnemonic: [K]ill [P]rocess
# show output of "ps -ef", use [tab] to select one or multiple entries
# press [enter] to kill selected processes and go back to the process list.
# or press [escape] to go back to the process list. Press [escape] twice to exit completely.

local pid=$(ps -ef | sed 1d | eval "fzf ${FZF_DEFAULT_OPTS} -m --header='[kill:process]'" | awk '{print $2}')

if [ "x$pid" != "x" ]
then
  echo $pid | xargs kill -${1:-9}
  kp
fi
}
```

### jj

super autojump

js() {
cd `j -s | sed 1d | eval "fzf ${FZF_DEFAULT_OPTS} -m --header='[select:path]'" | awk '{print $2}'`
}




## refs

- [How FZF and ripgrep improved my workflow](https://medium.com/@sidneyliebrand/how-fzf-and-ripgrep-improved-my-workflow-61c7ca212861)
- [SidOfc/dotfiles](https://github.com/SidOfc/dotfiles/blob/d07fa3862e/.zshrc)