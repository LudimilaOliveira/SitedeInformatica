
var disableStrs = ['ga-disable-G-C00Y5EWC7C'];
function __gtagTrackerIsOptedOut() {
    for (var index = 0; index < disableStrs.length; index++) {
        if (document.cookie.indexOf(disableStrs[index] + '=true') > -1) {
            return true;
        }
    }
    if (__gtagTrackerIsOptedOut()) {
        for (var index = 0; index < disableStrs.length; index++) {
            window[disableStrs[index]] = true;
        }
    }
}

function __gtagTrackerOptout() {
    for (var index = 0; index < disableStrs.length; index++) {
        document.cookie = disableStrs[index] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStrs[index]] = true;
    }
}

if ('undefined' === typeof gaOptout) {
    function gaOptout() {
        __gtagTrackerOptout();
    }
}
window.dataLayer = window.dataLayer || [];

window.MonsterInsightsDualTracker = {
    helpers: {},
    trackers: {},
};

if (mi_track_user) {
    function __gtagDataLayer() {
        dataLayer.push(arguments);
    }

    function __gtagTracker(type, name, parameters) {
        if (!parameters) {
            parameters = {};
        }
        if (parameters.send_to) {
            __gtagDataLayer.apply(null, arguments);
            return;
        }

        if (type === 'event') {
            parameters.send_to = monsterinsights_frontend.v4_id;
            var hookName = name;
            if (typeof parameters['event_category'] !== 'undefined') {
                hookName = parameters['event_category'] + ':' + name;
            }
            if (typeof MonsterInsightsDualTracker.trackers[hookName] !== 'undefined') {
                MonsterInsightsDualTracker.trackers[hookName](parameters);
            } else {
                __gtagDataLayer('event', name, parameters);
            }
                
        } else {
            __gtagDataLayer.apply(null, arguments);
        }
    }
    __gtagTracker('js', new Date());
    __gtagTracker('set', {'developer_id.dZGIzZG': true,});
    if ( MonsterInsightsLocations.page_location ) {
        __gtagTracker('set', MonsterInsightsLocations);
    }
    __gtagTracker('config', 'G-C00Y5EWC7C', {"forceSSL":"true","link_attribution":"true"} );
    window.gtag = __gtagTracker; (function () {
        var noopfn = function () {
            return null;
        };
        var newtracker = function () {
            return new Tracker();
        };
        var Tracker = function () {
            return null;
        };
        var p = Tracker.prototype;
        p.get = noopfn;
        p.set = noopfn;
        p.send = function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift('send');
            __gaTracker.apply(null, args);
        };
        var __gaTracker = function () {
            var len = arguments.length;
            if (len === 0) {
                return;
            }
        var f = arguments[len - 1];
        if (typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function') {
            if ('send' === arguments[0]) {
                var hitConverted, hitObject = false, action;
                if ('event' === arguments[1]) {
                    if ('undefined' !== typeof arguments[3]) {
                        hitObject = {'eventAction': arguments[3],'eventCategory': arguments[2],'eventLabel': arguments[4],'value': arguments[5] ? arguments[5] : 1,}
                    }
                }
                if ('pageview' === arguments[1]) {
                    if ('undefined' !== typeof arguments[2]) {hitObject = {'eventAction': 'page_view','page_path': arguments[2],}}
                }
                if (typeof arguments[2] === 'object') {hitObject = arguments[2];}
                if (typeof arguments[5] === 'object') {Object.assign(hitObject, arguments[5]);}
                if ('undefined' !== typeof arguments[1].hitType) {
                     hitObject = arguments[1];
                        if ('pageview' === hitObject.hitType) {hitObject.eventAction = 'page_view';}
                }
                if (hitObject) {
                    action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
                    hitConverted = mapArgs(hitObject);
                    __gtagTracker('event', action, hitConverted);
                }
            }
            return;
        }
        function mapArgs(args) {
            var arg, hit = {};
            var gaMap = {'eventCategory': 'event_category','eventAction': 'event_action','eventLabel': 'event_label','eventValue': 'event_value','nonInteraction': 'non_interaction',
                'timingCategory': 'event_category','timingVar': 'name','timingValue': 'value','timingLabel': 'event_label','page': 'page_path','location': 'page_location','title': 'page_title','referrer' : 'page_referrer',
            };
            for (arg in args) {
                if (!(!args.hasOwnProperty(arg) || !gaMap.hasOwnProperty(arg))) {
                    hit[gaMap[arg]] = args[arg];
                } else {
                    hit[arg] = args[arg];}
            }
            return hit;
        }
        try {
            f.hitCallback();} catch (ex) {}
        };
        __gaTracker.create = newtracker;
        __gaTracker.getByName = newtracker;
        __gaTracker.getAll = function () {
            return [];
        };
         __gaTracker.remove = noopfn;
        __gaTracker.loaded = true;
        window['__gaTracker'] = __gaTracker;
    })();
} else {
    console.log("");
    (function () {
        function __gtagTracker() {
        return null;}
        window['__gtagTracker'] = __gtagTracker;
        window['gtag'] = __gtagTracker;
    })();
}
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/acailandia.ifma.edu.br\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.9.10"}};
!function(e,a,t){
    var n,r,o,i=a.createElement("canvas"),
    p=i.getContext&&i.getContext("2d");

    function s(e,t){
        var a=String.fromCharCode;
        p.clearRect(0,0,i.width,i.height),
        p.fillText(a.apply(this,e),0,0);
        e=i.toDataURL();
        return p.clearRect(0,0,i.width,i.height),
        p.fillText(a.apply(this,t),0,0),
        e===i.toDataURL()
    }
    function c(e){
        var t=a.createElement("script");
        t.src=e,t.defer=t.type="text/javascript",
        a.getElementsByTagName("head")[0].appendChild(t)
    }for(o=Array("flag","emoji"),
    t.supports={everything:!0,everythingExceptFlag:!0},
    r=0;r<o.length;r++)t.supports[o[r]]=function(e){
        if(!p||!p.fillText)
            return!1;
        switch(p.textBaseline="top",
            p.font="600 32px Arial",e){
                case"flag":
                return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);
                    case"emoji":
                    return!s([10084,65039,8205,55357,56613],[10084,65039,8203,55357,56613])
                }
                return!1
            }(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);
            t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):
            (e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):
            n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
