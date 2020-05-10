npm list -g --depth=0 | grep gulp           || npm install  gulp         -g
npm list -g --depth=0 | grep gulp-concat    || npm install  gulp-concat  -g
npm list -g --depth=0 | grep gulp-sass      || npm install  gulp-sass    -g
npm list -g --depth=0 | grep del            || npm install  del          -g
npm list -g --depth=0 | grep gulp-csso      || npm install  gulp-csso    -g
npm list -g --depth=0 | grep gulp-if        || npm install  gulp-if      -g


npm link gulp
npm link gulp-concat
npm link gulp-sass
npm link del
npm link gulp-csso
npm link gulp-if

gulp watch
