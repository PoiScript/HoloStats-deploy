(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"261L":function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,i){var n;return i=i||{},n="string"==typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),i.addSuffix?i.comparison>0?"dalam masa "+n:n+" yang lalu":n};var t={lessThanXSeconds:{one:"kurang dari 1 saat",other:"kurang dari {{count}} saat"},xSeconds:{one:"1 saat",other:"{{count}} saat"},halfAMinute:"setengah minit",lessThanXMinutes:{one:"kurang dari 1 minit",other:"kurang dari {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};a.exports=e.default},Mnmc:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=(t=i("HyFC"))&&t.__esModule?t:{default:t},o={date:(0,n.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=o,a.exports=e.default},QHHn:function(a,e,i){var t,n,o;!function(r){if("object"==typeof a.exports){var u=r(0,e);void 0!==u&&(a.exports=u)}else n=[i,e],void 0===(o="function"==typeof(t=r)?t.apply(e,n):t)||(a.exports=o)}(function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=void 0;e.default=["ms",[["a","p"],["PG","PTG"],i],i,[["A","I","S","R","K","J","S"],["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],["Ah","Is","Se","Ra","Kh","Ju","Sa"]],i,[["J","F","M","A","M","J","J","O","S","O","N","D"],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]],i,[["S.M.","TM"],i,i],1,[6,0],["d/MM/yy","d MMM y","d MMMM y","EEEE, d MMMM y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",i,"{1} {0}",i],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"MYR","RM","Ringgit Malaysia",{CAD:[i,"$"],JPY:["JP\xa5","\xa5"],MXN:[i,"$"],MYR:["RM"],TWD:["NT$"],USD:[i,"$"]},"ltr",function(a){return 5}]})},UdCE:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,i,n){return t[a]};var t={lastWeek:"eeee 'lepas pada jam' p",yesterday:"'Semalam pada jam' p",today:"'Hari ini pada jam' p",tomorrow:"'Esok pada jam' p",nextWeek:"eeee 'pada jam' p",other:"P"};a.exports=e.default},gUWk:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(i("261L")),n=l(i("Mnmc")),o=l(i("UdCE")),r=l(i("kn1/")),u=l(i("sTwf"));function l(a){return a&&a.__esModule?a:{default:a}}e.default={code:"ms",formatDistance:t.default,formatLong:n.default,formatRelative:o.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},a.exports=e.default},"kn1/":function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=(t=i("rwOc"))&&t.__esModule?t:{default:t},o={ordinalNumber:function(a,e){return"ke-"+Number(a)},era:(0,n.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masihi","Masihi"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["S1","S2","S3","S4"],wide:["Suku pertama","Suku kedua","Suku ketiga","Suku keempat"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],wide:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["A","I","S","R","K","J","S"],short:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],abbreviated:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],wide:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"am",pm:"pm",midnight:"tgh malam",noon:"tgh hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultFormattingWidth:"wide"})};e.default=o,a.exports=e.default},sTwf:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(i("sCib"));function n(a){return a&&a.__esModule?a:{default:a}}var o={ordinalNumber:(0,n(i("loZk")).default)({matchPattern:/^ke-(\d+)?/i,parsePattern:/petama|\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,t.default)({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|m\.?)/i,wide:/^(sebelum masihi|masihi)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m)/i]},defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^S[1234]/i,wide:/Suku (pertama|kedua|ketiga|keempat)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/pertama|1/i,/kedua|2/i,/ketiga|3/i,/keempat|4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,t.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,wide:/^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^og/i,/^s/i,/^ok/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:{narrow:/^[aisrkj]/i,short:/^(ahd|isn|sel|rab|kha|jum|sab)/i,abbreviated:/^(ahd|isn|sel|rab|kha|jum|sab)/i,wide:/^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^a/i,/^i/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^a/i,/^i/i,/^se/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:{narrow:/^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pa/i,afternoon:/tengah h/i,evening:/pe/i,night:/m/i}},defaultParseWidth:"any"})};e.default=o,a.exports=e.default},"v+sX":function(a,e,i){"use strict";i.r(e),i.d(e,"translations",function(){return u});var t=i("QHHn"),n=i.n(t);i.d(e,"locale",function(){return n.a});var o=i("gUWk"),r=i.n(o);i.d(e,"dateFnsLocale",function(){return r.a});var u={updatedAt:"Kemas kini terakhir pada {$INTERPOLATION}",name:"Nama",total:"Jumlah",subscribers:"Pelanggan",views:"Tontonan",lastDay:"Sehari Lalu",last7Days:"7 Hari Lalu",last30Days:"30 Hari Lalu",youtubeChannel:"Saluran YouTube",bilibiliChannel:"Saluran bilibili",youtubeStream:"Siaran YouTube",youtubeSchedule:"Jadual YouTube",settings:"Tetapan",toggleDarkMode:"Paparan Cerah/Gelap",averageViewers:"Tontonan Purata",maximumViewers:"Tontonan Tertinggi",streamHasEnded:"Siaran telah tamat",streaming:"Sedang berlangsung",streamStartTime:"Masa Mula",streamDuration:"Tempoh Siaran",youtubeSubscribers:"Langganan YouTube",bilibiliSubscribers:"Langganan bilibili",youtubeViews:"Tontonan YouTube",bilibiliViews:"Tontonan bilibili",vtuberSelected:"Penggiat YouTube Maya Yang Dipaparkan",selectLanguage:"Pilihan Bahasa",recentStreams:"Siaran Terkini",streamViewers:"Tontonan Siaran",selectDate:"Select Date",hololive:"hololive Rasmi",yagoo:"YAGOO",sora:"Tokino Sora",roboco:"Roboco",miko:"Sakura Miko",suisei:"Hoshimachi Suisei",fubuki:"Shirakami Fubuki",matsuri:"Natsuiro Matsuri",haato:"Akai Haato",aki:"Aki Rosenthal",mel:"Yozora Mel",choco:"Yuzuki Choco",choco_alt:"Sub Yuzuki Choco",shion:"Murasaki Shion",aqua:"Minato Aqua",subaru:"Oozora Subaru",ayame:"Nakiri Ayame",pekora:"Usada Pekora",rushia:"Uruha Rushia",flare:"Shiranui Flare",marine:"Houshou Marine",noel:"Shirogane Noel",kanata:"Amane Kanata",coco:"Kiryu Coco",watame:"Tsunomaki Watame",towa:"Tokoyami Towa",himemoriluna:"Himemori Luna",lamy:"Yukihana Lamy",nene:"Momosuzu Nene",botan:"Shishiro Botan",polka:"Omaru Polka",mio:"Ookami Mio",okayu:"Nekomata Okayu",korone:"Inugami Korone",azki:"AZKi",risu:"Ayunda Risu",moona:"Moona Hoshinova",iofi:"Airani Iofifteen",ollie:"Kureiji Ollie",melfissa:"Anya Melfissa",reine:"Pavolia Reine",amelia:"Watson Amelia",calliope:"Mori Calliope",gura:"Gawr Gura",inanis:"Ninomae Ina'nis",kiara:"Takanashi Kiara",luna:"Kaguya Luna",nekomiya:"Nekomiya Hinata",tamaki:"Inuyama Tamaki",ayamy:"Ayamy",pochimaru:"Pochimaru",nana:"Kagura Nana",ui:"Shigure Ui",miyabi:"Hanasaki Miyabi",izuru:"Kanade Izuru",aruran:"Arurandeisu",rikka:"Rikka",astel:"Astel Leda",temma:"Kishido Temma",roberu:"Yukoku Roberu",shien:"Kageyama Shien",oga:"Aragami Oga",hololive_og:"Bakat hololive",hololive_1st:"Pelapis Pertama hololive",hololive_2nd:"Pelapis Kedua hololive",hololive_3rd:"Pelapis Ketiga hololive",hololive_4th:"Pelapis Keempat hololive",hololive_5th:"Pelapis Kelima hololive",hololive_gamers:"Pemain Hololive",innk_music:"INNK Music",hololive_id_1st:"Pelapis Pertama hololive Indonesia",hololive_id_2nd:"Pelapis Kedua hololive Indonesia",hololive_en:"hololive Inggeris",holostars_1st:"Pelapis Pertama HOLOSTARS",holostars_2nd:"Pelapis Kedua HOLOSTARS",holostars_3rd:"Pelapis Ketiga HOLOSTARS",others:"Lain-lain"}}}]);