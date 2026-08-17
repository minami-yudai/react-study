import React from "react";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div>
      <div id="header">
        <div id="h-hamburger"><img id="h-hamburgerimage" src="images/menu.png" /></div>
        <div id="h-closer">×</div>
        <a><img src="images/Logo_Kyoto_Uni.png" className="hover"  id="h-logo" /></a>
        <div className="h-menubox">
            <div className="h-menucontainer">
                <div className="h-menu" id="h-menu">
                    <a><div className="hover" id="h-m1">大学の基本理念</div></a>
                    <a><div className="hover" id="h-m2">学部アドミッションポリシー</div></a>
                    <a><div className="hover" id="h-m3">学費</div></a>
                    <a><div className="hover" id="h-m4">交通アクセス</div></a>
                    <a><div className="hover" id="h-m5">お問い合わせ</div></a>
                    <a><div className="hover" id="h-m6">Web Pamphletを見る</div></a>
                    <a><div className="hover" id="h-m7">資料請求</div></a>
                    <a><div className="hover" id="h-m8">KyotoU Channel</div></a>
                </div>
            </div>
        </div>
      </div>
      <div id="main">
        <div className="p-container">{/*!--写真スライドショー*/}
          <div id="picturebox">
              <div><img id="picL" src="images/topimage1.gif"/></div>
              <div><img id="picR" src="images/topimage3.gif"/></div>
              <div><img id="picC" src="images/topimage2.gif"/></div>
          </div>
          <div className="p-fadeleft p-fade"></div>
          <div className="p-faderight p-fade"></div>
        </div>
        <div className="a-container">
            <div className="titlebox">
                <img src="images/book_icon.svg" className="icon"/>
                <h1 className="title">学部アドミッションポリシー</h1>
            </div>
            <div className="a-menubox">{/*ここreactで書きたいな*/}
                <a><div className="hover" id="a-m1" >総合人間学部</div></a>
                <a><div className="hover" id="a-m2" >文学部</div></a>
                <a><div className="hover" id="a-m3">教育学部</div></a>
                <a><div className="hover" id="a-m4">法学部</div></a>
                <a><div className="hover" id="a-m5">経済学部</div></a>
                <a><div className="hover" id="a-m6">理学部</div></a>
                <a><div className="hover" id="a-m7">医学部</div></a>
                <a><div className="hover" id="a-m8">薬学部</div></a>
                <a><div className="hover" id="a-m9">工学部</div></a>
                <a><div className="hover" id="a-m10">農学部</div></a>
            </div>
        </div>
        <div className="w-container">{/*Webパンフレット*/}
            <div className="titlebox">
                <img src="images/pamphlet_icon.svg" className="icon"/>
                <h1 className="title">Web Pamphlet</h1>
            </div>
            <div className="w-pamphlet">
                <a href="https://daigakujc.jp/wp/agreement_tmpl.html" id="underline">（ご利用方法について）</a>
                <a href="https://web-pamphlet.jp/kyoto-u/p/" id="pamphlet-a"><img src="images/KU_pamphlet.jpg" className="hover"  id="pamphlet-img"/></a>
                <span id="pamphlet-title">大学案内</span>
            </div>
            <div className="w-links">
                <a href="https://www.kyoto-u.ac.jp/ja"><div className="w-button hover" id="w-HP">京都大学公式HP<span className="w-arrow"></span></div></a>
                <a href="https://www.kuac.kyoto-u.ac.jp/navi_grad/"><div className="w-button hover" id="w-navi">京都大学受験生ナビゲーション<span className="w-arrow"></span></div></a>
            </div>
        </div>
      </div>
      <a href="#h-logo"><div className="n-container">{/*ナビゲーター*/}
        ∧
      </div></a>
      <div id="footer">
        <div className="f-container">
          <div className="left"><a>Copyright (c) DJC All Rights Reserved.</a></div>
          <div className="right"><a href="https://daigakujc.jp/">がんばれ国公立大学受験生！！</a></div>
        </div>
      </div>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />)
