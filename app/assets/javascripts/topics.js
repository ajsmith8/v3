jQuery(function() {
  return $(".showtopicdescription").click(function() {
    $(".hidetopicdescription").show();
		$(".topicdescriptiontext").show();
		return $(this).hide();
	});
});
jQuery(function() {
  return $(".hidetopicdescription").click(function() {
    $(".showtopicdescription").show();
    $(this).hide();
    return $(".topicdescriptiontext").hide();
  });
});
jQuery(function() {
  return $(".shownewdesc").click(function() {
    $(".hidenewdesc").show();
    $(".newtopicdescription").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidenewdesc").click(function() {
    $(".newtopicdescription").hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".showtopiceditform").click(function() {
    $(".topiceditformcontainer").show();
    $(".hidetopiceditform").show();
    $(".titletext").hide();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".canceltopicedit").click(function() {
    $(".topiceditformcontainer").hide();
    $(".showmaintopicauthor").hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".showsuggesttopiceditform").click(function() {
    $(".topicsuggesteditformcontainer").show();
    $(".hidetopiceditform").show();
    $(".titletext").hide();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".showdescedit").click(function() {
    $(".edittopicdescription").show();
    $(".hide").hide();
    $(".topicdescriptiontext").hide();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".canceltopicdescedit").click(function() {
    $(".edittopicdescription").hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".hidetopiceditform").click(function() {
    $(".topicsuggesteditformcontainer").hide();
    $(".showsuggesttopiceditform").show();
    $(".showtopictitle").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".editprofieldnamecontainer").click(function() {
    $(".editprofieldnameform").show();
    $(".canceltopicedit").show();
    $(".topicprofieldname").hide();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".editconfieldnamecontainer").click(function() {
    $(".editconfieldnameform").show();
    $(".canceltopicedit").show();
    $(".topicconfieldname").hide();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".showlowrankproargs").click(function() {
    $(".lowrankproargs").show();
    $(".hidelowrankproargs").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidelowrankproargs").click(function() {
    $(".lowrankproargs").hide();
    $(".showlowrankproargs").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".showlowrankconargs").click(function() {
    $(".lowrankconargs").show();
    $(".hidelowrankconargs").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidelowrankconargs").click(function() {
    $(".lowrankconargs").hide();
    $(".showlowrankconargs").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".postnewproarg").click(function() {
    $(".newproarg").show();
    $(".hidenewproarg").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidenewproarg").click(function() {
    $(".newproarg").hide();
    $(this).hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".postnewconarg").click(function() {
    $(".newconarg").show();
    $(".hidenewconarg").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidenewconarg").click(function() {
    $(".newconarg").hide();
    $(this).hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".postnewprocomment").click(function() {
    $(".newprocomment").show();
    $(".hidenewprocomment").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidenewprocomment").click(function() {
    $(".newprocommentform").hide();
    $(this).hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".postnewconcomment").click(function() {
    $(".newconcomment").show();
    $(".hidenewconcomment").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidenewconcomment").click(function() {
    $(".newconcommentform").hide();
    $(this).hide();
    return location.reload();
  });
});
jQuery(function() {
  return $(".showlowrankprocomments").click(function() {
    $(".lowrankprocomments").show();
    $(".hidelowrankprocomments").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidelowrankprocomments").click(function() {
    $(".lowrankprocomments").hide();
    $(".showlowrankprocomments").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".showlowrankconcomments").click(function() {
    $(".lowrankconcomments").show();
    $(".hidelowrankconcomments").show();
    return $(this).hide();
  });
});
jQuery(function() {
  return $(".hidelowrankconcomments").click(function() {
    $(".lowrankconcomments").hide();
    $(".showlowrankconcomments").show();
    return $(this).hide();
  });
});