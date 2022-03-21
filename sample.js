function opens(texts){
    window.open(texts, '_blank')
}


function header(){
    var aaaa =    '	<style>menu div{display: inline-block; padding: 30px; border-left: solid 1px #fff;color: #fff;}.menu a{display: inline-block; padding: 30px; border-left: solid 1px #fff;color: #fff;text-decoration:none;}</style>	   '+
    '	<div style="  width: 100%; position: fixed; display: flex; background-color: rgb(0, 150, 135);">	   '+
    '		   '+
    '	<a href="https://fumichannel.github.io/" style=" width: 300px; top: 0; font-family: 英語筆記体フォント;color: #fff;text-decoration:none; font-size: 45px;">Fumi-channel</a>	   '+
    '	<div class="menu" style=" position: absolute; height: 20px; display: inline-block; right: 0;">	   '+
    '	<a  onclick="location.href = "https://fumichannel.github.io/">ホーム</a>	   '+
    '	<a  target="_blank">配布物</a>	   '+
    '	<a href="https://discord.gg/hx2Avaa4kH" target="_blank">discord</a>	   '+
    '	<a  target="_blank">作り方講座</a>	   '+
    '	<a  target="_blank">そのほか</a>	   '+
    '	</div>	   '+
    '	</div>	   '

document.getElementById('mydiv').innerHTML = aaaa
}