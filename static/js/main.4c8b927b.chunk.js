(this["webpackJsonpquote-results-new"]=this["webpackJsonpquote-results-new"]||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=a(7),i=(a(24),a(6)),s=a(1),u=(a(14),function(){return l.a.createElement("div",{className:"Nav"},l.a.createElement("a",{href:"/"},"1"),l.a.createElement("a",{href:"/"},"2"),l.a.createElement("a",{href:"/"},"3"),l.a.createElement("a",{href:"/",className:"active"},"4"),l.a.createElement("a",{href:"/"},"5"))}),m=function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("div",{className:"clearfix"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{className:"inova",src:"/quote-results/img/inova-logo.png",alt:"Inova"})),l.a.createElement("img",{className:"costco",src:"/quote-results/img/costco-logo.png",alt:"Costco"})),l.a.createElement(u,null))},d=function(){return l.a.createElement("div",{className:"Dollar"},"$")},v=function(e){var t=e.val;return l.a.createElement("div",{className:"Value"},t)},g=function(e){var t=e.kind;return l.a.createElement("div",{className:"Per"},"PER",l.a.createElement("br",null),t)},p=function(e){var t=e.buying,a=e.setBuying;return l.a.createElement("div",{className:"BuyNow"},l.a.createElement("div",{className:"Price"},l.a.createElement("div",{className:"Monthly"},l.a.createElement(d,null),l.a.createElement(v,{val:"241"}),l.a.createElement(g,{kind:"MONTH"})),l.a.createElement("div",{className:"Yearly"},l.a.createElement(d,null),l.a.createElement(v,{val:"2862"}),l.a.createElement(g,{kind:"YEAR"}))),l.a.createElement("button",{className:t?"Button BuyBtn Active":"Button BuyBtn",onClick:function(){return a(!0)}},l.a.createElement("span",null,"Buy"),l.a.createElement("strong",null,"Now")))},E=a(18),h=a.n(E),f=function(e){var t=e.helpVisible,a=e.setHelpVisible;return l.a.createElement("button",{className:"Button",onClick:function(){return a(!t)}},"?")},b={liability:["1000000","2000000"],coverage_comprehensive:["No coverage","500","1000"],coverage_collision:["No coverage","500","1000"],transportation_replacement:["No coverage","1200"],damage_non_owned:["No coverage","50000"],waiver_depreciation:!1,accident_waiver:!1},y=Object(n.createContext)(),C=(Object(n.createContext)(),function(e){var t=e.name,a=e.value,r=e.isCustomized,c=Object(n.useContext)(y).updateCoverage,o=function(){return b[t]?b[t].indexOf(a):0};return l.a.createElement("span",{className:r?"Modify Visible":"Modify"},l.a.createElement("button",{className:("boolean"===typeof a?!a:o()<1)?"Button Decrease Disabled":"Button Decrease",onClick:function(){"boolean"===typeof a?c(t,!1):o()>0&&c(t,b[t][o()-1])}},"-"),l.a.createElement("button",{className:("boolean"===typeof a?a:o()+1>=b[t].length)?"Button Increase Disabled":"Button Increase",onClick:function(){"boolean"===typeof a?c(t,!0):o()+1<b[t].length&&c(t,b[t][o()+1])}},"+"))}),w={liability:{title:l.a.createElement("span",null,"Liability Limit"),help:"Liability will provide coverage in the event a third party were to bring a judgement against you."},coverage_comprehensive:{title:l.a.createElement("span",null,"Deductible:",l.a.createElement("br",null),l.a.createElement("i",null,"Comprehensive Coverage")),help:"Comprehensive covers you for such things as fire, theft, vandalism, and glass breakage. The deductible is the amount of money that you will pay out of your own pocket before the insurance company responds."},coverage_collision:{title:l.a.createElement("span",null,"Deductible:",l.a.createElement("br",null),l.a.createElement("i",null,"Collision Coverage")),help:"Collision coverage will repair your vehicle if you are involved in an at-fault accident, single vehicle accident, or hit and run. The deductible is the amount of money that you will pay out of your own pocket before the insurance company responds."},transportation_replacement:{title:l.a.createElement("span",null,"Transportation",l.a.createElement("br",null),"Replacement"),help:"An Owner's policy covering a private passenger automobile may be extended to provide Liability Coverage, Accident Benefits, and Uninsured Automobile, for any person(s) named in this change form, personally driving any \"Other Automobiles."},damage_non_owned:{title:l.a.createElement("span",null,"Damage to",l.a.createElement("br",null),"Non-owned Autos"),help:"If you happen to rent a vehicle anywhere in Canada or the U.S., you do not need to purchase coverage for that rental vehicle, this policy covers any damage up to your limit."},waiver_depreciation:{title:l.a.createElement("span",null,"Waiver of",l.a.createElement("br",null),"Depreciation"),help:"In case you ever get into an accident which causes the full loss of your vehicle within the first few months you own it, you will be reimbursed for the purchase price, not the depreciated value of the vehicle."},accident_waiver:{title:l.a.createElement("span",null,"Accident Waiver"),help:"In the event of you being in an accident in which you are at fault, it will protect your driving record and forgive the accident."}},N=function(e){var t=e.name,a=e.helpVisible;return l.a.createElement("div",{className:a?"HelpRow Visible":"HelpRow"},l.a.createElement("p",null,w[t].help))},k=function(e){var t=e.name,a=e.value,r=Object(n.useContext)(y).vehicles;return l.a.createElement("div",{className:a?"VehicleRow Visible":"VehicleRow"},l.a.createElement("ul",null,Object.keys(r).map((function(e){return l.a.createElement("li",{key:e},(a=e,("waiver_depreciation"===t?r[a].depreciation:"accident_waiver"===t?r[a].accident:void 0)?l.a.createElement("i",{className:"Yes"},"\u2714\ufe0e"):l.a.createElement("i",{className:"No"},"x")),r[e].year);var a}))))},_=function(e){var t=e.name,a=e.value,n=e.isCustomized,r=e.helpVisible,c=e.setHelpVisible,o="No coverage"===a;return l.a.createElement("div",{className:o?"Row ValueRow NoCoverage clearfix":"Row ValueRow clearfix"},l.a.createElement("div",{className:"Left"},l.a.createElement(f,{helpVisible:r,setHelpVisible:c}),l.a.createElement("h4",null,w[t].title)),l.a.createElement("div",{className:"Right"},l.a.createElement("strong",null,"No coverage"===a?l.a.createElement("strong",null,"No Coverage"):l.a.createElement("strong",null,l.a.createElement("i",null,"$"),h()(a).format("0,0"))),l.a.createElement(C,{name:t,value:a,isCustomized:n})))},O=function(e){var t=e.name,a=e.value,n=e.isCustomized,r=e.helpVisible,c=e.setHelpVisible;return l.a.createElement("div",{className:a?"Row WaiverRow clearfix":"Row WaiverRow NoCoverage clearfix"},l.a.createElement("div",{className:"Left"},l.a.createElement(f,{helpVisible:r,setHelpVisible:c}),l.a.createElement("h4",null,w[t].title)),l.a.createElement("div",{className:"Right"},l.a.createElement(C,{name:t,value:a,isCustomized:n})))},B=(a(30),function(e){var t=e.name,a=e.currentPackage,r=e.coverages,c=e.isCustomized,o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=r[a][t];return l.a.createElement("div",{className:"SingleItem"},"boolean"===typeof d?l.a.createElement(O,{name:t,value:d,isCustomized:c,helpVisible:u,setHelpVisible:m}):l.a.createElement(_,{name:t,value:d,isCustomized:c,helpVisible:u,setHelpVisible:m}),"boolean"===typeof d&&l.a.createElement(k,{name:t,value:d}),l.a.createElement(N,{helpVisible:u,name:t}))}),j=(a(31),function(e){var t=e.currentPackage,a=e.changePackage,n=function(e){return t===e?" Active":""};return l.a.createElement("div",{className:"CoveragePicker clearfix"},l.a.createElement("button",{className:"Button Good"+n("good"),onClick:function(){return a("good")}},"Base",l.a.createElement("span",null,"Coverage")),l.a.createElement("button",{className:"Button Recommended"+n("recommended"),onClick:function(){return a("recommended")}},"Costco",l.a.createElement("span",null,"Recommended!")),l.a.createElement("button",{className:"Button Highest"+n("highest"),onClick:function(){return a("highest")}},"Highest",l.a.createElement("span",null,"Coverage")))}),x=(a(32),function(e){var t=e.buying,a=Object(n.useContext)(y),r=a.setCustomize,c=a.coverages,o=a.currentPackage,i=a.setCurrentPackage,s=a.changePackage,u=a.isCustomized,m=a.setIsCustomized,d=a.cancelCustomize;return l.a.createElement("div",{className:t?"Coverage Buying":"Coverage"},l.a.createElement("div",{className:u?"PickerHolder Hidden":"PickerHolder"},l.a.createElement(j,{currentPackage:o,setCurrentPackage:i,changePackage:s})),l.a.createElement("div",{className:"Customize text-center"},l.a.createElement("button",{className:"Button Small Pill Light",onClick:u?d:function(){r(!0),m(!0)}},u?"Remove Customization":"Customize Coverage")),Object.keys(c[o]).map((function(e){return l.a.createElement(B,{key:e,name:e,currentPackage:o,coverages:c,isCustomized:u})})))}),P=(a(33),function(){var e=Object(n.useContext)(y),t=e.buying,a=e.setBuying;return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"HomeWrapper"},l.a.createElement("div",{className:t?"Congrats Buying text-center":"Congrats text-center"},l.a.createElement("h1",null,"Congratulations!"),l.a.createElement("p",null,"Here's your Costco Recommended ",l.a.createElement("br",null),"insurance package")),l.a.createElement(p,{buying:t,setBuying:a}),l.a.createElement("div",{className:t?"Proceed Buying text-center":"Proceed text-center"},l.a.createElement("h3",null,"You can:"),l.a.createElement(o.b,{className:"Button Continue",to:"/proceed-online"},"Proceed Online"),l.a.createElement("span",null,"or"),l.a.createElement(o.b,{className:"Button Continue",to:"/proceed-offline"},"Have us Call You"),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){return a(!1)}},"Go Back and Modify Coverage"))),l.a.createElement("div",{className:t?"Saved Buying text-center":"Saved text-center"},l.a.createElement("p",null,"You saved $34 per month by selecting the ",l.a.createElement("br",null),"home and auto discount."))),l.a.createElement(x,{buying:t}))}),V=function(){return l.a.createElement("div",null,"online!")},z=function(){return l.a.createElement("div",null,"offline!")},H=function(){return l.a.createElement("div",null,"OptionalBenefits!")},R={good:{liability:"1000000",coverage_comprehensive:"1000",coverage_collision:"1000",transportation_replacement:"1200",damage_non_owned:"50000",waiver_depreciation:!1,accident_waiver:!1},recommended:{liability:"2000000",coverage_comprehensive:"1000",coverage_collision:"1000",transportation_replacement:"1200",damage_non_owned:"50000",waiver_depreciation:!0,accident_waiver:!0},highest:{liability:"2000000",coverage_comprehensive:"500",coverage_collision:"500",transportation_replacement:"1200",damage_non_owned:"50000",waiver_depreciation:!0,accident_waiver:!0}},S={1:{year:"2007",make:"Honda",model:"Fit LX",depreciation:!1,accident:!0},2:{year:"2020",make:"Ford",model:"Edge",depreciation:!0,accident:!0}},I=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],d=o[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),p=g[0],E=g[1],h=Object(n.useState)(null),f=Object(i.a)(h,2),b=f[0],C=f[1],w=Object(n.useState)("recommended"),N=Object(i.a)(w,2),k=N[0],_=N[1],O=Object(n.useState)(null),B=Object(i.a)(O,2),j=B[0],x=B[1],I=Object(n.useState)(!1),A=Object(i.a)(I,2),D=A[0],L=A[1],W=function(e,t){C((function(a){var n=Object.assign({},a);return n[k][e]=t,localStorage.setItem("coverages",JSON.stringify(n)),n}))},M={vehicles:S,loading:a,setLoading:r,buying:D,setBuying:L,currentPackage:k,setCurrentPackage:_,changePackage:function(e){e!==k&&_((function(t){return"good"===t?x("up"):"highest"===t?x("down"):"recommended"===t&&x("good"===e?"down":"up"),e}))},coverages:b,updateCoverage:W,customize:u,setCustomize:d,isCustomized:p,setIsCustomized:E,cancelCustomize:function(){localStorage.removeItem("coverages"),d(!1),E(!1),"good"===k?(W("waiver_depreciation",!1),W("accident_waiver",!1)):(W("waiver_depreciation",!0),W("accident_waiver",!0))},delta:j,setDelta:x};return Object(n.useEffect)((function(){var e=localStorage.getItem("coverages");e?(C(JSON.parse(e)),E(!0)):C(R),r(!1)}),[]),l.a.createElement("div",{className:"App container"},l.a.createElement(y.Provider,{value:M},l.a.createElement(m,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},a?l.a.createElement("div",null,"Loading..."):l.a.createElement(P,null)),l.a.createElement(s.a,{path:"/proceed-online"},l.a.createElement(V,null)),l.a.createElement(s.a,{path:"/proceed-offline"},l.a.createElement(z,null)),l.a.createElement(s.a,{path:"/optional-benefits"},l.a.createElement(H,null)),l.a.createElement(s.a,{path:"/complete"},"you've made a great choice"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.4c8b927b.chunk.js.map