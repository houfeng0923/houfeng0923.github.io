
## private npm repo

- [verdaccio](https://github.com/verdaccio)

use `forever` to startup

### usage

    npm install --registry=http://your-private-npm-domain

    npm set registry http://your-private-npm-domain

or for single project:

    echo registry=http://your-private-npm-domain > .npmrc

### custom

[title & logo](https://github.com/verdaccio/verdaccio/issues/357)


ldap:

npm install --global verdaccio-ldap

```
auth:
  ldap:
    type: ldap
    client_options:
      url: "ldap://ldap.yourdomain.cn:389"
      # Only required if you need auth to bind
      adminDn: "cn=root,dc=yourdomain,dc=cn"
      adminPassword: "your password"
      # Search base for users
      searchBase: "dc=yourdomain,dc=cn"
      searchFilter: "(uid={{username}})"
      # If you are using groups, this is also needed
      #groupDnProperty: 'cn',
      #groupSearchBase: 'ou=groups,dc=yourdomain,dc=cn',
      #groupSearchFilter: '(memberUid={{dn}})',
      # Optional
      cache: False
```