var a2a_config=a2a_config||{};
a2a_config.callbacks=a2a_config.callbacks||[];
a2a_config.templates=a2a_config.templates||{};
a2a_localize = {
    Share: "Compartilhar",
    Save: "Salvar",
    Subscribe: "Inscrever",
    Email: "Email",
    Bookmark: "Favoritos",
    ShowAll: "Mostrar tudo",
    ShowLess: "Mostrar menos",
    FindServices: "Procurar serviço(s)",
    FindAnyServiceToAddTo: "Encontrar rapidamente qualquer serviço para",
    PoweredBy: "Serviço fornecido por",
    ShareViaEmail: "Share via email",
    SubscribeViaEmail: "Subscribe via email",
    BookmarkInYourBrowser: "Adicionar aos favoritos",
    BookmarkInstructions: "Press Ctrl+D or \u2318+D to bookmark this page",
    AddToYourFavorites: "Adicionar a favoritos",
    SendFromWebOrProgram: "Send from any email address or email program",
    EmailProgram: "Email program",
    More: "More&#8230;"
};

var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"https:\/\/acailandia.ifma.edu.br","hash_tracking":"false","v4_id":"G-C00Y5EWC7C"};
var rlArgs = {"script":"swipebox","selector":"lightbox","customEvents":"","activeGalleries":"1","animation":"1","hideCloseButtonOnMobile":"0","removeBarsOnMobile":"0","hideBars":"1","hideBarsDelay":"5000","videoMaxWidth":"1080","useSVG":"1","loopAtEnd":"0","woocommerce_gallery":"0","ajaxurl":"https:\/\/acailandia.ifma.edu.br\/wp-admin\/admin-ajax.php","nonce":"9ccac00fbe","preview":"false","postId":"2155"};
var quicktagsL10n = {"closeAllOpenTags":"Fechar todas as tags abertas","closeTags":"fechar tags","enterURL":"Digite o URL","enterImageURL":"Digite o URL da imagem","enterImageDescription":"Digite uma descri\u00e7\u00e3o da imagem","textdirection":"dire\u00e7\u00e3o do texto","toggleTextdirection":"Alternar dire\u00e7\u00e3o de texto do editor","dfw":"Modo de escrita sem distra\u00e7\u00f5es","strong":"Negrito","strongClose":"Fechar tag de negrito","em":"It\u00e1lico","emClose":"Fechar tag de it\u00e1lico","link":"Inserir link","blockquote":"Bloco de cita\u00e7\u00e3o","blockquoteClose":"Fechar tag de cita\u00e7\u00e3o","del":"Texto exclu\u00eddo (tachado)","delClose":"Fechar tag de texto exclu\u00edda","ins":"Texto Inserido","insClose":"Fechar tag de texto","image":"Inserir imagem","ul":"Lista com marcadores","ulClose":"Fechar tag de lista com marcadores","ol":"Lista numerada","olClose":"Fechar tag de lista numerada","li":"Item da lista","liClose":"Fechar tag de item de lista","code":"C\u00f3digo","codeClose":"Fechar tag de c\u00f3digo","more":"Inserir a tag \"Leia mais\""};
var drawitFE = {"mediaupload":"https:\/\/acailandia.ifma.edu.br\/wp-admin\/\/media-upload.php"};

