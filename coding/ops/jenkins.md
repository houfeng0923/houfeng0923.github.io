

## docker based

```
docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```

## refs

[jenkins doc](https://jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/)