$(document).ready(function() {

  // FOOTER
  $('#b0-link').click(function() {
    $("#b1").hide();
    $('#b0').slideToggle('slow', function() {
      //This will toggle the div
    });
  });

  $('#b1-link').click(function() {
    $("#b0").hide();
    $('#b1').slideToggle('slow', function() {
      //This will toggle the div
    });
  });

  $(".link").hover(function() {
    $(this).css("cursor", "pointer");
  });

  $("#wakingup").click(function() {
    grow("#wakingup");
    $("#brain_blue").fadeIn(1500);
    pause_all();
    play_wakingup();
  });

  $("#learning").click(function() {
    grow("#learning");
    $("#brain_orange").fadeIn(1500);
    pause_all();
    play_learning();
  });

  $("#headacherelief").click(function() {
    grow("#headacherelief");
    $("#brain_purple").fadeIn(1500);
    pause_all();
    play_headacherelief();
  });

  $("#moodelevation").click(function() {
    grow("#moodelevation");
    $("#brain_green").fadeIn(1500);
    pause_all();
    play_moodelevation();
  });

  $("#painrelief").click(function() {
    grow("#painrelief");
    $("#brain_gray").fadeIn(1500);
    pause_all();
    play_painrelief();
  });

  $("#euphoria").click(function() {
    grow("#euphoria");
    $("#brain_blue").fadeIn(1500);
    pause_all();
    play_euphoria();
  });

  $("#healing").click(function() {
    grow("#healing");
    $("#brain_orange").fadeIn(1500);
    pause_all()
    play_healing();
  });

  $("#sleeping").click(function() {
    grow("#sleeping");
    $("#brain_green").fadeIn(1500);
    pause_all()
    play_sleeping();
  });

  /*Nature Sounds*/
  $(".nature_links").hover(function() {
    $(this).css("cursor", "pointer");
  });

  $("#ocean_icon").click(function() {
    play_ocean();
  });

  $("#fireplace_icon").click(function() {
    play_fireplace();
  });

  $("#wind_icon").click(function() {
    play_wind();
  });

  $("#rain_icon").click(function() {
    play_rain();
  });

  function grow(x) {
    shrink("#wakingup");
    shrink("#learning");
    shrink("#headacherelief");
    shrink("#moodelevation");
    shrink("#painrelief");
    shrink("#euphoria");
    shrink("#healing");
    shrink("#sleeping");

    $(x).css("background-color", "#58595B");
    $(x).css("color", "white");
    $(x).animate({
      down: '250px',
      height: '38px',
      paddingTop: '120px',
    });

  }

  function shrink(y) {
    $(y).css("background-color", "#BFBFBF");
    $(y).css("color", "black");
    $(y).animate({
      height: '38px',
      paddingTop: '24px',
    }, 180)
    $("#brain_blue").fadeOut(1080);
    $("#brain_orange").fadeOut(1080);
    $("#brain_purple").fadeOut(1080);
    $("#brain_green").fadeOut(1080);
    $("#brain_gray").fadeOut(1500);
  }

  //ocean
  $('#ocean_volume').on('change', function() {
    $('#ocean').prop("volume", this.value);
  });

  //fireplace
  $('#fireplace_volume').on('change', function() {
    $('#fireplace').prop("volume", this.value);
  });

  //wind
  $('#wind_volume').on('change', function() {
    $('#wind').prop("volume", this.value);
  });

  //rain
  $('#rain_volume').on('change', function() {
    $('#rain').prop("volume", this.value);
  });

  function play_ocean() {
    var audio = document.getElementById('ocean');
    document.getElementById("ocean_icon").src = "img/buttons/ocean_on.svg";
    $("#ocean_mixer").css('visibility', 'visible');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.2;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
      document.getElementById("ocean_icon").src = "img/buttons/ocean_off.svg";
      $("#ocean_mixer").css('visibility', 'hidden');
    }
  }

  function play_fireplace() {
    var audio = document.getElementById('fireplace');
    document.getElementById("fireplace_icon").src = "img/buttons/fireplace_on.svg";
    $("#fireplace_mixer").css('visibility', 'visible');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
      document.getElementById("fireplace_icon").src = "img/buttons/fireplace_off.svg";
      $("#fireplace_mixer").css('visibility', 'hidden');
    }
  }

  function play_wind() {
    var audio = document.getElementById('wind');
    document.getElementById("wind_icon").src = "img/buttons/wind_on.svg";
    $("#wind_mixer").css('visibility', 'visible');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
      document.getElementById("wind_icon").src = "img/buttons/wind_off.svg";
      $("#wind_mixer").css('visibility', 'hidden');
    }
  }

  function play_rain() {
    var audio = document.getElementById('rain');
    document.getElementById("rain_icon").src = "img/buttons/rain_on.svg";
    $("#rain_mixer").css('visibility', 'visible');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
      document.getElementById("rain_icon").src = "img/buttons/rain_off.svg";
      $("#rain_mixer").css('visibility', 'hidden');
    }
  }

  function play_wakingup() {
    var audio = document.getElementById('wakingup_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_learning() {
    var audio = document.getElementById('learning_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_headacherelief() {
    var audio = document.getElementById('headacherelief_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_moodelevation() {
    var audio = document.getElementById('moodelevation_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_painrelief() {
    var audio = document.getElementById('painrelief_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_euphoria() {
    var audio = document.getElementById('euphoria_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_healing() {
    var audio = document.getElementById('healing_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function play_sleeping() {
    var audio = document.getElementById('sleeping_audio');
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.1;
      audio.loop = true;
      audio.play();

    } else {
      audio.pause();
    }
  }

  function pause_all() {
    var pauseWakingup = document.getElementById('wakingup_audio');
    var pauseLearning = document.getElementById('learning_audio');
    var pauseHeadacherelief = document.getElementById('headacherelief_audio');
    var pauseMoodelevation = document.getElementById('moodelevation_audio');
    var pausePainrelief = document.getElementById('painrelief_audio');
    var pauseEuphoria = document.getElementById('euphoria_audio');
    var pauseHealing = document.getElementById('healing_audio');
    var pauseSleeping = document.getElementById('sleeping_audio');
    pauseWakingup.pause();
    pauseLearning.pause();
    pauseHeadacherelief.pause();
    pauseMoodelevation.pause();
    pausePainrelief.pause();
    pauseEuphoria.pause();
    pauseHealing.pause();
    pauseSleeping.pause();
  }
});