function googleTranslateElementInit2() {
    new google.translate.TranslateElement({pageLanguage: 'pt',autoDisplay: false}, 'google_translate_element2');
}
function GTranslateGetCurrentLang() {
    var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');
    return keyValue ? keyValue[2].split('/')[2] : null;
}
function GTranslateFireEvent(element,event){
    try{
        if(document.createEventObject){
            var evt=document.createEventObject();
            element.fireEvent('on'+event,evt)
        }else{
            var evt=document.createEvent('HTMLEvents');
            evt.initEvent(event,true,true);
            element.dispatchEvent(evt)
        }
    }catch(e){}
}
function doGTranslate(lang_pair){
    if(lang_pair.value)lang_pair=lang_pair.value;
    if(lang_pair=='')return;
    var lang=lang_pair.split('|')[1];
    if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;
    var teCombo;var sel=document.getElementsByTagName('select');
    for(var i=0;i<sel.length;i++)
        if(/goog-te-combo/.test(sel[i].className)){
            teCombo=sel[i];
            break;
        }if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){
            setTimeout(function(){
                doGTranslate(lang_pair)
            },500)
        }else{
            teCombo.value=lang;
            GTranslateFireEvent(teCombo,'change');
            GTranslateFireEvent(teCombo,'change')
        }
    }
    
    jQuery(function(){
        omShortcodes.init(["buttons","tooltips","toggle","tabs","responsivebox","counter"]);
    });
    var h5abPrintSettings = {"customCSS":""};
    
    document.addEventListener('DOMContentLoaded', function () {
        const tabLinks = document.querySelectorAll('.omsc-tabs-control li a');
        const tabs = document.querySelectorAll('.omsc-tabs-tab');

        tabLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove 'active' de todas as abas e links
                document.querySelectorAll('.omsc-active').forEach(activeElement => {
                    activeElement.classList.remove('omsc-active');
                });

                tabs.forEach(tab => tab.style.display = 'none'); // Esconde todas as abas

                // Ativa a aba correspondente
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).style.display = 'block';
                this.parentElement.classList.add('omsc-active');
            });
        });
    });
    
      