webpackJsonp([0,2],[function(s,e,n){"use strict";function t(s){var e=s.keys();return e.reduce(function(e,n){return e[n.substr(2,5)]=s(n),e},{})}var a=t(n(13));e.a=a},function(s,e,n){"use strict";function t(){if(!location.search)return{};var s=location.search.substr(1).split("&"),e={},n=!0,t=!1,a=void 0;try{for(var r,o=s[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var i=r.value,u=i.split("=");e[u[0]]=u[1]}}catch(s){t=!0,a=s}finally{try{!n&&o.return&&o.return()}finally{if(t)throw a}}return e}e.a=t},function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(11),a=n.n(t),r=n(4),o=n(7),i=n.n(o),u=(n(1),n(0));a.a.config.debug=!0,a.a.use(r.a,{locale:"en-US",locales:u.a}),new a.a({el:"#app",render:function(s){return s(i.a)}})},function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),a=n(0),r=(new Date).getTime(),o=[{name:"egoist",birth:r-6e4},{name:"chelly",birth:r-132e4},{name:"aimer",birth:r-612e4},{name:"young boy",birth:r-1e3},{name:"old man",birth:new Date("2014-01-01")}];e.default={data:function(){return{people:o,currentLang:n.i(t.a)().lang||"en-US",langs:Object.keys(a.a)}},methods:{handleChange:function(s){this.currentLang=s.target.value},format:function(s){return""}}}},function(s,e,n){"use strict";function t(s,e){if("just now"===s)return e;var n=Math.round(s);return Array.isArray(e)?n>1?e[1].replace(/%s/,n):e[0].replace(/%s/,n):e.replace(/%s/,n)}function a(s){var e=new Date(s);return e.toLocaleString()}function r(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.name,r=void 0===n?"timeago":n,m=e.locale,h=void 0===m?"en-US":m,f=e.locales,g=void 0===f?null:f;if(!g||0===Object.keys(g).length)throw new TypeError("Expected locales to have at lease one locale.");var p={props:{since:{required:!0},locale:String,maxTime:Number,autoUpdate:Number,format:Function},data:function(){return{now:(new Date).getTime()}},computed:{currentLocale:function(){var s=g[this.locale||h];return s?s:g[h]},sinceTime:function(){return new Date(this.since).getTime()},timeago:function(){var s=this.now/1e3-this.sinceTime/1e3;if(this.maxTime&&s>this.maxTime)return clearInterval(this.interval),this.format?this.format(this.sinceTime):a(this.sinceTime);var e=s<=5?t("just now",this.currentLocale[0]):s<o?t(s,this.currentLocale[1]):s<i?t(s/o,this.currentLocale[2]):s<u?t(s/i,this.currentLocale[3]):s<c?t(s/u,this.currentLocale[4]):s<l?t(s/c,this.currentLocale[5]):s<d?t(s/l,this.currentLocale[6]):t(s/d,this.currentLocale[7]);return e}},mounted:function(){this.autoUpdate&&this.update()},render:function(s){return s("time",{attrs:{datetime:new Date(this.since)}},this.timeago)},methods:{update:function(){var s=this,e=1e3*this.autoUpdate;this.interval=setInterval(function(){s.now=(new Date).getTime()},e)}},beforeDestroy:function(){clearInterval(this.interval),this.interval=null}};s.component(r,p)}e.a=r;var o=60,i=60*o,u=24*i,c=7*u,l=30*u,d=365*u},function(s,e){},,function(s,e,n){n(5);var t=n(8)(n(3),n(9),null,null);s.exports=t.exports},,function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"app"},[n("header",{staticClass:"header"},[s._v("\n    Choose your language:\n    "),n("select",{on:{change:s.handleChange}},s._l(s.langs,function(e){return n("option",{domProps:{value:e,selected:e===s.currentLang}},[s._v("\n        "+s._s(e)+"\n      ")])}))]),s._v(" "),n("div",{staticClass:"people"},s._l(s.people,function(e){return n("div",{staticClass:"person"},[n("span",{staticClass:"name"},[s._v(s._s(e.name))]),s._v(" "),n("div",{staticClass:"meta"},[s._v("\n        was born at\n        "),n("timeago",{staticClass:"timeago",attrs:{"auto-update":1,"max-time":31536e3,locale:s.currentLang,since:e.birth}})],1)])}))])},staticRenderFns:[]}},,,,function(s,e,n){function t(s){return n(a(s))}function a(s){var e=r[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}var r={"./bg-BG.json":14,"./da-DK.json":15,"./de-DE.json":16,"./en-US.json":17,"./es-ES.json":18,"./fa-IR.json":19,"./fr-FR.json":20,"./hu-HU.json":21,"./id-ID.json":22,"./it-IT.json":23,"./ja-JP.json":24,"./ka-GE.json":25,"./nb-NO.json":26,"./pt-BR.json":27,"./ru-RU.json":28,"./tr-TR.json":29,"./uk-UA.json":30,"./vi-VN.json":31,"./zh-CN.json":32,"./zh-TW.json":33};t.keys=function(){return Object.keys(r)},t.resolve=a,s.exports=t,t.id=13},function(s,e){s.exports=["току-що",["преди %s секунда","преди %s секунди"],["преди %s минута","преди %s минути"],["преди %s час","преди %s часа"],["преди %s ден","преди %s дни"],["преди %s седмица","преди %s седмици"],["преди %s месец","преди %s месеца"],["преди %s година","преди %s години"]]},function(s,e){s.exports=["lige nu",["%s sekund siden","%s sekunder siden"],["%s minut siden","%s minutter siden"],["%s time siden","%s timer siden"],["%s dag siden","%s dage siden"],["%s uge siden","%s uger siden"],["%s måned siden","%s måneder siden"],["%s år siden","%s år siden"]]},function(s,e){s.exports=["jetzt gerade",["vor %s Sekunde","vor %s Sekunden"],["vor %s Minute","vor %s Minuten"],["vor %s Stunde","vor %s Stunden"],["vor %s Tag","vor %s Tagen"],["vor %s Woche","vor %s Wochen"],["vor %s Monat","vor %s Monaten"],["vor %s Jahr","vor %s Jahren"]]},function(s,e){s.exports=["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]]},function(s,e){s.exports=["ahora",["hace %s segundo","hace %s segundos"],["hace %s minuto","hace %s minutos"],["hace %s hora","hace %s horas"],["hace %s día","hace %s días"],["hace %s semana","hace %s semanas"],["hace %s mes","hace %s meses"],["hace %s año","hace %s años"]]},function(s,e){s.exports=["همین حالا",["%s ثانیه پیش","%s ثانیه پیش"],["%s دقیقه پیش","%s دقیقه پیش"],["%s ساعت پیش","%s ساعت پیش"],["%s روز پیش","%s روز پیش"],["%s هفته پیش","%s هفته پیش"],["%s ماه پیش","%s ماه پیش"],["%s سال پیش","%s سال پیش"]]},function(s,e){s.exports=["à l'instant",["il y a %s seconde","il y a %s secondes"],["il y a %s minute","il y a %s minutes"],["il y a %s heure","il y a %s heures"],["il y a %s jour","il y a %s jours"],["il y a %s semaine","il y a %s semaines"],["il y a %s mois","il y a %s mois"],["il y a %s an","il y a %s ans"]]},function(s,e){s.exports=["pont most","%s másodperce","%s perce","%s órája","%s napja","%s hete","%s hónapja","%s éve"]},function(s,e){s.exports=["baru saja","%s detik yang lalu","%s menit yang lalu","%s jam yang lalu","%s hari yang lalu","%s minggu yang lalu","%s bulan yang lalu","%s tahun yang lalu"]},function(s,e){s.exports=["adesso",["%s secondo fa","%s secondi fa"],["%s minuto fa","%s minuti fa"],["%s ora fa","%s ore fa"],["%s giorno fa","%s giorni fa"],["%s settimana fa","%s settimane fa"],["%s mese fa","%s mesi fa"],["%s anno fa","%s anni fa"]]},function(s,e){s.exports=["たった今","%s 秒前","%s 分前","%s 時間前","%s 日前","%s 週間前","%s ヶ月前","%s 年前"]},function(s,e){s.exports=["ამ წამს","%s წამის წინ","%s წუთის წინ","%s საათის წინ","%s დღის წინ","%s კვირის წინ","%s თვის წინ","%s წლის წინ"]},function(s,e){s.exports=["akkurat nå",["%s sekund siden","%s sekunder siden"],["%s minutt siden","%s minutter siden"],["%s time siden","%s timer siden"],["%s dag siden","%s dager siden"],["%s uke siden","%s uker siden"],["%s måned siden","%s måneder siden"],["%s år siden","%s år siden"]]},function(s,e){s.exports=["agora mesmo",["%s segundo atrás","%s segundos atrás"],["%s minuto atrás","%s minutos atrás"],["%s hora atrás","%s horas atrás"],["%s dia atrás","%s dias atrás"],["%s semana atrás","%s semanas atrás"],["%s mês atrás","%s meses atrás"],["%s ano atrás","%s anos atrás"]]},function(s,e){s.exports=["только что",["%s секунда назад","%s секунд назад"],["%s минута назад","%s минут назад"],["%s час назад","%s часов назад"],["%s день назад","%s дней назад"],["%s неделя назад","%s недель назад"],["%s месяц","%s месяцев назад"],["%s год назад","%s лет назад"]]},function(s,e){s.exports=["az önce","%s saniye önce","%s dakika önce","%s saat önce","%s gün önce","%s hafta önce","%s ay önce","%s yıl önce"]},function(s,e){s.exports=["щойно",["%s секунда тому","%s секунд тому"],["%s хвилина тому","%s хвилин тому"],["%s година тому","%s годин тому"],["%s день тому","%s днів тому"],["%s тиждень тому","%s тижнів тому"],["%s місяць тому","%s місяців тому"],["%s рік тому","%s років тому"]]},function(s,e){s.exports=["vừa rồi","%s giây trước","%s phút trước","%s giờ trước","%s ngày trước","%s tuần trước","%s tháng trước","$s năm trước"]},function(s,e){s.exports=["刚刚","%s 秒前","%s 分钟前","%s 小时前","%s 天前","%s 周前","%s 月前","%s 年前"]},function(s,e){s.exports=["剛剛","%s 秒前","%s 分鐘前","%s 小時前","%s 天前","%s 週前","%s 月前","%s 年前"]},function(s,e,n){s.exports=n(2)}],[34]);
//# sourceMappingURL=client.2e4781fc.js.map