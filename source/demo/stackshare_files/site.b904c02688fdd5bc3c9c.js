(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/bundles/site/startup/register.js 68f1054e609aec168022ebf2d367cb00":function(e,n,o){"use strict";o.r(n);var r=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/maharo/index.js 7be06c25e3e2779f459622d6837b9632"),i=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/bundles/site/components/header-notice/index.jsx 6661d9285c0fa8d9d58341a450276a4e"),t=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/bundles/site/components/footer/index.js 74e2adf7706c7bdc5e1f141e807eb21e"),l=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/bundles/site/components/second-footer/index.jsx"),c=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/shared/library/modals/signin/index.jsx f6e8a37ff02cce1afa26bc581c23d53a"),a=o("/home/circleci/frontend/node_modules/react/index.js"),d=o.n(a),s=o("/home/circleci/frontend/node_modules/prop-types/index.js"),b=o.n(s),u=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/shared/enhancers/local-storage-enhancer.js"),f=o("/home/circleci/frontend/node_modules/debug/src/browser.js");function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=[],r=!0,i=!1,t=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(o.push(l.value),!n||o.length!==n);r=!0);}catch(e){i=!0,t=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw t}}return o}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e,n){if(null==e)return{};var o,r,i=function(e,n){if(null==e)return{};var o,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var g=o.n(f)()("signin"),j=function(e){var n=e.onDismiss,o=e.showEngagementSigninModal,r=void 0!==o&&o,i=e.coolDown,t=void 0===i?6e5:i,l=e.storageProvider,s=e.currentUser,b=h(e,["onDismiss","showEngagementSigninModal","coolDown","storageProvider","currentUser"]),u=p(Object(a.useState)(!1),2),f=u[0],j=u[1];if(Object(a.useEffect)(function(){if(window.SigninModal={show:function(){g("Showing signin modal from global SignInModal.show()..."),j(!0)}},window.signupModal=function(){g("Showing signin modal from global signupModal()..."),j(!0)},!s){var e=l.getNumber("lastShownTime"),n=(new Date).getTime();if(null===e||n-e>t){g("Signin modal never seen or cooldown has elapsed",e);var o=function(){l.setItem("lastShownTime",n),j(!0)};if(!r){g("Showing signin modal in 30 sec...");var i=setTimeout(o,3e4);return function(){return clearTimeout(i)}}g("Showing signin modal per showEngagementSigninModal",r),o()}else g("Signin within cooldown period")}},[]),f){return d.a.createElement(c.b,m({onDismiss:function(){j(!1),n&&n()}},b))}return null};j.propTypes={onDismiss:b.a.func,showEngagementSigninModal:b.a.bool,coolDown:b.a.number,storageProvider:b.a.object.isRequired,currentUser:b.a.any};var w=Object(u.a)("Signin","1")(j),x=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/shared/enhancers/mobile-enhancer.js"),y=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/shared/library/advert/index.jsx 5557ad21e126d12eebc49d8b318d0bc8"),v=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/shared/enhancers/graphql-enhancer.js");Object(r.default)({Footer:t.a,SecondaryFooter:l.a,HeaderNotice:i.a,SigninGlobalModal:Object(x.b)(!1)(w),SigninContent:c.a,Advert:Object(v.b)(y.a)})},"multi ./app/polyfills.js ./app/bundles/site/startup/register.js":function(e,n,o){o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/polyfills.js"),e.exports=o("/home/circleci/frontend/node_modules/babel-loader/lib/index.js!/home/circleci/frontend/app/bundles/site/startup/register.js 68f1054e609aec168022ebf2d367cb00")}},[["multi ./app/polyfills.js ./app/bundles/site/startup/register.js",2,0,1]]]);
//# sourceMappingURL=site.b904c02688fdd5bc3c9c.js.map