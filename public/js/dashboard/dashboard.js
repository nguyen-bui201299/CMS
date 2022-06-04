const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})



$(document).ready(function(){
    $('.insights .access').click(function(){
        var x = $(".demo").css('display');
        if(x=='none'){
           $(".demo").fadeIn();
        }else{
           $(".demo").fadeOut();
        }
    })
    

    $('.addUser').click(function(){
        $('.modal-add-user').toggle('slow');
    });
    $('.closing').click(function(){
        $('.modal-add-user').toggle('slow')
    })

    $('.cancel-i').click(function(){
        $('.modal-add-user').hide()
        $('.modal-save-users').hide()
    })

})

$(document).ready(function(){
    $('.insights .access').click(function(){
        var x = $(".demo").css('display');
        if(x=='none'){
           $(".demo").fadeIn();
        }else{
           $(".demo").fadeOut();
        }
    })
    

    $('.btn-save').click(function(){
        // $('.modal-save-user').toggle('slow');
        alert("Save success")
    });
    

    $('nav a').click(function () {
        var tabid = $(this).attr("rel");
        $(this).parents('.middle').find('.active').removeClass('active');
        $('.tabbody').hide();
        $('#' + tabid).fadeIn(350);
        $(this).addClass('active');

        return false;
    });


    var wrapper = $(".input-backup");
    var add_button = $(".add-new-path");
    $(add_button).click(function (e) {
        e.preventDefault();
        $(wrapper).after(`<div class="input-backup input-remove">
                        <div class="flex">
                            <label>Path</label>
                            <div class="up-close">
                                <span class="material-symbols-outlined">
                                    expand_less
                                </span>
                                <span class="remove material-symbols-outlined">
                                    close
                                </span>
                            </div>
                        </div>
                        <input onkeyup="keyUp()" type="text" name="path">
                    </div>`); //add input box
    });
    $(document).on("click",".remove",function(){
        $('.input-remove').remove();
    });

    var wrapper2 = $(".input-backup-2");
    var add_button2 = $(".add-new-path-2");
    $(add_button2).click(function (e) {
        e.preventDefault();
        $(wrapper2).after(`<div class="input-backup-2 input-remove-2">
                        <div class="flex">
                            <label>Path</label>
                            <div class="up-close">
                                <span class="material-symbols-outlined">
                                    expand_less
                                </span>
                                <span class="remove-2 material-symbols-outlined">
                                    close
                                </span>
                            </div>
                        </div>
                        <input onkeyup="keyUp()" class="input_2" type="text" name="path">
                    </div>`); //add input box
    });
    $(document).on("click",".remove-2",function(){
        $('.input-remove-2').remove();
    });

})

function onSwitch() {
if($('.bunch_of_button:visible').length)
    $('.bunch_of_button').fadeOut(200);
else
    $('.bunch_of_button').fadeIn(200);        ;
}


$(document).ready(function() {
$('.selected select').change(function() {
    if ($.inArray($(this).val(), "1") == -1) {
    $('.bunch_of_button').fadeIn(200);
    } else {
    $('.bunch_of_button').fadeOut(200);
    }
});
})

//Format Number when it come to 1000+
function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

$(document).ready(function(){
    const access = $('.access_total')
    const posts = $('.posts_total')
    const user = $('.users_total')
    // var settings = {
    //     "url": "http://115.79.140.218:9000/api/dashboard/info",
    //     "method": "GET",
    //     "timeout": 0,
    //     "headers": {
    //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjliNTlmYmEtNjBkMS01Y2U4LWEzNDktYzk2ZDNhZTFmYjM3IiwiaWF0IjoxNjUyOTI3NDk3LCJleHAiOjE2NTMwMTM4OTd9.MzQh3REtzKu3DKhuB03O2_k79W-kkE5GFVbXWKhSNCU"
    //     },
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     access.html(nFormatter(response.total_access))
    //     posts.html(response.total_post)
    //     user.html(response.total_user)
    // });
    var settings = {
        "url": "http://115.79.140.218:9000/api/dashboard/info",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjliNTlmYmEtNjBkMS01Y2U4LWEzNDktYzk2ZDNhZTFmYjM3IiwiaWF0IjoxNjUyOTI3NDk3LCJleHAiOjE2NTMwMTM4OTd9.MzQh3REtzKu3DKhuB03O2_k79W-kkE5GFVbXWKhSNCU"
        },
      };
      
      $.ajax(settings).done(function (response) {
        access.html(nFormatter(response.data.total_access))
        posts.html(nFormatter(response.data.total_post))
        user.html(nFormatter(response.data.total_user))
      });

})


function submitLogin() {
    var uname = $('.username-admin')
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjliNTlmYmEtNjBkMS01Y2U4LWEzNDktYzk2ZDNhZTFmYjM3IiwiaWF0IjoxNjUyOTI3NDk3LCJleHAiOjE2NTMwMTM4OTd9.MzQh3REtzKu3DKhuB03O2_k79W-kkE5GFVbXWKhSNCU");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "usernameOrEmail": "admin@gmail.com",
  "password": "Stech@123456Aa"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("http://localhost:4002/api/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    const user = JSON.stringify(result)
  })
  .catch(error => console.log('error', error));
}

console.log(submitLogin())
