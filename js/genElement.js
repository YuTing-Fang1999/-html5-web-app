//navBar
function genNavBar(id) {
   var ele = document.getElementById(id);
   var list = [
      ["首頁", "/html5-web-app"],
      ["論壇", "tw_policy_platform.html"],
      ["聯絡我們", "contact.html"],
      ["痞客邦API", "pixnet.html"]
   ];
   var navItem = "";
   var sideNavItem = "";
   for (let i = 0; i < list.length; ++i) {
      navItem += `<a href="${list[i][1]}" class="hide-on-small-only" style="font-size: 24px; margin-left: 10px;">${list[i][0]}</a>`;
      sideNavItem += `<li><a class="waves-effect" href="${list[i][1]}">${list[i][0]}</a></li>`;
   }
   var str =
      `
      <nav>
         <div class="nav-wrapper green">
               <ul class="left">
                  <li>
                     <a>
                           <i class="hamburger material-icons hide-on-med-and-up sidenav-trigger" data-target="slide-out" style="margin:0px">menu</i>
                     </a>
                  </li>
               </ul>
               ${navItem}
               <ul class="right">
                  <div class="searchBox">
                     <form class="_searchForm" action="#" method="get">
                           <input type="text" id="search_text" name="query" class="search_txt" />
                           <button class="btn_search tooltipped" data-position="left" data-tooltip="搜尋文章" />
                           <i class="material-icons" style="color: white;">search</i>
                           </button>
                     </form>
                  </div>
               </ul>
         </div>
      </nav>
      <ul id="slide-out" class="sidenav" style="width: 200px;">
         ${sideNavItem}
      </ul>
   `;

   ele.innerHTML = str;
}

// pixnet
function genPixnetArticle(id) {
   var list = [];
   $.ajax({
      url: "https://emma.pixnet.cc/mainpage/blog/categories/hot/38",
      method: "GET",
      dataType: "json",
      data: {
         "page": 1,
         "per_page": 15,
         "api_version": 1,
         "format": "json"
      },

      success: function (res) {
         // res = res["articles"];
         console.log(res);

         for (let i = 0; i < 15; ++i) {
            list.push([res[i]["link"], res[i]["thumb"], res[i]["title"], res[i]["description"]]);
         }

         var ele = document.getElementById(id);
         var str = "";
         console.log(list);

         for (let i = 0; i < list.length; ++i) {
            str +=
               `
            <div class="card">
               <a href="${list[i][0]}">
                  <div class="card-content" style="height: 150px;">
                     <div style="display: flex;">
                           <img src="${list[i][1]}" style="height: 100px;">
                           <div style="margin-left: 40px; width: 100%;">
                              <h6 id='title'>${list[i][2]}</h6>
                              <div class="content" id='content'>
                                 <p style="color: slategray; font-size: 14px;">${list[i][3]}</p>
                              </div>
                           </div>
                     </div>
                  </div>
               </a>
            </div>
         `
         }
         ele.innerHTML = str;

      },
      error: function (err) {
         console.log(err)
      },
   });

}


// sidenav
document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems, {});
});
// tooltipped
document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.tooltipped');
   var instances = M.Tooltip.init(elems, {
      "exitDelay": 50,
      "enterDelay": 0
   });
});