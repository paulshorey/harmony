# This is a copy of infinite-react-carousel

With some HTML/CSS modified to better suit our needs. It is not backwards compatible, but the build scripts and instructions are the same.

See: https://www.npmjs.com/package/infinite-react-carousel

# AFTER ANY CHANGE TO THIS MODULE, RUN `npm run build` TO UPDATE THE DIST FOLDER 

Importing directly from `@ps/infinite-react-carousel/src` does not work. So, import from `@ps/infinite-react-carousel` which serves the built files.

These folders should not be ignored, but managed in Git version control like normal files. This module will not be modified often, so it's ok.

```
# .gitignore

!lib
!dist
!build
```