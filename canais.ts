<item>
<title>CANAIS</title>
<link>$doregex[makelist]</link>
<regex>
<name>makelist</name>
<listrepeat><![CDATA[
<title>[makelist.param1]</title>
<link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;name=[makelist.param1]&amp;url=$doregex[encodedurl]</link>
<thumbnail>NA</thumbnail>
]]></listrepeat>
<expres>#EXTINF:.*,(.*?)\n.*(http.*m3u8)</expres>
<page>https://raw.githubusercontent.com/AlexBarros74/KodiTVR/master/koditvrlist.m3u</page>
<referer>www.google.com</referer>
<x-forward></x-forward>
<agent>GOPlayer</agent>
</regex>
<regex>
<name>encodedurl</name>
<expres>$pyFunction:urllib.quote_plus('[makelist.param2]')<expres>
<page></page>
</regex>
</item>



<item>
<title>A BOLA TV PT [HD]</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://m3u.box365.live:8080/live/Ruidourado/Hh7782/826.m3u8</link>
<item>

<item>
<title>HBO</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/hbo.m3u8</link>
<item>


<item>
<title>HBO+</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/hboplus.m3u8</link>
<item>

<item>
<title>HBO 2</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/hbo2.m3u8</link>
<item>

<item>
<title>HBO SIGNATURE</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/hbosignature.m3u8</link>
<item>

<item>
<title>TC PREMIUM</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecinepremium.m3u8</link>
<item>

<item>
<title>TC PIPOCA</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecinepipoca.m3u8</link>
<item>

<item>
<title>TC TOUCH</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecinetouch.m3u8</link>
<item>


<item>
<title>TC ACTION</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecineaction.m3u8</link>
<item>


<item>
<title>TC FUN</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecinefun.m3u8</link>
<item>



<item>
<title>TC CUT</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/telecinecult.m3u8</link>
<item>


<item>
<title>STUDIO UNIVERSAL</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/universal.m3u8</link>
<item>


<item>
<title>MTV BRASIL</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/mtv.m3u8</link>
<item>


<item>
<title>SYFY</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/syfy.m3u8</link>
<item>


<item>
<title>MEGAPIX</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/megapix.m3u8</link>
<item>


<item>
<title>PARAMOUNT NETWORK</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/paramount.m3u8</link>
<item>


<item>
<title>DISCOVERY CHANNEL</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/discovery.m3u8</link>
<item>


<item>
<title>FOX CHANNEL</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/fox.m3u8</link>
<item>


<item>
<title>TNT SERIES</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/tntseries.m3u8</link>
<item>



<item>
<title>TNT</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/tnt.m3u8</link>
<item>


<item>
<title>FOX LIFE</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/foxlife.m3u8</link>
<item>


<item>
<title>TCM</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/tcm.m3u8</link>
<item>




<item>
<title>FX</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/fx.m3u8</link>
<item>



<item>
<title>ANIMAL PLANET</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/animalplanet.m3u8</link>
<item>


<item>
<title>NAT GEO</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/natgeo.m3u8</link>
<item>


<item>
<title>NAT GEO WILD</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/natgeowild.m3u8</link>
<item>


<item>
<title>FOX PREMIUM 1</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/foxpremium1.m3u8</link>
<item>


<item>
<title>FOX PREMIUM 2</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/foxpremium2.m3u8</link>
<item>


<item>
<title>MULTISHOW</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/multishow.m3u8</link>
<item>


<item>
<title>CINEMAX</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/cinemax.m3u8</link>
<item>


<item>
<title>WARNER CHANNEL</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/warner.m3u8</link>
<item>


<item>
<title>GLOBO NEWS</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/globonews.m3u8</link>
<item>


<item>
<title>BAND NEWS</title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=http://proxyts.canais.ink:8080/a/hls/bandnews.m3u8</link>
<item>


<item>
<title>CNN BRASIL </title>
 <link>plugin://plugin.video.f4mTester/?streamtype=HLSRETRY&amp;maxbitrate=0&amp;Buffer=1&amp;url=https://streaming.cnnbrasil.com.br/cnndigital_mainOutput4.m3u8</link>
<item>