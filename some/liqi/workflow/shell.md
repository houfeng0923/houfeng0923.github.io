


## fzf

### git

```
lsf = !git log --pretty=format:\"%h %ad %an: %s\" --topo-order --date=short | fzf | awk '{print $1}' | pbcopy
```




## refs

- [How FZF and ripgrep improved my workflow](https://medium.com/@sidneyliebrand/how-fzf-and-ripgrep-improved-my-workflow-61c7ca212861)
- [SidOfc/dotfiles](https://github.com/SidOfc/dotfiles/blob/d07fa3862e/.zshrc)