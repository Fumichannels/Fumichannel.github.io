function opens(texts){
    window.open(texts, '_blank')
}


function header(){
    var aaaa = '' + 
'	<style>.menu div{display: inline-block; padding: 30px; border-left: solid 1px #fff;color: #fff;}</style>	   '+
'	<div style="  width: 100%; position: fixed; display: flex; background-color: rgb(0, 150, 135);">	   '+
'		   '+
'	<span  onclick="location.href = "https://fumichannel.github.io/"" style=" width: 300px; top: 0; font-family: 英語筆記体フォント; color: #fff; font-size: 45px;">Fumi-channel</span>	   '+
'	<div class="menu" style=" position: absolute; height: 20px; display: inline-block; right: 0;">	   '+
'	<div onclick="location.href = "https://fumichannel.github.io/"">ホーム</div>	   '+
'	<div>配布物</div>	   '+
'	<div onclick="opens("https://discord.gg/hx2Avaa4kH")">discord</div>	   '+
'	<div>作り方講座</div>	   '+
'	<div>そのほか</div>	   '+
'	</div>	   '+
'	</div>	   '

document.getElementById('mydiv').innerHTML = aaaa
}